"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, Trash2 } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { ClipboardCopy } from "lucide-react";
import { toast } from "sonner";

type Question = {
  id: string;
  title: string;
  type: "text" | "multipleChoice" | "checkbox" | "dropdown";
  description?: string;
  options?: string[];
};

interface QuestionListProps {
  questions: Question[];
  removeQuestion: (id: string) => void;
  currentPage: number;
  totalPages: number;
  setCurrentPage: (page: number) => void;
  questionsPerPage: number;
  totalQuestions: number;
  viewMode: "list" | "json";
  setViewMode: (mode: "list" | "json") => void;
}

export function QuestionList({
  questions,
  removeQuestion,
  currentPage,
  totalPages,
  setCurrentPage,
  questionsPerPage,
  totalQuestions,
  viewMode,
  setViewMode,
}: QuestionListProps) {
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const getQuestionTypeLabel = (type: Question["type"]) => {
    switch (type) {
      case "text":
        return "Text Input";
      case "multipleChoice":
        return "Multiple Choice";
      case "checkbox":
        return "Checkbox";
      case "dropdown":
        return "Dropdown";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <span
            className={`text-sm ${
              viewMode === "list" ? "font-medium" : "text-muted-foreground"
            }`}
          >
            List View
          </span>
          <Switch
            checked={viewMode === "json"}
            onCheckedChange={(checked) =>
              setViewMode(checked ? "json" : "list")
            }
          />
          <span
            className={`text-sm ${
              viewMode === "json" ? "font-medium" : "text-muted-foreground"
            }`}
          >
            JSON View
          </span>
        </div>
      </div>

      <div className="space-y-4">
        {viewMode === "list" ? (
          questions.map((question) => (
            <Card key={question.id} className="overflow-hidden">
              <CardContent className="p-6">
                <div className="flex justify-between items-start gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <h3 className="font-medium">{question.title}</h3>
                      <Badge variant="outline">
                        {getQuestionTypeLabel(question.type)}
                      </Badge>
                    </div>

                    {question.description && (
                      <p className="text-sm text-muted-foreground">
                        {question.description}
                      </p>
                    )}

                    {question.options && question.options.length > 0 && (
                      <div className="mt-3">
                        <p className="text-sm font-medium mb-1">Options:</p>
                        <ul className="text-sm space-y-1 pl-5 list-disc">
                          {question.options.map((option, index) => (
                            <li key={index}>{option}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => removeQuestion(question.id)}
                    className="text-destructive hover:text-destructive/90 hover:bg-destructive/10"
                  >
                    <Trash2 className="h-4 w-4" />
                    <span className="sr-only">Delete question</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <Card>
            <CardContent className="p-6 relative">
              <div className="absolute top-4 right-4 z-10">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard
                      .writeText(JSON.stringify(questions, null, 2))
                      .then(() => {
                        // toast({
                        //   title: "Copied!",
                        //   description: "JSON copied to clipboard",
                        //   duration: 2000,
                        // });
                        toast.success("Copied to clipboard");
                      })
                      .catch((err) => {
                        // toast({
                        //   title: "Failed to copy",
                        //   description: "Could not copy to clipboard",
                        //   variant: "destructive",
                        // });
                        toast.error("Failed to copy to clipboard");
                        console.error("Failed to copy: ", err);
                      });
                  }}
                  className="flex items-center gap-1"
                >
                  <ClipboardCopy className="h-4 w-4" />
                  Copy
                </Button>
              </div>
              <pre className="bg-muted p-4 rounded-md overflow-auto text-sm font-mono">
                {JSON.stringify(questions, null, 2)}
              </pre>
            </CardContent>
          </Card>
        )}
      </div>

      {totalPages > 1 && (
        <div className="flex items-center justify-between">
          <div className="text-sm text-muted-foreground">
            Showing {indexOfFirstPage(currentPage, questionsPerPage) + 1}-
            {Math.min(
              indexOfLastPage(currentPage, questionsPerPage),
              totalQuestions
            )}{" "}
            of {totalQuestions} questions
          </div>

          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="icon"
              onClick={goToPreviousPage}
              disabled={currentPage === 1}
            >
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Previous page</span>
            </Button>

            <div className="text-sm">
              Page {currentPage} of {totalPages}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={goToNextPage}
              disabled={currentPage === totalPages}
            >
              <ChevronRight className="h-4 w-4" />
              <span className="sr-only">Next page</span>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

// Helper functions for pagination
function indexOfFirstPage(currentPage: number, itemsPerPage: number): number {
  return (currentPage - 1) * itemsPerPage;
}

function indexOfLastPage(currentPage: number, itemsPerPage: number): number {
  return currentPage * itemsPerPage - 1;
}

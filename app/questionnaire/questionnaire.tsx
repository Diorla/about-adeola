"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PlusCircle } from "lucide-react";
import { QuestionList } from "./question-list";
import { toast } from "sonner";

type Question = {
  id: string;
  title: string;
  type: "text" | "multipleChoice" | "checkbox" | "dropdown";
  description?: string;
  options?: string[];
};

export function Questionnaire() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [title, setTitle] = useState("");
  const [type, setType] = useState<Question["type"]>("text");
  const [description, setDescription] = useState("");
  const [options, setOptions] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [viewMode, setViewMode] = useState<"list" | "json">("list");
  const questionsPerPage = 5;

  const addQuestion = () => {
    if (!title.trim()) return;

    const newQuestion: Question = {
      id: Date.now().toString(),
      title,
      type,
      description: description || undefined,
      options:
        type !== "text"
          ? options.split("\n").filter((option) => option.trim())
          : undefined,
    };

    setQuestions([...questions, newQuestion]);
    setTitle("");
    setType("text");
    setDescription("");
    setOptions("");

    toast("Question added!");
  };

  const removeQuestion = (id: string) => {
    setQuestions(questions.filter((q) => q.id !== id));
  };

  // Calculate pagination
  const totalPages = Math.ceil(questions.length / questionsPerPage);
  const indexOfLastQuestion = currentPage * questionsPerPage;
  const indexOfFirstQuestion = indexOfLastQuestion - questionsPerPage;
  const currentQuestions = questions.slice(
    indexOfFirstQuestion,
    indexOfLastQuestion
  );

  return (
    <div className="grid gap-8 md:grid-cols-[1fr_1fr] lg:grid-cols-[1fr_2fr]">
      <Card className="h-fit">
        <CardContent className="pt-6">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              addQuestion();
            }}
            className="space-y-4"
          >
            <h2 className="text-xl font-semibold mb-4">Add New Question</h2>

            <div className="space-y-2">
              <Label htmlFor="title">Question Title</Label>
              <Input
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter your question"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="type">Question Type</Label>
              <Select
                value={type}
                onValueChange={(value: Question["type"]) => setType(value)}
              >
                <SelectTrigger id="type">
                  <SelectValue placeholder="Select question type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="text">Text</SelectItem>
                  <SelectItem value="multipleChoice">
                    Multiple Choice
                  </SelectItem>
                  <SelectItem value="checkbox">Checkbox</SelectItem>
                  <SelectItem value="dropdown">Dropdown</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description (Optional)</Label>
              <Textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Add additional context or instructions"
                rows={2}
              />
            </div>

            {type !== "text" && (
              <div className="space-y-2">
                <Label htmlFor="options">Options (One per line)</Label>
                <Textarea
                  id="options"
                  value={options}
                  onChange={(e) => setOptions(e.target.value)}
                  placeholder="Option 1&#10;Option 2&#10;Option 3"
                  rows={4}
                  required
                />
              </div>
            )}

            <Button type="submit" className="w-full">
              <PlusCircle className="mr-2 h-4 w-4" />
              Add Question
            </Button>
          </form>
        </CardContent>
      </Card>

      <div className="space-y-6">
        <h2 className="text-xl font-semibold">Your Questions</h2>

        {questions.length > 0 ? (
          <QuestionList
            questions={currentQuestions}
            removeQuestion={removeQuestion}
            currentPage={currentPage}
            totalPages={totalPages}
            setCurrentPage={setCurrentPage}
            questionsPerPage={questionsPerPage}
            totalQuestions={questions.length}
            viewMode={viewMode}
            setViewMode={setViewMode}
          />
        ) : (
          <div className="text-center py-12 border rounded-lg bg-muted/50">
            <p className="text-muted-foreground">
              No questions added yet. Use the form to add questions.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

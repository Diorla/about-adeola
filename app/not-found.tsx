import LandingWrapper from "@/components/main/LandingWrapper";
import { Button } from "@/components/ui/button";
import { MoveLeftIcon } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <LandingWrapper>
        <div className="flex flex-col items-center justify-center h-full my-32">
          <h1 className="text-4xl font-bold text-center">404 - Not Found</h1>
          <p className="text-lg text-center mb-8">
            The page you&apos; re looking for does not exist.
          </p>
        </div>
        <Button asChild variant="link" size="lg">
          <Link className="text-lg text-white" href="/">
            <MoveLeftIcon />
            Return Home
          </Link>
        </Button>
      </LandingWrapper>
    </div>
  );
}

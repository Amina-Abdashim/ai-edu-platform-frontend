"use client";

import { ChangeEvent, FormEvent, useState } from "react";

import { cn } from "@/shared/lib/cn";
import { useAiResponse } from "@/shared/lib/use-ai-response";
import { Button } from "@/shared/ui/button";
import { Card } from "@/shared/ui/card";
import { Icon } from "@/shared/ui/icon";
import { Input } from "@/shared/ui/input";

const QUICK_RESPONSES = [
  "Great question! To get started, navigate to the Courses section and click '+ New Course'. You can then add lessons, quizzes, and resources.",
  "You can invite students by going to Students > Invite. They will receive an email with enrollment instructions.",
  "Try organizing your course into modules first, then add individual lessons to each module. This helps students follow a structured learning path.",
];

function getQuickAiResponse(_: string): string {
  return QUICK_RESPONSES[Math.floor(Math.random() * QUICK_RESPONSES.length)];
}

export interface QuickAITutorWidgetProps {
  className?: string;
  title?: string;
  placeholder?: string;
  submitLabel?: string;
}

export function QuickAITutorWidget({
  className,
  title = "Need help setting up?",
  placeholder = "Ask a quick question...",
  submitLabel = "Send",
}: QuickAITutorWidgetProps) {
  const [question, setQuestion] = useState<string>("");
  const [answer, setAnswer] = useState<string | null>(null);

  const { ask, isLoading } = useAiResponse(getQuickAiResponse, {
    minDelayMs: 600,
    maxDelayMs: 1100,
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedQuestion = question.trim();
    if (!trimmedQuestion || isLoading) return;

    setAnswer(null);

    ask(trimmedQuestion, (generatedAnswer) => {
      setAnswer(generatedAnswer);
      setQuestion("");
    });
  };

  const handleQuestionChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuestion(event.target.value);
  };

  return (
    <Card className={className}>
      <div className="space-y-3 p-4">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100">
            <Icon name="smart_toy" size="sm" className="text-primary" />
          </div>
          <h3 className="text-sm font-semibold text-slate-900">{title}</h3>
        </div>

        {answer && (
          <div className="rounded-lg bg-blue-50 p-3 text-sm text-slate-700 leading-relaxed animate-in fade-in">
            {answer}
          </div>
        )}

        {isLoading && (
          <div className="flex items-center gap-2 rounded-lg bg-slate-50 p-3">
            <div className="flex items-center gap-1">
              <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400 [animation-delay:0ms]" />
              <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400 [animation-delay:150ms]" />
              <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400 [animation-delay:300ms]" />
            </div>
            <span className="text-xs text-slate-500">Thinking...</span>
          </div>
        )}

        <form className="flex items-center gap-2" onSubmit={handleSubmit}>
          <Input
            value={question}
            onChange={handleQuestionChange}
            placeholder={placeholder}
            disabled={isLoading}
            aria-label="Ask quick AI tutor question"
          />
          <Button type="submit" disabled={!question.trim() || isLoading}>
            {submitLabel}
          </Button>
        </form>
      </div>
    </Card>
  );
}

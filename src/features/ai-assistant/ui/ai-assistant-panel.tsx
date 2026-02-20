"use client";

import { ChangeEvent, FormEvent, useCallback, useRef, useState, useEffect } from "react";

import { cn } from "@/shared/lib/cn";
import { useAiResponse } from "@/shared/lib/use-ai-response";
import { Icon } from "@/shared/ui/icon";

interface ChatMessage {
    id: string;
    role: "user" | "assistant";
    content: string;
}

const AI_RESPONSES: Record<string, string> = {
    default:
        "That&apos;s a great question! Feature-Sliced Design helps organize your codebase into layers: App, Pages, Widgets, Features, Entities, and Shared. Each layer has a clear purpose and strict dependency rules.",
    fsd: "FSD (Feature-Sliced Design) is an architectural methodology. It splits code into layers with strict import rules — upper layers can import from lower layers, but not vice versa.",
    react:
        "React is a JavaScript library for building user interfaces. It uses a component-based architecture and a virtual DOM for efficient rendering.",
    help: "I can help you with:\n• Explaining lesson concepts\n• Summarizing content\n• Answering technical questions\n• Providing code examples",
};

function getAIResponse(userMessage: string): string {
    const lower = userMessage.toLowerCase();
    if (lower.includes("fsd") || lower.includes("feature-sliced"))
        return AI_RESPONSES.fsd;
    if (lower.includes("react")) return AI_RESPONSES.react;
    if (lower.includes("help")) return AI_RESPONSES.help;
    return AI_RESPONSES.default;
}

function createMessageId(): string {
    return crypto.randomUUID();
}

export interface AiAssistantPanelProps {
    className?: string;
}

export function AiAssistantPanel({ className }: AiAssistantPanelProps) {
    const [message, setMessage] = useState<string>("");
    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const chatEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = useCallback(() => {
        chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, []);

    useEffect(() => {
        scrollToBottom();
    }, [messages, scrollToBottom]);

    const { ask, cancel, isLoading: isTyping } = useAiResponse(getAIResponse, {
        minDelayMs: 800,
        maxDelayMs: 1500,
    });

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const trimmed = message.trim();
        if (!trimmed || isTyping) return;

        const userMsg: ChatMessage = {
            id: createMessageId(),
            role: "user",
            content: trimmed,
        };
        setMessages((prev) => [...prev, userMsg]);
        setMessage("");

        ask(trimmed, (assistantResponse) => {
            const aiMsg: ChatMessage = {
                id: createMessageId(),
                role: "assistant",
                content: assistantResponse,
            };
            setMessages((prev) => [...prev, aiMsg]);
        });
    };

    const handleMessageChange = (event: ChangeEvent<HTMLInputElement>) => {
        setMessage(event.target.value);
    };

    const hasMessages = messages.length > 0;

    return (
        <aside
            className={cn(
                "flex h-full flex-col border-l border-slate-200 bg-white",
                className
            )}
        >
            {/* ── Chat Header ── */}
            <div className="flex shrink-0 items-center gap-3 border-b border-slate-200 px-5 py-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100">
                    <Icon name="smart_toy" size="md" className="text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-slate-900">AI Assistant</p>
                    <p className="text-xs text-slate-500">
                        {isTyping ? "Typing..." : "Online"}
                    </p>
                </div>
                <button
                    type="button"
                    className="text-slate-400 transition-colors hover:text-slate-600"
                    aria-label="More options"
                    onClick={() => {
                        setMessages([]);
                        cancel();
                    }}
                    title="Clear chat"
                >
                    <Icon name="delete_sweep" size="md" />
                </button>
            </div>

            {/* ── Chat History Area ── */}
            <div className="flex flex-1 flex-col overflow-y-auto px-4 py-4">
                {!hasMessages && (
                    <div className="flex flex-1 flex-col items-center justify-center gap-3">
                        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-50">
                            <Icon name="chat" size="lg" className="text-primary" />
                        </div>
                        <h3 className="text-base font-semibold text-slate-900">
                            AI Assistant
                        </h3>
                        <p className="text-center text-sm text-slate-500">
                            Ask questions about the lesson content or request a summary.
                        </p>
                        <p className="text-sm text-slate-400">Start a conversation...</p>
                    </div>
                )}

                {hasMessages && (
                    <div className="space-y-4">
                        {messages.map((msg) => (
                            <div
                                key={msg.id}
                                className={cn(
                                    "flex",
                                    msg.role === "user" ? "justify-end" : "justify-start"
                                )}
                            >
                                <div
                                    className={cn(
                                        "max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed whitespace-pre-wrap",
                                        msg.role === "user"
                                            ? "bg-primary text-white rounded-br-md"
                                            : "bg-slate-100 text-slate-800 rounded-bl-md"
                                    )}
                                >
                                    {msg.content}
                                </div>
                            </div>
                        ))}
                        {isTyping && (
                            <div className="flex justify-start">
                                <div className="flex items-center gap-1 rounded-2xl bg-slate-100 px-4 py-3 rounded-bl-md">
                                    <span className="h-2 w-2 animate-bounce rounded-full bg-slate-400 [animation-delay:0ms]" />
                                    <span className="h-2 w-2 animate-bounce rounded-full bg-slate-400 [animation-delay:150ms]" />
                                    <span className="h-2 w-2 animate-bounce rounded-full bg-slate-400 [animation-delay:300ms]" />
                                </div>
                            </div>
                        )}
                        <div ref={chatEndRef} />
                    </div>
                )}
            </div>

            {/* ── Chat Input ── */}
            <div className="shrink-0 border-t border-slate-200 px-4 py-3">
                <form className="flex items-center gap-2" onSubmit={handleSubmit}>
                    <input
                        value={message}
                        onChange={handleMessageChange}
                        placeholder="Type your question..."
                        disabled={isTyping}
                        className="flex-1 rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50"
                        aria-label="Type your question"
                    />
                    <button
                        type="submit"
                        disabled={!message.trim() || isTyping}
                        className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-white transition-colors hover:bg-primary/90 disabled:opacity-40"
                        aria-label="Send message"
                    >
                        <Icon name="send" size="sm" />
                    </button>
                </form>
                <p className="mt-2 text-center text-xs text-slate-400">
                    Press Enter to send
                </p>
            </div>
        </aside>
    );
}

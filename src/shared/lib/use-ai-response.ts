import { useCallback, useEffect, useRef, useState } from "react";

export interface UseAiResponseOptions {
  minDelayMs?: number;
  maxDelayMs?: number;
}

export interface UseAiResponseResult {
  isLoading: boolean;
  ask: (input: string, onResponse: (response: string) => void) => void;
  cancel: () => void;
}

export function useAiResponse(
  getResponse: (input: string) => string,
  options: UseAiResponseOptions = {}
): UseAiResponseResult {
  const { minDelayMs = 700, maxDelayMs = 1300 } = options;
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const clearTimer = useCallback(() => {
    if (timeoutRef.current === null) {
      return;
    }

    clearTimeout(timeoutRef.current);
    timeoutRef.current = null;
  }, []);

  const cancel = useCallback(() => {
    clearTimer();
    setIsLoading(false);
  }, [clearTimer]);

  useEffect(() => {
    return () => {
      clearTimer();
    };
  }, [clearTimer]);

  const ask = useCallback(
    (input: string, onResponse: (response: string) => void) => {
      cancel();
      setIsLoading(true);

      const delayRange = Math.max(maxDelayMs - minDelayMs, 0);
      const delay = minDelayMs + Math.random() * delayRange;

      timeoutRef.current = setTimeout(() => {
        const response = getResponse(input);
        timeoutRef.current = null;
        setIsLoading(false);
        onResponse(response);
      }, delay);
    },
    [cancel, getResponse, maxDelayMs, minDelayMs]
  );

  return { isLoading, ask, cancel };
}

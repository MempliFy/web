"use client";

import { useEffect, useRef } from "react";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { PaperAirplaneIcon, PaperclipIcon } from "./icons";
import { toast } from "sonner";

type Props = {};

export const MultimodalInput: React.FC<Props> = () => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  useEffect(() => {
    if (textareaRef.current) {
      adjustHeight();
    }
  }, []);

  const adjustHeight = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${Math.min(textarea.scrollHeight, 150)}px`;
    }
  };

  const handleInput = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    // setInput(event.target.value);
    adjustHeight();
  };

  return (
    <div className="flex justify-center items-center bg-neutral-200 dark:bg-neutral-700 p-2 rounded-3xl w-[720px] gap-1">
      <Button className="rounded-full p-2 h-fit bg-transparent hover:bg-transparent text-primary shadow-none">
        <PaperclipIcon size={18} />
      </Button>
      <Textarea
        ref={textareaRef}
        className="resize-none border-none min-h-8 max-h-36 overflow-y-auto focus-visible:ring-0 focus-visible:shadow-none"
        onChange={handleInput}
        rows={1}
        placeholder="Ask anything..." // Ask follow-up
      />
      <Button className="rounded-full p-2 h-fit">
        <PaperAirplaneIcon size={18} />
      </Button>
    </div>
  );
};

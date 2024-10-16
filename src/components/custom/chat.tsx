import { Message as PreviewMessage } from "@/components/custom/message";
import { MultimodalInput } from "./multimodal-input";

type Props = {
  initialMessages: Array<Message>;
};

export const Chat: React.FC<Props> = () => {
  return (
    <div className="flex flex-col justify-center bg-background h-[calc(100vh-theme(spacing.navbar))]">
      <div className="flex-1 overflow-y-auto"></div>
      <div className="p-2">
        <form className="flex flex-col justify-center items-center">
          <MultimodalInput />
        </form>
      </div>
    </div>
  );
};

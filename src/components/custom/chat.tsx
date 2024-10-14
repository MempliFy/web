import { Message as PreviewMessage } from "@/components/custom/message";

type Props = {
  initialMessages: Array<Message>;
};

export const Chat: React.FC<Props> = () => {
  return (
    <div className="flex flex-col justify-center bg-background h-[calc(100vh-theme(spacing.navbar))]">
      <div className="flex-1 overflow-y-auto"></div>
      <div className="px-2 py-2">
        <form className="flex flex-col justify-center items-center"></form>
      </div>
    </div>
  );
};

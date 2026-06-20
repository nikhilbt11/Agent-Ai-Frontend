type Props = {
  role: string;
  content: string;
};

export default function MessageBubble({
  role,
  content,
}: Props) {
  const isUser =
    role === "USER";

  return (
    <div
      className={`flex ${
        isUser
          ? "justify-end"
          : "justify-start"
      }`}
    >
      <div
        className={`max-w-md rounded-xl px-4 py-3 ${
          isUser
            ? "bg-blue-600 text-white"
            : "bg-slate-200 text-black"
        }`}
      >
        {content}
      </div>
    </div>
  );
}
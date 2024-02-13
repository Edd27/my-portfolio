export default function Message({
  owner,
  text,
  time
}: {
  owner: "user" | "bot";
  text: string;
  time?: string;
}) {
  return (
    <div
      className={`flex items-start gap-2.5 w-full ${
        owner === "user" ? "justify-end" : "justify-start"
      }`}
    >
      {owner === "bot" && (
        <img
          width={32}
          height={32}
          className="rounded-full border border-white/10"
          src="/me.webp"
          alt="Imagen de Edgar Benavides"
        />
      )}
      <div
        className={`flex flex-col w-full max-w-[320px] leading-1.5 p-4 border border-white/10 bg-black/5 dark:bg-white/5 shadow ${
          owner === "user"
            ? "rounded-s-xl rounded-ee-xl"
            : "rounded-e-xl rounded-es-xl"
        }`}
      >
        <p className="text-sm font-normal text-black/80 dark:text-white/80 text-pretty">{text}</p>
        {time && (
          <span className="text-sm font-normal text-black/80 dark:text-white/80 opacity-70 text-end mt-2">
            {time}
          </span>
        )}
      </div>
      {owner === "user" && (
        <img
          width={32}
          height={32}
          className="rounded-full"
          src={`https://ui-avatars.com/api/?name=Me`}
          alt="Imagen de Edgar Benavides"
        />
      )}
    </div>
  );
}
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function Message({
  owner,
  text,
  time,
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
        {owner === "bot" ? (
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              h1: (props: React.HTMLProps<HTMLHeadingElement>) => (
                <h1
                  className="text-lg font-bold mb-2 text-black/90 dark:text-white"
                  {...props}
                />
              ),
              h2: (props: React.HTMLProps<HTMLHeadingElement>) => (
                <h2
                  className="text-base font-semibold mb-2 text-black/90 dark:text-white"
                  {...props}
                />
              ),
              h3: (props: React.HTMLProps<HTMLHeadingElement>) => (
                <h3
                  className="text-sm font-semibold mb-2 text-black/90 dark:text-white"
                  {...props}
                />
              ),
              p: (props: React.HTMLProps<HTMLParagraphElement>) => (
                <p
                  className="text-sm font-normal text-black/80 dark:text-white/80 text-pretty mb-2"
                  {...props}
                />
              ),
              ul: (props: React.HTMLProps<HTMLUListElement>) => (
                <ul
                  className="list-disc pl-5 space-y-1 mb-2 text-sm text-black/80 dark:text-white/80"
                  {...props}
                />
              ),
              ol: (props: React.OlHTMLAttributes<HTMLOListElement>) => (
                <ol
                  className="list-decimal pl-5 space-y-1 mb-2 text-sm text-black/80 dark:text-white/80"
                  {...props}
                />
              ),
              li: (props: React.HTMLProps<HTMLLIElement>) => (
                <li className="text-sm" {...props} />
              ),
              a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
                <a
                  className="underline text-sky-700 dark:text-sky-300 break-all"
                  target="_blank"
                  rel="noopener noreferrer"
                  {...props}
                />
              ),
              code: ({
                inline,
                className,
                children,
                ...props
              }: {
                inline?: boolean;
                className?: string;
                children?: React.ReactNode;
              } & React.HTMLProps<HTMLElement>) => {
                const lang = /language-(\w+)/.exec(className || "")?.[1];
                if (inline) {
                  return (
                    <code
                      className="px-1 py-0.5 rounded bg-black/10 dark:bg-white/10 text-[0.85em]"
                      {...props}
                    >
                      {children}
                    </code>
                  );
                }
                return (
                  <pre className="w-full overflow-x-auto rounded-lg p-3 bg-black/10 dark:bg-white/10 border border-white/10 text-[0.85em] mb-2">
                    <code className={className} data-lang={lang} {...props}>
                      {children}
                    </code>
                  </pre>
                );
              },
              table: (props: React.HTMLProps<HTMLTableElement>) => (
                <div className="overflow-x-auto mb-2">
                  <table
                    className="w-full text-sm border-collapse"
                    {...props}
                  />
                </div>
              ),
              th: (props: React.HTMLProps<HTMLTableCellElement>) => (
                <th
                  className="border border-white/10 px-2 py-1 text-left font-semibold"
                  {...props}
                />
              ),
              td: (props: React.HTMLProps<HTMLTableCellElement>) => (
                <td
                  className="border border-white/10 px-2 py-1 align-top"
                  {...props}
                />
              ),
              hr: (props: React.HTMLProps<HTMLHRElement>) => (
                <hr className="my-3 border-white/10" {...props} />
              ),
            }}
          >
            {text}
          </ReactMarkdown>
        ) : (
          <p className="text-sm font-normal text-black/80 dark:text-white/80 text-pretty">
            {text}
          </p>
        )}
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

import { useEffect, useRef, useState } from "react";
import { sendQuestion } from "../../utils/sendQuestion";
import Message from "./Message";

export default function EddBot() {
  const [messages, setMessages] = useState<
    { owner: "user" | "bot"; text: string; time: string }[]
  >([]);

  const [loading, setLoading] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;

    const data = new FormData(form);

    const question = data.get("question") as string;

    if (!question) return;

    event.currentTarget.reset();

    setLoading(true);

    setMessages((messages) =>
      messages.concat({
        owner: "user",
        text: question,
        time: new Intl.DateTimeFormat("es-MX", {
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        }).format(new Date()),
      })
    );

    const { answer } = await sendQuestion(question);

    setLoading(false);

    setMessages((messages) =>
      messages.concat({
        owner: "bot",
        text: answer,
        time: new Intl.DateTimeFormat("es-MX", {
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        }).format(new Date()),
      })
    );
  }

  useEffect(() => {
    setMessages([
      {
        owner: "bot",
        text: "Hi there! As Edgar Benavides' personal assistant, I'm here to answer any questions you may have about him. Feel free to ask away!",
        time: new Intl.DateTimeFormat("es-MX", {
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        }).format(new Date()),
      },
    ]);
  }, []);

  useEffect(() => {
    if(messages.length > 1) {
      ref.current?.scrollIntoView({ behavior: "smooth", block: "nearest"});
    }
  }, [messages.length])

  return (
    <section className="space-y-10">
      <div className="h-[320px] overflow-auto space-y-5">        
        {messages.map((msg, index) => (
          <Message key={index} {...msg} />
        ))}
        {loading && (
          <Message {...{
            owner: "bot",
            text: "Escribiendo..."
          }} />
        )}
        <div ref={ref} />
      </div>
      <form onSubmit={handleSubmit} className="w-full flex gap-2">
        <input
          type="text"
          placeholder="Ask me anything!"
          name="question"
          disabled={loading}
          className="bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 focus:bg-black/10 dark:focus:bg-white/10 rounded-full px-4 py-2 focus:outline-none w-full"
        />
        <button
          type="submit"
          disabled={loading}
          className="rounded-full bg-sky-300 dark:bg-sky-100 hover:bg-sky-400 hover:dark:bg-sky-200 text-sky-900 dark:text-sky-800 px-1.5 py-1 flex items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="size-7"
          >
            <path
              stroke="none"
              d="M0 0h24v24H0z"
              fill="none"
            />
            <path
              d="M4.698 4.034l16.302 7.966l-16.302 7.966a.503 .503 0 0 1 -.546 -.124a.555 .555 0 0 1 -.12 -.568l2.468 -7.274l-2.468 -7.274a.555 .555 0 0 1 .12 -.568a.503 .503 0 0 1 .546 -.124z"
            />
            <path
              d="M6.5 12h14.5"
            />
          </svg>
        </button>
      </form>
    </section>
  );
}
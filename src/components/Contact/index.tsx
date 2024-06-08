import emailjs from "@emailjs/browser";
import { useEffect, useState } from "react";

const initialValues = {
  errors: {
    user_name: "",
    user_email: "",
    message: "",
  },
  values: {
    user_name: "",
    user_email: "",
    message: "",
  },
};

export default function Contact() {
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [form, setForm] = useState<{
    errors: Record<string, string>;
    values: Record<string, string>;
  }>(initialValues);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;

    if (value && form.errors[name]) {
      setForm((prev) => ({
        ...prev,
        errors: {
          ...prev.errors,
          [name]: "",
        },
      }));
    }

    setForm((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [name]: value,
      },
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setLoading(true);

    const formElement = event.currentTarget;

    const {
      values: { user_name, user_email, message },
    } = form;

    if (!user_name) {
      setForm((prev) => ({
        ...prev,
        errors: {
          ...prev.errors,
          user_name: "El nombre es requerido",
        },
      }));
    }

    if (!user_email) {
      setForm((prev) => ({
        ...prev,
        errors: {
          ...prev.errors,
          user_email: "El correo es requerido",
        },
      }));
    }

    if (!message) {
      setForm((prev) => ({
        ...prev,
        errors: {
          ...prev.errors,
          message: "El mensaje es requerido",
        },
      }));
    }

    if (!user_name || !user_email || !message) {
      setLoading(false);
      return;
    }

    const response = await emailjs.sendForm(
      import.meta.env.PUBLIC_EMAILJS_SERVICE_ID,
      import.meta.env.PUBLIC_EMAILJS_TEMPLATE_ID,
      formElement,
      {
        publicKey: import.meta.env.PUBLIC_EMAILJS_KEY,
      },
    );

    setLoading(false);

    if (response.status !== 200) {
      return alert("Hubo un error al enviar el correo");
    }

    setForm(initialValues);
    setSuccess(true);
  };

  useEffect(() => {
    if (success) {
      const timeout = setTimeout(() => {
        setSuccess(false);
      }, 3000);

      return () => clearTimeout(timeout);
    }
  }, [success]);

  return (
    <form onSubmit={handleSubmit} className="w-full grid gap-4">
      <div className="grid gap-1">
        <label
          htmlFor="user_name"
          className="font-semibold text-yellow-600 dark:text-yellow-200">
          Nombre
        </label>
        <input
          type="text"
          placeholder="Escribe tu nombre"
          name="user_name"
          id="user_name"
          disabled={loading}
          value={form.values.user_name}
          onChange={handleChange}
          className={`border bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 focus:bg-black/10 dark:focus:bg-white/10 rounded-lg p-4 focus:outline-none w-full ${
            form.errors.user_name ? "border-red-500" : "border-transparent"
          }`}
        />
      </div>
      <div className="grid gap-1">
        <label
          htmlFor="user_email"
          className="font-semibold text-yellow-600 dark:text-yellow-200">
          Correo electrónico
        </label>
        <input
          type="email"
          placeholder="yo@ejemplo.com"
          name="user_email"
          id="user_email"
          disabled={loading}
          value={form.values.user_email}
          onChange={handleChange}
          className={`border bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 focus:bg-black/10 dark:focus:bg-white/10 rounded-lg p-4 focus:outline-none w-full ${
            form.errors.user_email ? "border-red-500" : "border-transparent"
          }`}
        />
      </div>
      <div className="grid gap-1">
        <label
          htmlFor="message"
          className="font-semibold text-yellow-600 dark:text-yellow-200">
          Mensaje
        </label>
        <textarea
          placeholder="Escribe tu mensaje"
          name="message"
          id="message"
          disabled={loading}
          value={form.values.message}
          onChange={handleChange}
          className={`border bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 focus:bg-black/10 dark:focus:bg-white/10 rounded-lg p-4 focus:outline-none w-full ${
            form.errors.message ? "border-red-500" : "border-transparent"
          }`}
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        aria-label="Enviar formulario de contacto"
        className="rounded-lg text-lg min-h-[44px] font-bold bg-sky-300 dark:bg-sky-100 hover:bg-sky-400 hover:dark:bg-sky-200 text-sky-900 dark:text-sky-800 p-2 flex items-center justify-center">
        {loading ? (
          <div className="flex flex-row gap-2">
            <div className="w-2 h-2 rounded-full bg-sky-900 dark:bg-sky-800 animate-bounce"></div>
            <div className="w-2 h-2 rounded-full bg-sky-900 dark:bg-sky-800 animate-bounce [animation-delay:-.3s]"></div>
            <div className="w-2 h-2 rounded-full bg-sky-900 dark:bg-sky-800 animate-bounce [animation-delay:-.5s]"></div>
          </div>
        ) : (
          "Enviar"
        )}
      </button>
      <div
        id="toast-simple"
        className={`flex items-center w-full lg:w-fit max-w-xs p-4 space-x-4 rtl:space-x-reverse divide-x rtl:divide-x-reverse rounded-lg shadow divide-gray-700 space-x bg-yello-600 dark:bg-yellow-200 text-black fixed top-4 transition-all duration-300 ${
          success ? "right-4 opacity-100" : "-right-full opacity-0"
        }`}
        role="alert">
        <svg
          className="w-5 h-5 rotate-45"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 18 20">
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m9 17 8 2L9 1 1 19l8-2Zm0 0V9"
          />
        </svg>
        <div className="ps-4 text-sm font-semibold">
          Mensaje enviado correctamente.
        </div>
      </div>
    </form>
  );
}

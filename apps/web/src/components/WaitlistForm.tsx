"use client";

import { useState, type FormEvent } from "react";

function getInitialStatus(): "idle" | "success" {
  if (typeof window !== "undefined" && localStorage.getItem("stakei-waitlist")) {
    return "success";
  }
  return "idle";
}

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >(getInitialStatus);
  const [message, setMessage] = useState(() =>
    getInitialStatus() === "success" ? "Você já está na lista!" : "",
  );

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setMessage(data.error || "Erro ao cadastrar");
        return;
      }

      setStatus("success");
      setMessage(data.message);
      setEmail("");
      localStorage.setItem("stakei-waitlist", "true");
    } catch {
      setStatus("error");
      setMessage("Erro de conexão. Tente novamente.");
    }
  }

  if (status === "success") {
    return (
      <div className="flex items-center gap-2 rounded-full bg-emerald-500/10 px-5 py-2.5 text-emerald-400">
        <svg
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 13l4 4L19 7"
          />
        </svg>
        <span className="font-medium">{message}</span>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md">
      <form
        onSubmit={handleSubmit}
        className="flex w-full flex-col gap-3 sm:flex-row"
      >
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status === "error") setStatus("idle");
          }}
          placeholder="Seu melhor email"
          required
          className="flex-1 rounded-xl border border-gray-700 bg-gray-900 px-4 py-3 text-white placeholder:text-gray-500 transition-colors focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="whitespace-nowrap rounded-xl bg-emerald-500 px-6 py-3 font-semibold text-gray-950 transition-all hover:bg-emerald-400 hover:shadow-lg hover:shadow-emerald-500/25 disabled:opacity-50"
        >
          {status === "loading" ? "Enviando..." : "Quero acesso"}
        </button>
      </form>
      {status === "error" && (
        <p className="mt-2 text-center text-sm text-red-400">{message}</p>
      )}
    </div>
  );
}

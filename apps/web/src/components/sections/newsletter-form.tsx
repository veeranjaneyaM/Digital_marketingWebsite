"use client";

import { FormEvent, useState } from "react";
import { apiRequest } from "@/lib/api";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    try {
      await apiRequest("/newsletter", {
        method: "POST",
        body: { email, source: "footer" }
      });
      setEmail("");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <label className="text-xs uppercase tracking-[0.28em] text-[#2563eb]">Newsletter</label>
      <div className="flex flex-col gap-3 md:flex-row">
        <input
          required
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="min-w-0 flex-1 rounded-full border border-slate-200 bg-white px-5 py-3 text-slate-900 outline-none transition focus:border-[#2563eb]/45"
        />
        <button
          type="submit"
          className="rounded-full border border-[#2563eb]/18 bg-slate-950 px-5 py-3 text-sm font-semibold text-white"
        >
          {status === "submitting" ? "Joining..." : "Subscribe"}
        </button>
      </div>
      {status === "success" && <p className="text-sm text-cyan-700">Subscribed successfully.</p>}
      {status === "error" && <p className="text-sm text-rose-500">Please try again.</p>}
    </form>
  );
}

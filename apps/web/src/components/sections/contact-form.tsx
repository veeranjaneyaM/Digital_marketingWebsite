"use client";

import { FormEvent, useState } from "react";
import { apiRequest } from "@/lib/api";

const initialState = {
  name: "",
  email: "",
  company: "",
  message: ""
};

const fields: Array<{ name: "name" | "email" | "company"; type: "text" | "email" }> = [
  { name: "name", type: "text" },
  { name: "email", type: "email" },
  { name: "company", type: "text" }
];

export function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    try {
      await apiRequest("/contact", { method: "POST", body: form });
      setForm(initialState);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="dashboard-card space-y-5 rounded-[2rem] p-8 backdrop-blur-2xl">
      {fields.map((field) => (
        <label key={field.name} className="block">
          <span className="mb-2 block text-sm uppercase tracking-[0.24em] text-[#2563eb]">{field.name}</span>
          <input
            required={field.name !== "company"}
            type={field.type}
            value={form[field.name]}
            onChange={(event) =>
              setForm((current) => ({ ...current, [field.name]: event.target.value }))
            }
            className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 text-slate-900 outline-none transition focus:border-[#2563eb]/45"
          />
        </label>
      ))}
      <label className="block">
        <span className="mb-2 block text-sm uppercase tracking-[0.24em] text-[#2563eb]">message</span>
        <textarea
          required
          rows={5}
          value={form.message}
          onChange={(event) => setForm((current) => ({ ...current, message: event.target.value }))}
          className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 text-slate-900 outline-none transition focus:border-[#2563eb]/45"
        />
      </label>
      <button
        type="submit"
        className="rounded-full border border-[#2563eb]/18 bg-slate-950 px-6 py-3 font-ui text-sm font-semibold text-white"
      >
        {status === "submitting" ? "Sending..." : "Submit Inquiry"}
      </button>
      {status === "success" && <p className="text-sm text-cyan-700">Your message is on its way.</p>}
      {status === "error" && <p className="text-sm text-rose-500">Submission failed. Please try again.</p>}
    </form>
  );
}

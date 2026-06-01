"use client";

import { FormEvent, useState } from "react";
import { apiRequest } from "@/lib/api";

const initialState = {
  name: "",
  email: "",
  company: "",
  date: "",
  goals: ""
};

const fields: Array<{
  name: "name" | "email" | "company" | "date";
  type: "text" | "email" | "date";
}> = [
  { name: "name", type: "text" },
  { name: "email", type: "email" },
  { name: "company", type: "text" },
  { name: "date", type: "date" }
];

export function ConsultationForm() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    try {
      await apiRequest("/consultations", { method: "POST", body: form });
      setForm(initialState);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="dashboard-card grid gap-5 rounded-[2rem] p-8 backdrop-blur-2xl md:grid-cols-2">
      {fields.map((field) => (
        <label key={field.name} className="block">
          <span className="mb-2 block text-sm uppercase tracking-[0.24em] text-[#2563eb]">{field.name}</span>
          <input
            required
            type={field.type}
            value={form[field.name]}
            onChange={(event) =>
              setForm((current) => ({ ...current, [field.name]: event.target.value }))
            }
            className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 text-slate-900 outline-none transition focus:border-[#2563eb]/45"
          />
        </label>
      ))}
      <label className="block md:col-span-2">
        <span className="mb-2 block text-sm uppercase tracking-[0.24em] text-[#2563eb]">goals</span>
        <textarea
          required
          rows={5}
          value={form.goals}
          onChange={(event) => setForm((current) => ({ ...current, goals: event.target.value }))}
          className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 text-slate-900 outline-none transition focus:border-[#2563eb]/45"
        />
      </label>
      <div className="md:col-span-2">
        <button
          type="submit"
          className="rounded-full border border-[#2563eb]/18 bg-slate-950 px-6 py-3 font-ui text-sm font-semibold text-white"
        >
          {status === "submitting" ? "Booking..." : "Reserve Consultation"}
        </button>
      </div>
      {status === "success" && <p className="md:col-span-2 text-sm text-cyan-700">Consultation request sent.</p>}
      {status === "error" && <p className="md:col-span-2 text-sm text-rose-500">Something went wrong. Try again.</p>}
    </form>
  );
}

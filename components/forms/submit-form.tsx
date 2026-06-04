"use client";

import { useState } from "react";

export function SubmitForm() {
  const [loading, setLoading] =
    useState(false);

  const [form, setForm] = useState({
    company: "",
    role: "",
    level: "",
    location: "",

    yearsExperience: 0,

    baseSalary: 0,

    bonus: 0,

    stock: 0,
  });

  async function handleSubmit(
    e: React.FormEvent
  ) {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await fetch(
        "/api/submit",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify(form),
        }
      );

      const data = await res.json();

      console.log(data);

      alert("Submitted successfully");
    } catch (error) {
      console.error(error);

      alert("Submission failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4"
    >
      {Object.keys(form).map((key) => (
        <input
          key={key}
          placeholder={key}
          type={
            typeof form[
              key as keyof typeof form
            ] === "number"
              ? "number"
              : "text"
          }
          className="w-full rounded-lg border bg-background px-4 py-2"
          onChange={(e) =>
            setForm({
              ...form,

              [key]:
                typeof form[
                  key as keyof typeof form
                ] === "number"
                  ? Number(e.target.value)
                  : e.target.value,
            })
          }
        />
      ))}

      <button
        type="submit"
        disabled={loading}
        className="rounded-lg border px-6 py-2"
      >
        {loading
          ? "Submitting..."
          : "Submit Compensation"}
      </button>
    </form>
  );
}
"use client";

import { useState, type FormEvent } from "react";

import { Button } from "@/components/site/Button";
import { FORMSPREE_ENDPOINT } from "@/lib/site";

const fieldClass =
  "w-full rounded-md border border-input bg-surface px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/70 transition-colors focus-visible:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("submitting");
    setErrorMessage(null);

    try {
      const formData = new FormData(form);

      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (!response.ok) {
        const resData = await response.json().catch(() => null);
        if (resData && resData.errors && Array.isArray(resData.errors)) {
          const msg = resData.errors.map((err: { message: string }) => err.message).join(", ");
          throw new Error(msg || "Form submission failed");
        }
        throw new Error(resData?.error || "Form submission failed");
      }

      form.reset();
      setStatus("success");
    } catch (err: unknown) {
      if (err instanceof Error && err.message) {
        setErrorMessage(err.message);
      } else {
        setErrorMessage("Something went wrong. Please try again.");
      }
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate={false}>
      <div>
        <label htmlFor="name" className="eyebrow block">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          placeholder="Ada Lovelace"
          className={`mt-2 ${fieldClass}`}
        />
      </div>

      <div>
        <label htmlFor="email" className="eyebrow block">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="you@example.com"
          className={`mt-2 ${fieldClass}`}
        />
      </div>

      <div>
        <label htmlFor="message" className="eyebrow block">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          placeholder="Tell us what you're working on, or what you'd like to see the community run."
          className={`mt-2 resize-y ${fieldClass}`}
        />
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <Button type="submit" disabled={status === "submitting"}>
          {status === "submitting" ? "Sending..." : "Send message"}
        </Button>
        <p
          aria-live="polite"
          className={`font-mono text-xs ${status === "error" ? "text-destructive" : "text-muted-foreground"}`}
        >
          {status === "success"
            ? "Message sent — thanks for reaching out."
            : status === "error"
              ? (errorMessage || "Something went wrong. Please try again.")
              : "We usually reply within a few days."}
        </p>
      </div>
    </form>
  );
}

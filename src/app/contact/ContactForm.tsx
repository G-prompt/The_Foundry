"use client";

import { useState, type FormEvent } from "react";

import { Button } from "@/components/site/Button";
import { CONTACT_EMAIL } from "@/lib/site";

const fieldClass =
  "w-full rounded-md border border-input bg-surface px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/70 transition-colors focus-visible:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  // Client-side only: opens the visitor's mail client.
  // TODO: swap for a real form handler (e.g. Formspree/Resend) when a backend exists.
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = String(form.get("name") ?? "");
    const email = String(form.get("email") ?? "");
    const message = String(form.get("message") ?? "");

    const subject = encodeURIComponent(`The Foundry — message from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
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
        <Button type="submit">Send message</Button>
        <p aria-live="polite" className="font-mono text-xs text-muted-foreground">
          {sent ? "Your mail client should be open — thanks!" : "Opens your mail client."}
        </p>
      </div>
    </form>
  );
}

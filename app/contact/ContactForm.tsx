"use client";

import FadeInWhenVisible from "@/components/home/FadeInWhenVisible";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm, ValidationError } from "@formspree/react";
import Image from "next/image";

export function ContactForm() {
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORM_ID || "");

  if (state.succeeded) {
    return (
      <FadeInWhenVisible>
        <div className="flex flex-col justify-center align-center w-full">
          <h1 className="text-2xl font-bold text-center my-2">Message Sent!</h1>
          <div className="flex justify-center">
            <Image
              src="/mailbox.png"
              width={200}
              height={200}
              alt="mailbox"
              className="margin-auto"
            />
          </div>
          <p className="my-2">
            Thanks for your message! I will try to respond at my earliest
            convenience
          </p>
        </div>
      </FadeInWhenVisible>
    );
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 max-w-md margin-auto w-full"
    >
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1">
          Name
        </label>
        <Input id="name" type="text" name="name" />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1">
          Email
        </label>
        <Input id="email" type="email" name="email" />
      </div>
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1">
          Message
        </label>
        <Textarea id="message" name="message" />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </div>
      <div className="flex justify-center">
        <Button type="submit" disabled={state.submitting}>
          {state.submitting ? "Sending..." : "Send Message"}
        </Button>
      </div>
    </form>
  );
}
export default ContactForm;

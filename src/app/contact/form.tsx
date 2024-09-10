"use client";

import React from "react";
import useForm from "./useForm";
import Input from "./input";
import { AiOutlineLoading } from "react-icons/ai";
import Socials from "./socials";

export default function ContactForm() {
  const { state, handleSubmit } = useForm(
    process.env.NEXT_PUBLIC_FORM_ID || ""
  );

  if (state.succeeded) {
    return (
      <div className="h-full flex justify-center items-center flex-col">
        <p className="text-zinc-300">Thanks for message!</p>
        <p className="text-zinc-300">
          We strive to get back to you in less 48 hours
        </p>
      </div>
    );
  }
  return (
    <form onSubmit={handleSubmit} className="w-3/4 max-w-96">
      <Input
        label="Email"
        name="email"
        required
        placeholder="example@email.com"
      />
      <Input
        label="Subject"
        name="subject"
        required
        placeholder="Request for something"
      />
      <div className="col-span-full mt-4">
        <label
          htmlFor="message"
          className="block text-sm font-medium leading-6 text-zinc-300"
        >
          Message
        </label>
        <div className="flex rounded-md ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-zinc-600 sm:max-w-md">
          <textarea
            id="message"
            name="message"
            placeholder="Enter your message here"
            rows={4}
            required
            className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-zinc-100 placeholder:text-zinc-400 focus:ring-0 sm:text-sm sm:leading-6 outline-none"
          />
        </div>
      </div>
      <Socials />
      <div className="flex flex-row items-center mt-2 justify-center">
        <button
          disabled={state.submitting}
          type="submit"
          className="rounded-md bg-gray-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          {state.submitting ? (
            <AiOutlineLoading className="animate-spin" />
          ) : (
            "Submit"
          )}
        </button>
      </div>
    </form>
  );
}

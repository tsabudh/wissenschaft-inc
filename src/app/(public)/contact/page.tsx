"use client";

import { useState, useRef } from "react";
import { Mail, Briefcase, Phone, MapPin, ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import clsx from "clsx";
import { gtmEvent } from "@/components/gtm/GTMEvent";
import RoundGradient from "@/components/ui/backgrounds/round-gradient";

import wissenschaftData from "@/data/wissenschaft.json";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //
    gtmEvent({
      event: "form_submit",
      button: "submit",
      destination: "google_form",
    });

    const form = formRef.current;
    if (!form) return;

    if (form.checkValidity()) {
      form.submit();
      setSubmitted(true);
    } else {
      form.reportValidity();
    }
  };

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-20 md:px-16">
      {/* Background gradient glow */}
      <RoundGradient />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex w-full max-w-7xl flex-col justify-between gap-14 md:flex-row"
      >
        {/* LEFT SIDE */}
        <div className="flex-1 space-y-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl leading-tight font-extrabold text-gray-900 md:text-6xl"
          >
            Let&apos;s build <br />
            <span className="text-blue-600">something remarkable</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-lg text-lg text-gray-600"
          >
            Get in touch with our expert team — we&apos;ll take care of the technical complexities
            so you can focus on what truly matters.
          </motion.p>

          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-gray-800">Contact us directly</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-blue-600" />
                <a href={`mailto:${wissenschaftData.email}`} className="hover:text-blue-600">
                  {wissenschaftData.email}
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-blue-600" />
                <a href={`tel:${wissenschaftData.phone}`} className="hover:text-blue-600">
                  {wissenschaftData.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-blue-600" />
                <span>{wissenschaftData.address}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* RIGHT SIDE - FORM CARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="bg-background/50 flex-1 rounded-3xl p-8 shadow-xl ring-1 ring-gray-100 backdrop-blur-md"
        >
          <h3 className="mb-2 text-2xl font-semibold text-gray-900 dark:text-gray-300">
            {submitted ? "Send another inquiry" : "Send an inquiry"}
          </h3>
          <p className="mb-8 text-gray-600">
            We&apos;d love to hear from you — fill in your details below.
          </p>

          <form
            method="POST"
            action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSc_0E9IuWPJNILGKt6QeWbv4jXLkKfaN67r_CbXwFg0sRA8Gw/formResponse"
            ref={formRef}
            target="_blank"
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            {/* Name */}
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-400">
                Full name
              </label>
              <input
                type="text"
                name="entry.30473038"
                placeholder="e.g. John Doe"
                required
                className="bg-background w-full rounded-lg border border-gray-200 px-4 py-2.5 text-gray-500 shadow-sm transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            {/* Email */}
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-400">
                Email address
              </label>
              <input
                type="email"
                name="entry.428163587"
                placeholder="e.g. you@example.com"
                required
                className="bg-background w-full rounded-lg border border-gray-200 px-4 py-2.5 text-gray-500 shadow-sm transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            {/* Purpose */}
            <fieldset>
              <legend className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-400">
                What&apos;s your inquiry about?
              </legend>
              <div className="flex flex-wrap gap-3">
                {["Product", "Partnership", "Others"].map((label) => (
                  <label
                    key={label}
                    className={clsx(
                      "cursor-pointer rounded-full border border-gray-300 px-5 py-2 text-sm transition-all",
                      "peer-checked:bg-blue-600 hover:border-blue-500 hover:text-blue-600"
                    )}
                  >
                    <input
                      type="radio"
                      name="entry.2030692309"
                      value={label}
                      required
                      className="peer hidden"
                    />
                    <span className="peer-checked:font-semibold peer-checked:text-blue-600">
                      {label}
                    </span>
                  </label>
                ))}
              </div>
            </fieldset>

            {/* Message */}
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-400">
                Your message
              </label>
              <textarea
                name="entry.1966928524"
                placeholder="Write your message..."
                rows={4}
                required
                className="bg-background w-full rounded-lg border border-gray-200 px-4 py-2.5 text-gray-500 shadow-sm transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              ></textarea>
            </div>

            {/* Submit */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 py-3 font-semibold text-white shadow-md transition hover:bg-blue-700 dark:text-gray-300"
            >
              {submitted ? (
                <>
                  Send another inquiry
                  <CheckCircle2 className="h-5 w-5" />
                </>
              ) : (
                <>
                  Send inquiry
                  <ArrowRight className="h-5 w-5" />
                </>
              )}
            </motion.button>
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
}

"use client";

import { useState, useRef } from "react";
import { Mail, Briefcase, Phone, MapPin, ArrowRight, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = formRef.current;
    if (!form) return;

    // ✅ Enforce native validation
    if (form.checkValidity()) {
      form.submit();
      setSubmitted(true);
    } else {
      // ✅ Trigger native validation UI
      form.reportValidity();
    }
  };

  return (
    <section className="flex min-h-screen flex-col items-start justify-center gap-10 bg-gray-50 px-6 py-20 md:flex-row md:px-16">
      {/* Left Section */}
      <div className="max-w-xl flex-1">
        <h1 className="mb-6 text-5xl leading-tight font-bold text-gray-900 md:text-6xl">
          Leave the
          <br /> tech challenges
          <br />
          to us
        </h1>
        <p className="mb-8 text-gray-600">
          Feel free to reach out to us via phone, email, or by filling out the form below. Our
          dedicated team will get back to you as soon as possible.
        </p>

        <div>
          <h2 className="mb-3 text-lg font-semibold text-gray-800">Direct Contacts</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-gray-600" />
              <a href="mailto:enquiry@wissenschaft.com">enquiry@wissenschaft.com</a>
            </li>
            <li className="flex items-center gap-3">
              <Briefcase className="h-5 w-5 text-gray-600" />
              <a href="mailto:career@wissenschaft.com">career@wissenschaft.com</a>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-gray-600" />
              <a href="tel:+9779801234567">9801234567</a>
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-gray-600" />
              <span>Kumaripati, Lalitpur Nepal</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full max-w-md flex-1 rounded-2xl bg-white p-8 shadow-lg">
        <h3 className="mb-2 text-2xl font-semibold">Send{submitted ? " another" : ""} inquiry</h3>
        <p className="mb-6 text-gray-600">Fill this form to send us inquiry.</p>

        <form
          method="POST"
          action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSc_0E9IuWPJNILGKt6QeWbv4jXLkKfaN67r_CbXwFg0sRA8Gw/formResponse"
          ref={formRef}
          target="_blank"
          className="space-y-5"
          onSubmit={handleSubmit}
        >
          {/* Fullname */}
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">Your fullname</label>
            <input
              type="text"
              name="entry.30473038"
              placeholder="eg: John Doe"
              required
              className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Your email address
            </label>
            <input
              type="email"
              name="entry.428163587"
              placeholder="eg: you@example.com"
              required
              className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Radio options */}
          <fieldset>
            <legend className="mb-2 block text-sm font-medium text-gray-700">
              What do you want to contact for?
            </legend>
            <div className="flex gap-3">
              {["Product", "Partnership", "Others"].map((label) => (
                <label
                  key={label}
                  className="cursor-pointer rounded-lg border border-gray-300 px-4 py-2 text-gray-700 hover:bg-blue-50"
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
            <label className="mb-1 block text-sm font-medium text-gray-700">Your message</label>
            <textarea
              name="entry.1966928524"
              placeholder="eg: I want to..."
              rows={3}
              required
              className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            ></textarea>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-blue-600 py-2.5 font-semibold text-white transition hover:bg-blue-700"
          >
            {submitted ? "Send another inquiry" : "Send inquiry"}
            {submitted ? <CheckCircle className="h-4 w-4" /> : <ArrowRight className="h-4 w-4" />}
          </button>
        </form>
      </div>
    </section>
  );
}

"use client"
import Footer from "@/components/Footer";
import { useState } from "react";
import emailjs from '@emailjs/browser';

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  // Use NEXT_PUBLIC_ prefix for client-side env vars in Next.js
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
  const notificationTemplateId = process.env.NEXT_PUBLIC_EMAILJS_NOTIFICATION_TEMPLATE_ID;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Send confirmation to sender
    emailjs.send(
      serviceId!,
      templateId!,
      {
        from_name: form.name,
        from_email: form.email,
        message: form.message,
      },
      publicKey!
    ).then(() => {
      // Send notification to site owner only after confirmation is sent
      return emailjs.send(
        serviceId!,
        notificationTemplateId!,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        publicKey!
      );
    })
    .then(() => {
      setSubmitted(true);
      setForm({ name: '', email: '', message: '' });
    })
    .catch(() => {
      alert('Failed to send email. Please try again later.');
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <main className="container mx-auto px-6 py-12 flex-grow">
        <h1 className="font-pixel text-3xl mb-8 text-center">Contact</h1>
        <div className="max-w-xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-white p-8 border-4" style={{ borderColor: '#0966bd', borderRadius: 0 }}>
            <div className="flex flex-col gap-6">
              <label className="flex flex-col gap-2">
                <span className="font-semibold">Name</span>
                <input
                  type="text"
                  name="from_name"
                  required
                  className="px-3 py-2 focus:outline-none focus:ring-2"
                  style={{ border: '1px solid #0966bd', borderRadius: 0, boxShadow: 'none' }}
                  value={form.name}
                  onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                  placeholder="Your name"
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="font-semibold">Email</span>
                <input
                  type="email"
                  name="from_email"
                  required
                  className="px-3 py-2 focus:outline-none focus:ring-2"
                  style={{ border: '1px solid #0966bd', borderRadius: 0, boxShadow: 'none' }}
                  value={form.email}
                  onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                  placeholder="you@email.com"
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="font-semibold">Message</span>
                <textarea
                  name="message"
                  required
                  className="px-3 py-2 min-h-[120px] focus:outline-none focus:ring-2"
                  style={{ border: '1px solid #0966bd', borderRadius: 0, boxShadow: 'none' }}
                  value={form.message}
                  onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  placeholder="How can I help you?"
                />
              </label>
              <button
                type="submit"
                className="font-semibold py-2 px-6 mt-2 transition-colors block w-full"
                style={{ background: '#0966bd', color: 'white', borderRadius: 0 }}
                onMouseOver={e => (e.currentTarget.style.background = '#b64f8f')}
                onMouseOut={e => (e.currentTarget.style.background = '#0966bd')}
              >
                Send Email
              </button>
              {submitted && (
                <div className="text-green-600 text-center mt-2">Thank you! Your message has been sent.</div>
              )}
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}

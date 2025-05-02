"use client"
import Footer from "@/components/Footer";
import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  // This is a mailto fallback. For production, use a backend or service like Formspree.
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:vg435@njit.edu?subject=Contact from ${encodeURIComponent(form.name)}&body=${encodeURIComponent(form.message + '\n\nFrom: ' + form.email)}`;
    window.location.href = mailto;
    setSubmitted(true);
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
                <div className="text-green-600 text-center mt-2">Mail app opened! If not, email me at vg435@njit.edu</div>
              )}
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}

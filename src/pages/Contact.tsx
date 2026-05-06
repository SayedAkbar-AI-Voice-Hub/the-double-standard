import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Facebook, Twitter, Youtube, Instagram, Mail, Send } from 'lucide-react';
import PageHero from '../components/PageHero';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <PageHero
        title="Contact"
        subtitle="Get in touch for bookings, consultations, and enquiries"
        image="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=1600&h=600&auto=format&fit=crop"
      />

      <section className="py-20 bg-brand-light">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-sm font-semibold tracking-widest text-[#a8885a] uppercase mb-4">Reach Out</p>
              <h2 className="font-serif text-3xl text-brand-dark mb-6">Let's Connect</h2>
              <p className="text-gray-500 leading-relaxed mb-8">
                For speaking engagements, media enquiries, consultation bookings, or general correspondence, please use the form or reach out via social media.
              </p>

              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-[#f5ede0] rounded-full flex items-center justify-center">
                  <Mail className="w-5 h-5 text-[#a8885a]" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold">Email</p>
                  <a href="mailto:contact@mmrahman.com" className="text-brand-dark hover:text-[#a8885a] transition-colors text-sm">
                    contact@mmrahman.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <a href="#" className="w-10 h-10 bg-white shadow-sm flex items-center justify-center hover:bg-[#a8885a] hover:text-white text-brand-dark transition-all">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="#" className="w-10 h-10 bg-white shadow-sm flex items-center justify-center hover:bg-[#a8885a] hover:text-white text-brand-dark transition-all">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href="#" className="w-10 h-10 bg-white shadow-sm flex items-center justify-center hover:bg-[#a8885a] hover:text-white text-brand-dark transition-all">
                  <Youtube className="w-4 h-4" />
                </a>
                <a href="#" className="w-10 h-10 bg-white shadow-sm flex items-center justify-center hover:bg-[#a8885a] hover:text-white text-brand-dark transition-all">
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              {submitted ? (
                <div className="bg-white p-10 shadow-sm text-center">
                  <div className="w-14 h-14 bg-[#a8885a]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-7 h-7 text-[#a8885a]" />
                  </div>
                  <h3 className="font-serif text-2xl text-brand-dark mb-2">Message Sent</h3>
                  <p className="text-gray-500 text-sm">Thank you for reaching out. We will be in touch shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white p-8 shadow-sm space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold tracking-widest uppercase text-gray-500 mb-2">Name</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#a8885a] transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold tracking-widest uppercase text-gray-500 mb-2">Email</label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#a8885a] transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold tracking-widest uppercase text-gray-500 mb-2">Subject</label>
                    <input
                      type="text"
                      required
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#a8885a] transition-colors"
                      placeholder="Enquiry subject"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold tracking-widest uppercase text-gray-500 mb-2">Message</label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#a8885a] transition-colors resize-none"
                      placeholder="Your message..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 bg-[#a8885a] text-white text-xs font-semibold tracking-widest uppercase hover:bg-[#8c6e44] transition-colors flex items-center justify-center gap-2"
                  >
                    Send Message
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

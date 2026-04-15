"use client";

import { FormEvent, useRef, useState } from "react";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [submitting, setSubmitting] = useState(false);
  const [statusMsg, setStatusMsg] = useState<{ type: 'success' | 'error', text: string } | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setStatusMsg(null);
    
    if (formRef.current) {
      const formData = new FormData(formRef.current);
      
      // 1. Build the payload
      const payload = {
        name: formData.get("name"),
        email: formData.get("email"),
        timeline: formData.get("timeline"),
        details: formData.get("details"),
      };

      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload)
        });
        
        const data = await response.json();

        if (data.success) {
          setStatusMsg({ type: 'success', text: "Success! I'll be in touch shortly." });
          formRef.current.reset();
        } else {
          setStatusMsg({ type: 'error', text: "Oops! Something went wrong. Please try again." });
        }
      } catch (error) {
        setStatusMsg({ type: 'error', text: "Oops! Something went wrong. Please try again." });
      } finally {
        setSubmitting(false);
        // Clear success message after 5 seconds
        setTimeout(() => setStatusMsg(null), 5000);
      }
    }
  };

  return (
    <section id="contact" className="py-[140px] bg-[var(--cream)] relative max-lg:py-[100px]">
      <div className="flex px-[52px] gap-20 max-lg:flex-col max-lg:gap-14 max-lg:px-6">
        <div className="flex-1 rv">
          <h2 className="font-[family-name:var(--font-playfair)] text-[clamp(3.5rem,7vw,6rem)] font-bold leading-[1.05] tracking-[-.03em] text-[var(--ink)] mb-6">
            Book your free <br /><span className="italic text-[var(--gold)] font-normal">strategy call.</span>
          </h2>
          <p className="text-[.95rem] text-[var(--ink-light)] max-w-[400px] leading-[1.7]">
            Tell me about your business and I&apos;ll give you honest, actionable feedback on your website — completely free. No catch, no pitch.
          </p>
        </div>
        
        <div className="flex-1 flex flex-col justify-center rv d2">
          <form ref={formRef} onSubmit={handleSubmit} className="w-full">
            <div className="mb-6">
              <label 
                htmlFor="name" 
                className="block font-[family-name:var(--font-dm-mono)] text-[.6rem] tracking-[.15em] uppercase text-[var(--ink-light)] mb-2"
              >
                Your Name
              </label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                required 
                className="w-full border border-black/[0.12] bg-transparent px-4 py-3.5 font-[family-name:var(--font-syne)] text-[.95rem] text-[var(--ink)] outline-none rounded-[3px] transition-all duration-300 focus:border-[var(--gold)] focus:ring-1 focus:ring-[var(--gold)]/20"
                placeholder="John Smith"
              />
            </div>
            
            <div className="mb-6">
              <label 
                htmlFor="email" 
                className="block font-[family-name:var(--font-dm-mono)] text-[.6rem] tracking-[.15em] uppercase text-[var(--ink-light)] mb-2"
              >
                Email Address
              </label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                required 
                className="w-full border border-black/[0.12] bg-transparent px-4 py-3.5 font-[family-name:var(--font-syne)] text-[.95rem] text-[var(--ink)] outline-none rounded-[3px] transition-all duration-300 focus:border-[var(--gold)] focus:ring-1 focus:ring-[var(--gold)]/20"
                placeholder="john@company.com"
              />
            </div>
            
            <div className="mb-6">
              <label 
                htmlFor="timeline" 
                className="block font-[family-name:var(--font-dm-mono)] text-[.6rem] tracking-[.15em] uppercase text-[var(--ink-light)] mb-2"
              >
                Budget / Timeline
              </label>
              <input 
                type="text" 
                id="timeline" 
                name="timeline" 
                required 
                className="w-full border border-black/[0.12] bg-transparent px-4 py-3.5 font-[family-name:var(--font-syne)] text-[.95rem] text-[var(--ink)] outline-none rounded-[3px] transition-all duration-300 focus:border-[var(--gold)] focus:ring-1 focus:ring-[var(--gold)]/20"
                placeholder="$800–$2k+ / 1-2 weeks"
              />
            </div>
            
            <div className="mb-8">
              <label 
                htmlFor="details" 
                className="block font-[family-name:var(--font-dm-mono)] text-[.6rem] tracking-[.15em] uppercase text-[var(--ink-light)] mb-2"
              >
                Project Details
              </label>
              <textarea 
                id="details" 
                name="details" 
                rows={4} 
                required 
                className="w-full border border-black/[0.12] bg-transparent px-4 py-3.5 font-[family-name:var(--font-syne)] text-[.95rem] text-[var(--ink)] outline-none rounded-[3px] transition-all duration-300 focus:border-[var(--gold)] focus:ring-1 focus:ring-[var(--gold)]/20 resize-y"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>

            <button 
              type="submit" 
              disabled={submitting}
              className="group inline-flex items-center justify-between w-full bg-[var(--ink)] text-[var(--white)] py-5 px-8 border-none font-[family-name:var(--font-dm-mono)] text-[.75rem] uppercase tracking-[.15em] cursor-pointer rounded-[3px] transition-colors duration-300 hover:bg-[var(--gold)] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {submitting ? "Sending..." : "Request Free Strategy Session"}
              <span className="text-[1.2rem] transition-transform duration-300 group-hover:translate-x-2">→</span>
            </button>
            {statusMsg && (
              <div 
                className={`mt-4 font-[family-name:var(--font-dm-mono)] text-[.65rem] tracking-[.1em] uppercase ${
                  statusMsg.type === 'success' ? 'text-green-600' : 'text-red-500'
                }`}
              >
                {statusMsg.text}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

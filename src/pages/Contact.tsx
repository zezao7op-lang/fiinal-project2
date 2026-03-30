import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Send, MapPin } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  message: z.string().trim().min(1, "Message is required").max(1000),
});

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    toast.success("Message sent successfully! I'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="pt-24 pb-20">
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <p className="font-body text-sm uppercase tracking-[0.3em] text-primary mb-4">Contact</p>
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
              Let's <span className="text-gradient-gold">Connect</span>
            </h1>
            <div className="w-20 h-px bg-primary mb-8" />
          </motion.div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Form */}
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div>
                <label className="font-body text-xs uppercase tracking-widest text-muted-foreground mb-2 block">
                  Your Name
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-transparent border-b border-border py-3 font-body text-foreground focus:border-primary outline-none transition-colors"
                  placeholder="Enter your name"
                />
                {errors.name && <p className="text-destructive text-xs mt-1 font-body">{errors.name}</p>}
              </div>

              <div>
                <label className="font-body text-xs uppercase tracking-widest text-muted-foreground mb-2 block">
                  Email Address
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-transparent border-b border-border py-3 font-body text-foreground focus:border-primary outline-none transition-colors"
                  placeholder="Enter your email"
                />
                {errors.email && <p className="text-destructive text-xs mt-1 font-body">{errors.email}</p>}
              </div>

              <div>
                <label className="font-body text-xs uppercase tracking-widest text-muted-foreground mb-2 block">
                  Message
                </label>
                <textarea
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-transparent border-b border-border py-3 font-body text-foreground focus:border-primary outline-none transition-colors resize-none"
                  placeholder="Write your message..."
                />
                {errors.message && <p className="text-destructive text-xs mt-1 font-body">{errors.message}</p>}
              </div>

              <button
                type="submit"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-body font-semibold uppercase text-sm tracking-widest hover:shadow-gold transition-all duration-300"
              >
                Send Message
                <Send size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.form>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-10"
            >
              <div>
                <h3 className="font-display text-xl font-semibold mb-4">Get in Touch</h3>
                <p className="font-body text-foreground/60 leading-relaxed">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be
                  part of your vision. Feel free to reach out!
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 border border-border flex items-center justify-center">
                    <MapPin size={16} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-body text-sm text-muted-foreground">Location</p>
                    <p className="font-body text-foreground">Toukh, Egypt</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 border border-border flex items-center justify-center">
                    <Mail size={16} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-body text-sm text-muted-foreground">Email</p>
                    <p className="font-body text-foreground">mariam@example.com</p>
                  </div>
                </div>
              </div>

              <div>
                <p className="font-body text-xs uppercase tracking-widest text-muted-foreground mb-4">
                  Find Me Online
                </p>
                <div className="flex gap-4">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 border border-border flex items-center justify-center hover:border-primary hover:text-primary text-muted-foreground transition-colors"
                  >
                    <Github size={18} />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 border border-border flex items-center justify-center hover:border-primary hover:text-primary text-muted-foreground transition-colors"
                  >
                    <Linkedin size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

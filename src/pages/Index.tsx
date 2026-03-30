import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Code2, Sparkles, Zap } from "lucide-react";

const Index = () => {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-hero">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-primary/3 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 pt-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="font-body text-sm uppercase tracking-[0.3em] text-primary mb-6">
                Web Developer & Programmer
              </p>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6"
            >
              Hi, I'm{" "}
              <span className="text-gradient-gold">Mariam</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-display text-xl md:text-2xl italic text-foreground/60 mb-4"
            >
              Building the Future of AI with Code
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="font-body text-base text-muted-foreground max-w-2xl mx-auto mb-10"
            >
              Student at WE Applied Technology School — Toukh. Passionate about
              crafting elegant, responsive web experiences.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                to="/projects"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-body font-semibold uppercase text-sm tracking-widest hover:shadow-gold transition-all duration-300"
              >
                View My Work
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 border border-primary text-primary font-body font-semibold uppercase text-sm tracking-widest hover:bg-primary/10 transition-all duration-300"
              >
                Get in Touch
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="w-px h-16 bg-gradient-to-b from-primary/0 via-primary to-primary/0" />
        </motion.div>
      </section>

      {/* Quick Highlights */}
      <section className="py-24 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Code2, title: "Clean Code", desc: "Writing semantic, maintainable code with modern best practices." },
              { icon: Sparkles, title: "Creative Design", desc: "Blending aesthetics with functionality for impactful experiences." },
              { icon: Zap, title: "Fast & Responsive", desc: "Performance-first approach ensuring speed across all devices." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="group p-8 bg-card border border-border hover:border-primary/40 transition-all duration-500 shadow-card"
              >
                <item.icon size={28} className="text-primary mb-4" />
                <h3 className="font-display text-xl font-semibold mb-2">{item.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;

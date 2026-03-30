import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Landing Page",
    desc: "A fully responsive product landing page with modern UI, smooth animations, and mobile-first design.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    demo: "#",
    github: "#",
  },
  {
    title: "Portfolio Website",
    desc: "A personal portfolio showcasing my work with a luxury black and gold aesthetic, built for my school project.",
    tech: ["HTML5", "Tailwind CSS", "JavaScript"],
    demo: "#",
    github: "#",
  },
  {
    title: "Interactive Dashboard",
    desc: "A responsive admin dashboard with charts, data tables, and dynamic content using Bootstrap components.",
    tech: ["HTML5", "Bootstrap", "JavaScript"],
    demo: "#",
    github: "#",
  },
  {
    title: "Weather App",
    desc: "A clean weather application that fetches real-time data and displays forecasts with beautiful UI.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    demo: "#",
    github: "#",
  },
];

const Projects = () => {
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
            <p className="font-body text-sm uppercase tracking-[0.3em] text-primary mb-4">Portfolio</p>
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
              Selected <span className="text-gradient-gold">Projects</span>
            </h1>
            <div className="w-20 h-px bg-primary mb-8" />
            <p className="font-body text-foreground/60 max-w-xl">
              A curated selection of my work — each project represents a step in my journey as a developer.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group bg-card border border-border hover:border-primary/40 transition-all duration-500 overflow-hidden"
              >
                {/* Project image placeholder */}
                <div className="aspect-video bg-secondary/50 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-display text-4xl text-primary/20">0{i + 1}</span>
                  </div>
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-500" />
                </div>

                <div className="p-8">
                  <h3 className="font-display text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed mb-5">
                    {project.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 text-xs font-body uppercase tracking-wider border border-border text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.demo}
                      className="inline-flex items-center gap-2 text-sm font-body text-primary hover:text-gold-light transition-colors"
                    >
                      <ExternalLink size={14} /> Live Demo
                    </a>
                    <a
                      href={project.github}
                      className="inline-flex items-center gap-2 text-sm font-body text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Github size={14} /> Source
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Food Lover Restaurant",
    desc: "Restaurant landing page with hero image, menu sections, and responsive design.",
    tech: ["HTML", "CSS", "JavaScript"],
    demo: "#",
    github: "https://github.com/zezao7op-lang/on-site-10",
    image: "/images/Food Lover Restaurant.png",
  },
  {
    title: "Furni Interior Design",
    desc: "Modern interior design studio landing page with product highlights and call-to-action buttons.",
    tech: ["HTML", "CSS", "JavaScript"],
    demo: "#",
    github: "https://github.com/zezao7op-lang/onsite-5",
    image: "/images/Furni Interior Design.png",
  },
  {
    title: "MedAssist Guide Care",
    desc: "Health guide website for medical assistance with accessible UI and care resources.",
    tech: ["HTML", "CSS", "JavaScript"],
    demo: "#",
    github: "https://github.com/zezao7op-lang/medassist-guide-care/tree/main",
    image: "/images/MedAssist Guide Care.jpg",
  },
];

const placeholderImage = "https://via.placeholder.com/640x360?text=Project+Cover";

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
                <div className="aspect-video overflow-hidden relative">
                {project.image ? (
                  <img
                    src={encodeURI(project.image)}
                    alt={`${project.title} screenshot`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (target.src !== placeholderImage) {
                        target.src = placeholderImage;
                      }
                    }}
                  />
                ) : (
                  <div className="bg-secondary/50 h-full w-full flex items-center justify-center">
                    <span className="font-display text-4xl text-primary/20">0{i + 1}</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-500" />
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

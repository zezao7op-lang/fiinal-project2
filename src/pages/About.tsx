import { motion } from "framer-motion";

const skills = [
  { name: "HTML5", level: 90 },
  { name: "CSS3", level: 85 },
  { name: "JavaScript", level: 80 },
  { name: "Bootstrap", level: 75 },
  { name: "Tailwind CSS", level: 85 },
];

const placeholderImage = "https://via.placeholder.com/400x500/D4A574/ffffff?text=Mariam";
const mariamImage = "/images/mariem.jpeg";

const About = () => {
  return (
    <div className="pt-24 pb-20">
      {/* Header */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <p className="font-body text-sm uppercase tracking-[0.3em] text-primary mb-4">About Me</p>
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
              Crafting Digital <span className="text-gradient-gold">Experiences</span>
            </h1>
            <div className="w-20 h-px bg-primary mb-8" />
          </motion.div>
        </div>
      </section>

      {/* Bio */}
      <section className="pb-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {/* Photo placeholder */}
              <div className="aspect-[3/4] bg-card border border-border relative overflow-hidden group">
                <img
                  src={encodeURI(mariamImage)}
                  alt="Mariam"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (target.src !== placeholderImage) {
                      target.src = placeholderImage;
                    }
                  }}
                />
                <div className="absolute bottom-0 left-0 right-0 h-px bg-primary/40" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="font-display text-2xl font-semibold">My Journey</h2>
              <p className="font-body text-foreground/70 leading-relaxed">
                I'm <strong className="text-foreground">Mariam</strong>, an 18-year-old student at{" "}
                <strong className="text-primary">WE Applied Technology School — Toukh</strong>. My passion
                for technology ignited when I first discovered the power of turning ideas into interactive
                web experiences.
              </p>
              <p className="font-body text-foreground/70 leading-relaxed">
                Specializing in <strong className="text-foreground">Web Development & Programming</strong>,
                I've dedicated myself to mastering front-end technologies. Every project I take on is an
                opportunity to push creative boundaries and deliver polished, responsive applications.
              </p>
              <p className="font-body text-foreground/70 leading-relaxed">
                Beyond coding, I'm driven by a vision to leverage technology — including AI — to solve
                real-world problems and create meaningful digital solutions that make a difference.
              </p>

              <div className="pt-4 grid grid-cols-2 gap-6">
                <div>
                  <p className="font-display text-3xl font-bold text-primary">18</p>
                  <p className="font-body text-sm text-muted-foreground mt-1">Years Old</p>
                </div>
                <div>
                  <p className="font-display text-3xl font-bold text-primary">5+</p>
                  <p className="font-body text-sm text-muted-foreground mt-1">Technologies</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mb-12"
          >
            <p className="font-body text-sm uppercase tracking-[0.3em] text-primary mb-4">Skills</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold">My Tech Stack</h2>
          </motion.div>

          <div className="max-w-2xl space-y-8">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="flex justify-between mb-2">
                  <span className="font-body font-medium text-sm uppercase tracking-wider">{skill.name}</span>
                  <span className="font-body text-sm text-primary">{skill.level}%</span>
                </div>
                <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.1 }}
                    className="h-full bg-primary rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

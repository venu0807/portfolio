import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

export function Experience() {
  const experiences = [
    {
      role: "AI Developer",
      link: "https://github.com/venu0807/Realtime_Threat_Detection",
      company: "Audio Triggered Threat Detection",
      date: "2025 - Present",
      achievements: [
        <><strong className="text-foreground">Achieved sub-100ms on-device inference</strong> for real-time analysis.</>,
        <><strong className="text-foreground">Sustained 24/7 operation with &lt;5% battery drain</strong> through optimized architecture.</>
      ]
    },
    {
      role: "Full Stack Python Developer",
      link: "https://github.com/venu0807/Recommendation_System",
      company: "Movie Recommendation Platform",
      date: "2024 - 2025",
      achievements: [
        <><strong className="text-foreground">Reduced query latency by 60%</strong> through ORM optimization.</>,
        <><strong className="text-foreground">Designed highly scalable schema managing 10,000+ records</strong> efficiently.</>
      ]
    }
  ];

  return (
    <section id="experience" className="pt-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="section-label mb-8">[ EXPERIENCE_LOG ]</div>

        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <div key={i} className="bg-card border border-border p-8 hover:shadow-sm transition-shadow">
              <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 mb-6">
                <div>
                  <a href={exp.link || "#"} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 hover:text-[#06b6d4] transition-colors">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-[#06b6d4] transition-colors">{exp.role}</h3>
                    <ExternalLink size={16} className="text-muted-foreground group-hover:text-[#06b6d4] transition-colors" />
                  </a>
                  <div className="text-sm text-accent mt-1">{exp.company}</div>
                </div>
                <div className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
                  {exp.date}
                </div>
              </div>

              <ul className="space-y-3">
                {exp.achievements.map((item, j) => (
                  <li key={j} className="text-sm text-muted-foreground flex gap-3 items-start">
                    <span className="text-foreground mt-1 text-[8px]">■</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

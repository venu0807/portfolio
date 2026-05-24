import { motion } from 'framer-motion';

export function Education() {
  const education = [
    {
      degree: "Master of Computer Applications (AI & ML)",
      // link: "",
      institution: "Galgotias University",
      date: "2024 – 2026 (Expected)",
      score: "CGPA: 8.35 / 10"
    },
    {
      degree: "Bachelor of Computer Science",
      // link: "",
      institution: "Chaudhary Charan Singh University",
      date: "2019 – 2022",
      score: "Score: 85%"
    }
  ];

  return (
    <section id="education" className="pt-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="section-label mb-8">[ ACADEMIC_RECORD ]</div>

        <div className="space-y-6">
          {education.map((edu, i) => (
            <div key={i} className="bg-card border border-border p-8 hover:shadow-sm transition-shadow">
              <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground">{edu.degree}</h3>
                  <div className="text-sm font-semibold text-[#06b6d4] mt-1">{edu.institution}</div>
                </div>
                <div className="text-xs font-mono text-muted-foreground uppercase tracking-widest shrink-0 text-right">
                  {edu.date}
                </div>
              </div>

              <div className="text-sm font-mono text-foreground bg-muted/50 inline-block px-3 py-1 border border-border">
                {edu.score}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

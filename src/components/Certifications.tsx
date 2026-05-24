import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

export function Certifications() {
  const certifications = [
    {
      title: "Full Stack Java Developer Program",
      link: "https://drive.google.com/file/d/1ZVFwlRAh3_I4M5uSibgwYRN9qZ2K-_9M/view?usp=sharing",
      issuer: "Wipro",
      date: "July 2025 – Oct 2025",
      description: "Enterprise curriculum covering Java, Object-Oriented Programming, Data Structures, SQL, and scalable API design with emphasis on algorithms and system architecture."
    },
    {
      title: "Full Stack Python Developer Program",
      link: "https://drive.google.com/file/d/1CS81JFPO8L9vSmByeIGmTdETCP0P4K7V/view?usp=sharing",
      issuer: "Besant Technologies",
      date: "2023 – 2024",
      description: "Completed 400+ hours of project-based training in Python, Django, Django REST Framework, React.js, and MySQL. Delivered 5+ full-stack applications integrating machine learning models with production-ready backend APIs and responsive frontends."
    }
  ];

  return (
    <section id="certifications" className="pt-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="section-label mb-8">[ CERTIFICATION_LOG ]</div>

        <div className="space-y-6">
          {certifications.map((cert, i) => (
            <div key={i} className="bg-card border border-border p-8 hover:shadow-sm transition-shadow">
              <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 mb-4">
                <div>
                  <a href={cert.link || "#"} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 hover:text-[#06b6d4] transition-colors">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-[#06b6d4] transition-colors">{cert.title}</h3>
                    <ExternalLink size={16} className="text-muted-foreground group-hover:text-[#06b6d4] transition-colors" />
                  </a>
                  <div className="text-sm font-semibold text-[#06b6d4] mt-1">{cert.issuer}</div>
                </div>
                <div className="text-xs font-mono text-muted-foreground uppercase tracking-widest shrink-0">
                  {cert.date}
                </div>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed">
                {cert.description}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

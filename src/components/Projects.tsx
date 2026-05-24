import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

export function Projects() {
  const systems = [
    {
      name: "Job Automation",
      link: "https://github.com/venu0807/job-automation",
      status: "In Production",
      statusColor: "bg-primary/10 text-primary",
      description: "Engineered a robust web scraping and automation tool to streamline job applications. Developed custom scripts to parse job boards, auto-fill forms, and track application statuses efficiently.",
      architecture: <><strong className="text-foreground">Automation Pipeline</strong> + Automated scraping and application workflows.</>,
      stack: ["Python", "Selenium", "Open Claw", "Automation"]
    },
    {
      name: "Automation QA Developer",
      link: "https://github.com/venu0807/Automation---QA-Developer",
      status: "Open Source",
      statusColor: "bg-[#06b6d4]/10 text-[#06b6d4]",
      description: "Established comprehensive end-to-end testing pipelines to ensure high software quality. Created scalable test suites that validate complex UI interactions and prevent regression bugs in production.",
      architecture: <><strong className="text-foreground">Testing Framework</strong> + Automated end-to-end testing systems.</>,
      stack: ["JavaScript", "Cypress", "QA", "n8n"]
    },
    {
      name: "Booking System",
      link: "https://github.com/venu0807/booking",
      status: "Production",
      statusColor: "bg-green-500/10 text-green-600",
      description: "Built a full-stack reservation platform managing real-time availability and user bookings. Implemented secure user authentication and scalable database schemas to handle concurrent reservation requests.",
      architecture: <><strong className="text-foreground">Full Stack App</strong> + Booking and reservation management.</>,
      stack: ["Python", "Django", "JavaScript", "React", "Node.js"]
    },
    {
      name: "LeetCode Solutions",
      link: "https://github.com/venu0807/Leetcode_Solutions",
      status: "Algorithms",
      statusColor: "bg-[#3b82f6]/10 text-[#3b82f6]",
      description: "Maintained a highly organized repository of optimal algorithmic solutions. Demonstrated mastery of advanced data structures and algorithm design principles with a focus on optimal time and space complexities.",
      architecture: <><strong className="text-foreground">Data Structures</strong> + Optimal algorithms for technical interviews.</>,
      stack: ["Java", "Algorithms", "Problem Solving"]
    }
  ];

  return (
    <section id="systems" className="pt-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="section-label mb-8">[ INFRASTRUCTURE_SYSTEMS ]</div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {systems.map((sys, i) => (
            <div key={i} className="bg-card border border-border p-8 flex flex-col hover:shadow-sm transition-shadow">
              <div className="flex justify-between items-start mb-6">
                <a href={sys.link || "#"} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 hover:text-[#06b6d4] transition-colors">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-[#06b6d4] transition-colors">{sys.name}</h3>
                  <ExternalLink size={16} className="text-muted-foreground group-hover:text-[#06b6d4] transition-colors" />
                </a>
                <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full ${sys.statusColor}`}>
                  {sys.status}
                </span>
              </div>

              <div className="text-sm text-muted-foreground mb-4">
                {sys.description}
              </div>

              <div className="text-sm text-foreground mb-8 flex-grow">
                Architecture: {sys.architecture}
              </div>

              <div className="pt-6 border-t border-border">
                <div className="text-[10px] uppercase font-mono tracking-widest text-muted-foreground mb-3">
                  Stack:
                </div>
                <div className="flex flex-wrap gap-2">
                  {sys.stack.map((tech, j) => (
                    <span key={j} className="text-[10px] font-mono text-foreground border border-border px-2 py-1 bg-muted/50">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

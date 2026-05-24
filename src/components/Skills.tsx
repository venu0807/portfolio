import { motion } from 'framer-motion';
import { Globe, Code2, BrainCircuit, Brain, LineChart, Coffee, Database, Rocket, Cpu } from 'lucide-react';

export function Skills() {
  const softSkills = [
    "Communication",
    "Leadership",
    "Systems Thinking",
    "Rapid Prototyping",
    "Data-Driven Decisions"
  ];

  const techStack = [
    {
      title: "AI / LLM",
      skills: [
        { name: "Scikit-learn", icon: "https://cdn.simpleicons.org/scikitlearn/F7931E" },
        { name: "TensorFlow", icon: "https://cdn.simpleicons.org/tensorflow/FF6F00" },
        { name: "CNN", icon: <BrainCircuit size={14} className="text-[#06b6d4]" /> },
        { name: "Deep Learning", icon: <Brain size={14} className="text-purple-500" /> },
        { name: "Data Analysis", icon: <LineChart size={14} className="text-green-500" /> }
      ]
    },
    {
      title: "DEV",
      skills: [
        { name: "Python", icon: "https://cdn.simpleicons.org/python/3776AB" },
        { name: "Django", icon: "https://cdn.simpleicons.org/django/092E20" },
        { name: "React.js", icon: "https://cdn.simpleicons.org/react/61DAFB" },
        { name: "Java", icon: <Coffee size={14} className="text-orange-500" /> },
        { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/F7DF1E" },
        { name: "HTML/CSS", icon: "https://cdn.simpleicons.org/html5/E34F26" }
      ]
    },
    {
      title: "DATABASES",
      skills: [
        { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql/4169E1" },
        { name: "MySQL", icon: "https://cdn.simpleicons.org/mysql/4479A1" },
        { name: "SQL", icon: <Database size={14} className="text-gray-400" /> }
      ]
    },
    {
      title: "INFRA & OPS",
      skills: [
        { name: "Model Deployment", icon: <Rocket size={14} className="text-red-500" /> },
        { name: "On-Device AI", icon: <Cpu size={14} className="text-emerald-500" /> },
        { name: "Git", icon: "https://cdn.simpleicons.org/git/F05032" },
        { name: "REST APIs", icon: <Globe size={14} className="text-blue-500" /> }
      ]
    }
  ];

  return (
    <section id="stack" className="pt-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col md:flex-row gap-12 lg:gap-20">
          
          {/* Left Column: Languages & Soft Skills */}
          <div className="w-full md:w-64 shrink-0">
            <div className="flex items-center gap-3 text-2xl font-bold text-foreground mb-10">
              <div className="p-2 bg-[#06b6d4]/10 rounded-lg">
                <Code2 className="text-[#06b6d4]" size={24} />
              </div>
              Skills
            </div>

            <div className="mb-12">
              <div className="flex items-center gap-2 font-bold text-foreground mb-6">
                <Globe size={18} className="text-[#06b6d4]" />
                Languages
              </div>
              <div className="space-y-4 text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-foreground">Telugu</span>
                  <span className="text-[#06b6d4] font-medium text-xs uppercase tracking-wide">Native</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-foreground">English</span>
                  <span className="text-muted-foreground text-xs">Professional</span>
                </div>
                {/* <div className="flex justify-between items-center">
                  <span className="text-foreground">Hindi</span>
                  <span className="text-muted-foreground text-xs">Professional</span>
                </div> */}
              </div>
            </div>

            <div>
              <div className="font-bold text-foreground mb-6">
                Soft Skills
              </div>
              <div className="flex flex-col gap-2.5 items-start">
                {softSkills.map((skill, i) => (
                  <span key={i} className="px-4 py-1.5 bg-purple-500/10 text-purple-400 border border-purple-500/20 rounded-full text-[13px] font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Tech Stack */}
          <div className="flex-1">
            <div className="font-bold text-foreground mb-8 text-lg">
              Tech Stack
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {techStack.map((col, i) => (
                <div key={i} className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-[11px] font-bold uppercase tracking-widest mb-5 text-[#06b6d4]">
                    {col.title}
                  </h3>
                  <div className="flex flex-wrap gap-2.5">
                    {col.skills.map((skill, j) => (
                      <span key={j} className="px-3.5 py-1.5 bg-muted/50 text-foreground border border-border/50 rounded-full text-[13px] flex items-center gap-2 font-medium shadow-sm">
                        {typeof skill.icon === 'string' ? (
                          <img src={skill.icon} alt={skill.name} className="w-3.5 h-3.5 object-contain" />
                        ) : (
                          skill.icon
                        )}
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
}

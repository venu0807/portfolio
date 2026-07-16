import { Globe, Code2, BrainCircuit, Brain, Database, Rocket, Bot, Cpu as CpuIcon, Terminal, Layers, GitBranch } from 'lucide-react';
import { useInView } from '../hooks/useInView';

export function Skills() {
  const { ref, inView } = useInView();
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
        { name: "Groq SDK", icon: <BrainCircuit size={14} className="text-cyan-500" /> },
        { name: "Llama-3.1", icon: <Brain size={14} className="text-purple-500" /> },
        { name: "Ollama", icon: <CpuIcon size={14} className="text-emerald-500" /> },
        { name: "MediaPipe", icon: <BrainCircuit size={14} className="text-green-500" /> },
        { name: "TensorFlow", icon: <Bot size={14} className="text-orange-500" /> },
        { name: "Scikit-learn", icon: <Layers size={14} className="text-orange-600" /> }
      ]
    },
    {
      title: "DEV",
      skills: [
        { name: "Next.js", icon: <Code2 size={14} className="text-black dark:text-white" /> },
        { name: "TypeScript", icon: <Code2 size={14} className="text-blue-500" /> },
        { name: "React.js", icon: <Code2 size={14} className="text-cyan-400" /> },
        { name: "Python", icon: <Terminal size={14} className="text-yellow-400" /> },
        { name: "Tailwind CSS", icon: <Layers size={14} className="text-cyan-500" /> },
        { name: "Playwright", icon: <Bot size={14} className="text-green-500" /> }
      ]
    },
    {
      title: "DATABASES",
      skills: [
        { name: "Supabase", icon: <Database size={14} className="text-green-400" /> },
        { name: "PostgreSQL", icon: <Database size={14} className="text-blue-500" /> },
        { name: "SQL", icon: <Database size={14} className="text-gray-400" /> }
      ]
    },
    {
      title: "INFRA & OPS",
      skills: [
        { name: "Vercel", icon: <Rocket size={14} className="text-red-500" /> },
        { name: "On-Device AI", icon: <CpuIcon size={14} className="text-emerald-500" /> },
        { name: "Git/GitHub", icon: <GitBranch size={14} className="text-orange-500" /> },
        { name: "REST APIs", icon: <Globe size={14} className="text-blue-500" /> }
      ]
    }
  ];

  return (
    <section id="stack" className="pt-12">
      <div ref={ref} className={`fade-in ${inView ? 'in-view' : ''}`}>
        <div className="flex flex-col md:flex-row gap-12 lg:gap-20">
          
          {/* Left Column: Languages & Soft Skills */}
          <div className="w-full md:w-64 shrink-0">
            <div className="flex items-center gap-3 text-2xl font-bold text-foreground mb-10">
              <div className="p-2 bg-cyan-500/10 rounded-lg">
                <Code2 className="text-cyan-500" size={24} />
              </div>
              Skills
            </div>

            <div className="mb-12">
              <div className="flex items-center gap-2 font-bold text-foreground mb-6">
                <Globe size={18} className="text-cyan-500" />
                Languages
              </div>
              <div className="space-y-4 text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-foreground">Telugu</span>
                  <span className="text-cyan-500 font-medium text-xs uppercase tracking-wide">Native</span>
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
                  <h3 className="text-[11px] font-bold uppercase tracking-widest mb-5 text-cyan-500">
                    {col.title}
                  </h3>
                  <div className="flex flex-wrap gap-2.5">
                    {col.skills.map((skill, j) => (
                      <span key={j} className="px-3.5 py-1.5 bg-muted/50 text-foreground border border-border/50 rounded-full text-[13px] flex items-center gap-2 font-medium shadow-sm">
                        {skill.icon}
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

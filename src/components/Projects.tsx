import { ExternalLink } from 'lucide-react';
import { useInView } from '../hooks/useInView';

export function Projects() {
  const { ref, inView } = useInView();
  const systems = [
    {
      name: "PicScore — AI Face Rating",
      link: "https://github.com/venu0807/picscore",
      status: "Live",
      statusColor: "bg-primary/10 text-primary",
      description: "Geometric facial analysis SaaS. MediaPipe face mesh + pure TS scoring (symmetry, golden-ratio harmony, jawline, cheekbones, eyes, skin quality). Zero ML bias, client-side privacy, Stripe monetization.",
      architecture: <><strong className="text-foreground">Next.js + Supabase</strong> + MediaPipe browser CV + geometric scoring engine.</>,
      stack: ["Next.js", "TypeScript", "MediaPipe", "Supabase", "Tailwind"]
    },
    {
      name: "RoastMyCV — AI Resume Reviewer",
      link: "https://github.com/venu0807/roastmycv",
      status: "Live",
      statusColor: "bg-primary/10 text-primary",
      description: "Brutal resume roasting by Llama-3.1-70B via Groq. Parse PDF/DOCX → extract sections → AI generates structured roast + action plan. 1 free/day, Pro unlimited.",
      architecture: <><strong className="text-foreground">Next.js + Groq LLM</strong> + pdf-parse + mammoth + Supabase auth.</>,
      stack: ["Next.js", "Groq", "Llama-3.1", "pdf-parse", "Supabase"]
    },
    {
      name: "Jarvis — Job Automation Pipeline",
      link: "https://github.com/venu0807/jarvis",
      status: "In Production",
      statusColor: "bg-green-500/10 text-green-600",
      description: "AI-powered automation suite applying to 8 Indian job portals simultaneously. Naukri, Internshala, Indeed, Foundit, Cutshort, Freshersworld, Wellfound. Auto-resume tailoring via local Ollama. Daily email reports.",
      architecture: <><strong className="text-foreground">Playwright Automation</strong> + Ollama AI + LaTeX resume compilation.</>,
      stack: ["Python", "Playwright", "Ollama", "LaTeX", "SMTP"]
    },
    {
      name: "Movie Recommender System",
      link: "https://github.com/venu0807/Recommendation_System",
      status: "334 Tests",
      statusColor: "bg-cyan-500/10 text-cyan-500",
      description: "Hybrid movie recommendation engine with collaborative filtering + content-based filtering. Django backend, TMDB integration, 334 passing unit tests. Precision@10 optimized.",
      architecture: <><strong className="text-foreground">Django + REST API</strong> + collaborative + content-based filtering.</>,
      stack: ["Python", "Django", "scikit-learn", "Pandas", "PostgreSQL"]
    },
    {
      name: "SafeguardAI — On-Device Safety",
      link: "https://github.com/venu0807/SafeguardAI",
      status: "89% Accuracy",
      statusColor: "bg-yellow-500/10 text-yellow-600",
      description: "Mobile-first violent content detection CNN. TensorFlow Lite on Android with MediaPipe face preprocessing. 89% accuracy benchmark. Privacy-preserving — all inference on-device.",
      architecture: <><strong className="text-foreground">CNN + TensorFlow Lite</strong> + Android + MediaPipe preprocessing.</>,
      stack: ["Python", "TensorFlow", "Android", "MediaPipe", "Keras"]
    },
    {
      name: "Job Automation Pipeline",
      link: "https://github.com/venu0807/job-automation",
      status: "Automation",
      statusColor: "bg-[#3b82f6]/10 text-[#3b82f6]",
      description: "Web scraping and automation tool for job applications. Custom scripts to parse job boards, auto-fill forms, and track application statuses across multiple platforms.",
      architecture: <><strong className="text-foreground">Automation Pipeline</strong> + scraping + form-fill workflows.</>,
      stack: ["Python", "Selenium", "Automation", "Ollama"]
    },
    {
      name: "Automation QA Framework",
      link: "https://github.com/venu0807/Automation---QA-Developer",
      status: "Open Source",
      statusColor: "bg-cyan-500/10 text-cyan-500",
      description: "End-to-end testing pipelines ensuring high software quality. Scalable test suites validating complex UI interactions and preventing regression bugs in production.",
      architecture: <><strong className="text-foreground">Testing Framework</strong> + E2E automated testing.</>,
      stack: ["JavaScript", "Cypress", "QA", "n8n"]
    },
    {
      name: "LeetCode Solutions",
      link: "https://github.com/venu0807/Leetcode_Solutions",
      status: "Algorithms",
      statusColor: "bg-[#3b82f6]/10 text-[#3b82f6]",
      description: "Organized repository of algorithmic solutions demonstrating mastery of data structures and algorithm design with optimal time and space complexities.",
      architecture: <><strong className="text-foreground">Data Structures</strong> + optimal algorithms.</>,
      stack: ["Java", "Algorithms", "Problem Solving"]
    }
  ];

  return (
    <section id="systems" className="pt-8">
      <div ref={ref} className={`fade-in ${inView ? 'in-view' : ''}`}>
        <div className="section-label mb-8">[ INFRASTRUCTURE_SYSTEMS ]</div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {systems.map((sys, i) => (
            <div key={i} className="bg-card border border-border p-8 flex flex-col hover:shadow-sm transition-shadow">
              <div className="flex justify-between items-start mb-6">
                <a href={sys.link || "#"} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 hover:text-cyan-500 transition-colors">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-cyan-500 transition-colors">{sys.name}</h3>
                  <ExternalLink size={16} className="text-muted-foreground group-hover:text-cyan-500 transition-colors" />
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
      </div>
    </section>
  );
}

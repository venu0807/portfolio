import { ExternalLink } from 'lucide-react';
import { useInView } from '../hooks/useInView';

export function Experience() {
  const { ref, inView } = useInView();
  const experiences = [
    {
      role: "Full Stack Developer — PicScore",
      link: "https://github.com/venu0807/picscore",
      company: "Geometric Face Analysis SaaS",
      date: "2026 - Present",
      achievements: [
        <><strong className="text-foreground">Built production Next.js SaaS</strong> with MediaPipe face mesh + pure-TS geometric scoring.</>,
        <><strong className="text-foreground">Client-side privacy-first architecture</strong> — all CV runs in browser, image uploaded only after consent.</>,
        <><strong className="text-foreground">Supabase auth + daily limits + Stripe-ready</strong> monetization pipeline.</>
      ]
    },
    {
      role: "AI Developer — RoastMyCV",
      link: "https://github.com/venu0807/roastmycv",
      company: "AI Resume Review Platform",
      date: "2026 - Present",
      achievements: [
        <><strong className="text-foreground">Integrated Groq Llama-3.1-70B</strong> for structured resume roasting with JSON output.</>,
        <><strong className="text-foreground">PDF/DOCX parsing pipeline</strong> with heuristic section extraction + AI roast generation in under 30s.</>,
        <><strong className="text-foreground">Free tier + Pro subscription model</strong> with Supabase auth and rate limiting.</>
      ]
    },
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
      <div ref={ref} className={`fade-in ${inView ? 'in-view' : ''}`}>
        <div className="section-label mb-8">[ EXPERIENCE_LOG ]</div>

        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <div key={i} className="bg-card border border-border p-8 hover:shadow-sm transition-shadow">
              <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 mb-6">
                <div>
                  <a href={exp.link || "#"} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 hover:text-cyan-500 transition-colors">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-cyan-500 transition-colors">{exp.role}</h3>
                    <ExternalLink size={16} className="text-muted-foreground group-hover:text-cyan-500 transition-colors" />
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
      </div>
    </section>
  );
}

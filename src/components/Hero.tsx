import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section id="metrics" className="pt-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-[10px] font-mono tracking-widest text-muted-foreground uppercase mb-6">
          Initialization Sequence Complete
        </div>

        <div className="flex flex-col md:flex-row items-center md:items-center gap-12 mb-16">
          {/* Circular Image Container with Glow */}
          <div className="relative shrink-0">
            {/* Glow effect behind */}
            <div className="absolute inset-0 bg-gradient-to-tr from-accent via-primary to-accent rounded-full blur-2xl opacity-30"></div>
            <div className="absolute -inset-1 bg-gradient-to-tr from-accent to-primary rounded-full opacity-60"></div>
            <div className="relative w-56 h-56 md:w-64 md:h-64 rounded-full p-1.5 bg-background shadow-xl">
              <img
                src="/profile.png"
                alt="Venu Gopal Reddy Palugulla"
                className="w-full h-full rounded-full object-cover"
              />
              {/* Verified badge */}
              <div className="absolute bottom-4 right-4 bg-[#3b82f6] text-white rounded-full p-1 border-2 border-background shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 12 2 2 4-4" /><circle cx="12" cy="12" r="10" /></svg>
              </div>
            </div>
          </div>

          <div className="flex-1 text-center md:text-left">
            <div className="text-muted-foreground mb-4 font-mono text-sm">
              Hi, I'm <span className="text-[#3b82f6] font-semibold">@venugopalreddy</span> ,
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-2">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#06b6d4] to-primary">Full Stack AI Engineer</span>
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground leading-tight">
              AI Engineer that brings models to production <br className="hidden md:block" />
              with <span className="border-b-2 border-primary border-dotted pb-1">Deep Learning</span> + <span className="border-b-2 border-[#06b6d4] border-dotted pb-1">On-Device AI</span>
            </h2>

            <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-8">
              <span className="px-4 py-1.5 rounded-full border border-[#06b6d4]/30 bg-[#06b6d4]/5 text-sm font-medium text-foreground">
                Backend Developer
              </span>
              <span className="px-4 py-1.5 rounded-full border border-border bg-muted/50 text-sm font-medium text-foreground">
                Applied AI Operator
              </span>
              <span className="px-4 py-1.5 rounded-full border border-border bg-muted/50 text-sm font-medium text-foreground flex items-center gap-1.5">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-500 fill-yellow-500"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                89% CNN Accuracy
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 mb-24">
          <a href="https://github.com/venu0807" target="_blank" rel="noreferrer" className="boxy-btn boxy-btn-primary">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.24c3-.34 6-1.53 6-6.76a5.5 5.5 0 0 0-1.5-3.8 5.5 5.5 0 0 0-.15-3.8s-1.13-.36-3.7 1.36a13.3 13.3 0 0 0-7 0C6.13 2 5 2.36 5 2.36a5.5 5.5 0 0 0-.15 3.8A5.5 5.5 0 0 0 3 10.04c0 5.22 3 6.42 6 6.76a4.8 4.8 0 0 0-1 3.24v4" /></svg>
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/venu-gopal-reddy-palugulla-4948b8258" target="_blank" rel="noreferrer" className="boxy-btn boxy-btn-outline">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
            LinkedIn
          </a>
          <a href="https://leetcode.com/u/venu08/" target="_blank" rel="noreferrer" className="boxy-btn boxy-btn-outline">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>
            LeetCode
          </a>
        </div>

        {/* Metrics Section */}
        <div className="mt-16">
          <div className="section-label mb-8">[ PERFORMANCE_METRICS ]</div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <MetricCard value="89%" label="CNN Accuracy" />
            <MetricCard value="60%" label="Query Latency Reduction" />
            <MetricCard value="<100" label="ms Inference Latency" />
            <MetricCard value="400+" label="Hours Full-Stack Training" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function MetricCard({ value, label }: { value: string, label: string }) {
  return (
    <div className="bg-card border border-border p-6 relative overflow-hidden group">
      <div className="text-4xl font-bold text-foreground mb-2">{value}</div>
      <div className="text-xs text-muted-foreground">{label}</div>
      {/* Bottom Gradient Line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent opacity-80 group-hover:opacity-100 transition-opacity w-[90%] mx-auto"></div>
    </div>
  );
}

import { Mail, ExternalLink } from 'lucide-react';

export function Footer() {
  return (
    <footer id="contact" className="w-full mt-16 mb-8">
      <div className="w-full px-6 md:px-12 py-16 flex flex-col items-center text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-6">
          Let's talk
        </h2>
        <p className="text-muted-foreground mb-10 max-w-xl mx-auto text-[15px] leading-relaxed">
          I build production AI models and systems. If you have an interesting problem where AI is the right tool — let us talk.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-20">
          <a href="mailto:pvgreddy3@gmail.com" className="bg-[#147a75] text-white px-7 py-2.5 rounded-full flex items-center gap-2 font-medium hover:bg-[#0f615d] transition-colors shadow-sm text-sm">
            <Mail size={16} />
            Contact
          </a>
          <a href="https://www.linkedin.com/in/venu-gopal-reddy-palugulla-4948b8258" target="_blank" rel="noreferrer" className="bg-transparent text-foreground border border-border px-7 py-2.5 rounded-full flex items-center gap-2 font-medium hover:bg-muted/50 transition-colors text-sm">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            LinkedIn
            <ExternalLink size={14} className="text-muted-foreground ml-1" />
          </a>
        </div>

        <div className="text-xs text-muted-foreground/80 font-medium tracking-wide">
          © 2026 Venu Gopal Reddy Palugulla
        </div>
      </div>
    </footer>
  );
}

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
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-[#0a66c2]"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            LinkedIn
            <ExternalLink size={14} className="text-muted-foreground ml-1" />
          </a>
        </div>

        <div className="text-xs text-muted-foreground/80 font-medium tracking-wide">
          © 2026 Venu Gopal Reddy Palugulla | <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
        </div>
      </div>
    </footer>
  );
}

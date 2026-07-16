import { lazy, Suspense, useState } from 'react';
import { Moon, Sun, Globe } from 'lucide-react';
import { SidebarNav } from './components/SidebarNav';
import { ErrorBoundary } from './components/ErrorBoundary';

const Hero = lazy(() => import('./components/Hero').then(m => ({ default: m.Hero })));
const Experience = lazy(() => import('./components/Experience').then(m => ({ default: m.Experience })));
const Projects = lazy(() => import('./components/Projects').then(m => ({ default: m.Projects })));
const Skills = lazy(() => import('./components/Skills').then(m => ({ default: m.Skills })));
const Certifications = lazy(() => import('./components/Certifications').then(m => ({ default: m.Certifications })));
const Education = lazy(() => import('./components/Education').then(m => ({ default: m.Education })));
const Footer = lazy(() => import('./components/Footer').then(m => ({ default: m.Footer })));

function SectionFallback() {
  return <div className="h-64 animate-pulse bg-muted/30 rounded-lg" />;
}

function App() {
  const [isDark, setIsDark] = useState(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const hasClass = document.documentElement.classList.contains('dark');
    if (!hasClass && prefersDark) {
      document.documentElement.classList.add('dark');
    }
    return hasClass || prefersDark;
  });

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    }
  };

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20 selection:text-primary overflow-x-hidden flex flex-col">

        {/* Top Navbar */}
        <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border px-6 md:px-12 py-4 flex items-center justify-between">
          <div className="font-bold tracking-widest text-sm uppercase">VG_RD_PALUGULLA</div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-1.5 px-3 py-1.5 border border-border bg-card rounded-full text-xs font-semibold hover:bg-muted transition-colors shadow-sm" aria-label="Language">
              <Globe size={14} className="text-muted-foreground" />
              EN
            </button>
            <button
              onClick={toggleTheme}
              className="p-1.5 border border-border bg-card rounded-full hover:bg-muted transition-colors shadow-sm"
              aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
            >
              {isDark ? <Sun size={15} className="text-foreground" /> : <Moon size={15} className="text-foreground" />}
            </button>
          </div>
        </nav>

        {/* Main Layout with continuous left border line */}
        <div className="flex-1 w-full px-6 md:px-12 relative flex">
          {/* Left vertical timeline border */}
          <div className="hidden md:block absolute left-[88px] top-0 bottom-0 w-px bg-border z-0"></div>
          <SidebarNav />

          {/* Main Content Area */}
          <main className="w-full md:pl-48 py-16 md:py-24 space-y-32">
            <Suspense fallback={<SectionFallback />}>
              <Hero />
              <Experience />
              <Projects />
              <Skills />
              <Certifications />
              <Education />
            </Suspense>
          </main>
        </div>

        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </div>
    </ErrorBoundary>
  );
}

export default App;

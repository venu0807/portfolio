import { useEffect, useState } from 'react';

export function SidebarNav() {
  const [activeSection, setActiveSection] = useState('experience');
  const [isVisible, setIsVisible] = useState(false);

  const navItems = [
    { id: 'experience', label: 'Experience' },
    { id: 'systems', label: 'Projects' },
    { id: 'stack', label: 'Skills & Stack' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Hide the sidebar when at the top "Overview" / Hero section
      setIsVisible(window.scrollY > 400);

      const sections = navItems.map(item => document.getElementById(item.id));

      // Check if scrolled to bottom
      if (window.innerHeight + Math.round(window.scrollY) >= document.documentElement.scrollHeight - 200) {
        setActiveSection(navItems[navItems.length - 1].id);
        return;
      }

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section) {
          const rect = section.getBoundingClientRect();
          // Trigger when the top of the section enters the viewport (with a 100px buffer)
          if (rect.top <= window.innerHeight - 100) {
            setActiveSection(navItems[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Trigger once on mount
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className={`hidden md:flex flex-col gap-8 fixed left-[82px] top-32 z-50 transition-opacity duration-500 ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      {navItems.map((item) => {
        const isActive = activeSection === item.id;
        return (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`flex items-center gap-4 text-xs font-mono group transition-colors ${
              isActive ? 'text-[#06b6d4] font-bold' : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            {/* The dot */}
            <div
              className={`w-3 h-3 rounded-full border-2 transition-colors z-10 ${
                isActive ? 'bg-[#06b6d4] border-[#06b6d4]' : 'bg-background border-border group-hover:border-[#06b6d4]'
              }`}
            />
            {/* The label */}
            <span className="bg-background/80 px-1 backdrop-blur-sm rounded whitespace-nowrap">{item.label}</span>
          </a>
        );
      })}
    </div>
  );
}

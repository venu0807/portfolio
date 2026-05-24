import type { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  variant?: 'default' | 'outline' | 'primary' | 'success';
  className?: string;
}

export function Badge({ children, variant = 'default', className = '' }: BadgeProps) {
  const baseStyles = "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2";
  
  const variants = {
    default: "bg-muted text-muted-foreground hover:bg-muted/80",
    outline: "border border-border text-foreground",
    primary: "bg-primary/20 text-primary border border-primary/30",
    success: "bg-[hsl(142,71%,45%)]/20 text-[hsl(142,71%,45%)] border border-[hsl(142,71%,45%)]/30",
  };

  return (
    <div className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </div>
  );
}

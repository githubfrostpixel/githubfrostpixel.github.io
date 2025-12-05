import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  href?: string;
  to?: string;
  external?: boolean;
  className?: string;
  onClick?: () => void;
}

export function Button({
  children,
  variant = 'primary',
  href,
  to,
  external,
  className = '',
  onClick,
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center gap-2 px-6 py-3 font-medium transition-all duration-300 rounded-lg';

  const variantStyles = {
    primary:
      'bg-cyan-500 text-slate-900 hover:bg-cyan-400 hover:shadow-lg hover:shadow-cyan-500/25',
    secondary:
      'bg-slate-800 text-slate-100 hover:bg-slate-700 border border-slate-700',
    outline:
      'bg-transparent text-cyan-400 border border-cyan-500/50 hover:bg-cyan-500/10 hover:border-cyan-400',
  };

  const styles = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={styles}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={styles}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={styles} onClick={onClick}>
      {children}
    </button>
  );
}


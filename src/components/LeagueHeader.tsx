
import { ReactNode } from 'react';

interface LeagueHeaderProps {
  title: string;
  subtitle?: string;
  gradientClass: string;
  logo?: string;
  children?: ReactNode;
}

export function LeagueHeader({ 
  title, 
  subtitle, 
  gradientClass, 
  logo, 
  children 
}: LeagueHeaderProps) {
  return (
    <div className={`w-full ${gradientClass} py-8 px-4 md:px-6 mb-8 rounded-lg text-white`}>
      <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center space-x-4 mb-4 md:mb-0">
          {logo && (
            <img 
              src={logo} 
              alt={`${title} logo`} 
              className="w-16 h-16 object-contain"
            />
          )}
          <div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">{title}</h1>
            {subtitle && <p className="text-gray-200 mt-1">{subtitle}</p>}
          </div>
        </div>
        {children && <div className="mt-4 md:mt-0">{children}</div>}
      </div>
    </div>
  );
}

export default LeagueHeader;

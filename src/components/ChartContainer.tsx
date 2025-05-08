
import { ReactNode } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface ChartContainerProps {
  title: string;
  children: ReactNode;
  className?: string;
}

export function ChartContainer({ title, children, className = '' }: ChartContainerProps) {
  return (
    <Card className={`overflow-hidden shadow-md hover:shadow-lg transition-shadow ${className}`}>
      <CardHeader className="p-4">
        <CardTitle className="text-lg font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="p-0 w-full">
          {children}
        </div>
      </CardContent>
    </Card>
  );
}

export default ChartContainer;

'use client';

import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock } from 'lucide-react';
import type { StandardWithVariants } from '@/types';

interface StandardCardProps {
  standard: StandardWithVariants;
}

export function StandardCard({ standard }: StandardCardProps) {
  return (
    <Card className="hover:border-primary/50 transition-colors">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <CardTitle className="text-lg">{standard.name}</CardTitle>
          {standard.variants.length > 1 && (
            <Badge variant="secondary" className="text-xs">
              {standard.variants.length} Varianten
            </Badge>
          )}
        </div>
        {standard.description && (
          <CardDescription>{standard.description}</CardDescription>
        )}
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {standard.variants.map((variant) => (
            <Link
              key={variant.id}
              href={`/dashboard/standards/${variant.id}`}
              className="flex items-center justify-between p-3 rounded-lg border hover:bg-accent transition-colors group"
            >
              <div className="flex items-center gap-3">
                <div>
                  <p className="font-medium group-hover:text-primary transition-colors">
                    {variant.name}
                  </p>
                  {variant.description && standard.variants.length > 1 && (
                    <p className="text-sm text-muted-foreground line-clamp-1">
                      {variant.description}
                    </p>
                  )}
                </div>
              </div>
              {variant.estimated_time && (
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  {variant.estimated_time}
                </div>
              )}
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}


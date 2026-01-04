'use client';

import Link from 'next/link';
import { Lock, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface UpgradePromptProps {
  title?: string;
  message: string;
  variant?: 'inline' | 'card' | 'overlay';
  showButton?: boolean;
}

export function UpgradePrompt({ 
  title = 'Upgrade erforderlich',
  message, 
  variant = 'card',
  showButton = true 
}: UpgradePromptProps) {
  if (variant === 'inline') {
    return (
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Lock className="h-4 w-4" />
        <span>{message}</span>
        {showButton && (
          <Button variant="link" size="sm" className="h-auto p-0" asChild>
            <Link href="/dashboard/settings/billing">Upgrade</Link>
          </Button>
        )}
      </div>
    );
  }
  
  if (variant === 'overlay') {
    return (
      <div className="absolute inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm rounded-lg z-10">
        <div className="text-center p-4">
          <Lock className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
          <p className="font-medium">{title}</p>
          <p className="text-sm text-muted-foreground mt-1">{message}</p>
          {showButton && (
            <Button size="sm" className="mt-3" asChild>
              <Link href="/dashboard/settings/billing">
                <Sparkles className="h-4 w-4 mr-2" />
                Upgrade
              </Link>
            </Button>
          )}
        </div>
      </div>
    );
  }
  
  // Default: card
  return (
    <Card className="border-dashed">
      <CardContent className="flex flex-col items-center justify-center py-8 text-center">
        <div className="rounded-full bg-muted p-3 mb-4">
          <Lock className="h-6 w-6 text-muted-foreground" />
        </div>
        <h3 className="font-semibold">{title}</h3>
        <p className="text-sm text-muted-foreground mt-1 max-w-sm">{message}</p>
        {showButton && (
          <Button className="mt-4" asChild>
            <Link href="/dashboard/settings/billing">
              <Sparkles className="h-4 w-4 mr-2" />
              Pläne vergleichen
            </Link>
          </Button>
        )}
      </CardContent>
    </Card>
  );
}


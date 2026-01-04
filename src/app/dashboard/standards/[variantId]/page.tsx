'use client';

import { use } from 'react';
import { useRouter } from 'next/navigation';
import { StandardWizard } from '@/components/standards';

interface PageProps {
  params: Promise<{ variantId: string }>;
}

export default function StandardWizardPage({ params }: PageProps) {
  const { variantId } = use(params);
  const router = useRouter();

  return (
    <div className="max-w-3xl mx-auto">
      <StandardWizard
        variantId={variantId}
        onBack={() => router.push('/dashboard/standards')}
      />
    </div>
  );
}


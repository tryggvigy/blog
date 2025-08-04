'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export function ViewTracker() {
  const pathname = usePathname();

  useEffect(() => {
    // Extract slug from pathname (e.g., /blog/post2 -> post2)
    const slug = pathname.split('/').pop();
    if (slug && slug !== 'blog') {
      fetch(`/api/views/${slug}`, { method: 'POST' }).catch(console.error);
    }
  }, [pathname]);

  return null;
}

import Link from 'next/link';

import PrimarySection from '@/components/sections/primary-section';
import { faqCategories } from '@/app/faq/faq-content';
import { cn } from '@/lib/utils';

export default function FaqCategoryNav() {
  return (
    <PrimarySection className="py-6 sm:py-8">
      <div className="container">
        <nav aria-label="FAQ categories">
          <ul className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {faqCategories.map((category) => (
              <li key={category.id}>
                <Link
                  href={`#${category.id}`}
                  className={cn(
                    'inline-flex rounded-full border border-[#ead4fb]/80 bg-white/70 px-3 py-1.5 text-sm font-medium text-[#13203b] transition-colors',
                    'hover:border-[#d181ff] hover:text-[#8f2acd]',
                    'dark:border-[rgba(143,42,205,0.35)] dark:bg-[rgba(18,4,26,0.35)] dark:text-white dark:hover:border-[#ae4de8] dark:hover:text-[#cc7aff]',
                  )}
                >
                  {category.shortLabel}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </PrimarySection>
  );
}

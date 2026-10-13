import { data as homePageData } from '@/app/(home)/page-data';
import TestimonialsSection from '@/components/sections/testimonials-section';
import {
  formatTestimonialsUsersTitle,
  getStats,
} from '@/lib/stats';

export default async function HomeTestimonialsSection() {
  const { usersAll } = await getStats();

  return (
    <TestimonialsSection
      data={{
        ...homePageData.testimonials,
        title: formatTestimonialsUsersTitle(usersAll),
      }}
    />
  );
}

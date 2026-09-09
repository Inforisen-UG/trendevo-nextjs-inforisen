import FaqSection from '@/components/sections/faq-section';
import { data } from '@/app/how-it-works/page-data';

export default function HowItWorksFaqSection() {
  return <FaqSection data={data.faq} />;
}

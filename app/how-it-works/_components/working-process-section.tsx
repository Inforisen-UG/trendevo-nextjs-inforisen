import ServiceWorkingProcessSection from '@/components/sections/service-working-process-section';
import { data } from '@/app/how-it-works/page-data';

const { workingProcess } = data;

export default function HowItWorksProcessSection() {
  return (
    <ServiceWorkingProcessSection
      badge={workingProcess.badge}
      title={workingProcess.title}
      subtitle={workingProcess.subtitle}
      steps={workingProcess.steps}
      underlineSrc="/images/working-process/working-process-section-underline.svg"
      underlineWidth={216}
      titleClassName="max-w-none whitespace-normal text-center text-2xl tracking-[0.48px] sm:text-[32px] md:text-[40px] lg:text-[48px]"
      subtitleClassName="max-w-[868px] text-center text-sm sm:text-base md:text-lg"
      showFlowConnectors={false}
      showTitleBullet={false}
      centerOrphanStep
    />
  );
}

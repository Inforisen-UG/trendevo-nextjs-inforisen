import Image from 'next/image';

import { cn } from '@/lib/utils';

export default function WebsiteTrafficPlatformIcon({
  className,
}: {
  className?: string;
}) {
  return (
    <div
      className={cn(
        'relative h-[17px] w-[20.621px] shrink-0',
        className,
      )}
    >
      <Image
        src="/images/our-services/platforms/website-traffic-platform-icon-layer-5.svg"
        alt=""
        aria-hidden
        fill
        className="object-contain"
        unoptimized
      />
      <Image
        src="/images/our-services/platforms/website-traffic-platform-icon-layer-7.svg"
        alt=""
        aria-hidden
        fill
        className="object-contain mix-blend-overlay"
        unoptimized
      />
      <Image
        src="/images/our-services/platforms/website-traffic-platform-icon-layer-8.svg"
        alt=""
        aria-hidden
        fill
        className="object-contain mix-blend-overlay"
        unoptimized
      />
    </div>
  );
}

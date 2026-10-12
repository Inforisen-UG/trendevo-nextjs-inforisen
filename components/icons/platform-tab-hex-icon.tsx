import { cn } from '@/lib/utils';

const HEX_BG_PATH =
  'M13.5039 0.890625C15.3294 -0.163308 17.5788 -0.163308 19.4043 0.890625L29.8584 6.92676C31.6838 7.98065 32.8085 9.92836 32.8086 12.0361V24.1084C32.8085 26.2162 31.6838 28.1639 29.8584 29.2178L19.4043 35.2539C17.5788 36.3078 15.3294 36.3078 13.5039 35.2539L3.0498 29.2178C1.22441 28.1639 0.0996928 26.2162 0.0996094 24.1084V12.0361C0.0996928 9.92836 1.22441 7.98065 3.0498 6.92676L13.5039 0.890625Z';

export default function PlatformTabHexIcon({
  className,
  isActive,
}: {
  className?: string;
  isActive?: boolean;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="33"
      height="37"
      viewBox="0 0 33 37"
      fill="none"
      aria-hidden
      className={cn(className)}
    >
      {isActive ? (
        <path
          d={HEX_BG_PATH}
          className="fill-white stroke-[#C081E6]"
          strokeWidth="1"
        />
      ) : (
        <path
          d={HEX_BG_PATH}
          className="fill-white/10 stroke-[#C081E6] dark:fill-white/15 dark:stroke-[#d8a8f0]"
          strokeWidth="1"
        />
      )}
    </svg>
  );
}

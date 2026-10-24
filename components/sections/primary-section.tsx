import React from 'react';
import { cn } from '@/lib/utils';

const sectionBackgroundClasses = {
  'section-1': "bg-[url('/images/backgrounds/section-bg-1.svg')]",
  'section-2': "bg-[url('/images/backgrounds/section-bg-2.svg')]",
  'section-3': "bg-[url('/images/backgrounds/section-bg-3.webp')]",
  'section-4': "bg-[url('/images/backgrounds/section-bg-4.webp')]",
  'section-5': "bg-[url('/images/backgrounds/section-bg-5.svg')]",
  'section-6': "bg-[url('/images/backgrounds/section-bg-6.svg')]",
  'section-7': "bg-[url('/images/backgrounds/section-bg-7.svg')]",
  'section-8': "bg-[url('/images/backgrounds/section-bg-8.svg')]",
  'section-9': "bg-[url('/images/backgrounds/section-bg-9.webp')]",
  'section-10': "bg-[url('/images/backgrounds/section-bg-10.webp')]",
  'section-15': "bg-[url('/images/backgrounds/section-bg-15.webp')]",
  'section-11': "bg-[url('/images/backgrounds/section-bg-11.webp')]",
  'section-13': "bg-[url('/images/backgrounds/section-bg-13.webp')]",
  'section-14': "bg-[url('/images/backgrounds/section-bg-14.svg')]",
  'section-16': "bg-[url('/images/backgrounds/section-bg-16.webp')]",
  'section-17': "bg-[url('/images/backgrounds/section-bg-17.svg')]",
  'section-12': "bg-[url('/images/backgrounds/section-bg-12.webp')]",
} as const;

const sectionDarkBackgroundClasses = {
  'section-1-dark': "bg-[url('/images/backgrounds/section-bg-1-dark.svg')]",
  'page-hero-dark':
    "bg-[url('/images/backgrounds/page-hero-dark-bg.svg')]",
  'section-2-dark': "bg-[url('/images/backgrounds/section-bg-2-dark.svg')]",
  'section-10-dark':
    "bg-[url('/images/backgrounds/section-bg-10-dark.webp')]",
  'section-4-dark': "bg-[url('/images/backgrounds/section-bg-4-dark.svg')]",
  'section-7-dark': "bg-[url('/images/backgrounds/section-bg-7-dark.svg')]",
  'section-6-dark': "bg-[url('/images/backgrounds/section-bg-6-dark.svg')]",
  'section-15-dark': "bg-[url('/images/backgrounds/section-bg-15-dark.svg')]",
  'section-13-dark': "bg-[url('/images/backgrounds/section-bg-13-dark.svg')]",
  'section-12-dark': "bg-[url('/images/backgrounds/section-bg-12-dark.svg')]",
  'section-14-dark': "bg-[url('/images/backgrounds/section-bg-14-dark.webp')]",
  'section-footer-dark':
    "bg-[url('/images/backgrounds/section-bg-footer.webp')]",
  'section-11-dark':
    "bg-[url('/images/backgrounds/section-bg-11-dark.svg')]",
  'section-testimonials-dark':
    "bg-[url('/images/backgrounds/testimonial-bg-dark.svg')]",
  'section-blog-dark':
    "bg-[url('/images/blog/blog-bg-dark-icon.png')]",
  'section-18-dark':
    "bg-[url('/images/backgrounds/section-bg-18-dark.svg')]",
  'section-19-dark':
    "bg-[url('/images/backgrounds/section-bg-19-dark.webp')]",
  'section-20-dark':
    "bg-[url('/images/backgrounds/section-bg-20-dark.webp')]",
  'section-21-dark':
    "bg-[url('/images/backgrounds/section-bg-21-dark.svg')]",
  'section-22-dark':
    "bg-[url('/images/backgrounds/section-bg-22-dark.svg')]",
  'section-23-dark':
    "bg-[url('/images/backgrounds/section-bg-23-dark.webp')]",
  'section-24-dark':
    "bg-[url('/images/backgrounds/section-bg-24-dark.webp')]",
  'section-26-dark':
    "bg-[url('/images/backgrounds/test-bg.webp')]",
  'section-27-dark':
    "bg-[url('/images/backgrounds/section-bg-27-dark.webp')]",
} as const;

/** Fixed attachment keeps SVG/WebP heroes viewport-sized on tall pages (e.g. blog posts). */
const sectionBackgroundLayerClassName =
  'absolute inset-0 bg-cover bg-fixed bg-top bg-no-repeat';

const sectionBackgroundLayerFullClassName =
  'absolute inset-0 bg-fixed bg-[length:100%_100%] bg-top bg-no-repeat';

/** SVG section backgrounds — centered cover without cropping top effects. */
export const sectionBackgroundCoverClassName =
  'bg-cover bg-center bg-no-repeat';

const defaultDarkBackgroundClassName = 'bg-[#190A21]';

export type SectionBgKey = keyof typeof sectionBackgroundClasses;
export type SectionDarkBgKey = keyof typeof sectionDarkBackgroundClasses;

function resolveBackgroundLayerClassName(
  backgroundSize: 'cover' | 'full',
  backgroundClassName?: string,
  forceFull?: boolean,
) {
  if (backgroundClassName) {
    return cn('absolute inset-0', backgroundClassName);
  }

  return backgroundSize === 'full' || forceFull
    ? sectionBackgroundLayerFullClassName
    : sectionBackgroundLayerClassName;
}

function isWebpBackgroundClass(backgroundClass: string) {
  return backgroundClass.includes('.webp');
}

export default function PrimarySection({
  className,
  bg,
  darkBg,
  darkBackgroundColor,
  lightBackgroundImage,
  backgroundClassName,
  backgroundSize = 'cover',
  style,
  children,
  ...props
}: React.ComponentPropsWithoutRef<'section'> & {
  bg?: SectionBgKey;
  darkBg?: SectionDarkBgKey;
  darkBackgroundColor?: string;
  lightBackgroundImage?: string;
  backgroundClassName?: string;
  backgroundSize?: 'cover' | 'full';
}) {
  const lightBackgroundLayerClassName = resolveBackgroundLayerClassName(
    backgroundSize,
    backgroundClassName,
    bg ? isWebpBackgroundClass(sectionBackgroundClasses[bg]) : false,
  );
  const darkBackgroundLayerClassName = resolveBackgroundLayerClassName(
    backgroundSize,
    backgroundClassName,
    darkBg ? isWebpBackgroundClass(sectionDarkBackgroundClasses[darkBg]) : false,
  );

  return (
    <section
      className={cn('relative isolate px-4 ', className)}
      style={style}
      {...props}
    >
      {bg ? (
        <div
          aria-hidden
          className={cn(
            lightBackgroundLayerClassName,
            sectionBackgroundClasses[bg],
            'dark:hidden',
          )}
        />
      ) : lightBackgroundImage ? (
        <div
          aria-hidden
          className={cn(lightBackgroundLayerClassName, 'dark:hidden')}
          style={{ backgroundImage: lightBackgroundImage }}
        />
      ) : null}
      {darkBackgroundColor ? (
        <div
          aria-hidden
          className={cn(darkBackgroundLayerClassName, 'hidden dark:block')}
          style={{ backgroundColor: darkBackgroundColor }}
        />
      ) : null}
      {darkBg ? (
        <div
          aria-hidden
          className={cn(
            darkBackgroundLayerClassName,
            'hidden dark:block',
            sectionDarkBackgroundClasses[darkBg],
          )}
        />
      ) : bg ? (
        <div
          aria-hidden
          className={cn(
            sectionBackgroundLayerClassName,
            'hidden dark:block',
            defaultDarkBackgroundClassName,
          )}
        />
      ) : null}
      <div className="relative z-10">{children}</div>
    </section>
  );
}

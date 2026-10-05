'use client';

import {
  BookOpen,
  Home,
  Mail,
  Users,
  type LucideIcon,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import PrimaryButton from '@/components/buttons/primary-button';
import {
  ServicesNavDropdown,
  ServicesNavMobile,
} from '@/components/layout/services-nav-menu';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { signInUrl, signUpUrl } from '@/lib/auth-urls';
import { isServicesNavActive } from '@/lib/navigation/services-nav';
import { cn } from '@/lib/utils';

const navLinks: {
  label: string;
  href: string;
  icon: LucideIcon;
}[] = [
  { label: 'Home', href: '/', icon: Home },
  { label: 'About Us', href: '/about-us', icon: Users },
  { label: 'Blog', href: '/blog', icon: BookOpen },
  { label: 'Contact Us', href: '/contact-us', icon: Mail },
];

function isNavLinkActive(pathname: string, href: string) {
  if (href.startsWith('#')) return false;

  if (href === '/') return pathname === '/';

  return pathname === href || pathname.startsWith(`${href}/`);
}

function MenuIcon({ open, light = false }: { open: boolean; light?: boolean }) {
  const barColor = light ? 'bg-white' : 'bg-[#343e56] dark:bg-white';

  return (
    <span
      className="flex size-6 flex-col items-center justify-center gap-[5px]"
      aria-hidden
    >
      <span
        className={cn(
          'h-0.5 w-6 rounded-full transition-all duration-300',
          barColor,
          open && 'translate-y-[7px] rotate-45',
        )}
      />
      <span
        className={cn(
          'h-0.5 w-6 rounded-full transition-all duration-300',
          barColor,
          open ? 'scale-x-0 opacity-0' : 'scale-x-100 opacity-100',
        )}
      />
      <span
        className={cn(
          'h-0.5 w-6 rounded-full transition-all duration-300',
          barColor,
          open && '-translate-y-[7px] -rotate-45',
        )}
      />
    </span>
  );
}

export default function SiteHeader({ className }: { className?: string }) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMobileOpen(false);
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [mobileOpen]);

  const closeMobileMenu = () => setMobileOpen(false);
  const showHeaderBg = scrolled || mobileOpen;

  return (
    <header
      className={cn(
        'fixed top-0 right-0 left-0 z-50 w-full overflow-visible transition-all duration-300',
        showHeaderBg
          ? 'border-b border-white/30 bg-white/50 backdrop-blur-xl dark:border-white/10 dark:bg-[#0d0611]/70'
          : 'border-b border-transparent bg-transparent backdrop-blur-none',
        className,
      )}
    >
      <div className="container flex h-[80px] items-center justify-between">
        <Link href="/" className="relative h-14 w-[176px] shrink-0 sm:h-16 sm:w-[200px]">
          <Image
            src="/images/icons/site-logo.png"
            alt="TrendEvo"
            fill
            className="object-contain object-left"
            priority
          />
        </Link>

        <nav className="hidden min-[1100px]:flex items-center gap-8 overflow-visible">
          <Link
            href="/"
            className={cn(
              'text-base font-medium transition-colors',
              isNavLinkActive(pathname, '/')
                ? 'text-gradient font-semibold'
                : 'text-[#343e56] hover:text-[#071431] dark:text-white dark:hover:text-white/90',
            )}
          >
            Home
          </Link>

          <ServicesNavDropdown isActive={isServicesNavActive(pathname)} />

          {navLinks.slice(1).map((link) => {
            const isActive = isNavLinkActive(pathname, link.href);

            return (
              <Link
                key={link.label}
                href={link.href}
                className={cn(
                  'text-base font-medium transition-colors',
                  isActive
                    ? 'text-gradient font-semibold'
                    : 'text-[#343e56] hover:text-[#071431] dark:text-white dark:hover:text-white/90',
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3 min-[1100px]:gap-6">
          <div className="hidden items-center gap-4 min-[1100px]:flex">
            <ThemeToggle />
            <div className="inline-flex h-[44px] shrink-0 rounded-[10px]">
              <Link
                href={signInUrl}
                className="flex h-full items-center justify-center rounded-[9px] bg-transparent px-4 text-base font-semibold text-[#13203b] transition-colors hover:bg-transparent dark:text-white dark:hover:bg-transparent"
              >
                <span>Sign In</span>
              </Link>
            </div>
          </div>

          <PrimaryButton href={signUpUrl} className="hidden min-[1100px]:inline-flex">
            Create account
          </PrimaryButton>

          <button
            type="button"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            onClick={() => setMobileOpen((open) => !open)}
            className={cn(
              'flex size-10 cursor-pointer items-center justify-center rounded-[10px] border transition-all duration-300 min-[1100px]:hidden',
              mobileOpen
                ? 'border-[#d181ff]/50 bg-brand-gradient shadow-[0_4px_16px_rgba(209,129,255,0.35)]'
                : 'border-[#d57ff9]/30 bg-white/60 dark:border-white/15 dark:bg-white/[0.07] dark:backdrop-blur-[10px]',
            )}
          >
            <MenuIcon open={mobileOpen} light={mobileOpen} />
          </button>
        </div>
      </div>

      <button
        type="button"
        aria-label="Close menu"
        tabIndex={mobileOpen ? 0 : -1}
        onClick={closeMobileMenu}
        className={cn(
          'fixed inset-0 top-[80px] z-40 bg-[#071431]/25 backdrop-blur-[2px] transition-opacity duration-300 min-[1100px]:hidden dark:bg-black/50',
          mobileOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0',
        )}
      />

      <div
        id="mobile-nav"
        className={cn(
          'relative z-50 overflow-hidden border-t border-[#f0d8ff]/80 bg-gradient-to-b from-white/95 via-[#fdf6ff]/95 to-[#f8efff]/95 shadow-[0_20px_50px_rgba(143,42,205,0.12)] backdrop-blur-xl transition-[max-height,opacity,transform] duration-300 ease-out min-[1100px]:hidden dark:border-white/10 dark:from-[#1a0f22]/98 dark:via-[#150a1c]/98 dark:to-[#110816]/98 dark:shadow-[0_20px_50px_rgba(0,0,0,0.45)]',
          mobileOpen
            ? 'max-h-[calc(100dvh-80px)] translate-y-0 opacity-100'
            : 'max-h-0 -translate-y-2 opacity-0',
        )}
      >
        <nav className="container flex max-h-[calc(100dvh-80px)] flex-col overflow-y-auto px-1 py-5 sm:px-0 sm:py-6">
          <div className="mb-4 px-2 sm:mb-5">
            <p className="text-gradient text-xs font-semibold uppercase tracking-[0.2em]">
              Navigation
            </p>
          </div>

          <ul className="overflow-hidden rounded-2xl bg-white/75 ring-1 ring-[#f0d8ff] dark:bg-white/[0.06] dark:ring-white/10">
            <li
              className={cn(
                'border-b border-[#f0d8ff]/70 transition-[opacity,transform] duration-300 ease-out dark:border-white/10',
                mobileOpen ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0',
              )}
            >
              <Link
                href="/"
                onClick={closeMobileMenu}
                className={cn(
                  'flex items-center gap-3 px-4 py-3.5 transition-colors duration-200 sm:py-4',
                  isNavLinkActive(pathname, '/')
                    ? 'bg-[#faf2ff]/80 dark:bg-white/[0.08]'
                    : 'hover:bg-[#fdf6ff]/90 dark:hover:bg-white/[0.05]',
                )}
              >
                <Home
                  className={cn(
                    'size-[18px] shrink-0',
                    isNavLinkActive(pathname, '/')
                      ? 'text-[#8f2acd] dark:text-[#cb7ef7]'
                      : 'text-[#8a94a8] dark:text-[#9ca3af]',
                  )}
                  strokeWidth={2}
                />
                <span
                  className={cn(
                    'text-[15px] font-medium sm:text-base',
                    isNavLinkActive(pathname, '/')
                      ? 'text-gradient font-semibold'
                      : 'text-[#13203b] dark:text-[#efedf1]',
                  )}
                >
                  Home
                </span>
              </Link>
            </li>

            <ServicesNavMobile
              pathname={pathname}
              onNavigate={closeMobileMenu}
              mobileOpen={mobileOpen}
              index={1}
            />

            {navLinks.slice(1).map((link, index) => {
              const Icon = link.icon;
              const isActive = isNavLinkActive(pathname, link.href);

              return (
                <li
                  key={link.label}
                  className={cn(
                    'border-b border-[#f0d8ff]/70 last:border-b-0 transition-[opacity,transform] duration-300 ease-out dark:border-white/10',
                    mobileOpen
                      ? 'translate-y-0 opacity-100'
                      : 'translate-y-2 opacity-0',
                  )}
                  style={{ transitionDelay: mobileOpen ? `${(index + 2) * 35}ms` : '0ms' }}
                >
                  <Link
                    href={link.href}
                    onClick={closeMobileMenu}
                    className={cn(
                      'flex items-center gap-3 px-4 py-3.5 transition-colors duration-200 sm:py-4',
                      isActive
                        ? 'bg-[#faf2ff]/80 dark:bg-white/[0.08]'
                        : 'hover:bg-[#fdf6ff]/90 dark:hover:bg-white/[0.05]',
                    )}
                  >
                    <Icon
                      className={cn(
                        'size-[18px] shrink-0',
                        isActive
                          ? 'text-[#8f2acd] dark:text-[#cb7ef7]'
                          : 'text-[#8a94a8] dark:text-[#9ca3af]',
                      )}
                      strokeWidth={2}
                    />
                    <span
                      className={cn(
                        'text-[15px] font-medium sm:text-base',
                        isActive
                          ? 'text-gradient font-semibold'
                          : 'text-[#13203b] dark:text-[#efedf1]',
                      )}
                    >
                      {link.label}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>

          <div
            className={cn(
              'mt-5 rounded-2xl border border-[#f0d8ff] bg-white/80 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] transition-[opacity,transform] duration-300 sm:mt-6 sm:p-5 dark:border-white/10 dark:bg-white/[0.06] dark:shadow-none',
              mobileOpen
                ? 'translate-y-0 opacity-100'
                : 'translate-y-3 opacity-0',
            )}
            style={{ transitionDelay: mobileOpen ? '280ms' : '0ms' }}
          >
            <div className="mb-4 flex items-center justify-between rounded-xl border border-[#f0d8ff] bg-[#fdf6ff]/80 px-3.5 py-3 dark:border-white/10 dark:bg-white/[0.05]">
              <div>
                <p className="text-sm font-semibold text-[#13203b] dark:text-[#efedf1]">
                  Appearance
                </p>
                <p className="text-xs text-[#6b7289] dark:text-[#c1c4cc]">
                  Switch light or dark mode
                </p>
              </div>
              <ThemeToggle />
            </div>

            <div className="flex flex-col gap-2.5">
              <Link
                href={signInUrl}
                onClick={closeMobileMenu}
                className="inline-flex h-11 items-center justify-center rounded-[10px] bg-transparent text-sm font-semibold text-[#13203b] transition hover:bg-transparent sm:text-base dark:text-white dark:hover:bg-transparent"
              >
                Sign In
              </Link>

              <PrimaryButton
                href={signUpUrl}
                onClick={closeMobileMenu}
                className="w-full border-0 shadow-[inset_0_2px_8px_rgba(255,255,255,0.12)]"
              >
                Create account
              </PrimaryButton>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

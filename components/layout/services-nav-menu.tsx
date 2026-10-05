'use client';

import { ChevronDown, ChevronRight, LayoutGrid, Users } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import {
  isServicesNavActive,
  servicesNavGroups,
  type ServicesNavGroup,
} from '@/lib/navigation/services-nav';
import { cn } from '@/lib/utils';

function GroupIcon({ group }: { group: ServicesNavGroup }) {
  if (group.iconSrc) {
    return (
      <Image
        src={group.iconSrc}
        alt=""
        width={20}
        height={20}
        className="size-5 shrink-0 object-contain"
        aria-hidden
      />
    );
  }

  if (group.id === 'all') {
    return (
      <LayoutGrid
        className="size-5 shrink-0 text-[#8a94a8] dark:text-[#9ca3af]"
        strokeWidth={2}
      />
    );
  }

  return (
    <Users className="size-5 shrink-0 text-[#8a94a8] dark:text-[#9ca3af]" strokeWidth={2} />
  );
}

function categoryRowClassName(isActive: boolean) {
  return cn(
    'flex w-full items-center gap-3 px-4 py-2.5 text-left text-sm font-medium transition-colors',
    isActive
      ? 'bg-[#faf2ff]/80 text-[#13203b] dark:bg-white/[0.08] dark:text-[#efedf1]'
      : 'text-[#13203b] hover:bg-[#faf2ff]/80 dark:text-[#efedf1] dark:hover:bg-white/[0.06]',
  );
}

function ServicesCategoryList({
  activeGroupId,
  onActiveGroupChange,
  onNavigate,
  className,
}: {
  activeGroupId: string | null;
  onActiveGroupChange: (id: string | null) => void;
  onNavigate?: () => void;
  className?: string;
}) {
  return (
    <ul className={cn('flex flex-col py-2', className)}>
      {servicesNavGroups.map((group) => {
        const isActive = activeGroupId === group.id;
        const hasChildren = Boolean(group.children?.length);

        if (!hasChildren && group.href) {
          return (
            <li key={group.id}>
              <Link
                href={group.href}
                onMouseEnter={() => onActiveGroupChange(null)}
                onClick={onNavigate}
                className={categoryRowClassName(false)}
              >
                <GroupIcon group={group} />
                <span className="flex-1">{group.label}</span>
              </Link>
            </li>
          );
        }

        if (group.href) {
          return (
            <li key={group.id}>
              <Link
                href={group.href}
                onMouseEnter={() => onActiveGroupChange(group.id)}
                onFocus={() => onActiveGroupChange(group.id)}
                onClick={onNavigate}
                className={categoryRowClassName(isActive)}
              >
                <GroupIcon group={group} />
                <span className="flex-1">{group.label}</span>
                {hasChildren ? (
                  <ChevronRight className="size-4 shrink-0 text-[#8a94a8] dark:text-[#9ca3af]" />
                ) : null}
              </Link>
            </li>
          );
        }

        return (
          <li key={group.id}>
            <button
              type="button"
              onMouseEnter={() => onActiveGroupChange(group.id)}
              onFocus={() => onActiveGroupChange(group.id)}
              onClick={() => onActiveGroupChange(group.id)}
              className={categoryRowClassName(isActive)}
            >
              <GroupIcon group={group} />
              <span className="flex-1">{group.label}</span>
              {hasChildren ? (
                <ChevronRight className="size-4 shrink-0 text-[#8a94a8] dark:text-[#9ca3af]" />
              ) : null}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

function ServicesSubmenu({
  groupId,
  onNavigate,
  className,
}: {
  groupId: string | null;
  onNavigate?: () => void;
  className?: string;
}) {
  const group = servicesNavGroups.find((item) => item.id === groupId);
  const children = group?.children ?? [];

  if (!children.length) return null;

  return (
    <ul className={cn('flex flex-col gap-1 p-3', className)}>
      {children.map((item) => (
        <li key={item.href}>
          <Link
            href={item.href}
            onClick={onNavigate}
            className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium text-[#343e56] transition-colors hover:bg-[#faf2ff]/80 dark:text-[#ebecef] dark:hover:bg-white/[0.06]"
          >
            <span className="size-1.5 shrink-0 rounded-full bg-[#8f2acd] dark:bg-[#cb7ef7]" />
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function ServicesNavDropdown({
  isActive,
}: {
  isActive: boolean;
}) {
  const [open, setOpen] = useState(false);
  const [activeGroupId, setActiveGroupId] = useState<string | null>('instagram');
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: MouseEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('mousedown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  return (
    <div
      ref={containerRef}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen(true)}
        className="group inline-flex items-center gap-1 text-base font-medium transition-colors"
      >
        <span
          className={cn(
            isActive
              ? 'text-gradient font-semibold'
              : 'text-[#343e56] group-hover:text-[#071431] dark:text-white dark:group-hover:text-white/90',
          )}
        >
          Services
        </span>
        <ChevronDown
          className={cn(
            'size-4 shrink-0 transition-transform',
            open && 'rotate-180',
            isActive
              ? 'text-[#ad26ff] dark:text-[#cb7ef7]'
              : 'text-[#343e56] group-hover:text-[#071431] dark:text-white dark:group-hover:text-white/90',
          )}
          strokeWidth={2}
        />
      </button>

      {open ? (
        <div className="absolute top-full left-0 z-[100] pt-3">
          <div className="flex overflow-hidden rounded-xl border border-[#f0d8ff]/80 bg-white shadow-[0_16px_40px_rgba(143,42,205,0.12)] dark:border-white/10 dark:bg-[#1a0f22] dark:shadow-[0_16px_40px_rgba(0,0,0,0.45)]">
            <ServicesCategoryList
              activeGroupId={activeGroupId}
              onActiveGroupChange={setActiveGroupId}
              onNavigate={() => setOpen(false)}
              className="w-[260px] border-r border-[#f0d8ff]/70 dark:border-white/10"
            />
            <ServicesSubmenu
              groupId={activeGroupId}
              onNavigate={() => setOpen(false)}
              className="w-[300px]"
            />
          </div>
        </div>
      ) : null}
    </div>
  );
}

export function ServicesNavMobile({
  pathname,
  onNavigate,
  mobileOpen,
  index,
}: {
  pathname: string;
  onNavigate: () => void;
  mobileOpen: boolean;
  index: number;
}) {
  const [expanded, setExpanded] = useState(false);
  const [activeGroupId, setActiveGroupId] = useState<string | null>('instagram');
  const isActive = isServicesNavActive(pathname);

  return (
    <li
      className={cn(
        'border-b border-[#f0d8ff]/70 last:border-b-0 transition-[opacity,transform] duration-300 ease-out dark:border-white/10',
        mobileOpen ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0',
      )}
      style={{ transitionDelay: mobileOpen ? `${index * 35}ms` : '0ms' }}
    >
      <button
        type="button"
        onClick={() => setExpanded((value) => !value)}
        className={cn(
          'flex w-full items-center gap-3 px-4 py-3.5 transition-colors duration-200 sm:py-4',
          isActive
            ? 'bg-[#faf2ff]/80 dark:bg-white/[0.08]'
            : 'hover:bg-[#fdf6ff]/90 dark:hover:bg-white/[0.05]',
        )}
      >
        <LayoutGrid
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
            'flex-1 text-left text-[15px] font-medium sm:text-base',
            isActive
              ? 'text-gradient font-semibold'
              : 'text-[#13203b] dark:text-[#efedf1]',
          )}
        >
          Services
        </span>
        <ChevronDown
          className={cn(
            'size-4 shrink-0 text-[#8a94a8] transition-transform dark:text-[#9ca3af]',
            expanded && 'rotate-180',
          )}
        />
      </button>

      {expanded ? (
        <div className="border-t border-[#f0d8ff]/70 bg-[#fdf6ff]/40 px-2 py-3 dark:border-white/10 dark:bg-white/[0.03]">
          <ServicesCategoryList
            activeGroupId={activeGroupId}
            onActiveGroupChange={setActiveGroupId}
            onNavigate={onNavigate}
            className="rounded-lg bg-white/80 ring-1 ring-[#f0d8ff]/80 dark:bg-white/[0.04] dark:ring-white/10"
          />
          <div className="mt-2 rounded-lg bg-white/80 ring-1 ring-[#f0d8ff]/80 dark:bg-white/[0.04] dark:ring-white/10">
            <ServicesSubmenu groupId={activeGroupId} onNavigate={onNavigate} />
          </div>
        </div>
      ) : null}
    </li>
  );
}

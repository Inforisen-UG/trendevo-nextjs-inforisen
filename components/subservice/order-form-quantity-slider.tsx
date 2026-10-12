'use client';

import Image from 'next/image';
import { useCallback, useRef, type KeyboardEvent, type PointerEvent } from 'react';

const MIN_QUANTITY = 100;
const MAX_QUANTITY = 10000;
const QUANTITY_STEP = 100;

const SLIDER_THUMB_SRC =
  '/images/subservice/shared/order-form-quantity-slider-thumb-decoration.svg';
const SLIDER_TOOLTIP_SRC =
  '/images/subservice/shared/order-form-quantity-slider-tooltip-decoration.svg';
const SLIDER_RAIL_HEIGHT = 38;
const SLIDER_TRACK_Y = 25;
const SLIDER_THUMB_WIDTH = 47;
const SLIDER_THUMB_HEIGHT = 38;
const SLIDER_THUMB_CENTER_Y = (18.3812 / 36.7624) * SLIDER_THUMB_HEIGHT;
const SLIDER_THUMB_TOP = SLIDER_TRACK_Y - SLIDER_THUMB_CENTER_Y;
const SLIDER_TOOLTIP_WIDTH = 37;
const SLIDER_TOOLTIP_HEIGHT = 36;
const SLIDER_THUMB_INSET = SLIDER_THUMB_WIDTH / 2;
const SLIDER_TOP_PADDING = SLIDER_THUMB_TOP + SLIDER_TOOLTIP_HEIGHT - 2;
const SLIDER_INTERACTIVE_HEIGHT = SLIDER_TOP_PADDING + SLIDER_RAIL_HEIGHT;

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function snapToStep(value: number) {
  const stepped =
    MIN_QUANTITY +
    Math.round((value - MIN_QUANTITY) / QUANTITY_STEP) * QUANTITY_STEP;
  return clamp(stepped, MIN_QUANTITY, MAX_QUANTITY);
}

function valueFromClientX(clientX: number, rect: DOMRect) {
  const trackWidth = rect.width - SLIDER_THUMB_INSET * 2;
  const offsetX = clientX - rect.left - SLIDER_THUMB_INSET;
  const ratio = clamp(offsetX / trackWidth, 0, 1);
  const raw = MIN_QUANTITY + ratio * (MAX_QUANTITY - MIN_QUANTITY);
  return snapToStep(raw);
}

export function OrderFormQuantitySlider({
  value,
  onChange,
  ariaLabel,
}: {
  value: number;
  onChange: (value: number) => void;
  ariaLabel: string;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);

  const percent =
    ((value - MIN_QUANTITY) / (MAX_QUANTITY - MIN_QUANTITY)) * 100;

  const updateFromClientX = useCallback(
    (clientX: number) => {
      const track = trackRef.current;
      if (!track) return;
      onChange(valueFromClientX(clientX, track.getBoundingClientRect()));
    },
    [onChange],
  );

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (event.button !== 0) return;

    isDraggingRef.current = true;
    event.currentTarget.setPointerCapture(event.pointerId);
    updateFromClientX(event.clientX);
  };

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) return;
    updateFromClientX(event.clientX);
  };

  const endDrag = (event: PointerEvent<HTMLDivElement>) => {
    isDraggingRef.current = false;
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'ArrowRight' || event.key === 'ArrowUp') {
      event.preventDefault();
      onChange(clamp(value + QUANTITY_STEP, MIN_QUANTITY, MAX_QUANTITY));
    } else if (event.key === 'ArrowLeft' || event.key === 'ArrowDown') {
      event.preventDefault();
      onChange(clamp(value - QUANTITY_STEP, MIN_QUANTITY, MAX_QUANTITY));
    } else if (event.key === 'Home') {
      event.preventDefault();
      onChange(MIN_QUANTITY);
    } else if (event.key === 'End') {
      event.preventDefault();
      onChange(MAX_QUANTITY);
    }
  };

  return (
    <div className="flex w-full min-w-0 flex-col gap-3">
      <div className="flex w-full items-center justify-between text-base font-medium text-[#1a1a1a] dark:text-[#f5f6f7]">
        <span>Quantity</span>
        <span>Quantity: {value}</span>
      </div>

      <div
        ref={trackRef}
        role="slider"
        tabIndex={0}
        aria-label={ariaLabel}
        aria-valuemin={MIN_QUANTITY}
        aria-valuemax={MAX_QUANTITY}
        aria-valuenow={value}
        aria-valuetext={String(value)}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onLostPointerCapture={endDrag}
        onKeyDown={handleKeyDown}
        className="relative w-full touch-none cursor-grab overflow-visible outline-none select-none active:cursor-grabbing focus-visible:ring-2 focus-visible:ring-[#cb7ef7]/60 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-[#1a0f22]"
        style={{
          paddingTop: SLIDER_TOP_PADDING,
          minHeight: SLIDER_INTERACTIVE_HEIGHT,
        }}
      >
        <div
          className="pointer-events-none relative w-full select-none"
          style={{
            height: SLIDER_RAIL_HEIGHT,
            marginLeft: SLIDER_THUMB_INSET,
            marginRight: SLIDER_THUMB_INSET,
          }}
        >
          <div
            className="absolute inset-x-0 z-1 h-1 -translate-y-1/2 rounded-full bg-[#f1daff] dark:bg-white/10"
            style={{ top: SLIDER_TRACK_Y }}
          >
            <div
              className="bg-brand-gradient absolute inset-y-0 left-0 rounded-full"
              style={{ width: `${percent}%` }}
            />
          </div>

          <div
            className="absolute z-2"
            style={{
              left: `${percent}%`,
              top: SLIDER_THUMB_TOP,
              width: SLIDER_THUMB_WIDTH,
              transform: 'translateX(-50%)',
            }}
          >
            <Image
              src={SLIDER_THUMB_SRC}
              alt=""
              width={SLIDER_THUMB_WIDTH}
              height={SLIDER_THUMB_HEIGHT}
              aria-hidden
              unoptimized
              draggable={false}
              className="block h-[38px] w-[47px] select-none"
            />

            <div
              className="absolute left-1/2 bottom-full -mb-0.5 -translate-x-1/2 -translate-y-[3px]"
              style={{
                width: SLIDER_TOOLTIP_WIDTH,
                height: SLIDER_TOOLTIP_HEIGHT,
              }}
            >
              <Image
                src={SLIDER_TOOLTIP_SRC}
                alt=""
                width={SLIDER_TOOLTIP_WIDTH}
                height={SLIDER_TOOLTIP_HEIGHT}
                aria-hidden
                unoptimized
                draggable={false}
                className="block h-full w-full select-none"
              />
              <span className="absolute inset-x-0 top-[7px] text-center text-xs font-medium leading-none text-white">
                {value}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

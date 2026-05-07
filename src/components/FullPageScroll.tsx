"use client";

import { useEffect } from "react";

const SECTIONS = ["hero", "about", "areas", "board", "contact"];

// Captures wheel / touch / keyboard input and routes every gesture into
// a single-section move via scrollIntoView, so swiping or scrolling
// behaves exactly like clicking the next nav button. Replaces CSS
// scroll-snap, which is removed when this component is mounted.
export function FullPageScroll() {
  useEffect(() => {
    let currentIdx = 0;
    let locked = false;

    const findCurrent = () => {
      const center = window.scrollY + window.innerHeight / 2;
      let closest = 0;
      let dist = Infinity;
      SECTIONS.forEach((id, idx) => {
        const el = document.getElementById(id);
        if (!el) return;
        const top = el.getBoundingClientRect().top + window.scrollY;
        const sectionCenter = top + el.offsetHeight / 2;
        const d = Math.abs(sectionCenter - center);
        if (d < dist) {
          dist = d;
          closest = idx;
        }
      });
      return closest;
    };

    currentIdx = findCurrent();

    const goTo = (idx: number) => {
      if (locked) return;
      const target = Math.max(0, Math.min(SECTIONS.length - 1, idx));
      if (target === currentIdx) return;
      const el = document.getElementById(SECTIONS[target]);
      if (!el) return;

      locked = true;
      currentIdx = target;
      el.scrollIntoView({ behavior: "smooth", block: "start" });

      const release = () => {
        locked = false;
        currentIdx = findCurrent();
      };
      if ("onscrollend" in window) {
        window.addEventListener("scrollend", release, { once: true });
      }
      window.setTimeout(release, 1200);
    };

    // Wheel input — throttle so a single trackpad swipe doesn't chain past
    // the intended section.
    let wheelLast = 0;
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (locked) return;
      const now = Date.now();
      if (now - wheelLast < 80) return;
      wheelLast = now;
      if (Math.abs(e.deltaY) < 5) return;
      goTo(currentIdx + (e.deltaY > 0 ? 1 : -1));
    };

    // Touch — trigger on either total distance (deliberate swipe) or
    // velocity (fast flick).
    let touchY = 0;
    let touchT = 0;
    const onTouchStart = (e: TouchEvent) => {
      touchY = e.touches[0].clientY;
      touchT = Date.now();
    };
    const onTouchMove = (e: TouchEvent) => {
      e.preventDefault();
    };
    const onTouchEnd = (e: TouchEvent) => {
      if (locked) return;
      const dy = touchY - e.changedTouches[0].clientY;
      const dt = Math.max(1, Date.now() - touchT);
      const speed = Math.abs(dy) / dt;
      if (Math.abs(dy) > 30 || speed > 0.3) {
        goTo(currentIdx + (dy > 0 ? 1 : -1));
      }
    };

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "PageDown") {
        e.preventDefault();
        goTo(currentIdx + 1);
      } else if (e.key === "ArrowUp" || e.key === "PageUp") {
        e.preventDefault();
        goTo(currentIdx - 1);
      } else if (e.key === "Home") {
        e.preventDefault();
        goTo(0);
      } else if (e.key === "End") {
        e.preventDefault();
        goTo(SECTIONS.length - 1);
      }
    };

    // Keep currentIdx synced after any scroll (e.g., NavButtons clicks).
    const onAnyScrollEnd = () => {
      if (!locked) currentIdx = findCurrent();
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: false });
    window.addEventListener("touchend", onTouchEnd, { passive: true });
    window.addEventListener("keydown", onKey);
    if ("onscrollend" in window) {
      window.addEventListener("scrollend", onAnyScrollEnd);
    }

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("keydown", onKey);
      if ("onscrollend" in window) {
        window.removeEventListener("scrollend", onAnyScrollEnd);
      }
    };
  }, []);

  return null;
}

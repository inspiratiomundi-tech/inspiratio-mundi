"use client";

const sections = [
  { id: "about", label: "O Fundacji" },
  { id: "areas", label: "Obszary" },
  { id: "board", label: "Zarząd" },
  { id: "contact", label: "Kontakt" },
];

// iOS Safari with `scroll-snap-type: y mandatory` interrupts smooth
// scrollIntoView mid-animation — the snap engine pulls the page back
// toward the nearest snap point and you land at the wrong section.
// Workaround: disable snap before the scroll, re-enable only once the
// scroll has actually stopped (polling scrollY for stability).
function smoothScrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;

  const html = document.documentElement;
  const originalSnap = html.style.scrollSnapType;
  html.style.scrollSnapType = "none";

  el.scrollIntoView({ behavior: "smooth", block: "start" });

  let lastY = window.scrollY;
  let stable = 0;
  const tick = () => {
    if (Math.abs(window.scrollY - lastY) < 0.5) {
      stable += 1;
      if (stable > 6) {
        html.style.scrollSnapType = originalSnap;
        return;
      }
    } else {
      stable = 0;
    }
    lastY = window.scrollY;
    requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

export function NavButtons() {
  const scrollTo = (id: string) => smoothScrollToId(id);

  return (
    <nav
      aria-label="Sekcje strony"
      className="fixed z-30 top-2 left-3 flex flex-row items-center gap-1 md:top-1/2 md:left-auto md:right-6 lg:right-10 md:-translate-y-1/2 md:flex-col md:items-end md:gap-1"
    >
      {sections.map((s) => (
        <button
          key={s.id}
          type="button"
          className="nav-link"
          onClick={() => scrollTo(s.id)}
        >
          {s.label}
        </button>
      ))}
    </nav>
  );
}

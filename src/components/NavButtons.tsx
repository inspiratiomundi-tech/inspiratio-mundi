"use client";

const sections = [
  { id: "about", label: "O Fundacji" },
  { id: "areas", label: "Obszary" },
  { id: "board", label: "Zarząd" },
  { id: "contact", label: "Kontakt" },
];

// iOS Safari with `scroll-snap-type: y mandatory` interrupts smooth
// scrollIntoView mid-animation, landing the page on the wrong section.
// Workaround: disable snap for the duration of the programmatic scroll,
// then restore it once the scroll ends (scrollend event when supported,
// always within 1.5s as a safety net so snap can never get stuck off).
function smoothScrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;

  const html = document.documentElement;
  const originalSnap = html.style.scrollSnapType;
  html.style.scrollSnapType = "none";

  let restored = false;
  const restore = () => {
    if (restored) return;
    restored = true;
    html.style.scrollSnapType = originalSnap;
  };

  if ("onscrollend" in window) {
    window.addEventListener("scrollend", restore, { once: true });
  }
  window.setTimeout(restore, 1500);

  el.scrollIntoView({ behavior: "smooth", block: "start" });
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

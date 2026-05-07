"use client";

const sections = [
  { id: "about", label: "O Fundacji" },
  { id: "areas", label: "Obszary" },
  { id: "board", label: "Zarząd" },
  { id: "contact", label: "Kontakt" },
];

export function NavButtons() {
  const scrollTo = (id: string) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

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

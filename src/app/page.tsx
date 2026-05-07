"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { dict, type Lang } from "@/i18n/dictionaries";

export default function Home() {
  const [lang, setLang] = useState<Lang>("pl");

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = dict[lang].title;
  }, [lang]);

  // Strip any stale URL hash so reloads don't keep yanking us to /#contact etc.
  useEffect(() => {
    if (window.location.hash) {
      history.replaceState(null, "", window.location.pathname);
    }
  }, []);

  const t = dict[lang];


  return (
    <>
      {/* Mobile top bar — section nav (left) + language (right) cannot overlap via justify-between */}
      <div className="md:hidden fixed top-0 inset-x-0 z-30 flex items-center justify-between gap-2 px-3 py-2">
        <nav
          aria-label={lang === "pl" ? "Sekcje strony" : "Page sections"}
          className="nav-horizontal flex items-center min-w-0 flex-wrap"
        >
          {t.nav
            .filter((item) => item.id !== "hero")
            .map((item) => (
              <button
                key={item.id}
                type="button"
                className="nav-link"
                onClick={() =>
                  document
                    .getElementById(item.id)
                    ?.scrollIntoView({ behavior: "smooth", block: "start" })
                }
              >
                {item.label}
              </button>
            ))}
        </nav>
        <nav
          aria-label="Language"
          className="flex items-center flex-shrink-0 pl-2"
        >
          <button
            type="button"
            className="lang-btn"
            aria-pressed={lang === "pl"}
            aria-label="Polski"
            onClick={() => setLang("pl")}
          >
            PL
          </button>
          <span className="lang-divider px-1" aria-hidden="true">
            /
          </span>
          <button
            type="button"
            className="lang-btn"
            aria-pressed={lang === "en"}
            aria-label="English"
            onClick={() => setLang("en")}
          >
            EN
          </button>
        </nav>
      </div>

      {/* Desktop language toggle (top-right) */}
      <header className="hidden md:block fixed top-0 right-0 z-30 px-8 py-6">
        <nav aria-label="Language" className="flex items-center">
          <button
            type="button"
            className="lang-btn"
            aria-pressed={lang === "pl"}
            aria-label="Polski"
            onClick={() => setLang("pl")}
          >
            PL
          </button>
          <span className="lang-divider px-1" aria-hidden="true">
            /
          </span>
          <button
            type="button"
            className="lang-btn"
            aria-pressed={lang === "en"}
            aria-label="English"
            onClick={() => setLang("en")}
          >
            EN
          </button>
        </nav>
      </header>

      {/* Desktop vertical nav (right side, mid-page) */}
      <nav
        aria-label={lang === "pl" ? "Sekcje strony" : "Page sections"}
        className="nav-vertical hidden md:flex fixed right-6 lg:right-10 top-1/2 -translate-y-1/2 z-30 flex-col items-end gap-1"
      >
        {t.nav.map((item) => (
          <button
            key={item.id}
            type="button"
            className="nav-link"
            onClick={() =>
              document
                .getElementById(item.id)
                ?.scrollIntoView({ behavior: "smooth", block: "start" })
            }
          >
            {item.label}
          </button>
        ))}
      </nav>

      <main>
        {/* HERO */}
        <section
          id="hero"
          className="snap-section items-center justify-center px-5 sm:px-8 text-center"
        >
          <div className="mx-auto w-full max-w-[68rem] flex flex-col items-center justify-center flex-1 py-8 sm:py-12">
            <div
              className="relative mx-auto"
              style={{
                width: "min(48vh, 78vw, 440px)",
                height: "min(48vh, 78vw, 440px)",
              }}
            >
              <Image
                src="/emblem.png"
                alt="Emblem of Fundacja Inspiratio Mundi"
                fill
                sizes="(max-width: 640px) 78vw, min(48vh, 440px)"
                priority
                className="object-contain"
              />
            </div>

            <h1 className="wordmark mt-2 sm:mt-3 text-[var(--text)]">
              Inspiratio&nbsp;Mundi
            </h1>

            <p
              className="mt-4 sm:mt-5 mx-auto max-w-2xl font-display italic text-[var(--text-soft)]"
              style={{
                fontSize: "clamp(1.05rem, 0.85rem + 0.9vw, 1.4rem)",
                lineHeight: 1.55,
              }}
            >
              {t.heroTagline}
            </p>

            <div className="mt-6 sm:mt-7 flex items-center justify-center gap-4 text-[var(--text-soft)]">
              <span
                className="block h-px w-10"
                style={{ background: "var(--accent)" }}
              />
              <span
                className="eyebrow"
                style={{ letterSpacing: "0.32em" }}
              >
                {t.estMark}
              </span>
              <span
                className="block h-px w-10"
                style={{ background: "var(--accent)" }}
              />
            </div>
          </div>
        </section>

        {/* ABOUT — alt bg, justified prose */}
        <section
          id="about"
          className="snap-section snap-section--alt justify-center px-5 sm:px-8"
        >
          <div className="mx-auto w-full max-w-[68rem] py-16 sm:py-20 flex flex-col flex-1 justify-center">
            <div className="grid gap-8 sm:gap-12 md:grid-cols-12">
              <div className="md:col-span-4">
                <span className="section-label">{t.sectionPrefix} I</span>
                <h2 className="h-section mt-5">{t.about.heading}</h2>
              </div>
              <div className="md:col-span-8">
                <div className="space-y-6 justify-prose">
                  <p className="dropcap">{t.about.p1}</p>
                  <p>{t.about.p2}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AREAS — cream bg, redesigned cards */}
        <section
          id="areas"
          className="snap-section justify-center px-5 sm:px-8"
        >
          <div className="mx-auto w-full max-w-[68rem] py-16 sm:py-20 flex flex-col flex-1 justify-center">
            <div className="grid gap-6 md:grid-cols-12 mb-10 sm:mb-14">
              <div className="md:col-span-4">
                <span className="section-label">{t.sectionPrefix} II</span>
                <h2 className="h-section mt-5">{t.areas.heading}</h2>
              </div>
              <div className="md:col-span-8 flex items-end">
                <p className="text-[var(--text-soft)] max-w-prose">
                  {t.areas.lead}
                </p>
              </div>
            </div>

            <ol className="grid grid-cols-2 lg:grid-cols-3 gap-x-6 sm:gap-x-10 gap-y-8 sm:gap-y-12">
              {t.areas.items.map((item, idx) => (
                <li key={idx} className="area-card">
                  <span className="area-num">{romanLower(idx + 1)}.</span>
                  <h3 className="h-card mt-2">{item.title}</h3>
                  <p className="mt-2 text-[0.85rem] sm:text-[0.92rem] leading-relaxed text-[var(--text-soft)]">
                    {item.body}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* BOARD — alt bg, centered */}
        <section
          id="board"
          className="snap-section snap-section--alt items-center justify-center text-center px-5 sm:px-8"
        >
          <div className="w-full py-16 sm:py-20 flex flex-col items-center justify-center flex-1">
            <span className="section-label">{t.sectionPrefix} III</span>
            <h2 className="h-section mt-5 mb-10 sm:mb-14">
              {t.board.heading}
            </h2>
            <ul className="space-y-7 sm:space-y-9">
              {t.board.members.map((m, i) => (
                <li key={i}>
                  <p
                    className="font-display"
                    style={{
                      fontSize: "clamp(1.3rem, 1rem + 1vw, 1.75rem)",
                      lineHeight: 1.2,
                      letterSpacing: "0.005em",
                    }}
                  >
                    {m.name}
                  </p>
                  <p
                    className="mt-1 eyebrow"
                    style={{ letterSpacing: "0.18em" }}
                  >
                    {m.role}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CONTACT — cream bg, centered, footer attached */}
        <section
          id="contact"
          className="snap-section items-center text-center px-5 sm:px-8"
        >
          <div className="w-full flex-1 flex flex-col items-center justify-center py-16 sm:py-20">
            <span className="section-label">{t.sectionPrefix} IV</span>
            <h2 className="h-section mt-5 mb-10 sm:mb-12">
              {t.contact.heading}
            </h2>

            <address
              className="not-italic font-display"
              style={{
                fontSize: "clamp(1.05rem, 0.95rem + 0.5vw, 1.3rem)",
                lineHeight: 1.6,
              }}
            >
              Fundacja Inspiratio Mundi
              <br />
              ul. Marsz. J. Piłsudskiego 74/320
              <br />
              50-020 Wrocław, {t.contact.country}
            </address>

            <p className="mt-8">
              <a
                className="ulink font-display"
                style={{ fontSize: "clamp(1.05rem, 0.9rem + 0.5vw, 1.2rem)" }}
                href="mailto:inspiratiomundi@gmail.com"
              >
                inspiratiomundi@gmail.com
              </a>
            </p>
          </div>

          <footer className="w-full border-t border-[var(--rule)]">
            <div className="mx-auto w-full max-w-[68rem] px-5 sm:px-8 py-8 sm:py-10">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center justify-center sm:justify-start gap-3">
                  <span
                    className="relative inline-block"
                    style={{ width: 40, height: 40 }}
                    aria-hidden="true"
                  >
                    <Image
                      src="/emblem.png"
                      alt=""
                      fill
                      sizes="40px"
                      className="object-contain"
                    />
                  </span>
                  <span
                    className="font-display"
                    style={{
                      textTransform: "uppercase",
                      letterSpacing: "0.18em",
                      fontSize: "0.85rem",
                    }}
                  >
                    Fundacja Inspiratio Mundi
                  </span>
                </div>

                <div
                  className="text-[var(--text-soft)] text-[0.74rem] sm:text-right space-y-1.5"
                  style={{ letterSpacing: "0.04em" }}
                >
                  <p style={{ fontVariantNumeric: "tabular-nums" }}>
                    KRS&nbsp;0001104520 · NIP&nbsp;8971937475 · REGON&nbsp;528588266
                  </p>
                  <p>{t.footer.supervisor}</p>
                  <p>{t.footer.copyright}</p>
                </div>
              </div>
            </div>
          </footer>
        </section>
      </main>
    </>
  );
}

function romanLower(n: number): string {
  const map = ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x"];
  return map[n - 1] ?? String(n);
}

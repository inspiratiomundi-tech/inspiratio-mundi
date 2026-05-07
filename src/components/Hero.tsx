import Image from "next/image";

export function Hero() {
  return (
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

        <h1 className="wordmark mt-2 sm:mt-3">Inspiratio&nbsp;Mundi</h1>

        <p className="mt-4 sm:mt-5 mx-auto max-w-2xl font-display italic text-[var(--color-ink-soft)] text-[clamp(1.05rem,0.85rem+0.9vw,1.4rem)] leading-snug">
          Fundacja na rzecz nauki, oświaty, kultury, ochrony środowiska i
          inicjatyw społecznych.
        </p>

        <div className="mt-6 sm:mt-7 flex items-center justify-center gap-4 text-[var(--color-ink-soft)]">
          <span className="block h-px w-10 bg-[var(--color-accent)]" />
          <span className="eyebrow tracking-[0.32em]">Est. MMXXIV</span>
          <span className="block h-px w-10 bg-[var(--color-accent)]" />
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";

export function Footer() {
  return (
    <footer className="w-full border-t border-[var(--color-rule)]">
      <div className="mx-auto w-full max-w-[68rem] px-5 sm:px-8 py-8 sm:py-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center justify-center sm:justify-start gap-3">
            <span className="relative inline-block w-10 h-10" aria-hidden="true">
              <Image
                src="/emblem.png"
                alt=""
                fill
                sizes="40px"
                className="object-contain"
              />
            </span>
            <span className="font-display uppercase tracking-[0.18em] text-[0.85rem]">
              Fundacja Inspiratio Mundi
            </span>
          </div>

          <div className="text-[var(--color-ink-soft)] text-[0.74rem] sm:text-right space-y-1.5 tracking-[0.04em]">
            <p className="tabular-nums">
              KRS&nbsp;0001104520 · NIP&nbsp;8971937475 · REGON&nbsp;528588266
            </p>
            <p>Organ nadzoru: Minister Kultury i Dziedzictwa Narodowego</p>
            <p>© 2026 Fundacja Inspiratio Mundi</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

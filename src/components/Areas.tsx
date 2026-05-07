const areas = [
  {
    title: "Nauka",
    body: "Wspieranie poznania, badań i wymiany myśli.",
  },
  {
    title: "Nauka i technika",
    body: "Sprzyjanie rozwojowi technologicznemu i jego społecznym zastosowaniom.",
  },
  {
    title: "Oświata",
    body: "Inwestycja w edukację jako fundament wspólnego dobra.",
  },
  {
    title: "Kultura",
    body: "Pielęgnowanie tradycji, sztuki i dziedzictwa.",
  },
  {
    title: "Ochrona środowiska",
    body: "Troska o świat, który zostawimy po sobie.",
  },
  {
    title: "Inicjatywy społeczne",
    body: "Wsparcie dla działań budujących wspólnotę.",
  },
];

const numerals = ["i", "ii", "iii", "iv", "v", "vi"];

export function Areas() {
  return (
    <section id="areas" className="snap-section justify-center px-5 sm:px-8">
      <div className="mx-auto w-full max-w-[68rem] py-16 sm:py-20 flex flex-col flex-1 justify-center">
        <div className="grid gap-6 md:grid-cols-12 mb-10 sm:mb-14">
          <div className="md:col-span-4">
            <span className="section-label">Sekcja II</span>
            <h2 className="font-display h-section mt-5">Obszary działania</h2>
          </div>
          <div className="md:col-span-8 flex items-end">
            <p className="text-[var(--color-ink-soft)] max-w-prose">
              Sześć obszarów, w których Fundacja zamierza prowadzić swoją pracę.
              Konkretne programy będą rozwijane stopniowo.
            </p>
          </div>
        </div>

        <ol className="grid grid-cols-2 lg:grid-cols-3 gap-x-6 sm:gap-x-10 gap-y-8 sm:gap-y-12">
          {areas.map((item, idx) => (
            <li key={item.title} className="area-card">
              <span className="area-num">{numerals[idx]}.</span>
              <h3 className="font-display h-card mt-2">{item.title}</h3>
              <p className="mt-2 text-[0.85rem] sm:text-[0.92rem] leading-relaxed text-[var(--color-ink-soft)]">
                {item.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

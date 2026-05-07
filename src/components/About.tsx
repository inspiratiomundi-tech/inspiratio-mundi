export function About() {
  return (
    <section
      id="about"
      className="snap-section snap-section--alt justify-center px-5 sm:px-8"
    >
      <div className="mx-auto w-full max-w-[68rem] py-16 sm:py-20 flex flex-col flex-1 justify-center">
        <div className="grid gap-8 sm:gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <span className="section-label">Sekcja I</span>
            <h2 className="font-display h-section mt-5">O Fundacji</h2>
          </div>
          <div className="md:col-span-8 space-y-6 justify-prose">
            <p className="dropcap">
              Fundacja Inspiratio Mundi powstała w 2024 roku we Wrocławiu.
              Działamy w obszarach nauki, oświaty, kultury, ochrony środowiska i
              inicjatyw społecznych — z przekonaniem, że trwała zmiana wymaga
              cierpliwości, namysłu i wytrwałej pracy.
            </p>
            <p>
              Jesteśmy na etapie kształtowania pierwszych programów. O
              konkretnych inicjatywach, partnerach i wynikach naszej pracy
              będziemy informować w miarę dojrzewania kolejnych przedsięwzięć.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

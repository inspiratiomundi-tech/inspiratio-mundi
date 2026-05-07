const members = [
  { name: "Zbigniew Paweł Koprowski", role: "Prezes Zarządu" },
  { name: "Maciej Wisiorowski", role: "Członek Zarządu" },
  { name: "Sławomir Tokarski", role: "Członek Zarządu" },
  { name: "Andrii Khaliavkin", role: "Członek Zarządu" },
];

export function Board() {
  return (
    <section
      id="board"
      className="snap-section snap-section--alt items-center justify-center text-center px-5 sm:px-8"
    >
      <div className="w-full py-16 sm:py-20 flex flex-col items-center justify-center flex-1">
        <span className="section-label">Sekcja III</span>
        <h2 className="font-display h-section mt-5 mb-10 sm:mb-14">Zarząd</h2>
        <ul className="space-y-7 sm:space-y-9">
          {members.map((m) => (
            <li key={m.name}>
              <p className="font-display text-[clamp(1.3rem,1rem+1vw,1.75rem)] leading-tight tracking-[0.005em]">
                {m.name}
              </p>
              <p className="mt-1 eyebrow tracking-[0.18em]">{m.role}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

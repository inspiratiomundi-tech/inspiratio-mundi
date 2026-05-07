import { Footer } from "./Footer";

export function Contact() {
  return (
    <section
      id="contact"
      className="snap-section items-center text-center px-5 sm:px-8"
    >
      <div className="w-full flex-1 flex flex-col items-center justify-center py-16 sm:py-20">
        <span className="section-label">Sekcja IV</span>
        <h2 className="font-display h-section mt-5 mb-10 sm:mb-12">Kontakt</h2>

        <address className="not-italic font-display text-[clamp(1.05rem,0.95rem+0.5vw,1.3rem)] leading-relaxed">
          Fundacja Inspiratio Mundi
          <br />
          ul. Marsz. J. Piłsudskiego 74/320
          <br />
          50-020 Wrocław, Polska
        </address>

        <p className="mt-8">
          <a
            className="ulink font-display text-[clamp(1.05rem,0.9rem+0.5vw,1.2rem)]"
            href="mailto:inspiratiomundi@gmail.com"
          >
            inspiratiomundi@gmail.com
          </a>
        </p>
      </div>

      <Footer />
    </section>
  );
}

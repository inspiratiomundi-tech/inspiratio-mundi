import { About } from "@/components/About";
import { Areas } from "@/components/Areas";
import { Board } from "@/components/Board";
import { Contact } from "@/components/Contact";
import { FullPageScroll } from "@/components/FullPageScroll";
import { Hero } from "@/components/Hero";
import { NavButtons } from "@/components/NavButtons";

export default function Home() {
  return (
    <>
      <NavButtons />
      <FullPageScroll />
      <main>
        <Hero />
        <About />
        <Areas />
        <Board />
        <Contact />
      </main>
    </>
  );
}

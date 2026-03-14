import Logo from "@/components/Logo";
import LinkCard from "@/components/LinkCard";
import { socialLinks, callLinks } from "@/data/links";

export default function Home() {
  return (
    <main className="bg-vignette min-h-screen flex flex-col items-center py-12 px-4">
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-96 h-48 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at top, rgba(180,0,0,0.15) 0%, transparent 70%)" }} />

      <header className="logo-drop flex flex-col items-center mb-8 mt-4">
        <Logo className="mb-4 drop-shadow-[0_0_18px_rgba(200,0,0,0.6)]" />
        <h1 className="text-2xl font-bold tracking-[0.2em] uppercase text-white mb-1"
          style={{ fontFamily: "var(--font-rajdhani)" }}>
          Posakbari
        </h1>
        <p className="text-xs tracking-widest uppercase mb-2"
          style={{ fontFamily: "var(--font-exo2)", color: "#888" }}>
          Fashion &amp; Clothing Store
        </p>
        <div className="w-full max-w-[260px]">
          <div className="underline-draw w-full" />
        </div>
      </header>

      <div className="w-full max-w-[420px] flex flex-col gap-2.5">
        {socialLinks.map((link, i) => <LinkCard key={link.id} link={link} delay={i + 1} />)}
        <div className="section-gap my-1" />
        {callLinks.map((link, i) => <LinkCard key={link.id} link={link} delay={socialLinks.length + i + 2} />)}
      </div>

      <footer className="mt-12 text-center">
        <p className="text-xs tracking-widest uppercase text-ht-muted"
          style={{ fontFamily: "var(--font-rajdhani)" }}>
          © {new Date().getFullYear()} Posakbari — All rights reserved
        </p>
      </footer>
    </main>
  );
}
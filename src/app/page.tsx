"use client";

import React from "react";
import { motion } from "framer-motion";

// —— Design tokens (swap these to match Figma and we get instant theme updates)
const TOKENS = {
  colors: {
    bg: "#0a0a0a",
    text: "#ffffff",
    accent: "#E879F9",   // fuchsia-400 (placeholder)
    accent2: "#818CF8",  // indigo-400 (placeholder)
    accent3: "#38BDF8",  // sky-400 (placeholder)
    surface: "rgba(255,255,255,0.05)",
    surfaceStrong: "rgba(255,255,255,0.08)",
    border: "rgba(255,255,255,0.10)",
  },
  fonts: {
    display:
      "Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, 'Apple Color Emoji','Segoe UI Emoji'",
    body:
      "Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, 'Apple Color Emoji','Segoe UI Emoji'",
  },
  radius: { xl: "1.25rem", xxl: "1.75rem" },
};

function TokenStyles({ tokens = TOKENS }: { tokens?: typeof TOKENS }) {
  const css = `:root{--bg:${tokens.colors.bg};--text:${tokens.colors.text};--accent:${tokens.colors.accent};--accent2:${tokens.colors.accent2};--accent3:${tokens.colors.accent3};--surface:${tokens.colors.surface};--surface-strong:${tokens.colors.surfaceStrong};--border:${tokens.colors.border};--radius-xl:${tokens.radius.xl};--radius-xxl:${tokens.radius.xxl};--font-display:${tokens.fonts.display};--font-body:${tokens.fonts.body};}
  @media (min-width:640px){:root{--fluid-h1:clamp(2.5rem,4vw+1rem,3.75rem);--fluid-h2:clamp(1.5rem,2.2vw+0.5rem,2rem);} }
  body{font-family:var(--font-body)}
  .display{font-family:var(--font-display)}
  `;
  return <style>{css}</style>;
}

// A lightweight, single-file dummy site we can iterate on quickly.
// Structure: Navbar → Hero → Thesis → Events → Newsletter → CTA → Footer

export default function VelvetDummySite() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-fuchsia-500/30 selection:text-fuchsia-200">
      <TokenStyles />
      {/* Background aura */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 0.6, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_0%,rgba(147,51,234,0.25),transparent),radial-gradient(50%_50%_at_100%_100%,rgba(59,130,246,0.18),transparent)]"
        />
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [-20, 20, -20] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-32 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(236,72,153,0.25), transparent 60%)",
          }}
        />
      </div>

      <SiteNav />
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Hero />
        <Thesis />
        <EventsPreview />
        <Newsletter />
        <DualCTA />
      </main>
      <SiteFooter />
    </div>
  );
}

function SiteNav() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-sm bg-black/40 border-b border-white/10">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        <a href="#" className="font-semibold tracking-wide text-lg">
          VELVET
        </a>
        <div className="hidden md:flex items-center gap-6 text-sm">
          <a className="opacity-80 hover:opacity-100" href="#events">
            Events
          </a>
          <a className="opacity-80 hover:opacity-100" href="#thesis">
            About
          </a>
          <a className="opacity-80 hover:opacity-100" href="#invest">
            Invest
          </a>
          <a className="opacity-80 hover:opacity-100" href="#sponsor">
            Sponsor
          </a>
        </div>
        <a
          href="#tickets"
          className="inline-flex items-center rounded-2xl border border-white/15 bg-white/5 px-3 py-1.5 text-sm hover:bg-white/10 transition"
        >
          Buy Tickets
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative py-20 sm:py-28">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div>
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl sm:text-6xl/tight font-semibold"
          >
            A stage built for
            <br />
            <GradientText>immersive expression</GradientText>
          </motion.h1>
          <motion.p
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="mt-5 max-w-xl text-base sm:text-lg opacity-80"
          >
            Velvet hosts sensory-forward shows for rising artists — and we’re
            designing a permanent venue that doubles as a third space to create,
            work, and hang.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a className="rounded-2xl bg-white text-black px-5 py-3 text-sm font-medium shadow-[0_0_0_1px_rgba(255,255,255,0.12)] hover:shadow-[0_0_0_2px_rgba(255,255,255,0.25)] transition" href="#tickets">
              Get Tickets
            </a>
            <a
              href="#newsletter"
              className="rounded-2xl border border-white/20 px-5 py-3 text-sm hover:bg-white/10 transition"
            >
              Join the Newsletter
            </a>
          </motion.div>

          <div className="mt-8 flex items-center gap-4 text-xs opacity-70">
            <span>Follow us</span>
            <div className="flex gap-3">
              <Social dot label="Instagram" href="#" />
              <Social dot label="TikTok" href="#" />
              <Social dot label="X" href="#" />
            </div>
          </div>
        </div>

        {/* Ambient panel */}
        <motion.div
          initial={{ scale: 0.98, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-fuchsia-500/10 via-indigo-500/10 to-blue-500/10 p-1"
        >
          <div className="rounded-3xl bg-black/40 p-6 sm:p-8">
            <div className="aspect-video w-full overflow-hidden rounded-2xl border border-white/10">
              {/* Placeholder experiential canvas */}
              <AuroraCanvas />
            </div>
            <p className="mt-4 text-sm opacity-80">
              A living canvas: light, color, and motion — the DNA of our shows.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Thesis() {
  return (
    <section id="thesis" className="py-14 sm:py-24">
      <div className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-2">
          <SectionHeading kicker="Our Thesis">
            The future of art is multisensory
          </SectionHeading>
          <p className="mt-4 max-w-2xl text-base sm:text-lg opacity-80">
            We curate stages where sound, light, and space collaborate. As we
            grow, we’re securing a permanent venue engineered for immersion — by
            day, a creative third place; by night, a theater for new voices.
          </p>
        </div>
        <div className="rounded-3xl border border-white/10 p-6 bg-white/5">
          <ul className="space-y-3 text-sm opacity-90 list-disc pl-5">
            <li>Generate excitement around boundary-pushing shows</li>
            <li>Sell out events and memberships</li>
            <li>Grow our newsletter and socials</li>
            <li>Attract investors & brand sponsors</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function EventsPreview() {
  const events = [
    {
      date: "Sep 12",
      title: "NEON BLOOM: emerging painters × live synths",
      tag: "Tickets soon",
    },
    { date: "Oct 03", title: "SENSORIUM: dance in 360°", tag: "On sale" },
    { date: "Oct 24", title: "HUSH//ECHO: ambient night", tag: "Waitlist" },
  ];
  return (
    <section id="events" className="py-14 sm:py-24">
      <SectionHeading kicker="Upcoming">Events</SectionHeading>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {events.map((e, i) => (
          <motion.a
            key={i}
            href="#tickets"
            whileHover={{ y: -4 }}
            className="group rounded-3xl border border-white/10 bg-white/5 p-5 transition"
          >
            <div className="flex items-center justify-between text-xs opacity-80">
              <span>{e.date}</span>
              <span className="rounded-full border border-white/15 px-2 py-0.5 text-[11px] opacity-80 group-hover:opacity-100">
                {e.tag}
              </span>
            </div>
            <h3 className="mt-3 text-lg font-medium group-hover:opacity-100 opacity-90">
              {e.title}
            </h3>
            <div className="mt-4 h-28 overflow-hidden rounded-2xl border border-white/10">
              <CardBackdrop index={i} />
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}

function Newsletter() {
  return (
    <section id="newsletter" className="py-14 sm:py-24">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-10">
        <SectionHeading kicker="Stay in the loop">
          Join the newsletter
        </SectionHeading>
        <p className="mt-3 max-w-2xl text-sm sm:text-base opacity-80">
          Monthly highlights: early ticket drops, artist spotlights,
          behind-the-scenes build of our permanent venue.
        </p>
        <form className="mt-6 flex flex-col gap-3 sm:flex-row">
          <input
            type="email"
            required
            placeholder="you@domain.com"
            className="w-full rounded-2xl border border-white/15 bg-black/60 px-4 py-3 text-sm outline-none placeholder:opacity-40 focus:border-fuchsia-400/40"
          />
          <button
            type="submit"
            className="rounded-2xl bg-white text-black px-5 py-3 text-sm font-medium hover:brightness-90"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}

function DualCTA() {
  return (
    <section id="tickets" className="py-14 sm:py-24">
      <div className="grid gap-6 lg:grid-cols-2">
        <div
          id="invest"
          className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0 p-6 sm:p-10"
        >
          <SectionHeading kicker="Back the vision">
            Invest in Velvet
          </SectionHeading>
          <p className="mt-3 max-w-xl text-sm sm:text-base opacity-80">
            We’re raising to build a first-of-its-kind immersive venue. If
            you’re an investor exploring culture-tech, we’d love to talk.
          </p>
          <div className="mt-6">
            <a
              href="#"
              className="inline-flex items-center rounded-2xl border border-white/20 px-5 py-3 text-sm hover:bg-white/10 transition"
            >
              View the Deck
            </a>
          </div>
        </div>
        <div
          id="sponsor"
          className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0 p-6 sm:p-10"
        >
          <SectionHeading kicker="Partner with us">
            Sponsor an event
          </SectionHeading>
          <p className="mt-3 max-w-xl text-sm sm:text-base opacity-80">
            Align your brand with emerging art and design. Custom integrations,
            on-site experiences, and content collabs.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#"
              className="rounded-2xl bg-white text-black px-5 py-3 text-sm font-medium"
            >
              Start a Conversation
            </a>
            <a
              href="#"
              className="rounded-2xl border border-white/20 px-5 py-3 text-sm hover:bg-white/10 transition"
            >
              See Sponsor Kit
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function SiteFooter() {
  return (
    <footer className="mt-10 border-t border-white/10 bg-black/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <span className="font-semibold tracking-wide">VELVET</span>
            <p className="mt-2 text-xs opacity-60">
              © {new Date().getFullYear()} Velvet — All rights reserved.
            </p>
          </div>
          <div className="flex gap-4 text-xs opacity-70">
            <a href="#" className="hover:opacity-100">
              Terms
            </a>
            <a href="#" className="hover:opacity-100">
              Privacy
            </a>
            <a href="#" className="hover:opacity-100">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ——— UI bits ——— */
function SectionHeading({
  children,
  kicker,
}: {
  children: React.ReactNode;
  kicker?: string;
}) {
  return (
    <div>
      {kicker && (
        <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] tracking-wide uppercase opacity-90">
          <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-400" />
          {kicker}
        </div>
      )}
      <h2 className="text-2xl sm:text-3xl font-semibold">{children}</h2>
    </div>
  );
}

function GradientText({ children }: { children: React.ReactNode }) {
  return (
    <span className="bg-gradient-to-r from-fuchsia-400 via-indigo-300 to-sky-300 bg-clip-text text-transparent">
      {children}
    </span>
  );
}

function Social({
  label,
  href,
  dot = false,
}: {
  label: string;
  href: string;
  dot?: boolean;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      className="group relative inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5"
    >
      {dot && (
        <span className="h-1.5 w-1.5 rounded-full bg-white/50 group-hover:bg-white" />
      )}
      <span className="text-xs opacity-80 group-hover:opacity-100">{label}</span>
    </a>
  );
}

function CardBackdrop({ index }: { index: number }) {
  const palettes = [
    "linear-gradient(135deg, rgba(236,72,153,0.25), rgba(59,130,246,0.25))",
    "linear-gradient(135deg, rgba(147,51,234,0.25), rgba(20,184,166,0.25))",
    "linear-gradient(135deg, rgba(99,102,241,0.25), rgba(16,185,129,0.25))",
  ];
  return (
    <motion.div
      initial={{ scale: 1.02 }}
      whileHover={{ scale: 1.05 }}
      className="h-full w-full"
      style={{ backgroundImage: palettes[index % palettes.length] }}
    />
  );
}

function AuroraCanvas() {
  return (
    <motion.div
      role="img"
      aria-label="Abstract aurora animation"
      initial={{ opacity: 0.8 }}
      animate={{ opacity: [0.7, 1, 0.7] }}
      transition={{ duration: 8, repeat: Infinity }}
      className="relative h-full w-full"
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 80% at 80% 20%, rgba(168,85,247,0.35), transparent 60%), radial-gradient(100% 60% at 20% 80%, rgba(59,130,246,0.3), transparent 60%), radial-gradient(80% 80% at 50% 50%, rgba(236,72,153,0.25), transparent 60%)",
        }}
      />
      <motion.div
        className="absolute inset-0"
        initial={{ backgroundPosition: "0% 50%" }}
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "8px 100%",
        }}
      />
    </motion.div>
  );
}

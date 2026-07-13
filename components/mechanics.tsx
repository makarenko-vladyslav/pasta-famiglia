"use client";
import { Component, useEffect, useRef, useState, type ReactNode } from "react";

const REDUCED = () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/** Opening curtain: brand name rises, curtain splits, hero underneath. Once per session. */
export function PreloaderCurtain({ brand }: { brand: string }) {
  const [phase, setPhase] = useState<"boot" | "open" | "done">("boot");
  useEffect(() => {
    if (REDUCED() || sessionStorage.getItem("rp-preloaded")) { setPhase("done"); return; }
    sessionStorage.setItem("rp-preloaded", "1");
    document.body.style.overflow = "hidden";
    const t1 = setTimeout(() => setPhase("open"), 1150);
    const t2 = setTimeout(() => { setPhase("done"); document.body.style.overflow = ""; }, 2050);
    return () => { clearTimeout(t1); clearTimeout(t2); document.body.style.overflow = ""; };
  }, []);
  if (phase === "done") return null;
  return (
    <div aria-hidden className="fixed inset-0 z-[100] pointer-events-none">
      <div className={"absolute inset-x-0 top-0 h-1/2 bg-[hsl(var(--color-foreground))] transition-transform duration-[900ms] ease-[cubic-bezier(0.76,0,0.24,1)] " + (phase === "open" ? "-translate-y-full" : "")} />
      <div className={"absolute inset-x-0 bottom-0 h-1/2 bg-[hsl(var(--color-foreground))] transition-transform duration-[900ms] ease-[cubic-bezier(0.76,0,0.24,1)] " + (phase === "open" ? "translate-y-full" : "")} />
      <div className="absolute inset-0 grid place-items-center overflow-hidden">
        <span className={"font-[family-name:var(--font-display)] text-[clamp(1.6rem,4.5vw,3.4rem)] tracking-tight text-[hsl(var(--color-background))] transition-all duration-700 " + (phase === "open" ? "opacity-0 -translate-y-6" : "preloader-rise")}>{brand}</span>
      </div>
    </div>
  );
}

/** Per-act error boundary: a single broken section renders as nothing
 *  instead of unmounting the entire page (undefined.map class of crashes). */
export class ActBoundary extends Component<{ children: ReactNode }, { broken: boolean }> {
  state = { broken: false };
  static getDerivedStateFromError() { return { broken: true }; }
  componentDidCatch(err: unknown) { console.error("[act-boundary]", err); }
  render() { return this.state.broken ? null : this.props.children; }
}

/** Smart site header: transparent (light text) while over the dark hero,
 *  solid token surface after the fold. One implementation for every site. */
export function HeaderShell({ children, overDarkHero = true }: { children: ReactNode; overDarkHero?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 48);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  const transparent = overDarkHero && !scrolled;
  return (
    <header className={
      "sticky top-0 z-40 transition-colors duration-300 " +
      (transparent
        ? "border-b border-transparent bg-transparent text-background"
        : "border-b border-border bg-background/95 text-foreground backdrop-blur")
    }>
      {children}
    </header>
  );
}

/** Custom cursor: tiny dot + trailing ring, grows over interactive elements. Fine pointers only. */
export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (REDUCED() || !window.matchMedia("(pointer: fine)").matches) return;
    document.documentElement.classList.add("rp-cursor-on");
    const dot = dotRef.current!, ring = ringRef.current!;
    const pos = { x: -100, y: -100 }, cur = { x: -100, y: -100 };
    let hot = false, raf = 0;
    const onMove = (e: PointerEvent) => {
      pos.x = e.clientX; pos.y = e.clientY;
      const t = (e.target as HTMLElement).closest("a,button,[role=button],[data-cursor]");
      hot = Boolean(t);
    };
    const loop = () => {
      cur.x += (pos.x - cur.x) * 0.18; cur.y += (pos.y - cur.y) * 0.18;
      dot.style.transform = `translate3d(${pos.x}px,${pos.y}px,0) translate(-50%,-50%)`;
      ring.style.transform = `translate3d(${cur.x}px,${cur.y}px,0) translate(-50%,-50%) scale(${hot ? 2.2 : 1})`;
      ring.style.opacity = hot ? "0.9" : "0.55";
      raf = requestAnimationFrame(loop);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    raf = requestAnimationFrame(loop);
    return () => { window.removeEventListener("pointermove", onMove); cancelAnimationFrame(raf); document.documentElement.classList.remove("rp-cursor-on"); };
  }, []);
  return (
    <div aria-hidden className="hidden lg:block">
      <div ref={dotRef} className="fixed left-0 top-0 z-[95] h-1.5 w-1.5 rounded-full bg-[hsl(var(--color-accent))] pointer-events-none" />
      <div ref={ringRef} className="fixed left-0 top-0 z-[95] h-9 w-9 rounded-full border border-[hsl(var(--color-accent))] pointer-events-none transition-[opacity] duration-200" style={{ mixBlendMode: "difference" }} />
    </div>
  );
}

/** Magnetic wrapper — the child leans toward the cursor, springs back on leave. */
export function Magnetic({ children, strength = 0.35 }: { children: ReactNode; strength?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || REDUCED() || !window.matchMedia("(pointer: fine)").matches) return;
    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left - r.width / 2) * strength;
      const y = (e.clientY - r.top - r.height / 2) * strength;
      el.style.transform = `translate3d(${x}px,${y}px,0)`;
    };
    const onLeave = () => { el.style.transition = "transform 0.55s cubic-bezier(0.22,1,0.36,1)"; el.style.transform = "translate3d(0,0,0)"; setTimeout(() => { el.style.transition = ""; }, 560); };
    el.addEventListener("pointermove", onMove, { passive: true });
    el.addEventListener("pointerleave", onLeave);
    return () => { el.removeEventListener("pointermove", onMove); el.removeEventListener("pointerleave", onLeave); };
  }, [strength]);
  return <div ref={ref} className="inline-block will-change-transform">{children}</div>;
}

/** Line-mask reveal: children slide up from an overflow-hidden clip when scrolled into view. */
export function Reveal({ children, delay = 0, as: Tag = "div" }: { children: ReactNode; delay?: number; as?: "div" | "span" | "h2" | "h3" | "p" | "li" }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (REDUCED()) { el.classList.add("rp-revealed"); return; }
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add("rp-revealed"); io.disconnect(); } }, { threshold: 0.25 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className="rp-reveal" style={{ ["--rp-delay" as string]: `${delay}s` }}>
      <Tag className="rp-reveal-inner">{children}</Tag>
    </div>
  );
}

/** Infinite marquee band. Content is duplicated for the seamless loop. */
export function Marquee({ items = [], speed = 26, className = "" }: { items: Array<string | { name?: string; label?: string; title?: string }>; speed?: number; className?: string }) {
  // Builders sometimes pass menu OBJECTS — never render [object Object].
  const words = items.map((i) => (typeof i === "string" ? i : i?.name ?? i?.label ?? i?.title ?? "")).filter(Boolean);
  const row = words.join(" · ") + " · ";
  return (
    <div className={"relative overflow-hidden whitespace-nowrap select-none " + className} aria-hidden>
      <div className="rp-marquee inline-block" style={{ ["--rp-marquee-s" as string]: `${speed}s` }}>
        <span>{row}</span><span>{row}</span>
      </div>
    </div>
  );
}

/** Ambient canvas backdrop: 3 token-colored blobs drifting slowly. Zero deps. */
export function AmbientCanvas({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const css = getComputedStyle(document.documentElement);
    const col = (v: string, a: number) => {
      // Bulletproof: extract H S% L% from whatever the runtime returns
      // ("hsl(12 85% 45%)", "12 85% 45%", spaces…) — a canvas color parse
      // error must never be possible.
      const raw = css.getPropertyValue(v).trim();
      const m = raw.match(/(-?[\d.]+)\s+([\d.]+)%\s+([\d.]+)%/);
      return m ? `hsl(${m[1]} ${m[2]}% ${m[3]}% / ${a})` : `hsl(0 0% 50% / ${a})`;
    };
    const blobs = [
      { v: "--color-accent", r: 0.42, sp: 0.00016, ph: 0 },
      { v: "--color-surface", r: 0.5, sp: 0.00011, ph: 2.1 },
      { v: "--color-accent", r: 0.3, sp: 0.00021, ph: 4.2 },
    ];
    let raf = 0, w = 0, h = 0, visible = true;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const resize = () => {
      w = canvas.offsetWidth; h = canvas.offsetHeight;
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    const ro = new ResizeObserver(resize); ro.observe(canvas);
    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; });
    io.observe(canvas);
    const draw = (t: number) => {
      raf = requestAnimationFrame(draw);
      if (!visible || !w) return;
      try {
      ctx.clearRect(0, 0, w, h);
      for (const b of blobs) {
        const x = w * (0.5 + 0.34 * Math.cos(t * b.sp + b.ph));
        const y = h * (0.5 + 0.3 * Math.sin(t * b.sp * 1.3 + b.ph));
        const rad = Math.max(w, h) * b.r;
        const g = ctx.createRadialGradient(x, y, 0, x, y, rad);
        g.addColorStop(0, col(b.v, 0.32)); g.addColorStop(1, col(b.v, 0));
        ctx.fillStyle = g; ctx.fillRect(0, 0, w, h);
      }
      } catch { /* a backdrop must never take the page down */ }
    };
    if (REDUCED()) { draw(1); cancelAnimationFrame(raf); }
    else raf = requestAnimationFrame(draw);
    return () => { cancelAnimationFrame(raf); ro.disconnect(); io.disconnect(); };
  }, []);
  return <canvas ref={ref} className={"pointer-events-none absolute inset-0 h-full w-full " + className} aria-hidden />;
}

/** Pinned scroll scene: a tall wrapper with a sticky viewport window; the
 *  scroll progress (0..1) is written to the CSS variable --scene-p so the
 *  skeleton can drive transforms with pure CSS calc(). Reduced motion pins
 *  the finished state. */
export function ScrollScene({ children, heightVh = 220 }: { children: ReactNode; heightVh?: number }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    if (REDUCED()) { wrap.style.setProperty("--scene-p", "1"); return; }
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const r = wrap.getBoundingClientRect();
        const span = r.height - window.innerHeight;
        const p = Math.min(1, Math.max(0, -r.top / (span || 1)));
        wrap.style.setProperty("--scene-p", p.toFixed(4));
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => { window.removeEventListener("scroll", onScroll); if (raf) cancelAnimationFrame(raf); };
  }, []);
  return (
    <div ref={wrapRef} style={{ height: `${heightVh}vh`, ["--scene-p" as string]: "0" }} className="relative">
      <div className="sticky top-0 h-screen overflow-hidden">{children}</div>
    </div>
  );
}

/** Perspective tilt: the card leans toward the cursor (max ~7deg). */
export function TiltCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || REDUCED() || !window.matchMedia("(pointer: fine)").matches) return;
    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const rx = ((e.clientY - r.top) / r.height - 0.5) * -7;
      const ry = ((e.clientX - r.left) / r.width - 0.5) * 7;
      el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg)`;
    };
    const onLeave = () => { el.style.transition = "transform 0.6s cubic-bezier(0.22,1,0.36,1)"; el.style.transform = "perspective(900px)"; setTimeout(() => { el.style.transition = ""; }, 610); };
    el.addEventListener("pointermove", onMove, { passive: true });
    el.addEventListener("pointerleave", onLeave);
    return () => { el.removeEventListener("pointermove", onMove); el.removeEventListener("pointerleave", onLeave); };
  }, []);
  return <div ref={ref} className={"will-change-transform " + className}>{children}</div>;
}

/** Horizontal pan: a sticky window whose track slides sideways as you scroll. */
export function HorizontalPan({ children, heightVh = 240 }: { children: ReactNode; heightVh?: number }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const wrap = wrapRef.current, track = trackRef.current;
    if (!wrap || !track) return;
    if (REDUCED()) { setReduced(true); return; }
    // Wrapper height matches the track overflow 1:1 — no dead scroll past
    // the strip, no half-empty pinned screens.
    const sync = () => {
      const extra = Math.max(0, track.scrollWidth - window.innerWidth);
      wrap.style.height = `calc(100vh + ${extra}px)`;
    };
    sync();
    const ro = new ResizeObserver(sync); ro.observe(track);
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const r = wrap.getBoundingClientRect();
        const span = r.height - window.innerHeight;
        const p = Math.min(1, Math.max(0, -r.top / (span || 1)));
        const max = track.scrollWidth - window.innerWidth;
        track.style.transform = `translate3d(${-p * Math.max(0, max)}px,0,0)`;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => { window.removeEventListener("scroll", onScroll); ro.disconnect(); if (raf) cancelAnimationFrame(raf); };
  }, []);
  if (reduced) {
    // a11y + honest screenshots: a plain horizontal scroller, natural height
    return (
      <div className="overflow-x-auto">
        <div className="flex gap-6 pl-[6vw] py-4">{children}</div>
      </div>
    );
  }
  return (
    <div ref={wrapRef} style={{ height: `${heightVh}vh` }} className="relative">
      <div className="sticky top-0 h-screen overflow-hidden flex items-center">
        <div ref={trackRef} className="flex gap-6 will-change-transform pl-[6vw]">{children}</div>
      </div>
    </div>
  );
}

/** Canonical mobile menu — one implementation for every generated site:
 *  toggles with an animated Menu/X, closes on link click / Escape / overlay,
 *  staggers link reveal, locks body scroll while open. */
export function MobileMenu({ links = [], cta, phone, openLabel = "Menu", closeLabel = "Close" }: { links: { href: string; label: string }[]; cta?: { href: string; label: string }; phone?: string | null; openLabel?: string; closeLabel?: string }) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", onKey); };
  }, [open]);
  return (
    <div className="lg:hidden">
      <button type="button" onClick={() => setOpen(v => !v)} aria-label={open ? closeLabel : openLabel} aria-expanded={open}
        className="relative z-[60] grid h-11 w-11 place-items-center">
        <span className={"absolute h-0.5 w-6 bg-current transition-all duration-300 " + (open ? "rotate-45" : "-translate-y-2")} />
        <span className={"absolute h-0.5 w-6 bg-current transition-all duration-300 " + (open ? "opacity-0" : "")} />
        <span className={"absolute h-0.5 w-6 bg-current transition-all duration-300 " + (open ? "-rotate-45" : "translate-y-2")} />
      </button>
      <div className={"fixed inset-0 z-50 overflow-hidden transition-opacity duration-300 " + (open ? "opacity-100" : "pointer-events-none opacity-0")} onClick={() => setOpen(false)}>
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
        <nav className={"absolute right-0 top-0 h-full w-[82%] max-w-sm bg-[hsl(var(--color-background))] p-8 pt-24 shadow-2xl transition-transform duration-500 " + (open ? "translate-x-0" : "translate-x-full")}
          style={{ transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)" }} onClick={(e) => e.stopPropagation()}>
          <ul className="flex flex-col gap-1">
            {links.map((l, i) => (
              <li key={l.href} className={"border-b border-current/10 transition-all duration-500 " + (open ? "translate-x-0 opacity-100" : "translate-x-6 opacity-0")}
                style={{ transitionDelay: open ? 120 + i * 70 + "ms" : "0ms" }}>
                <a href={l.href} onClick={() => setOpen(false)} className="block py-4 text-2xl font-semibold">{l.label}</a>
              </li>
            ))}
          </ul>
          <div className={"mt-8 flex flex-col gap-4 transition-all duration-500 " + (open ? "translate-x-0 opacity-100" : "translate-x-6 opacity-0")} style={{ transitionDelay: open ? "400ms" : "0ms" }}>
            {phone && <a href={"tel:" + phone.replace(/[^+\d]/g, "")} className="text-lg font-medium">{phone}</a>}
            {cta && <a href={cta.href} onClick={() => setOpen(false)} style={{ borderRadius: "var(--radius-control, 9999px)" }} className="inline-flex justify-center bg-[hsl(var(--color-accent))] px-6 py-3.5 font-semibold text-[hsl(var(--color-accent-foreground))]">{cta.label}</a>}
          </div>
        </nav>
      </div>
    </div>
  );
}

export function SpotlightReveal({ baseUrl, revealUrl, alt }: { baseUrl: string; revealUrl: string; alt: string }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.style.setProperty("--spot-r", "0px");
      return;
    }
    const target = { x: -999, y: -999 };
    const cur = { x: -999, y: -999 };
    let raf = 0;
    const loop = () => {
      cur.x += (target.x - cur.x) * 0.1;
      cur.y += (target.y - cur.y) * 0.1;
      el.style.setProperty("--spot-x", cur.x + "px");
      el.style.setProperty("--spot-y", cur.y + "px");
      raf = requestAnimationFrame(loop);
    };
    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      target.x = e.clientX - r.left;
      target.y = e.clientY - r.top;
    };
    el.addEventListener("pointermove", onMove, { passive: true });
    raf = requestAnimationFrame(loop);
    return () => { el.removeEventListener("pointermove", onMove); cancelAnimationFrame(raf); };
  }, []);
  return (
    <div ref={wrapRef} className="relative h-full w-full overflow-hidden" style={{ ["--spot-x" as string]: "-999px", ["--spot-y" as string]: "-999px", ["--spot-r" as string]: "240px" }}>
      <img src={baseUrl} alt={alt} className="absolute inset-0 h-full w-full object-cover" />
      <img src={revealUrl} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover"
        style={{
          WebkitMaskImage: "radial-gradient(circle var(--spot-r) at var(--spot-x) var(--spot-y), #000 0%, #000 45%, rgba(0,0,0,0.6) 65%, transparent 100%)",
          maskImage: "radial-gradient(circle var(--spot-r) at var(--spot-x) var(--spot-y), #000 0%, #000 45%, rgba(0,0,0,0.6) 65%, transparent 100%)",
        }} />
    </div>
  );
}

export function CountUp({ to, suffix = "", duration = 1400, locale = "uk-UA" }: { to: number; suffix?: string; duration?: number; locale?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const dec = String(to).includes(".") ? 1 : 0;
    const fmt = (v: number) => (dec ? v.toFixed(dec) : Math.round(v).toLocaleString(locale));
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { el.textContent = fmt(to) + suffix; return; }
    let raf = 0;
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      io.disconnect();
      const t0 = performance.now();
      const tick = (now: number) => {
        const p = Math.min(1, (now - t0) / duration);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = fmt(to * eased) + suffix;
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    }, { threshold: 0.4 });
    io.observe(el);
    return () => { io.disconnect(); cancelAnimationFrame(raf); };
  }, [to, suffix, duration]);
  return <span ref={ref}>0{suffix}</span>;
}

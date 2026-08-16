const { Logo, NavBar, Button, Divider, Icon, RuleLabel, ArticleMeta, Card } = window.GuildyardDesignSystem_59975b;

function Container({ children, width = 1160, style }) {
  return <div style={{ width: "100%", maxWidth: width, margin: "0 auto", padding: "0 40px", boxSizing: "border-box", ...style }}>{children}</div>;
}

const GY_NAV = [
  { id: "home", label: "Guildyard" },
  { id: "journal", label: "Journal" },
  { id: "archive", label: "Archive" },
  { id: "about", label: "About" }
];

function SiteHeader({ view, onNavigate }) {
  const active = view === "article" ? "journal" : view === "policy" ? "about" : view;
  return (
    <NavBar tone="light" items={GY_NAV} activeId={active} onNavigate={onNavigate}
      actions={<Button size="sm" variant="secondary" iconRight="arrow-right" onClick={() => onNavigate("journal")}>Read the Journal</Button>} />
  );
}

function SiteFooter({ onNavigate }) {
  return (
    <footer style={{ background: "var(--gy-ink-900)", padding: "64px 0 36px", marginTop: 8 }}>
      <Container>
        <div style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr 1fr", gap: 56, alignItems: "start" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 18, alignItems: "flex-start" }}>
            <Logo variant="lockup" tone="ivory" height={24} basePath="." />
            <img src="./assets/logo/guildyard-tagline-ivory.svg" alt="Built on Intent. Focused on Value." style={{ height: 11, opacity: 0.75 }} />
            <p style={{ font: "var(--gy-type-body)", color: "var(--gy-text-on-inverse-muted)", margin: 0, maxWidth: 380 }}>
              Guildyard LLC develops and tests independent ventures and brands.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <span style={{ font: "var(--gy-type-meta)", letterSpacing: "var(--gy-tracking-wider)", textTransform: "uppercase", color: "var(--gy-copper-400)" }}>Journal</span>
            {[["Latest", "journal"], ["Archive", "archive"], ["Editorial policy", "policy"]].map(([l, v]) => (
              <a key={l} href="#" onClick={(e) => { e.preventDefault(); onNavigate(v); }} style={{ font: "var(--gy-type-body)", color: "var(--gy-text-on-inverse-muted)", textDecoration: "none", borderBottom: "none" }}>{l}</a>
            ))}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <span style={{ font: "var(--gy-type-meta)", letterSpacing: "var(--gy-tracking-wider)", textTransform: "uppercase", color: "var(--gy-copper-400)" }}>Company</span>
            <a href="#" onClick={(e) => { e.preventDefault(); onNavigate("about"); }} style={{ font: "var(--gy-type-body)", color: "var(--gy-text-on-inverse-muted)", textDecoration: "none", borderBottom: "none" }}>About Guildyard</a>
            <span style={{ font: "var(--gy-type-body)", color: "rgba(246,243,238,.38)" }}>Texas, United States</span>
          </div>
        </div>
        <div style={{ marginTop: 48, paddingTop: 18, borderTop: "1px solid rgba(246,243,238,.12)", display: "flex", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
          <span style={{ font: "var(--gy-type-meta)", letterSpacing: "var(--gy-tracking-wide)", color: "rgba(246,243,238,.42)" }}>© 2026 Guildyard LLC</span>
          <span style={{ font: "var(--gy-type-meta)", letterSpacing: "var(--gy-tracking-wide)", color: "rgba(246,243,238,.42)" }}>The Journal is free to read</span>
        </div>
      </Container>
    </footer>
  );
}

/* A Journal listing row — the archive's and Journal home's shared unit. */
function ArticleRow({ a, onOpen, showLede = true }) {
  const [hover, setHover] = React.useState(false);
  return (
    <article onClick={() => onOpen(a)} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ display: "grid", gridTemplateColumns: "132px 1fr auto", gap: 28, alignItems: "baseline", padding: "22px 0", borderBottom: "var(--gy-border-subtle)", cursor: "pointer" }}>
      <span style={{ font: "var(--gy-type-meta)", letterSpacing: "var(--gy-tracking-wide)", textTransform: "uppercase", color: "var(--gy-ink-500)" }}>{a.date}</span>
      <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
        <h3 style={{ font: "var(--gy-weight-semibold) var(--gy-text-xl)/1.26 var(--gy-font-serif)", letterSpacing: "var(--gy-tracking-tight)", color: hover ? "var(--gy-copper-700)" : "var(--gy-ink-900)", transition: "color var(--gy-duration-fast) var(--gy-ease-standard)" }}>{a.title}</h3>
        {showLede && <p style={{ font: "var(--gy-type-body)", color: "var(--gy-text-secondary)", margin: 0, maxWidth: 620 }}>{a.lede}</p>}
      </div>
      <span style={{ font: "var(--gy-type-meta)", letterSpacing: "var(--gy-tracking-wide)", textTransform: "uppercase", color: "var(--gy-copper-600)", whiteSpace: "nowrap" }}>{a.category}</span>
    </article>
  );
}

Object.assign(window, { Container, SiteHeader, SiteFooter, ArticleRow, GY_NAV });

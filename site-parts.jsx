const { Logo, Button, Divider, Icon, RuleLabel, ArticleMeta, Card } = window.GuildyardDesignSystem_59975b;

function Container({ children, width = 1160, style, className = "" }) {
  return <div className={"gy-wrap " + className} style={{ maxWidth: width, ...style }}>{children}</div>;
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
    <header className="gy-header">
      <Container className="gy-header-inner">
        <a href="#" onClick={(e) => { e.preventDefault(); onNavigate("home"); }} style={{ borderBottom: "none" }}>
          <Logo variant="lockup" tone="charcoal" height={32} basePath="." />
        </a>
        <nav className="gy-nav">
          {GY_NAV.map((it) => (
            <a key={it.id} href="#" className={it.id === active ? "is-active" : ""} onClick={(e) => { e.preventDefault(); onNavigate(it.id); }}>{it.label}</a>
          ))}
        </nav>
        <div className="gy-header-cta">
          <Button size="sm" variant="secondary" iconRight="arrow-right" onClick={() => onNavigate("journal")}>Read the Journal</Button>
        </div>
      </Container>
    </header>
  );
}

function SiteFooter({ onNavigate }) {
  return (
    <footer style={{ background: "var(--gy-ink-900)", padding: "64px 0 36px", marginTop: 8 }}>
      <Container>
        <div className="gy-footer-grid">
          <div style={{ display: "flex", flexDirection: "column", gap: 18, alignItems: "flex-start" }}>
            <Logo variant="lockup" tone="ivory" height={32} basePath="." />
            <p style={{ font: "var(--gy-weight-semibold) 18px/1.35 var(--gy-font-serif)", letterSpacing: "0.02em", color: "var(--gy-ink-50)", margin: 0 }}>
              Built on Intent. Focused on Value.
            </p>
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

/* A Journal listing row. Shared by the archive and Journal home. */
function ArticleRow({ a, onOpen, showLede = true }) {
  const [hover, setHover] = React.useState(false);
  return (
    <article className="gy-article-row" onClick={() => onOpen(a)} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
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

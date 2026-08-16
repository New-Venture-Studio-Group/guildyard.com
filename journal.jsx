const { Button, Tag, Divider, ArticleMeta, Icon, Card } = window.GuildyardDesignSystem_59975b;

function JournalView({ onNavigate, onOpenArticle }) {
  const { Container, ArticleRow } = window;
  const all = window.GY_ARTICLES;
  const [cat, setCat] = React.useState("All");
  const cats = ["All", ...window.GY_CATEGORIES];
  const rows = cat === "All" ? all : all.filter((a) => a.category === cat);
  const lead = rows[0];
  const rest = rows.slice(1);
  return (
    <div>
      {/* Masthead */}
      <section style={{ padding: "72px 0 40px" }}>
        <Container>
          <div style={{ display: "flex", flexDirection: "column", gap: 18, maxWidth: "var(--gy-measure-lede)" }}>
            <span style={{ font: "var(--gy-type-meta)", letterSpacing: "var(--gy-tracking-widest)", textTransform: "uppercase", color: "var(--gy-copper-600)" }}>The Guildyard Journal</span>
            <p style={{ font: "var(--gy-type-lede)", color: "var(--gy-ink-700)", margin: 0 }}>
              Original articles and field notes about building, testing, and operating practical business ventures. Free to read, published when there is something worth reporting.
            </p>
          </div>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 32 }}>
            {cats.map((c) => <Tag key={c} selected={c === cat} onClick={() => setCat(c)}>{c}</Tag>)}
          </div>
        </Container>
      </section>

      {/* Lead */}
      {lead && (
        <section style={{ padding: "8px 0 56px" }}>
          <Container>
            <article onClick={() => onOpenArticle(lead)} style={{ cursor: "pointer", borderTop: "3px solid var(--gy-ink-800)", paddingTop: 32, display: "grid", gridTemplateColumns: "1.35fr .65fr", gap: 64, alignItems: "start" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                <ArticleMeta date={lead.date} category={lead.category} readingTime={lead.read} />
                <h2 style={{ font: "var(--gy-weight-semibold) var(--gy-text-4xl)/1.14 var(--gy-font-serif)", letterSpacing: "-0.012em", color: "var(--gy-ink-900)", maxWidth: 720 }}>{lead.title}</h2>
                <p style={{ font: "var(--gy-type-lede)", color: "var(--gy-ink-700)", margin: 0, maxWidth: 680 }}>{lead.lede}</p>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 8, font: "var(--gy-type-meta)", letterSpacing: "var(--gy-tracking-wider)", textTransform: "uppercase", color: "var(--gy-copper-600)" }}>Read the article <Icon name="arrow-right" size={13} /></span>
              </div>
              <aside style={{ borderLeft: "var(--gy-border-default)", paddingLeft: 28, display: "flex", flexDirection: "column", gap: 10 }}>
                <span style={{ font: "var(--gy-type-meta)", letterSpacing: "var(--gy-tracking-wider)", textTransform: "uppercase", color: "var(--gy-ink-500)" }}>{lead.kind}</span>
                <p style={{ font: "var(--gy-type-body)", color: "var(--gy-text-secondary)", margin: 0 }}>
                  Essays argue a position at length. Field notes are shorter and report a single observation.
                </p>
              </aside>
            </article>
          </Container>
        </section>
      )}

      {/* Rest */}
      <section style={{ paddingBottom: 96 }}>
        <Container>
          <div style={{ borderTop: "1px solid var(--gy-ink-800)" }}>
            {rest.map((a) => <ArticleRow key={a.id} a={a} onOpen={onOpenArticle} />)}
          </div>
          <div style={{ display: "flex", justifyContent: "center", marginTop: 40 }}>
            <Button variant="secondary" onClick={() => onNavigate("archive")} iconRight="arrow-right">Browse the full archive</Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
Object.assign(window, { JournalView });

const { Button, Divider, RuleLabel, ArticleMeta, Icon } = window.GuildyardDesignSystem_59975b;

function HomeView({ onNavigate, onOpenArticle }) {
  const { Container, ArticleRow } = window;
  const latest = window.GY_ARTICLES.slice(0, 3);
  return (
    <div>
      {/* Statement */}
      <section className="gy-hero" style={{ padding: "112px 0 96px", borderBottom: "var(--gy-border-subtle)" }}>
        <Container>
          <div className="gy-split">
            <div style={{ display: "flex", flexDirection: "column", gap: 30, alignItems: "flex-start" }}>
              <span style={{ font: "var(--gy-type-meta)", letterSpacing: "var(--gy-tracking-wider)", textTransform: "uppercase", color: "var(--gy-copper-600)" }}>Guildyard LLC · Texas</span>
              <h1 style={{ fontFamily: "var(--gy-font-serif)", fontWeight: "var(--gy-weight-semibold)", fontSize: "clamp(42px,4.9vw,64px)", lineHeight: 1.08, letterSpacing: "-0.014em", color: "var(--gy-ink-900)", margin: 0, maxWidth: 780 }}>
                Built on Intent.<br />Focused on Value.
              </h1>
              <span aria-hidden="true" style={{ width: 44, height: 3, background: "var(--gy-copper-500)" }} />
              <p style={{ font: "var(--gy-type-lede)", color: "var(--gy-ink-700)", margin: 0, maxWidth: "var(--gy-measure-lede)" }}>
                Guildyard LLC develops and tests practical business ideas, giving each venture the freedom to establish its own audience, identity, and operating model.
              </p>
              <Button variant="primary" size="lg" iconRight="arrow-right" onClick={() => onNavigate("journal")}>Read the Journal</Button>
            </div>
            <aside style={{ borderTop: "3px solid var(--gy-ink-800)", paddingTop: 22, display: "flex", flexDirection: "column", gap: 18 }}>
              <span style={{ font: "var(--gy-type-meta)", letterSpacing: "var(--gy-tracking-wider)", textTransform: "uppercase", color: "var(--gy-ink-500)" }}>What this is</span>
              <p style={{ font: "var(--gy-type-prose)", color: "var(--gy-ink-800)", margin: 0 }}>
                A parent company, not an operating brand. Guildyard holds ownership and continuity; the ventures it develops carry their own names, audiences, and commercial models, and are not required to use the Guildyard name publicly.
              </p>
              <a href="#" onClick={(e) => { e.preventDefault(); onNavigate("about"); }} style={{ font: "var(--gy-type-meta)", letterSpacing: "var(--gy-tracking-wider)", textTransform: "uppercase", color: "var(--gy-copper-600)", borderBottom: "none", display: "inline-flex", alignItems: "center", gap: 7 }}>
                More about the model <Icon name="arrow-right" size={13} />
              </a>
            </aside>
          </div>
        </Container>
      </section>

      {/* The model, three parts */}
      <section className="gy-band" style={{ padding: "88px 0", background: "var(--gy-ink-100)" }}>
        <Container>
          <RuleLabel align="left" tone="ink">How the umbrella works</RuleLabel>
          <div className="gy-thirds" style={{ marginTop: 44 }}>
            {[["01", "Ideas are tested, not launched", "An idea earns its next stage by answering a question that was written down before the work began."],
              ["02", "Each venture keeps its own identity", "Audience, name, offer and commercial model belong to the venture. The parent name stays out of the way."],
              ["03", "Continuity sits with the parent", "Ownership, records and the decisions already made persist here, so nothing has to be re-argued from scratch."]].map(([n, t, b]) => (
              <div key={n} style={{ display: "flex", flexDirection: "column", gap: 13, paddingTop: 18, borderTop: "3px solid var(--gy-copper-500)" }}>
                <span style={{ font: "var(--gy-type-meta)", letterSpacing: "var(--gy-tracking-wide)", color: "var(--gy-copper-600)" }}>{n}</span>
                <h3 style={{ font: "var(--gy-weight-semibold) var(--gy-text-xl)/1.26 var(--gy-font-serif)", color: "var(--gy-ink-900)" }}>{t}</h3>
                <p style={{ font: "var(--gy-type-body)", color: "var(--gy-ink-700)", margin: 0 }}>{b}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Journal */}
      <section style={{ padding: "88px 0 96px" }}>
        <Container>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 40, flexWrap: "wrap" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 14, maxWidth: 640 }}>
              <span style={{ font: "var(--gy-type-meta)", letterSpacing: "var(--gy-tracking-wider)", textTransform: "uppercase", color: "var(--gy-copper-600)" }}>The Guildyard Journal</span>
              <h2 style={{ font: "var(--gy-weight-semibold) var(--gy-text-3xl)/1.2 var(--gy-font-serif)", letterSpacing: "var(--gy-tracking-tight)", color: "var(--gy-ink-900)" }}>
                Original articles and field notes about building, testing, and operating practical business ventures.
              </h2>
              <p style={{ font: "var(--gy-type-body)", color: "var(--gy-text-secondary)", margin: 0 }}>Free to read. Not a lead magnet.</p>
            </div>
            <Button variant="secondary" size="sm" iconRight="arrow-right" onClick={() => onNavigate("journal")}>All articles</Button>
          </div>
          <div style={{ marginTop: 40, borderTop: "1px solid var(--gy-ink-800)" }}>
            {latest.map((a) => <ArticleRow key={a.id} a={a} onOpen={onOpenArticle} />)}
          </div>
        </Container>
      </section>
    </div>
  );
}
Object.assign(window, { HomeView });

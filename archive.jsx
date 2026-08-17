const { Tabs, Pagination, Input, Field, Divider, ArticleMeta } = window.GuildyardDesignSystem_59975b;

function ArchiveView({ onOpenArticle }) {
  const { Container } = window;
  const all = window.GY_ARTICLES;
  const [cat, setCat] = React.useState("all");
  const [page, setPage] = React.useState(1);
  const tabs = [{ id: "all", label: "All", count: all.length },
    ...window.GY_CATEGORIES.map((c) => ({ id: c, label: c, count: all.filter((a) => a.category === c).length }))];
  const rows = cat === "all" ? all : all.filter((a) => a.category === cat);
  const years = [...new Set(rows.map((a) => a.iso.slice(0, 4)))].sort().reverse();
  return (
    <section style={{ padding: "72px 0 96px" }}>
      <Container>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 40, flexWrap: "wrap" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 14, maxWidth: 620 }}>
            <span style={{ font: "var(--gy-type-meta)", letterSpacing: "var(--gy-tracking-wider)", textTransform: "uppercase", color: "var(--gy-copper-600)" }}>Archive</span>
            <h1 style={{ font: "var(--gy-weight-semibold) var(--gy-text-4xl)/1.16 var(--gy-font-serif)", letterSpacing: "-0.012em", color: "var(--gy-ink-900)" }}>Everything the Journal has published</h1>
            <p style={{ font: "var(--gy-type-body)", color: "var(--gy-text-secondary)", margin: 0 }}>Newest first. {rows.length} articles.</p>
          </div>
          <div className="gy-search">
            <Field label="Search the archive" htmlFor="arch-q"><Input id="arch-q" size="sm" icon="search" placeholder="Keyword or category" /></Field>
          </div>
        </div>

        <div style={{ marginTop: 36 }}><Tabs items={tabs} activeId={cat} onChange={(id) => { setCat(id); setPage(1); }} /></div>

        {years.map((y) => (
          <div key={y} style={{ marginTop: 48 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 18, paddingBottom: 12, borderBottom: "1px solid var(--gy-ink-800)" }}>
              <span style={{ font: "var(--gy-weight-medium) var(--gy-text-2xl)/1 var(--gy-font-mono)", color: "var(--gy-ink-900)" }}>{y}</span>
              <span style={{ font: "var(--gy-type-meta)", letterSpacing: "var(--gy-tracking-wide)", textTransform: "uppercase", color: "var(--gy-ink-500)" }}>{rows.filter((a) => a.iso.startsWith(y)).length} articles</span>
            </div>
            {rows.filter((a) => a.iso.startsWith(y)).map((a) => (
              <div key={a.id} className="gy-archive-row" onClick={() => onOpenArticle(a)}>
                <span style={{ font: "var(--gy-type-meta)", letterSpacing: "var(--gy-tracking-wide)", color: "var(--gy-ink-500)" }}>{a.iso}</span>
                <span style={{ font: "var(--gy-weight-semibold) var(--gy-text-lg)/1.3 var(--gy-font-serif)", color: "var(--gy-ink-900)" }}>{a.title}</span>
                <span style={{ font: "var(--gy-type-meta)", letterSpacing: "var(--gy-tracking-wide)", textTransform: "uppercase", color: "var(--gy-copper-600)" }}>{a.category}</span>
                <span style={{ font: "var(--gy-type-meta)", letterSpacing: "var(--gy-tracking-wide)", textTransform: "uppercase", color: "var(--gy-ink-400)", textAlign: "right" }}>{a.kind}</span>
              </div>
            ))}
          </div>
        ))}

        <div style={{ display: "flex", justifyContent: "center", marginTop: 44 }}>
          <Pagination page={page} pageCount={3} onChange={setPage} />
        </div>
      </Container>
    </section>
  );
}
Object.assign(window, { ArchiveView });

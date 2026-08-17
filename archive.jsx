const { Tabs, Pagination, Input, Field, Divider, ArticleMeta } = window.GuildyardDesignSystem_59975b;

const PAGE_SIZE = 4;

function ArchiveView({ onOpenArticle }) {
  const { Container } = window;
  const all = window.GY_ARTICLES;
  const [cat, setCat] = React.useState("all");
  const [page, setPage] = React.useState(1);
  const [query, setQuery] = React.useState("");
  const tabs = [{ id: "all", label: "All", count: all.length },
    ...window.GY_CATEGORIES.map((c) => ({ id: c, label: c, count: all.filter((a) => a.category === c).length }))];
  const q = query.trim().toLowerCase();
  const filtered = all.filter((a) => {
    if (!q && cat !== "all" && a.category !== cat) return false;
    if (!q) return true;
    return [a.title, a.lede, a.category, a.kind, a.date].join(" ").toLowerCase().indexOf(q) !== -1;
  });
  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const current = Math.min(page, pageCount);
  const pageRows = filtered.slice((current - 1) * PAGE_SIZE, current * PAGE_SIZE);
  const years = [...new Set(pageRows.map((a) => a.iso.slice(0, 4)))].sort().reverse();
  const goPage = (n) => {
    setPage(n);
    window.scrollTo(0, 0);
  };
  return (
    <section style={{ padding: "72px 0 96px" }}>
      <Container>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 40, flexWrap: "wrap" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 14, maxWidth: 620 }}>
            <span style={{ font: "var(--gy-type-meta)", letterSpacing: "var(--gy-tracking-wider)", textTransform: "uppercase", color: "var(--gy-copper-600)" }}>Archive</span>
            <h1 style={{ font: "var(--gy-weight-semibold) var(--gy-text-4xl)/1.16 var(--gy-font-serif)", letterSpacing: "-0.012em", color: "var(--gy-ink-900)" }}>Everything the Journal has published</h1>
            <p style={{ font: "var(--gy-type-body)", color: "var(--gy-text-secondary)", margin: 0 }}>
              Newest first. {filtered.length} {filtered.length === 1 ? "article" : "articles"}{pageCount > 1 ? ". Page " + current + " of " + pageCount : ""}.
            </p>
          </div>
          <div className="gy-search">
            <Field label="Search the archive" htmlFor="arch-q">
              <Input id="arch-q" size="sm" icon="search" placeholder="Keyword or category" value={query} onChange={(e) => { setQuery(e.target.value); setCat("all"); setPage(1); }} />
            </Field>
          </div>
        </div>

        <div style={{ marginTop: 36 }}><Tabs items={tabs} activeId={cat} onChange={(id) => { setCat(id); setPage(1); }} /></div>

        {pageRows.length === 0 && (
          <p style={{ font: "var(--gy-type-body)", color: "var(--gy-text-secondary)", margin: "48px 0 0" }}>
            {q ? "No articles match that search." : "Nothing published in this category yet."}
          </p>
        )}

        {years.map((y) => (
          <div key={y} style={{ marginTop: 48 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 18, paddingBottom: 12, borderBottom: "1px solid var(--gy-ink-800)" }}>
              <span style={{ font: "var(--gy-weight-medium) var(--gy-text-2xl)/1 var(--gy-font-mono)", color: "var(--gy-ink-900)" }}>{y}</span>
              <span style={{ font: "var(--gy-type-meta)", letterSpacing: "var(--gy-tracking-wide)", textTransform: "uppercase", color: "var(--gy-ink-500)" }}>{pageRows.filter((a) => a.iso.startsWith(y)).length} on this page</span>
            </div>
            {pageRows.filter((a) => a.iso.startsWith(y)).map((a) => (
              <div key={a.id} className="gy-archive-row" onClick={() => onOpenArticle(a)}>
                <span style={{ font: "var(--gy-type-meta)", letterSpacing: "var(--gy-tracking-wide)", color: "var(--gy-ink-500)" }}>{a.iso}</span>
                <span style={{ font: "var(--gy-weight-semibold) var(--gy-text-lg)/1.3 var(--gy-font-serif)", color: "var(--gy-ink-900)" }}>{a.title}</span>
                <span style={{ font: "var(--gy-type-meta)", letterSpacing: "var(--gy-tracking-wide)", textTransform: "uppercase", color: "var(--gy-copper-600)" }}>{a.category}</span>
                <span style={{ font: "var(--gy-type-meta)", letterSpacing: "var(--gy-tracking-wide)", textTransform: "uppercase", color: "var(--gy-ink-400)", textAlign: "right" }}>{a.kind}</span>
              </div>
            ))}
          </div>
        ))}

        {pageCount > 1 && (
          <div style={{ display: "flex", justifyContent: "center", marginTop: 44 }}>
            <Pagination page={current} pageCount={pageCount} onChange={goPage} />
          </div>
        )}
      </Container>
    </section>
  );
}
Object.assign(window, { ArchiveView });

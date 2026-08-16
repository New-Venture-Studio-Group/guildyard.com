const { Prose, ArticleMeta, Breadcrumbs, Divider, Button, IconButton, Tooltip, Icon, Tag } = window.GuildyardDesignSystem_59975b;

function ArticleView({ article, onNavigate, onOpenArticle }) {
  const { Container } = window;
  const a = article || window.GY_ARTICLES[0];
  const more = window.GY_ARTICLES.filter((x) => x.id !== a.id).slice(0, 3);
  return (
    <div>
      <section style={{ padding: "40px 0 0" }}>
        <Container width={1160}>
          <Breadcrumbs items={[{ id: "journal", label: "Journal" }, { label: a.category }]} onNavigate={(id) => id && onNavigate(id)} />
        </Container>
      </section>

      <article style={{ padding: "36px 0 0" }}>
        <Container width={1160}>
          <header style={{ maxWidth: 820, display: "flex", flexDirection: "column", gap: 20 }}>
            <ArticleMeta date={a.date} category={a.category} readingTime={a.read} />
            <h1 style={{ fontFamily: "var(--gy-font-serif)", fontWeight: "var(--gy-weight-semibold)", fontSize: "clamp(34px,3.9vw,54px)", lineHeight: 1.1, letterSpacing: "-0.014em", color: "var(--gy-ink-900)" }}>{a.title}</h1>
            <p style={{ font: "var(--gy-type-lede)", color: "var(--gy-ink-700)", margin: 0, maxWidth: "var(--gy-measure-lede)" }}>{a.lede}</p>
            <div style={{ display: "flex", alignItems: "center", gap: 14, paddingTop: 6 }}>
              <span aria-hidden="true" style={{ width: 44, height: 3, background: "var(--gy-copper-500)" }} />
              <span style={{ font: "var(--gy-type-meta)", letterSpacing: "var(--gy-tracking-wide)", textTransform: "uppercase", color: "var(--gy-ink-500)" }}>{a.kind} · The Guildyard Journal</span>
            </div>
          </header>

          <div style={{ display: "grid", gridTemplateColumns: "minmax(0,var(--gy-measure-prose)) 1fr", gap: 72, marginTop: 48, alignItems: "start" }}>
            <Prose>
              <p>The first person who reads an offer is not a customer. They are a measurement, and the measurement is usually thrown away, because it arrives before anyone has decided what it would mean.</p>
              <h2>Decide what the reader is being asked</h2>
              <p>A reader can be asked for attention, for an opinion, or for money. These are different tests with different failure modes, and running them together produces a result that cannot be interpreted. Pick one, and write down which.</p>
              <p>The temptation is to ask for all three at once: a page that explains, persuades, and sells. That is usually justified on the grounds that a visitor is expensive and should be fully used. That reasoning is sound for a business with a known offer. For a venture still establishing whether the offer exists, it destroys the only information the visit could have produced.</p>
              <h4>Field note</h4>
              <ul>
                <li>Write the claim the page is testing, in one sentence.</li>
                <li>Name the number that would falsify it.</li>
                <li>Set the date you will look at that number.</li>
              </ul>
              <h2>Interest is not evidence</h2>
              <p>Encouragement is the cheapest thing a reader can give, and the most likely thing to be offered. Evidence costs the reader something: a reply, a schedule, a payment, a name they have to defend later.</p>
              <blockquote><p>Evidence beats enthusiasm, and a written date beats both.</p></blockquote>
              <p>This is why a small, specific response is worth more than a large, vague one. Ten people who each did something inconvenient tell you more than a thousand who nodded.</p>
              <hr />
              <h2>What the first reader is owed</h2>
              <p>Clarity, mostly. What this is, who it is for, what it costs, and what it does not do. Stating the limits is not modesty; it is the fastest way to find the reader who wants exactly this, and to stop wasting the ones who do not.</p>
              <p>The venture that writes its exclusions down finds its audience sooner, because the audience can recognise itself.</p>
            </Prose>

            <aside style={{ display: "flex", flexDirection: "column", gap: 22, position: "sticky", top: 24 }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 12, paddingBottom: 20, borderBottom: "var(--gy-border-subtle)" }}>
                <span style={{ font: "var(--gy-type-meta)", letterSpacing: "var(--gy-tracking-wider)", textTransform: "uppercase", color: "var(--gy-ink-500)" }}>Share</span>
                <div style={{ display: "flex", gap: 8 }}>
                  <Tooltip content="Copy permalink"><IconButton icon="link" label="Copy permalink" variant="outline" size="sm" /></Tooltip>
                  <Tooltip content="Email this article"><IconButton icon="mail" label="Email this article" variant="outline" size="sm" /></Tooltip>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <span style={{ font: "var(--gy-type-meta)", letterSpacing: "var(--gy-tracking-wider)", textTransform: "uppercase", color: "var(--gy-ink-500)" }}>Category</span>
                <Tag onClick={() => onNavigate("journal")}>{a.category}</Tag>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10, paddingTop: 20, borderTop: "var(--gy-border-subtle)" }}>
                <span style={{ font: "var(--gy-type-meta)", letterSpacing: "var(--gy-tracking-wider)", textTransform: "uppercase", color: "var(--gy-ink-500)" }}>Corrections</span>
                <p style={{ font: "var(--gy-type-body-sm)", color: "var(--gy-text-secondary)", margin: 0 }}>
                  Articles are corrected in place and the change is noted at the foot. See the <a href="#" onClick={(e) => { e.preventDefault(); onNavigate("policy"); }}>editorial policy</a>.
                </p>
              </div>
            </aside>
          </div>
        </Container>
      </article>

      <section style={{ padding: "80px 0 96px", marginTop: 64, borderTop: "var(--gy-border-subtle)" }}>
        <Container>
          <span style={{ font: "var(--gy-type-meta)", letterSpacing: "var(--gy-tracking-wider)", textTransform: "uppercase", color: "var(--gy-copper-600)" }}>More from the Journal</span>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 32, marginTop: 26 }}>
            {more.map((m) => (
              <div key={m.id} onClick={() => onOpenArticle(m)} style={{ cursor: "pointer", display: "flex", flexDirection: "column", gap: 12, paddingTop: 18, borderTop: "3px solid var(--gy-ink-800)" }}>
                <ArticleMeta date={m.date} category={m.category} />
                <h3 style={{ font: "var(--gy-weight-semibold) var(--gy-text-xl)/1.26 var(--gy-font-serif)", color: "var(--gy-ink-900)" }}>{m.title}</h3>
                <p style={{ font: "var(--gy-type-body)", color: "var(--gy-text-secondary)", margin: 0 }}>{m.lede}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
Object.assign(window, { ArticleView });

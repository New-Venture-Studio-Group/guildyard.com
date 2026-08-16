const { Prose, SectionHeading, Divider, Button, Alert, RuleLabel, Icon } = window.GuildyardDesignSystem_59975b;

function AboutView({ onNavigate }) {
  const { Container } = window;
  return (
    <section style={{ padding: "72px 0 96px" }}>
      <Container>
        <div style={{ display: "grid", gridTemplateColumns: "minmax(0,var(--gy-measure-prose)) 1fr", gap: 72, alignItems: "start" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            <SectionHeading eyebrow="About" level={1} title="Guildyard LLC develops and tests independent ventures and brands." />
            <Prose>
              <p>Guildyard LLC is a Texas umbrella company used to develop and test independent business ideas and DBAs. It is a parent company rather than an operating brand: it does not sell a single defined product or service to a fixed customer segment.</p>
              <h2>What the umbrella provides</h2>
              <p>Continuity and ownership. Records, decisions and accumulated judgement live at the parent, so an idea that reaches its next stage does not begin from nothing — and an idea that stops does so on the record.</p>
              <h2>What each venture keeps</h2>
              <p>Everything customer-facing. A venture establishes its own name, audience, website, offer and commercial model, and is not required to use the Guildyard name publicly.</p>
              <h2>What “Built on Intent. Focused on Value.” means</h2>
              <p>Intent is written before work begins: the claim being tested, the evidence that would settle it, and the date it will be looked at. Value is the test applied afterwards — whether the result was worth what it cost to learn. “Built” here refers to businesses, systems, brands and operating ideas, not physical structures.</p>
              <h2>What Guildyard is not</h2>
              <p>Not a construction or contracting company, a real-estate developer, an architecture or engineering practice, an agency, a fund, an incubator, or a software company. Where those readings have been inferred from the mark's geometry, they are wrong.</p>
            </Prose>
          </div>
          <aside style={{ display: "flex", flexDirection: "column", gap: 26, position: "sticky", top: 24 }}>
            <div style={{ paddingTop: 18, borderTop: "3px solid var(--gy-ink-800)", display: "flex", flexDirection: "column", gap: 12 }}>
              <span style={{ font: "var(--gy-type-meta)", letterSpacing: "var(--gy-tracking-wider)", textTransform: "uppercase", color: "var(--gy-ink-500)" }}>In one line</span>
              <p style={{ font: "var(--gy-type-prose)", color: "var(--gy-ink-800)", margin: 0 }}>Guildyard LLC develops and tests independent ventures and brands.</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <span style={{ font: "var(--gy-type-meta)", letterSpacing: "var(--gy-tracking-wider)", textTransform: "uppercase", color: "var(--gy-ink-500)" }}>Registered</span>
              <span style={{ font: "var(--gy-type-body)", color: "var(--gy-ink-700)" }}>Texas, United States</span>
            </div>
            <Divider />
            <div style={{ display: "flex", flexDirection: "column", gap: 12, alignItems: "flex-start" }}>
              <span style={{ font: "var(--gy-type-meta)", letterSpacing: "var(--gy-tracking-wider)", textTransform: "uppercase", color: "var(--gy-ink-500)" }}>The Journal</span>
              <p style={{ font: "var(--gy-type-body)", color: "var(--gy-text-secondary)", margin: 0 }}>Most of the depth on this site is published there, free to read.</p>
              <Button size="sm" variant="secondary" iconRight="arrow-right" onClick={() => onNavigate("journal")}>Read the Journal</Button>
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
}

function PolicyView({ onNavigate }) {
  const { Container } = window;
  return (
    <section style={{ padding: "72px 0 96px" }}>
      <Container>
        <div style={{ maxWidth: "var(--gy-measure-prose)", display: "flex", flexDirection: "column", gap: 32 }}>
          <SectionHeading eyebrow="The Guildyard Journal" level={1} title="Editorial policy" description="What the Journal publishes, how it is funded, and how it handles being wrong." />
          <Alert tone="info" title="The Journal is free to read">It is not a lead magnet, a gated download, or advertising for a Guildyard venture.</Alert>
          <Prose>
            <h2>What we publish</h2>
            <p>Articles and field notes on venture building, market evidence, operating systems, brand architecture and disciplined business decision-making. Essays argue a position at length; field notes report a single observation and stay short.</p>
            <h2>Who it is for</h2>
            <p>Independent operators, founders, small-business builders, and product and operations leaders — anyone evaluating or building a practical venture.</p>
            <h2>Evidence and sources</h2>
            <p>Claims that rest on outside work cite it and link to it. Where a claim rests on our own experience, it says so plainly rather than borrowing the authority of research.</p>
            <h2>Corrections</h2>
            <p>Errors of fact are corrected in the article itself, with a dated note at the foot describing what changed. Articles are not silently rewritten and are not deleted to hide a mistake.</p>
            <h2>Independence</h2>
            <p>No sponsored posts, no paid placements, no affiliate links. Nothing is published in exchange for consideration of any kind.</p>
            <h2>Conflicts of interest</h2>
            <p>Where an article touches on work Guildyard has a stake in, the relationship is disclosed in the article, at the top.</p>
            <h2>Reader contact</h2>
            <p>Corrections, disagreements and better evidence are welcome and are read. Not every message can be answered.</p>
          </Prose>
          <Divider />
          <RuleLabel align="left" tone="ink">Built on Intent. Focused on Value.</RuleLabel>
        </div>
      </Container>
    </section>
  );
}
Object.assign(window, { AboutView, PolicyView });

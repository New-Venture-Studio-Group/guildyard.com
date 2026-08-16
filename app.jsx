function SiteApp({ initialView = "home", initialArticle = null }) {
  const { SiteHeader, SiteFooter, HomeView, JournalView, ArticleView, ArchiveView, AboutView, PolicyView } = window;
  const [view, setView] = React.useState(initialView);
  const [article, setArticle] = React.useState(initialArticle);
  const go = (v) => { setView(v); window.scrollTo(0, 0); };
  const open = (a) => { setArticle(a); setView("article"); window.scrollTo(0, 0); };
  return (
    <div style={{ background: "var(--gy-surface-page)", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <SiteHeader view={view} onNavigate={go} />
      <main style={{ flex: 1 }}>
        {view === "home" && <HomeView onNavigate={go} onOpenArticle={open} />}
        {view === "journal" && <JournalView onNavigate={go} onOpenArticle={open} />}
        {view === "article" && <ArticleView article={article} onNavigate={go} onOpenArticle={open} />}
        {view === "archive" && <ArchiveView onOpenArticle={open} />}
        {view === "about" && <AboutView onNavigate={go} />}
        {view === "policy" && <PolicyView onNavigate={go} />}
      </main>
      <SiteFooter onNavigate={go} />
    </div>
  );
}
Object.assign(window, { SiteApp });

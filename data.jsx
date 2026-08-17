/* Opening Journal pieces published with the site. These are editorial
   examples, not a back-catalog. No ventures, customers, results, people,
   addresses or company history are invented. */
const GY_CATEGORIES = ["Venture building", "Market evidence", "Operating systems", "Brand architecture", "Decision making"];

const GY_ARTICLES = [
  { id: "first-reader", title: "What a venture owes its first reader", kind: "Essay", category: "Venture building", date: "16 August 2026", iso: "2026-08-16", read: "9 min read",
    lede: "The first person who reads your offer is not a customer. They are a test, and most ventures waste the result." },
  { id: "falsify", title: "Write the number that would prove you wrong", kind: "Field note", category: "Market evidence", date: "13 August 2026", iso: "2026-08-13", read: "6 min read",
    lede: "A claim without a falsifying number is a preference. Naming the number in advance is the cheapest discipline available." },
  { id: "decide-once", title: "Deciding once, then writing it down", kind: "Essay", category: "Operating systems", date: "11 August 2026", iso: "2026-08-11", read: "11 min read",
    lede: "Most operating drag is not indecision. It is re-deciding the same argument, quarterly, with no record of the last one." },
  { id: "naming-late", title: "Name it late", kind: "Field note", category: "Brand architecture", date: "8 August 2026", iso: "2026-08-08", read: "5 min read",
    lede: "Naming is the only part of a venture that can be finished in an afternoon, which is exactly why it gets done first." },
  { id: "umbrella", title: "Why an umbrella, and what it is not", kind: "Essay", category: "Brand architecture", date: "6 August 2026", iso: "2026-08-06", read: "8 min read",
    lede: "A parent company can provide continuity without demanding that every venture wear its name." },
  { id: "cheap-evidence", title: "Cheap evidence first", kind: "Field note", category: "Market evidence", date: "4 August 2026", iso: "2026-08-04", read: "7 min read",
    lede: "Rank the questions by what it costs to answer them, then answer the cheap ones in public." },
  { id: "stop-rule", title: "The stop rule you write before you start", kind: "Essay", category: "Decision making", date: "2 August 2026", iso: "2026-08-02", read: "10 min read",
    lede: "Deciding when to stop is a design problem, and it is much easier to solve before there is anything to defend." },
  { id: "one-page", title: "One page, or it isn't a plan", kind: "Field note", category: "Operating systems", date: "31 July 2026", iso: "2026-07-31", read: "4 min read",
    lede: "Length is a proxy for unresolved thinking. The page limit does the arguing for you." },
  { id: "audience-of-one", title: "An audience of one is still an audience", kind: "Essay", category: "Venture building", date: "29 July 2026", iso: "2026-07-29", read: "8 min read",
    lede: "Small does not mean unreal. What matters is whether the one is repeatable." }
];
Object.assign(window, { GY_ARTICLES, GY_CATEGORIES });

/* @ds-bundle: {"format":4,"namespace":"GuildyardDesignSystem_59975b","components":[{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"RuleLabel","sourcePath":"components/brand/RuleLabel.jsx"},{"name":"SectionHeading","sourcePath":"components/brand/SectionHeading.jsx"},{"name":"AbstractField","sourcePath":"components/core/AbstractField.jsx"},{"name":"ArticleMeta","sourcePath":"components/core/ArticleMeta.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Divider","sourcePath":"components/core/Divider.jsx"},{"name":"Figure","sourcePath":"components/core/Figure.jsx"},{"name":"GY_ICON_CDN","sourcePath":"components/core/Icon.jsx"},{"name":"GY_ICONS","sourcePath":"components/core/Icon.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Prose","sourcePath":"components/core/Prose.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Breadcrumbs","sourcePath":"components/navigation/Breadcrumbs.jsx"},{"name":"NavBar","sourcePath":"components/navigation/NavBar.jsx"},{"name":"Pagination","sourcePath":"components/navigation/Pagination.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/brand/Logo.jsx":"76bc664e68c2","components/brand/RuleLabel.jsx":"afa3a82449f9","components/brand/SectionHeading.jsx":"90f7b5c3bd94","components/core/AbstractField.jsx":"3abc243aa5cd","components/core/ArticleMeta.jsx":"7d2512051056","components/core/Badge.jsx":"52e94d021771","components/core/Button.jsx":"2e7a45be7d5d","components/core/Card.jsx":"b8d9fe9e7994","components/core/Divider.jsx":"904861ea348d","components/core/Figure.jsx":"31e48c1c1779","components/core/Icon.jsx":"806e42de7659","components/core/IconButton.jsx":"11c971b78af5","components/core/Prose.jsx":"5a95336cc86d","components/core/Tag.jsx":"ccc10a69d274","components/feedback/Alert.jsx":"f5f993333c49","components/feedback/Dialog.jsx":"621ab14616c2","components/feedback/Toast.jsx":"7ef886f70cf0","components/feedback/Tooltip.jsx":"81ea315dc8e7","components/forms/Checkbox.jsx":"1dec34431b8e","components/forms/Field.jsx":"5d3b6fe3af64","components/forms/Input.jsx":"fb03053f01d6","components/forms/Radio.jsx":"9b1f57427900","components/forms/Select.jsx":"618d05370bcf","components/forms/Switch.jsx":"8c9e18bd87dc","components/forms/Textarea.jsx":"aabb911f5562","components/navigation/Breadcrumbs.jsx":"06cdd0e185c8","components/navigation/NavBar.jsx":"479311e9c914","components/navigation/Pagination.jsx":"fbcae8a3b1ff","components/navigation/Tabs.jsx":"ab3ff7f65e3e","guidelines/image-slot.js":"fff26d081c8d","ui_kits/guildyard-site/app.jsx":"8e3164c27f85","ui_kits/guildyard-site/archive.jsx":"71c9bb1540d0","ui_kits/guildyard-site/article.jsx":"e84df21ae9da","ui_kits/guildyard-site/data.jsx":"15b6a8aa825f","ui_kits/guildyard-site/home.jsx":"7c273d4ac0a8","ui_kits/guildyard-site/journal.jsx":"34943f68d9cb","ui_kits/guildyard-site/pages.jsx":"3d0cc45f9136","ui_kits/guildyard-site/site-parts.jsx":"506ce811f70e"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.GuildyardDesignSystem_59975b = window.GuildyardDesignSystem_59975b || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const GY_LOGO_FILES = {
  lockup: {
    charcoal: "guildyard-lockup-charcoal.svg",
    ivory: "guildyard-lockup-ivory.svg",
    copper: "guildyard-lockup-copper.svg",
    black: "guildyard-lockup-black.svg"
  },
  symbol: {
    charcoal: "guildyard-symbol-charcoal.svg",
    ivory: "guildyard-symbol-ivory.svg",
    copper: "guildyard-symbol-copper.svg",
    black: "guildyard-symbol-black.svg"
  },
  tagline: {
    charcoal: "guildyard-tagline-charcoal.svg",
    ivory: "guildyard-tagline-ivory.svg",
    copper: "guildyard-tagline-copper.svg",
    black: "guildyard-tagline-charcoal.svg"
  }
};

/* Resolves the design-system root from the loaded bundle so the marks work
   from any directory depth. Pass `basePath` to override. */
function gyRoot() {
  if (typeof document === "undefined") return "";
  const s = Array.prototype.find.call(document.querySelectorAll("script[src]"), x => x.src.indexOf("_ds_bundle.js") !== -1);
  return s ? s.src.replace(/_ds_bundle\.js.*$/, "") : "";
}
function Logo({
  variant = "lockup",
  tone = "charcoal",
  height,
  basePath,
  title = "Guildyard LLC",
  style,
  ...rest
}) {
  const h = height || (variant === "symbol" ? 32 : variant === "tagline" ? 14 : 34);
  const file = (GY_LOGO_FILES[variant] || GY_LOGO_FILES.lockup)[tone] || GY_LOGO_FILES[variant].charcoal;
  /* A page may declare the marks up front as ordinary <img data-gy-logo="…">
     tags. Preferring those makes the marks survive offline bundling, where the
     runtime-computed URL below has nothing to resolve against. */
  let src = (basePath != null ? basePath.replace(/\/?$/, "/") : gyRoot()) + "assets/logo/" + file;
  if (typeof document !== "undefined") {
    const declared = document.querySelector('img[data-gy-logo="' + file + '"]');
    if (declared) src = declared.currentSrc || declared.src;
  }
  return /*#__PURE__*/React.createElement("img", _extends({
    src: src,
    alt: title,
    style: {
      height: h,
      width: "auto",
      display: "block",
      flex: "0 0 auto",
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/brand/RuleLabel.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* The lockup's "— L L C —" treatment, generalised: a wide-tracked label flanked
   by hairline rules. The brand's signature divider. */
function RuleLabel({
  children,
  tone = "copper",
  align = "center",
  style,
  ...rest
}) {
  const line = tone === "ivory" ? "rgba(246,243,238,.45)" : tone === "ink" ? "var(--gy-ink-300)" : "var(--gy-copper-500)";
  const fg = tone === "ivory" ? "var(--gy-ink-50)" : tone === "ink" ? "var(--gy-ink-600)" : "var(--gy-copper-600)";
  const rule = {
    content: '""',
    flex: 1,
    height: 1,
    background: line
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--gy-space-4)",
      ...style
    }
  }, rest), align !== "left" && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: rule
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--gy-type-meta)",
      letterSpacing: "var(--gy-tracking-widest)",
      textTransform: "uppercase",
      color: fg,
      whiteSpace: "nowrap"
    }
  }, children), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: rule
  }));
}
Object.assign(__ds_scope, { RuleLabel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/RuleLabel.jsx", error: String((e && e.message) || e) }); }

// components/brand/SectionHeading.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SectionHeading({
  eyebrow,
  title,
  description,
  tone = "light",
  align = "left",
  level = 2,
  style,
  ...rest
}) {
  const dark = tone === "dark";
  const Tag = "h" + level;
  return /*#__PURE__*/React.createElement("header", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--gy-space-3)",
      textAlign: align,
      alignItems: align === "center" ? "center" : "flex-start",
      maxWidth: "var(--gy-measure-lede)",
      ...style
    }
  }, rest), eyebrow && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--gy-type-meta)",
      letterSpacing: "var(--gy-tracking-wider)",
      textTransform: "uppercase",
      color: dark ? "var(--gy-copper-400)" : "var(--gy-copper-600)"
    }
  }, eyebrow), /*#__PURE__*/React.createElement(Tag, {
    style: {
      font: level === 1 ? "var(--gy-type-h1)" : "var(--gy-type-h2)",
      letterSpacing: "var(--gy-tracking-tight)",
      color: dark ? "var(--gy-ink-50)" : "var(--gy-text-primary)"
    }
  }, title), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 44,
      height: 3,
      background: "var(--gy-copper-500)"
    }
  }), description && /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--gy-type-lede)",
      color: dark ? "var(--gy-text-on-inverse-muted)" : "var(--gy-text-body)",
      margin: 0
    }
  }, description));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/core/AbstractField.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* The sanctioned non-photographic fill. Restrained material texture built from
   CSS hairlines — the same rule vocabulary the layout already uses — for the
   rare composition that needs a field and has no photograph. It is texture, not
   decoration: never a coloured or directional gradient, never an illustration,
   and never a stand-in labelled as a missing image. */
const GY_FIELDS = {
  rules: c => `repeating-linear-gradient(to bottom,${c} 0 1px,transparent 1px 9px)`,
  grid: c => `repeating-linear-gradient(to bottom,${c} 0 1px,transparent 1px 24px),repeating-linear-gradient(to right,${c} 0 1px,transparent 1px 24px)`,
  hatch: c => `repeating-linear-gradient(45deg,${c} 0 1px,transparent 1px 7px)`
};
function AbstractField({
  pattern = "rules",
  tone = "parchment",
  radius = "md",
  children,
  style,
  ...rest
}) {
  const tones = {
    parchment: {
      bg: "var(--gy-ink-50)",
      line: "rgba(35,36,40,.07)"
    },
    paper: {
      bg: "var(--gy-ink-100)",
      line: "rgba(35,36,40,.08)"
    },
    charcoal: {
      bg: "var(--gy-ink-800)",
      line: "rgba(246,243,238,.07)"
    },
    copper: {
      bg: "var(--gy-copper-100)",
      line: "rgba(165,106,67,.14)"
    }
  };
  const t = tones[tone] || tones.parchment;
  const build = GY_FIELDS[pattern] || GY_FIELDS.rules;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: "relative",
      background: t.bg,
      backgroundImage: build(t.line),
      borderRadius: radius === "none" ? 0 : "var(--gy-radius-" + radius + ")",
      overflow: "hidden",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { AbstractField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/AbstractField.jsx", error: String((e && e.message) || e) }); }

// components/core/ArticleMeta.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Date · category · reading time, set in mono. The Journal's fixed byline row. */
function ArticleMeta({
  date,
  category,
  readingTime,
  tone = "light",
  separator = "·",
  style,
  ...rest
}) {
  const dark = tone === "dark";
  const color = dark ? "rgba(246,243,238,.6)" : "var(--gy-ink-500)";
  const parts = [];
  if (date) parts.push({
    k: "date",
    v: date,
    accent: false
  });
  if (category) parts.push({
    k: "cat",
    v: category,
    accent: true
  });
  if (readingTime) parts.push({
    k: "rt",
    v: readingTime,
    accent: false
  });
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--gy-space-2)",
      flexWrap: "wrap",
      font: "var(--gy-type-meta)",
      letterSpacing: "var(--gy-tracking-wide)",
      textTransform: "uppercase",
      color,
      ...style
    }
  }, rest), parts.map((p, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: p.k
  }, i > 0 && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      opacity: 0.5
    }
  }, separator), /*#__PURE__*/React.createElement("span", {
    style: {
      color: p.accent ? dark ? "var(--gy-copper-400)" : "var(--gy-copper-600)" : "inherit"
    }
  }, p.v))));
}
Object.assign(__ds_scope, { ArticleMeta });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ArticleMeta.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Badge({
  children,
  tone = "neutral",
  dot,
  style,
  ...rest
}) {
  const tones = {
    neutral: {
      bg: "var(--gy-ink-100)",
      fg: "var(--gy-ink-600)",
      dot: "var(--gy-ink-400)"
    },
    success: {
      bg: "var(--gy-status-success-soft)",
      fg: "var(--gy-status-success-fg)",
      dot: "var(--gy-status-success)"
    },
    warning: {
      bg: "var(--gy-status-warning-soft)",
      fg: "var(--gy-status-warning-fg)",
      dot: "var(--gy-status-warning)"
    },
    danger: {
      bg: "var(--gy-status-danger-soft)",
      fg: "var(--gy-status-danger-fg)",
      dot: "var(--gy-status-danger)"
    },
    info: {
      bg: "var(--gy-status-info-soft)",
      fg: "var(--gy-status-info-fg)",
      dot: "var(--gy-status-info)"
    },
    copper: {
      bg: "var(--gy-copper-100)",
      fg: "var(--gy-copper-700)",
      dot: "var(--gy-copper-500)"
    },
    inverse: {
      bg: "rgba(246,243,238,.12)",
      fg: "var(--gy-ink-50)",
      dot: "var(--gy-copper-400)"
    }
  };
  const t = tones[tone] || tones.neutral;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      height: 22,
      padding: "0 8px",
      borderRadius: "var(--gy-radius-xs)",
      background: t.bg,
      color: t.fg,
      font: "var(--gy-type-meta)",
      letterSpacing: "var(--gy-tracking-wide)",
      textTransform: "uppercase",
      whiteSpace: "nowrap",
      ...style
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 6,
      height: 6,
      borderRadius: "var(--gy-radius-full)",
      background: t.dot
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  children,
  variant = "default",
  interactive,
  padding = "md",
  style,
  ...rest
}) {
  const [hovered, setHovered] = React.useState(false);
  const pads = {
    none: 0,
    sm: "var(--gy-space-4)",
    md: "var(--gy-space-6)",
    lg: "var(--gy-space-8)"
  };
  const variants = {
    default: {
      background: "var(--gy-surface-card)",
      border: "var(--gy-border-default)",
      boxShadow: "var(--gy-shadow-xs)",
      color: "var(--gy-text-body)"
    },
    flat: {
      background: "var(--gy-ink-50)",
      border: "var(--gy-border-subtle)",
      boxShadow: "none",
      color: "var(--gy-text-body)"
    },
    inverse: {
      background: "var(--gy-surface-inverse)",
      border: "var(--gy-border-dark-subtle)",
      boxShadow: "none",
      color: "var(--gy-text-on-inverse-muted)"
    },
    accent: {
      background: "var(--gy-copper-100)",
      border: "1px solid var(--gy-copper-200)",
      boxShadow: "none",
      color: "var(--gy-copper-800)"
    }
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
    style: {
      borderRadius: "var(--gy-radius-md)",
      padding: pads[padding],
      boxSizing: "border-box",
      transition: "box-shadow var(--gy-duration-base) var(--gy-ease-standard),border-color var(--gy-duration-base) var(--gy-ease-standard)",
      ...variants[variant],
      ...(interactive ? {
        cursor: "pointer"
      } : null),
      ...(interactive && hovered ? {
        boxShadow: "var(--gy-shadow-md)",
        borderColor: "var(--gy-copper-300)"
      } : null),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Divider.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Divider({
  tone = "subtle",
  accent,
  orientation = "horizontal",
  style,
  ...rest
}) {
  const colors = {
    subtle: "var(--gy-line-subtle)",
    default: "var(--gy-line-default)",
    strong: "var(--gy-line-strong)",
    inverse: "var(--gy-line-on-inverse)"
  };
  const color = accent ? "var(--gy-line-accent)" : colors[tone];
  const vertical = orientation === "vertical";
  return /*#__PURE__*/React.createElement("hr", _extends({
    "aria-orientation": orientation,
    style: {
      border: 0,
      margin: 0,
      flex: "0 0 auto",
      background: color,
      ...(vertical ? {
        width: 1,
        alignSelf: "stretch",
        minHeight: 16
      } : {
        height: accent ? 3 : 1,
        width: accent ? 44 : "100%"
      }),
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Divider.jsx", error: String((e && e.message) || e) }); }

// components/core/Figure.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const GY_RATIOS = {
  wide: "16 / 9",
  editorial: "3 / 2",
  square: "1 / 1",
  tall: "4 / 5",
  panorama: "21 / 9"
};

/* Editorial image with caption and credit. Guildyard has no commissioned
   photography yet — Figure is the contract for when it exists, and it renders
   NOTHING rather than a placeholder when `src` is absent, so an unfinished
   composition reads as deliberate rather than broken. */
function Figure({
  src,
  alt = "",
  ratio = "editorial",
  caption,
  credit,
  bleed = false,
  scrim = false,
  overlay,
  style,
  ...rest
}) {
  if (!src) return null;
  return /*#__PURE__*/React.createElement("figure", _extends({
    style: {
      margin: 0,
      display: "flex",
      flexDirection: "column",
      gap: "var(--gy-space-3)",
      ...(bleed ? {
        width: "100vw",
        marginLeft: "calc(50% - 50vw)"
      } : null),
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      aspectRatio: GY_RATIOS[ratio] || ratio,
      overflow: "hidden",
      background: "var(--gy-ink-100)",
      borderRadius: bleed ? 0 : "var(--gy-radius-md)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block"
    }
  }), (scrim || overlay) && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      inset: 0,
      background: "var(--gy-surface-scrim)",
      pointerEvents: "none"
    }
  }), overlay && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      padding: "var(--gy-space-8)",
      color: "var(--gy-ink-50)"
    }
  }, overlay)), (caption || credit) && /*#__PURE__*/React.createElement("figcaption", {
    style: {
      display: "flex",
      gap: "var(--gy-space-4)",
      alignItems: "baseline",
      flexWrap: "wrap",
      maxWidth: "var(--gy-measure-prose)"
    }
  }, caption && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--gy-type-body-sm)",
      color: "var(--gy-text-secondary)",
      flex: 1,
      minWidth: 220
    }
  }, caption), credit && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--gy-type-meta)",
      letterSpacing: "var(--gy-tracking-wide)",
      textTransform: "uppercase",
      color: "var(--gy-ink-400)"
    }
  }, credit)));
}
Object.assign(__ds_scope, { Figure });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Figure.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Lucide, used sparingly and only for functional interface needs. The identity
   package contains no icon set; this wrapper centralises the dependency so it
   can be replaced in one line. Icons are never decorative in this system. */
const GY_ICON_CDN = "https://unpkg.com/lucide-static@0.544.0/icons/";

/* The sanctioned functional set. Anything outside it is a design decision that
   needs approval, not a default. */
const GY_ICONS = {
  menu: "menu",
  close: "x",
  search: "search",
  mail: "mail",
  arrowRight: "arrow-right",
  arrowLeft: "arrow-left",
  arrowUpRight: "arrow-up-right",
  chevronDown: "chevron-down",
  chevronRight: "chevron-right",
  chevronLeft: "chevron-left",
  externalLink: "external-link",
  check: "check",
  link: "link",
  rss: "rss"
};
function Icon({
  name,
  size = 18,
  label,
  style,
  ...rest
}) {
  const url = "url(" + GY_ICON_CDN + name + ".svg)";
  return /*#__PURE__*/React.createElement("span", _extends({
    role: label ? "img" : "presentation",
    "aria-label": label,
    "aria-hidden": label ? undefined : "true",
    style: {
      display: "inline-block",
      width: size,
      height: size,
      flex: "0 0 auto",
      background: "currentColor",
      WebkitMaskImage: url,
      maskImage: url,
      WebkitMaskSize: "contain",
      maskSize: "contain",
      WebkitMaskRepeat: "no-repeat",
      maskRepeat: "no-repeat",
      WebkitMaskPosition: "center",
      maskPosition: "center",
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { GY_ICON_CDN, GY_ICONS, Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const GY_BTN_SIZES = {
  sm: {
    padding: "0 13px",
    height: 32,
    font: "var(--gy-weight-semibold) var(--gy-text-2xs)/1 var(--gy-font-mono)",
    tracking: "var(--gy-tracking-wider)",
    icon: 14,
    gap: 7
  },
  md: {
    padding: "0 19px",
    height: 42,
    font: "var(--gy-weight-semibold) var(--gy-text-xs)/1 var(--gy-font-mono)",
    tracking: "var(--gy-tracking-wider)",
    icon: 16,
    gap: 9
  },
  lg: {
    padding: "0 27px",
    height: 52,
    font: "var(--gy-weight-semibold) var(--gy-text-sm)/1 var(--gy-font-mono)",
    tracking: "var(--gy-tracking-wider)",
    icon: 18,
    gap: 11
  }
};
function gyBtnTone(variant, hovered, active) {
  switch (variant) {
    case "accent":
      return {
        background: active ? "var(--gy-action-accent-bg-active)" : hovered ? "var(--gy-action-accent-bg-hover)" : "var(--gy-action-accent-bg)",
        color: "var(--gy-action-accent-fg)",
        border: "1px solid transparent"
      };
    case "secondary":
      return {
        background: hovered ? "var(--gy-ink-800)" : "transparent",
        color: hovered ? "var(--gy-ink-50)" : "var(--gy-ink-800)",
        border: "1px solid var(--gy-ink-800)"
      };
    case "ghost":
      return {
        background: active ? "var(--gy-action-quiet-bg-active)" : hovered ? "var(--gy-action-quiet-bg-hover)" : "transparent",
        color: "var(--gy-ink-700)",
        border: "1px solid transparent"
      };
    case "inverse":
      return {
        background: hovered ? "var(--gy-ink-50)" : "transparent",
        color: hovered ? "var(--gy-ink-900)" : "var(--gy-ink-50)",
        border: "1px solid rgba(246,243,238,.45)"
      };
    case "danger":
      return {
        background: active ? "var(--gy-clay-700)" : hovered ? "var(--gy-clay-600)" : "var(--gy-clay-500)",
        color: "#fff",
        border: "1px solid transparent"
      };
    default:
      return {
        background: active ? "var(--gy-action-primary-bg-active)" : hovered ? "var(--gy-action-primary-bg-hover)" : "var(--gy-action-primary-bg)",
        color: "var(--gy-action-primary-fg)",
        border: "1px solid transparent"
      };
  }
}
function Button({
  children,
  variant = "primary",
  size = "md",
  iconLeft,
  iconRight,
  fullWidth,
  disabled,
  as,
  style,
  ...rest
}) {
  const [hovered, setHovered] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const s = GY_BTN_SIZES[size] || GY_BTN_SIZES.md;
  const tone = gyBtnTone(variant, hovered && !disabled, active && !disabled);
  const Tag = as || "button";
  return /*#__PURE__*/React.createElement(Tag, _extends({
    disabled: Tag === "button" ? disabled : undefined,
    "aria-disabled": disabled || undefined,
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => {
      setHovered(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false),
    style: {
      display: fullWidth ? "flex" : "inline-flex",
      width: fullWidth ? "100%" : undefined,
      alignItems: "center",
      justifyContent: "center",
      gap: s.gap,
      height: s.height,
      padding: s.padding,
      font: s.font,
      letterSpacing: s.tracking,
      textTransform: "uppercase",
      textDecoration: "none",
      whiteSpace: "nowrap",
      borderRadius: "var(--gy-radius-sm)",
      cursor: disabled ? "not-allowed" : "pointer",
      transition: "var(--gy-transition-color)",
      boxSizing: "border-box",
      ...tone,
      ...(disabled ? {
        background: "var(--gy-action-disabled-bg)",
        color: "var(--gy-action-disabled-fg)",
        border: "1px solid transparent"
      } : null),
      ...style
    }
  }, rest), iconLeft && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconLeft,
    size: s.icon
  }), children, iconRight && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconRight,
    size: s.icon
  }));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const GY_ICONBTN_SIZES = {
  sm: {
    box: 30,
    icon: 15
  },
  md: {
    box: 38,
    icon: 18
  },
  lg: {
    box: 46,
    icon: 20
  }
};
function IconButton({
  icon,
  label,
  variant = "ghost",
  size = "md",
  disabled,
  style,
  ...rest
}) {
  const [hovered, setHovered] = React.useState(false);
  const s = GY_ICONBTN_SIZES[size] || GY_ICONBTN_SIZES.md;
  const tones = {
    ghost: {
      background: hovered ? "var(--gy-action-quiet-bg-hover)" : "transparent",
      color: "var(--gy-ink-600)",
      border: "1px solid transparent"
    },
    outline: {
      background: hovered ? "var(--gy-ink-100)" : "var(--gy-ink-0)",
      color: "var(--gy-ink-700)",
      border: "var(--gy-border-default)"
    },
    solid: {
      background: hovered ? "var(--gy-ink-900)" : "var(--gy-ink-800)",
      color: "var(--gy-ink-50)",
      border: "1px solid transparent"
    },
    inverse: {
      background: hovered ? "rgba(246,243,238,.12)" : "transparent",
      color: "var(--gy-ink-50)",
      border: "1px solid transparent"
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    title: label,
    "aria-label": label,
    disabled: disabled,
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: s.box,
      height: s.box,
      padding: 0,
      borderRadius: "var(--gy-radius-sm)",
      cursor: disabled ? "not-allowed" : "pointer",
      transition: "var(--gy-transition-color)",
      ...tones[variant],
      ...(disabled ? {
        color: "var(--gy-action-disabled-fg)"
      } : null),
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: s.icon
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Prose.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Long-form article body. Wrap raw article markup in this and every element
   inside inherits the editorial measure, rhythm and rules. */
function Prose({
  children,
  style,
  ...rest
}) {
  const id = React.useId().replace(/[:]/g, "");
  const cls = "gy-prose-" + id;
  const css = `
.${cls}{max-width:var(--gy-measure-prose);font:var(--gy-type-prose);color:var(--gy-ink-800)}
.${cls} > * + *{margin-top:1.05em}
.${cls} p{margin:0;text-wrap:pretty}
.${cls} h2{font:var(--gy-weight-semibold) var(--gy-text-2xl)/1.24 var(--gy-font-serif);letter-spacing:var(--gy-tracking-tight);color:var(--gy-ink-900);margin-top:2em}
.${cls} h3{font:var(--gy-weight-semibold) var(--gy-text-xl)/1.28 var(--gy-font-serif);color:var(--gy-ink-900);margin-top:1.7em}
.${cls} h4{font:var(--gy-weight-semibold) var(--gy-text-2xs)/1.2 var(--gy-font-mono);letter-spacing:var(--gy-tracking-wider);text-transform:uppercase;color:var(--gy-copper-600);margin-top:1.8em}
.${cls} ul,.${cls} ol{margin:0;padding-left:1.35em}
.${cls} li + li{margin-top:.45em}
.${cls} blockquote{margin:1.6em 0;padding-left:22px;border-left:3px solid var(--gy-copper-500);font-style:italic;color:var(--gy-ink-700)}
.${cls} blockquote p{font-size:var(--gy-text-lg)}
.${cls} hr{border:0;height:1px;background:var(--gy-line-default);margin:2.2em 0}
.${cls} a{color:var(--gy-text-link)}
.${cls} strong{font-weight:var(--gy-weight-bold)}
.${cls} code{font:var(--gy-weight-regular) .88em/1.5 var(--gy-font-mono);background:var(--gy-ink-100);padding:1px 5px;border-radius:var(--gy-radius-xs)}
.${cls} figure{margin:2em 0}
.${cls} figcaption{font:var(--gy-type-body-sm);color:var(--gy-text-secondary);margin-top:8px}
.${cls} table{width:100%;border-collapse:collapse;font:var(--gy-type-body)}
.${cls} th{text-align:left;font:var(--gy-type-meta);letter-spacing:var(--gy-tracking-wider);text-transform:uppercase;color:var(--gy-ink-500);padding:8px 0;border-bottom:1px solid var(--gy-line-default)}
.${cls} td{padding:10px 0;border-bottom:1px solid var(--gy-line-subtle)}
`;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", null, css), /*#__PURE__*/React.createElement("div", _extends({
    className: cls,
    style: style
  }, rest), children));
}
Object.assign(__ds_scope, { Prose });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Prose.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tag({
  children,
  selected,
  onRemove,
  onClick,
  style,
  ...rest
}) {
  const [hovered, setHovered] = React.useState(false);
  const clickable = !!onClick;
  return /*#__PURE__*/React.createElement("span", _extends({
    onClick: onClick,
    role: clickable ? "button" : undefined,
    tabIndex: clickable ? 0 : undefined,
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      height: 28,
      padding: "0 10px",
      borderRadius: "var(--gy-radius-sm)",
      cursor: clickable ? "pointer" : "default",
      font: "var(--gy-weight-medium) var(--gy-text-xs)/1 var(--gy-font-sans)",
      letterSpacing: "0.02em",
      transition: "var(--gy-transition-color)",
      background: selected ? "var(--gy-ink-800)" : hovered && clickable ? "var(--gy-ink-100)" : "transparent",
      color: selected ? "var(--gy-ink-50)" : "var(--gy-ink-600)",
      border: selected ? "1px solid var(--gy-ink-800)" : "var(--gy-border-default)",
      ...style
    }
  }, rest), children, onRemove && /*#__PURE__*/React.createElement("span", {
    onClick: e => {
      e.stopPropagation();
      onRemove(e);
    },
    style: {
      display: "inline-flex",
      cursor: "pointer",
      opacity: 0.65
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 12
  })));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const GY_ALERT_TONES = {
  info: {
    bg: "var(--gy-status-info-soft)",
    line: "var(--gy-status-info)",
    fg: "var(--gy-status-info-fg)",
    icon: "info"
  },
  success: {
    bg: "var(--gy-status-success-soft)",
    line: "var(--gy-status-success)",
    fg: "var(--gy-status-success-fg)",
    icon: "check-circle"
  },
  warning: {
    bg: "var(--gy-status-warning-soft)",
    line: "var(--gy-status-warning)",
    fg: "var(--gy-status-warning-fg)",
    icon: "triangle-alert"
  },
  danger: {
    bg: "var(--gy-status-danger-soft)",
    line: "var(--gy-status-danger)",
    fg: "var(--gy-status-danger-fg)",
    icon: "octagon-alert"
  }
};
function Alert({
  tone = "info",
  title,
  children,
  onDismiss,
  style,
  ...rest
}) {
  const t = GY_ALERT_TONES[tone] || GY_ALERT_TONES.info;
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "status",
    style: {
      display: "flex",
      gap: "var(--gy-space-3)",
      padding: "var(--gy-space-4)",
      background: t.bg,
      borderRadius: "var(--gy-radius-md)",
      borderTop: "3px solid " + t.line,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      color: t.line,
      display: "flex",
      marginTop: 1
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: t.icon,
    size: 18
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      gap: 4
    }
  }, title && /*#__PURE__*/React.createElement("strong", {
    style: {
      font: "var(--gy-weight-semibold) var(--gy-text-sm)/1.3 var(--gy-font-sans)",
      color: t.fg
    }
  }, title), children && /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--gy-type-body-sm)",
      color: "var(--gy-ink-700)"
    }
  }, children)), onDismiss && /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "x",
    label: "Dismiss",
    size: "sm",
    onClick: onDismiss
  }));
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Dialog({
  open,
  title,
  description,
  children,
  footer,
  onClose,
  width = 520,
  style,
  ...rest
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      zIndex: "var(--gy-z-modal)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "var(--gy-space-6)",
      background: "var(--gy-surface-overlay)",
      backdropFilter: "blur(2px)"
    },
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", _extends({
    role: "dialog",
    "aria-modal": "true",
    "aria-label": typeof title === "string" ? title : undefined,
    onClick: e => e.stopPropagation(),
    style: {
      width: "100%",
      maxWidth: width,
      background: "var(--gy-surface-raised)",
      borderRadius: "var(--gy-radius-md)",
      boxShadow: "var(--gy-shadow-xl)",
      overflow: "hidden",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: "var(--gy-space-4)",
      padding: "var(--gy-space-6) var(--gy-space-6) var(--gy-space-4)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      gap: "var(--gy-space-2)"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: "var(--gy-type-h3)",
      color: "var(--gy-text-primary)"
    }
  }, title), description && /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--gy-type-body-sm)",
      color: "var(--gy-text-secondary)",
      margin: 0
    }
  }, description)), onClose && /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "x",
    label: "Close",
    size: "sm",
    onClick: onClose
  })), children && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 var(--gy-space-6) var(--gy-space-6)",
      font: "var(--gy-type-body-sm)",
      color: "var(--gy-text-body)"
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end",
      gap: "var(--gy-space-3)",
      padding: "var(--gy-space-4) var(--gy-space-6)",
      background: "var(--gy-ink-50)",
      borderTop: "var(--gy-border-subtle)"
    }
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Toast({
  tone = "neutral",
  title,
  children,
  onDismiss,
  style,
  ...rest
}) {
  const dots = {
    neutral: "var(--gy-copper-400)",
    success: "var(--gy-status-success)",
    warning: "var(--gy-status-warning)",
    danger: "var(--gy-status-danger)"
  };
  const icons = {
    neutral: "bell",
    success: "check",
    warning: "triangle-alert",
    danger: "octagon-alert"
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "status",
    style: {
      display: "flex",
      gap: "var(--gy-space-3)",
      alignItems: "flex-start",
      minWidth: 300,
      maxWidth: 420,
      padding: "var(--gy-space-4)",
      background: "var(--gy-surface-inverse)",
      color: "var(--gy-ink-50)",
      borderRadius: "var(--gy-radius-md)",
      boxShadow: "var(--gy-shadow-xl)",
      border: "var(--gy-border-dark-subtle)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      color: dots[tone],
      display: "flex",
      marginTop: 1
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icons[tone],
    size: 17
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      gap: 3
    }
  }, title && /*#__PURE__*/React.createElement("strong", {
    style: {
      font: "var(--gy-weight-semibold) var(--gy-text-sm)/1.3 var(--gy-font-sans)"
    }
  }, title), children && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--gy-type-body-sm)",
      fontSize: "var(--gy-text-xs)",
      color: "var(--gy-text-on-inverse-muted)"
    }
  }, children)), onDismiss && /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "x",
    label: "Dismiss",
    size: "sm",
    variant: "inverse",
    onClick: onDismiss
  }));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tooltip({
  content,
  placement = "top",
  children,
  style,
  ...rest
}) {
  const [open, setOpen] = React.useState(false);
  const pos = {
    top: {
      bottom: "calc(100% + 8px)",
      left: "50%",
      transform: "translateX(-50%)"
    },
    bottom: {
      top: "calc(100% + 8px)",
      left: "50%",
      transform: "translateX(-50%)"
    },
    left: {
      right: "calc(100% + 8px)",
      top: "50%",
      transform: "translateY(-50%)"
    },
    right: {
      left: "calc(100% + 8px)",
      top: "50%",
      transform: "translateY(-50%)"
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      position: "relative",
      display: "inline-flex",
      ...style
    },
    onMouseEnter: () => setOpen(true),
    onMouseLeave: () => setOpen(false),
    onFocus: () => setOpen(true),
    onBlur: () => setOpen(false)
  }, rest), children, /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: "absolute",
      zIndex: "var(--gy-z-dropdown)",
      pointerEvents: "none",
      padding: "5px 9px",
      background: "var(--gy-ink-900)",
      color: "var(--gy-ink-50)",
      borderRadius: "var(--gy-radius-xs)",
      whiteSpace: "nowrap",
      font: "var(--gy-weight-medium) var(--gy-text-xs)/1.3 var(--gy-font-sans)",
      opacity: open ? 1 : 0,
      transition: "opacity var(--gy-duration-fast) var(--gy-ease-standard)",
      ...pos[placement]
    }
  }, content));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Checkbox({
  label,
  description,
  checked,
  defaultChecked,
  disabled,
  onChange,
  style,
  ...rest
}) {
  const isControlled = checked !== undefined;
  const [inner, setInner] = React.useState(!!defaultChecked);
  const on = isControlled ? checked : inner;
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "flex",
      gap: "var(--gy-space-3)",
      alignItems: description ? "flex-start" : "center",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.55 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: on,
    disabled: disabled,
    onChange: e => {
      if (!isControlled) setInner(e.target.checked);
      onChange && onChange(e);
    },
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: 18,
      height: 18,
      flex: "0 0 auto",
      marginTop: description ? 2 : 0,
      borderRadius: "var(--gy-radius-xs)",
      background: on ? "var(--gy-ink-800)" : "var(--gy-ink-0)",
      border: "1px solid " + (on ? "var(--gy-ink-800)" : "var(--gy-ink-300)"),
      color: "var(--gy-ink-50)",
      transition: "var(--gy-transition-color)"
    }
  }, on && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 13
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--gy-type-body-sm)",
      color: "var(--gy-text-primary)"
    }
  }, label), description && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--gy-type-body-sm)",
      fontSize: "var(--gy-text-xs)",
      color: "var(--gy-text-secondary)"
    }
  }, description)));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Field({
  label,
  htmlFor,
  hint,
  error,
  required,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--gy-space-2)",
      ...style
    }
  }, rest), label && /*#__PURE__*/React.createElement("label", {
    htmlFor: htmlFor,
    style: {
      font: "var(--gy-type-meta)",
      letterSpacing: "var(--gy-tracking-wider)",
      textTransform: "uppercase",
      color: "var(--gy-ink-600)",
      display: "flex",
      gap: 4
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--gy-clay-500)"
    },
    "aria-hidden": "true"
  }, "*")), children, (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--gy-type-body-sm)",
      fontSize: "var(--gy-text-xs)",
      color: error ? "var(--gy-status-danger-fg)" : "var(--gy-text-secondary)"
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  icon,
  size = "md",
  invalid,
  disabled,
  style,
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  const h = size === "sm" ? 32 : size === "lg" ? 48 : 40;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      alignItems: "center",
      width: "100%"
    }
  }, icon && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 12,
      display: "flex",
      color: "var(--gy-ink-400)",
      pointerEvents: "none"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 16
  })), /*#__PURE__*/React.createElement("input", _extends({
    disabled: disabled,
    "aria-invalid": invalid || undefined,
    onFocus: e => {
      setFocused(true);
      rest.onFocus && rest.onFocus(e);
    },
    onBlur: e => {
      setFocused(false);
      rest.onBlur && rest.onBlur(e);
    },
    style: {
      width: "100%",
      height: h,
      boxSizing: "border-box",
      padding: icon ? "0 12px 0 34px" : "0 12px",
      font: "var(--gy-weight-regular) " + (size === "sm" ? "var(--gy-text-sm)" : "var(--gy-text-base)") + "/1 var(--gy-font-sans)",
      color: "var(--gy-text-primary)",
      background: disabled ? "var(--gy-ink-100)" : "var(--gy-ink-0)",
      border: "1px solid " + (invalid ? "var(--gy-clay-500)" : focused ? "var(--gy-copper-500)" : "var(--gy-ink-200)"),
      borderRadius: "var(--gy-radius-sm)",
      outline: "none",
      boxShadow: focused && !invalid ? "0 0 0 3px rgba(165,106,67,.16)" : "none",
      transition: "var(--gy-transition-color),box-shadow var(--gy-duration-fast) var(--gy-ease-standard)",
      ...style
    }
  }, rest)));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Radio({
  label,
  description,
  name,
  value,
  checked,
  disabled,
  onChange,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "flex",
      gap: "var(--gy-space-3)",
      alignItems: description ? "flex-start" : "center",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.55 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "radio",
    name: name,
    value: value,
    checked: checked,
    disabled: disabled,
    onChange: onChange,
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: 18,
      height: 18,
      flex: "0 0 auto",
      marginTop: description ? 2 : 0,
      borderRadius: "var(--gy-radius-full)",
      background: "var(--gy-ink-0)",
      border: "1px solid " + (checked ? "var(--gy-copper-500)" : "var(--gy-ink-300)"),
      transition: "var(--gy-transition-color)"
    }
  }, checked && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: "var(--gy-radius-full)",
      background: "var(--gy-copper-500)"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--gy-type-body-sm)",
      color: "var(--gy-text-primary)"
    }
  }, label), description && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--gy-type-body-sm)",
      fontSize: "var(--gy-text-xs)",
      color: "var(--gy-text-secondary)"
    }
  }, description)));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  options = [],
  size = "md",
  invalid,
  disabled,
  style,
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  const h = size === "sm" ? 32 : size === "lg" ? 48 : 40;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      alignItems: "center",
      width: "100%"
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    disabled: disabled,
    "aria-invalid": invalid || undefined,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      width: "100%",
      height: h,
      boxSizing: "border-box",
      padding: "0 34px 0 12px",
      appearance: "none",
      WebkitAppearance: "none",
      font: "var(--gy-weight-regular) " + (size === "sm" ? "var(--gy-text-sm)" : "var(--gy-text-base)") + "/1 var(--gy-font-sans)",
      color: "var(--gy-text-primary)",
      background: disabled ? "var(--gy-ink-100)" : "var(--gy-ink-0)",
      border: "1px solid " + (invalid ? "var(--gy-clay-500)" : focused ? "var(--gy-copper-500)" : "var(--gy-ink-200)"),
      borderRadius: "var(--gy-radius-sm)",
      outline: "none",
      cursor: disabled ? "not-allowed" : "pointer",
      boxShadow: focused && !invalid ? "0 0 0 3px rgba(165,106,67,.16)" : "none",
      transition: "var(--gy-transition-color)",
      ...style
    }
  }, rest), options.map(o => {
    const value = typeof o === "string" ? o : o.value;
    const label = typeof o === "string" ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: value,
      value: value
    }, label);
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      right: 12,
      display: "flex",
      color: "var(--gy-ink-500)",
      pointerEvents: "none"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 16
  })));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Switch({
  label,
  checked,
  defaultChecked,
  disabled,
  onChange,
  style,
  ...rest
}) {
  const isControlled = checked !== undefined;
  const [inner, setInner] = React.useState(!!defaultChecked);
  const on = isControlled ? checked : inner;
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--gy-space-3)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.55 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    role: "switch",
    checked: on,
    disabled: disabled,
    onChange: e => {
      if (!isControlled) setInner(e.target.checked);
      onChange && onChange(e);
    },
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 38,
      height: 22,
      flex: "0 0 auto",
      borderRadius: "var(--gy-radius-full)",
      background: on ? "var(--gy-copper-500)" : "var(--gy-ink-300)",
      transition: "background-color var(--gy-duration-base) var(--gy-ease-standard)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 3,
      left: on ? 19 : 3,
      width: 16,
      height: 16,
      borderRadius: "var(--gy-radius-full)",
      background: "#fff",
      boxShadow: "var(--gy-shadow-sm)",
      transition: "left var(--gy-duration-base) var(--gy-ease-standard)"
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--gy-type-body-sm)",
      color: "var(--gy-text-primary)"
    }
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Textarea({
  invalid,
  disabled,
  rows = 4,
  style,
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  return /*#__PURE__*/React.createElement("textarea", _extends({
    rows: rows,
    disabled: disabled,
    "aria-invalid": invalid || undefined,
    onFocus: e => {
      setFocused(true);
      rest.onFocus && rest.onFocus(e);
    },
    onBlur: e => {
      setFocused(false);
      rest.onBlur && rest.onBlur(e);
    },
    style: {
      width: "100%",
      boxSizing: "border-box",
      padding: "10px 12px",
      resize: "vertical",
      font: "var(--gy-type-body)",
      fontSize: "var(--gy-text-sm)",
      color: "var(--gy-text-primary)",
      background: disabled ? "var(--gy-ink-100)" : "var(--gy-ink-0)",
      border: "1px solid " + (invalid ? "var(--gy-clay-500)" : focused ? "var(--gy-copper-500)" : "var(--gy-ink-200)"),
      borderRadius: "var(--gy-radius-sm)",
      outline: "none",
      boxShadow: focused && !invalid ? "0 0 0 3px rgba(165,106,67,.16)" : "none",
      transition: "var(--gy-transition-color),box-shadow var(--gy-duration-fast) var(--gy-ease-standard)",
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Breadcrumbs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Breadcrumbs({
  items = [],
  onNavigate,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("nav", _extends({
    "aria-label": "Breadcrumb",
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--gy-space-2)",
      flexWrap: "wrap",
      ...style
    }
  }, rest), items.map((it, i) => {
    const last = i === items.length - 1;
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: it.id || i
    }, last ? /*#__PURE__*/React.createElement("span", {
      "aria-current": "page",
      style: {
        font: "var(--gy-type-meta)",
        letterSpacing: "var(--gy-tracking-wider)",
        textTransform: "uppercase",
        color: "var(--gy-ink-800)"
      }
    }, it.label) : /*#__PURE__*/React.createElement("a", {
      href: it.href || "#",
      onClick: e => {
        if (onNavigate) {
          e.preventDefault();
          onNavigate(it.id);
        }
      },
      style: {
        font: "var(--gy-type-meta)",
        letterSpacing: "var(--gy-tracking-wider)",
        textTransform: "uppercase",
        color: "var(--gy-ink-500)",
        textDecoration: "none",
        borderBottom: "none"
      }
    }, it.label), !last && /*#__PURE__*/React.createElement("span", {
      style: {
        display: "flex",
        color: "var(--gy-ink-300)"
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "chevron-right",
      size: 13
    })));
  }));
}
Object.assign(__ds_scope, { Breadcrumbs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Breadcrumbs.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Layout (wrapping, breakpoint behaviour) comes from the .gy-navbar-* classes in
   tokens/responsive.css; colours stay inline so tone stays self-contained. */
function NavBar({
  items = [],
  activeId,
  onNavigate,
  tone = "light",
  actions,
  style,
  ...rest
}) {
  const dark = tone === "dark";
  return /*#__PURE__*/React.createElement("header", _extends({
    style: {
      padding: "14px var(--gy-space-10)",
      boxSizing: "border-box",
      background: dark ? "var(--gy-surface-inverse)" : "var(--gy-ink-0)",
      borderBottom: dark ? "var(--gy-border-dark-subtle)" : "var(--gy-border-subtle)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "gy-navbar-inner"
  }, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    variant: "lockup",
    tone: dark ? "ivory" : "charcoal",
    height: 26
  }), /*#__PURE__*/React.createElement("nav", {
    className: "gy-navbar-nav"
  }, items.map(it => {
    const active = it.id === activeId;
    return /*#__PURE__*/React.createElement("a", {
      key: it.id,
      href: it.href || "#",
      onClick: e => {
        if (onNavigate) {
          e.preventDefault();
          onNavigate(it.id);
        }
      },
      style: {
        paddingBottom: 3,
        borderBottom: "2px solid " + (active ? "var(--gy-copper-500)" : "transparent"),
        font: "var(--gy-type-meta)",
        letterSpacing: "var(--gy-tracking-wider)",
        textTransform: "uppercase",
        textDecoration: "none",
        color: active ? dark ? "var(--gy-ink-50)" : "var(--gy-ink-900)" : dark ? "rgba(246,243,238,.66)" : "var(--gy-ink-500)",
        transition: "var(--gy-transition-color)"
      }
    }, it.label);
  })), actions && /*#__PURE__*/React.createElement("div", {
    className: "gy-navbar-cta",
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--gy-space-3)"
    }
  }, actions)));
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavBar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Pagination.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Pagination({
  page = 1,
  pageCount = 1,
  onChange,
  style,
  ...rest
}) {
  const go = n => onChange && n >= 1 && n <= pageCount && onChange(n);
  const cell = active => ({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    minWidth: 34,
    height: 34,
    padding: "0 8px",
    cursor: "pointer",
    background: active ? "var(--gy-ink-800)" : "transparent",
    color: active ? "var(--gy-ink-50)" : "var(--gy-ink-600)",
    border: active ? "1px solid var(--gy-ink-800)" : "var(--gy-border-default)",
    borderRadius: "var(--gy-radius-sm)",
    font: "var(--gy-weight-medium) var(--gy-text-sm)/1 var(--gy-font-mono)",
    transition: "var(--gy-transition-color)"
  });
  const pages = Array.from({
    length: pageCount
  }, (_, i) => i + 1);
  return /*#__PURE__*/React.createElement("nav", _extends({
    "aria-label": "Pagination",
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--gy-space-2)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("button", {
    onClick: () => go(page - 1),
    disabled: page === 1,
    style: {
      ...cell(false),
      opacity: page === 1 ? 0.4 : 1,
      cursor: page === 1 ? "not-allowed" : "pointer"
    },
    "aria-label": "Previous page"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-left",
    size: 15
  })), pages.map(n => /*#__PURE__*/React.createElement("button", {
    key: n,
    onClick: () => go(n),
    "aria-current": n === page ? "page" : undefined,
    style: cell(n === page)
  }, n)), /*#__PURE__*/React.createElement("button", {
    onClick: () => go(page + 1),
    disabled: page === pageCount,
    style: {
      ...cell(false),
      opacity: page === pageCount ? 0.4 : 1,
      cursor: page === pageCount ? "not-allowed" : "pointer"
    },
    "aria-label": "Next page"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-right",
    size: 15
  })));
}
Object.assign(__ds_scope, { Pagination });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Pagination.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tabs({
  items = [],
  activeId,
  onChange,
  tone = "light",
  style,
  ...rest
}) {
  const dark = tone === "dark";
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    style: {
      display: "flex",
      gap: "var(--gy-space-6)",
      borderBottom: dark ? "var(--gy-border-dark-subtle)" : "var(--gy-border-subtle)",
      ...style
    }
  }, rest), items.map(it => {
    const active = it.id === activeId;
    return /*#__PURE__*/React.createElement("button", {
      key: it.id,
      role: "tab",
      "aria-selected": active,
      onClick: () => onChange && onChange(it.id),
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        padding: "0 0 10px",
        background: "none",
        border: "none",
        borderBottom: "2px solid " + (active ? "var(--gy-copper-500)" : "transparent"),
        marginBottom: -1,
        cursor: "pointer",
        font: "var(--gy-type-meta)",
        letterSpacing: "var(--gy-tracking-wider)",
        textTransform: "uppercase",
        color: active ? dark ? "var(--gy-ink-50)" : "var(--gy-ink-900)" : dark ? "rgba(246,243,238,.6)" : "var(--gy-ink-500)",
        transition: "var(--gy-transition-color)"
      }
    }, it.label, it.count != null && /*#__PURE__*/React.createElement("span", {
      style: {
        font: "var(--gy-weight-medium) var(--gy-text-2xs)/1 var(--gy-font-mono)",
        color: active ? "var(--gy-copper-600)" : "var(--gy-ink-400)"
      }
    }, it.count));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// guidelines/image-slot.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).
/* BEGIN USAGE */
/**
 * <image-slot> — user-fillable image placeholder.
 *
 * Drop this into a deck, mockup, or page wherever a design needs an image.
 * You control the slot's shape; it sizes to its container by default. When the search_stock_photos tool
 * is available, prefill the slot by default — write the photo's URL into
 * src (with credit/credit-href); the user can still fill or replace it
 * by dragging an image file onto it (or clicking to browse). The dropped
 * image persists across reloads via a .image-slots.state.json sidecar —
 * same read-via-fetch / write-via-window.omelette pattern as
 * design_canvas.jsx, so the filled slot shows on share links, downloaded
 * zips, and PPTX export. Outside the omelette runtime the slot is read-only.
 *
 * The sidecar is a SIBLING of the HTML file that uses this component: the
 * read is a document-relative fetch, and the host resolves the bridge's
 * sidecar writes into the previewed file's directory to match (same
 * contract as design_canvas.jsx). Pages in the same directory share one
 * sidecar; keep slot ids distinct across them.
 *
 * Attributes:
 *   id           Persistence key. REQUIRED for the drop to survive reload —
 *                every slot on the page needs a distinct id.
 *   shape        'rect' | 'rounded' | 'circle' | 'pill'   (default 'rounded')
 *                'circle' applies 50% border-radius; on a non-square slot
 *                that's an ellipse — set equal width and height for a true
 *                circle.
 *   radius       Corner radius in px for 'rounded'.       (default 12)
 *   mask         Any CSS clip-path value. Overrides `shape` — use this for
 *                hexagons, blobs, arbitrary polygons.
 *   fit          Initial framing baseline: cover | contain.   (default 'cover')
 *                cover starts the image filling the frame (overflow cropped);
 *                contain starts it fully visible (letterboxed). Either way the
 *                user can always pan/scale from there — double-click, or the
 *                Edit control, enters reframe mode (drag to move, scroll or
 *                corner-handles to scale; Escape / click-out commits). The
 *                crop persists alongside the image in the sidecar.
 *   placeholder  Empty-state caption.                      (default 'Drop an image')
 *   src          Optional initial/fallback image URL. Prefill it with a real
 *                photo via search_stock_photos when that tool is available
 *                (set credit/credit-href from the result). A user drop
 *                overrides it; clearing the drop reveals src again.
 *   credit       Attribution text shown as a small overlay at the
 *                bottom-left of the filled slot. REQUIRED whenever src
 *                points at any Unsplash host (images.unsplash.com,
 *                plus.unsplash.com, …): an Unsplash src with no credit
 *                renders an error tile INSTEAD of the photo (Unsplash
 *                terms forbid showing their photos unattributed). Use the
 *                exact form 'Photo by {photographer name} on Unsplash' —
 *                the overlay then links the name to credit-href and
 *                'Unsplash' to the Unsplash homepage, and links back to
 *                unsplash.com automatically get the required utm referral
 *                params appended at render time. The credit belongs to
 *                the src image, so it only shows while src is what's
 *                displayed — a user-dropped image hides it.
 *   credit-href  Link for the photographer's name in the credit overlay
 *                (their Unsplash profile URL from the stock-photo search
 *                results). http(s) URLs only — anything else renders the
 *                name as plain text.
 *
 * Sizing: the slot fills its container by default (width/height 100%).
 * Put it in a sized wrapper — absolutely positioned, a grid cell, a fixed
 * frame — and it takes exactly that box. When the parent's height is
 * indefinite (ordinary flow), it falls back to full width at a 3:2 aspect
 * ratio instead of collapsing. In a shrink-to-fit parent (a float,
 * width:max-content, an unsized absolute wrapper), percentages have
 * nothing to resolve against — size the slot or its wrapper explicitly
 * there. For a fixed-size slot, set
 * width/height on the element itself (inline style), which overrides the
 * default. When
 * layering content above a slot (full-bleed layouts), make the overlay
 * click-through — pointer-events: none on scrims/text plates, re-enabled
 * on interactive children — so the slot's hover controls stay reachable.
 * Keep the slot's bottom-left corner visually clear as well: the credit
 * overlay renders there, and a dark fade or text plate covering it hides
 * the attribution Unsplash's terms require — end the fade above that
 * corner, or keep it nearly transparent where the credit sits.
 *
 * Usage:
 *   <div style="position:relative;width:100%;height:100%">      <!-- full-bleed: -->
 *     <image-slot id="bg" shape="rect"></image-slot>            <!-- fills the wrapper -->
 *   </div>
 *   <image-slot id="hero"   style="width:800px;height:450px" shape="rounded" radius="20"
 *               placeholder="Drop a hero image"></image-slot>
 *   <image-slot id="avatar" style="width:120px;height:120px" shape="circle"></image-slot>
 *   <image-slot id="kite"   style="width:300px;height:300px"
 *               mask="polygon(50% 0, 100% 50%, 50% 100%, 0 50%)"></image-slot>
 */
/* END USAGE */

(() => {
  const STATE_FILE = '.image-slots.state.json';

  // Unsplash terms require visible attribution wherever their photos
  // display, and every link back to unsplash.com must carry utm referral
  // params. Two render-time rules enforce that here:
  //  - an Unsplash-src slot with NO credit attribute renders an error
  //    tile INSTEAD of the photo (an uncredited Unsplash photo on screen
  //    is itself the terms violation, so it never renders bare);
  //  - rendered credit links pointing at unsplash.com get the referral
  //    params appended when absent (credit-href values live in page
  //    content that can't be edited after the fact).
  // Keep the utm_source value in sync with UTM_SOURCE in
  // platform/web-agent/unsplash.ts — this file is a project-local
  // artifact and cannot import it (equality is pinned by tests).
  const UNSPLASH_HOMEPAGE_HREF = 'https://unsplash.com/?utm_source=claude_design&utm_medium=referral';
  // Host rule mirrors the hotlink validator that admits Unsplash srcs into
  // pages in the first place (cdn$ in unsplash.ts: apex or any subdomain)
  // — Unsplash+ results serve from plus.unsplash.com, not just images.*,
  // and an admitted-but-uncredited photo must error whatever unsplash
  // host it rides on.
  // Trailing-dot FQDNs (images.unsplash.com.) are the same host to the
  // browser but would miss the regex — strip one dot so the check fails
  // CLOSED (unrecognized-but-real Unsplash srcs must error, not render).
  const isUnsplashHost = u => {
    try {
      return /(^|\.)unsplash\.com$/.test(new URL(u, document.baseURI).hostname.replace(/\.$/, ''));
    } catch {
      return false;
    }
  };
  // Render-time referral normalization for links back to Unsplash:
  // appends utm_source/utm_medium when absent, preserves every existing
  // query param, never overwrites an existing utm_source, and passes
  // non-Unsplash URLs through untouched. Input is an ABSOLUTE validated
  // http(s) URL (the credit render funnel resolves + validates first).
  const withReferral = href => {
    try {
      const u = new URL(href);
      if (!/(^|\.)unsplash\.com$/.test(u.hostname.replace(/\.$/, ''))) {
        return href;
      }
      if (!u.searchParams.has('utm_source')) {
        u.searchParams.set('utm_source', 'claude_design');
      }
      if (!u.searchParams.has('utm_medium')) {
        u.searchParams.set('utm_medium', 'referral');
      }
      return u.toString();
    } catch (e) {
      return href;
    }
  };
  // 2× a ~600px slot in a 1920-wide deck — retina-sharp without making the
  // sidecar enormous. A 1200px WebP at q=0.85 is ~150-300KB.
  const MAX_DIM = 1200;
  // Raster formats only. SVG is excluded (can carry script; createImageBitmap
  // on SVG blobs is inconsistent). GIF is excluded because the canvas
  // re-encode keeps only the first frame, so an animated GIF would silently
  // go still — better to reject than surprise.
  const ACCEPT = ['image/png', 'image/jpeg', 'image/webp', 'image/avif'];

  // ── Shared sidecar store ────────────────────────────────────────────────
  // One fetch + immediate write-on-change for every <image-slot> on the
  // page. Reads via fetch() so viewing works anywhere the HTML and sidecar
  // are served together; writes go through window.omelette.writeFile, which
  // the host allowlists to *.state.json basenames only.
  const subs = new Set();
  let slots = {};
  // ids explicitly cleared before the sidecar fetch resolved — otherwise
  // the merge below can't tell "never set" from "just deleted" and would
  // resurrect the sidecar's stale value.
  const tombstones = new Set();
  let loaded = false;
  let loadP = null;
  function load() {
    if (loadP) return loadP;
    loadP = fetch(STATE_FILE).then(r => r.ok ? r.json() : null).then(j => {
      // Merge: sidecar loses to any in-memory change that raced ahead of
      // the fetch (drop or clear) so neither is clobbered by hydration.
      if (j && typeof j === 'object') {
        const merged = Object.assign({}, j, slots);
        // A framing-only write that raced ahead of hydration must not
        // drop a user image that's only on disk — inherit u from the
        // sidecar for any in-memory entry that lacks one.
        for (const k in slots) {
          if (merged[k] && !merged[k].u && j[k]) {
            merged[k].u = typeof j[k] === 'string' ? j[k] : j[k].u;
          }
        }
        for (const id of tombstones) delete merged[id];
        slots = merged;
      }
      tombstones.clear();
    }).catch(() => {}).then(() => {
      loaded = true;
      subs.forEach(fn => fn());
    });
    return loadP;
  }

  // Serialize writes so two near-simultaneous drops on different slots
  // can't reorder at the backend and leave the sidecar with only the
  // first. A save requested mid-flight just marks dirty and re-fires on
  // completion with the then-current slots.
  let saving = false;
  let saveDirty = false;
  // Unload-time flush: save()'s serialization defers a mid-RTT re-fire to a
  // .then that never runs in an unloading document, silently dropping a
  // pagehide commit. Post the current slots immediately instead — content
  // is a superset snapshot of any in-flight save's, the write is a
  // whole-file last-writer-wins replace, and postMessage FIFO delivers it
  // to the host after the in-flight one, so a backend-side reorder at
  // worst reproduces the dropped-commit outcome this flush improves on.
  // Guarded on the initial sidecar read: pre-hydration slots can miss
  // other slots' persisted entries, and flushing it would clobber them —
  // that narrow case stays best-effort (the in-memory merge in load()
  // cannot happen in an unloading document anyway).
  function flushNow() {
    if (!loaded) return;
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    try {
      Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {});
    } catch (e) {}
  }
  function save() {
    if (saving) {
      saveDirty = true;
      return;
    }
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    saving = true;
    Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {}).then(() => {
      saving = false;
      if (saveDirty) {
        saveDirty = false;
        save();
      }
    });
  }
  const S_MAX = 5;
  const clampS = s => Math.max(1, Math.min(S_MAX, s));

  // Normalize a stored slot value. Pre-reframe sidecars stored a bare
  // data-URL string; newer ones store {u, s, x, y}. Either shape is valid.
  function getSlot(id) {
    const v = slots[id];
    if (!v) return null;
    return typeof v === 'string' ? {
      u: v,
      s: 1,
      x: 0,
      y: 0
    } : v;
  }
  function setSlot(id, val) {
    if (!id) return;
    if (val) {
      slots[id] = val;
      tombstones.delete(id);
    } else {
      delete slots[id];
      if (!loaded) tombstones.add(id);
    }
    subs.forEach(fn => fn());
    // A drop is rare + high-value — write immediately so nav-away can't lose
    // it. Gate on the initial read so we don't overwrite a sidecar we haven't
    // merged yet; the merge in load() keeps this change once the read lands.
    if (loaded) save();else load().then(save);
  }

  // ── Image downscale ─────────────────────────────────────────────────────
  // Encode through a canvas so the sidecar carries resized bytes, not the
  // raw upload. Longest side is capped at 2× the slot's rendered width
  // (retina) and at MAX_DIM. WebP keeps alpha and is ~10× smaller than PNG
  // for photos, so there's no need for per-image format picking.
  async function toDataUrl(file, targetW) {
    const bitmap = await createImageBitmap(file);
    try {
      const cap = Math.min(MAX_DIM, Math.max(1, Math.round(targetW * 2)) || MAX_DIM);
      const scale = Math.min(1, cap / Math.max(bitmap.width, bitmap.height));
      const w = Math.max(1, Math.round(bitmap.width * scale));
      const h = Math.max(1, Math.round(bitmap.height * scale));
      const canvas = document.createElement('canvas');
      canvas.width = w;
      canvas.height = h;
      canvas.getContext('2d').drawImage(bitmap, 0, 0, w, h);
      return canvas.toDataURL('image/webp', 0.85);
    } finally {
      bitmap.close && bitmap.close();
    }
  }

  // ── Custom element ──────────────────────────────────────────────────────
  const stylesheet =
  // Fill the container by default: slots are usually placed inside a
  // sized wrapper (a hero frame, a grid cell, an inset:0 layer) and are
  // expected to take that box — a fixed intrinsic size would render as
  // a small tile in the corner of a full-bleed wrapper instead.
  // aspect-ratio is the companion fallback that keeps a bare slot
  // visible when the parent's height is indefinite: height:100%
  // resolves to auto there, and the ratio then derives height from
  // width instead of letting the slot collapse to zero height.
  // Explicit width/height on the element override all of this.
  // color:inherit (not a fixed near-black): the placeholder chrome —
  // empty-state icon/caption (currentColor) and the dashed ring — must
  // read on dark decks too, and the slide's own text color is the one
  // color guaranteed to contrast with the slide background. The soft
  // look comes from opacity on those parts, not from a baked-in alpha.
  ':host{display:block;position:relative;' + '  font:13px/1.3 system-ui,-apple-system,sans-serif;' + '  width:100%;height:100%;aspect-ratio:3/2}' + '.empty .cap,.empty .sub{opacity:.75}' + '.frame{position:absolute;inset:0;overflow:hidden;background:rgba(127,127,127,.08)}' +
  // .frame img (clipped) and .spill (unclipped ghost + handles) share the
  // same left/top/width/height in frame-%, computed by _applyView(), so the
  // inside-mask crop and the outside-mask spill stay pixel-aligned.
  '.frame img{position:absolute;max-width:none;transform:translate(-50%,-50%);' + '  -webkit-user-drag:none;user-select:none;touch-action:none}' +
  // Reframe mode (double-click): the full image spills past the mask. The
  // spill layer is sized to the IMAGE bounds so its corners are where the
  // resize handles belong. The ghost <img> inside is translucent; the real
  // clipped <img> underneath shows the opaque in-mask crop.
  // popover=manual promotes the spill to the top layer on reframe, so it is
  // not clipped by any overflow:hidden / clip-path / scroll-container
  // ancestor (a plain z-index can't escape overflow clipping). UA popover
  // defaults (inset:0;margin:auto) are reset; _applyView sets viewport px.
  '.spill{position:fixed;margin:0;inset:auto;border:0;padding:0;background:transparent;' + '  overflow:visible;transform:translate(-50%,-50%);z-index:1;cursor:grab;touch-action:none}' + ':host([data-panning]) .spill{cursor:grabbing}' + '.spill .ghost{position:absolute;inset:0;width:100%;height:100%;opacity:.35;' + '  pointer-events:none;-webkit-user-drag:none;user-select:none;' + '  box-shadow:0 0 0 1px rgba(0,0,0,.2),0 12px 32px rgba(0,0,0,.2)}' + '.spill .handle{position:absolute;width:12px;height:12px;border-radius:50%;' + '  background:#fff;box-shadow:0 0 0 1.5px #c96442,0 1px 3px rgba(0,0,0,.3);' + '  transform:translate(-50%,-50%)}' + '.spill .handle[data-c=nw]{left:0;top:0;cursor:nwse-resize}' + '.spill .handle[data-c=ne]{left:100%;top:0;cursor:nesw-resize}' + '.spill .handle[data-c=sw]{left:0;top:100%;cursor:nesw-resize}' + '.spill .handle[data-c=se]{left:100%;top:100%;cursor:nwse-resize}' + ':host([data-reframe]){z-index:10}' + ':host([data-reframe]) .frame{box-shadow:0 0 0 2px #c96442}' + '.empty{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  cursor:pointer;user-select:none}' + '.empty svg{opacity:.45}' + '.empty .cap{max-width:90%;font-weight:500;letter-spacing:.01em}' + '.empty .sub{font-size:11px}' + '.empty .sub u{text-underline-offset:2px}' + '.empty:hover .sub{opacity:1}' + ':host([data-over]) .frame{outline:2px solid #c96442;outline-offset:-2px;' + '  background:rgba(201,100,66,.10)}' + '.ring{position:absolute;inset:0;pointer-events:none;border:1.5px dashed currentColor;' + '  opacity:.35;transition:border-color .12s,opacity .12s}' + ':host([data-over]) .ring{border-color:#c96442;opacity:1}' + ':host([data-filled]) .ring{display:none}' +
  // Controls overlay INSIDE the frame, pinned to the top-right corner, so
  // a full-bleed slot in an overflow:hidden container still shows them
  // (the old below-mask placement got clipped). Credit sits bottom-left,
  // so top-right avoids collision. The blurred pill background keeps them
  // legible over the image.
  // The UA [popover] base rule styles the element in EVERY state (only
  // display:none is gated on :not(:popover-open), and the display:flex
  // below overrides that) — so the UA resets live HERE, like .spill's,
  // or the ordinary hover-state strip renders as a bordered Canvas box
  // centered by margin:auto. inset:auto precedes top/right (shorthand).
  '.ctl{position:absolute;inset:auto;top:8px;right:8px;margin:0;border:0;padding:0;' + '  background:transparent;overflow:visible;' + '  display:flex;gap:6px;opacity:0;pointer-events:none;transition:opacity .12s;z-index:2;' + '  white-space:nowrap}' +
  // While reframing, the spill owns the top layer and would swallow every
  // click on the in-frame controls. Promoting .ctl into the top layer
  // ABOVE the spill (shown after it — later popovers stack higher) keeps
  // Edit-as-toggle and Replace clickable mid-reframe. _applyView pins it
  // to the frame's top-right in viewport px (translateX(-100%)
  // right-aligns against the computed left edge); inset:auto clears the
  // base rule's top/right so the inline left/top position it alone.
  '.ctl:popover-open{position:fixed;inset:auto;transform:translateX(-100%)}' + ':host([data-filled][data-editable]:hover) .ctl,:host([data-reframe]) .ctl' + '  {opacity:1;pointer-events:auto}' + '.ctl button{appearance:none;border:0;border-radius:6px;padding:5px 10px;cursor:pointer;' + '  background:rgba(0,0,0,.65);color:#fff;font:11px/1 system-ui,-apple-system,sans-serif;' + '  backdrop-filter:blur(6px)}' + '.ctl button:hover{background:rgba(0,0,0,.8)}' + '.err{position:absolute;left:8px;bottom:8px;right:8px;color:#b3261e;font-size:11px;' + '  background:rgba(255,255,255,.85);padding:4px 6px;border-radius:5px;pointer-events:none}' +
  // Replacement in flight: after a src swap the browser keeps painting
  // the PREVIOUS image until the new one decodes, so a Replace would
  // flash the old photo and then pop. Hide the stale frame (visibility,
  // not display — _applyView geometry still applies) and spin until the
  // new image reports in (load/error clears data-swapping).
  ':host([data-swapping]) .frame img{visibility:hidden}' + '.loading{position:absolute;inset:0;display:none;align-items:center;' + '  justify-content:center;pointer-events:none}' + ':host([data-swapping]) .loading{display:flex}' + '.loading::after{content:"";width:22px;height:22px;border-radius:50%;' + '  border:2px solid rgba(127,127,127,.25);border-top-color:currentColor;' + '  animation:om-slot-spin .7s linear infinite}' + '@keyframes om-slot-spin{to{transform:rotate(360deg)}}' +
  // Reduced motion: the static two-tone ring still reads as "working".
  '@media (prefers-reduced-motion:reduce){.loading::after{animation:none}}' + '.credit{position:absolute;left:6px;bottom:6px;max-width:calc(100% - 12px);display:none;' + '  padding:3px 7px;border-radius:5px;background:rgba(0,0,0,.55);color:#fff;' + '  font:10px/1.2 system-ui,-apple-system,sans-serif;text-decoration:none;' + '  white-space:nowrap;overflow:hidden;text-overflow:ellipsis;backdrop-filter:blur(6px)}' +
  // The credit is a SPAN holding one or two <a>s (Unsplash's prescribed
  // form links the photographer AND Unsplash) — anchors style inline so
  // the overlay reads as one line of text.
  '.credit a{color:inherit;text-decoration:none}' + '.credit a:hover,.credit a:focus-visible{text-decoration:underline}' + ':host([data-filled][data-credit]) .credit{display:block}' +
  // Exports must ship JUST the image — no hover controls, no credit chip
  // (the host marks <html data-om-exporting> for the capture window; the
  // page-level hide script can't reach shadow DOM, this rule can).
  ':host-context([data-om-exporting]) .ctl,' + ':host-context([data-om-exporting]) .credit{display:none !important}' +
  // Print must ship just the image too: the hover-gated controls can be
  // mid-hover when print() fires, and the credit chip is screen chrome —
  // the same rule the capture window gets, keyed on print media instead
  // of the host's data-om-exporting mark (the print path sets no mark).
  '@media print{.ctl,.credit{display:none !important}}' +
  // No export-window mask rules here on purpose: the export capture
  // releases the replacement mask by REMOVING data-swapping (the
  // shadow-root pass in pages/export/shared.ts HIDE_EXPORT_CHROME_SCRIPT)
  // — attribute removal works in every engine (:host-context is
  // Chromium-only), is scoped by construction to slots actually
  // mid-swap, and hides the spinner through the same gate. A masked img
  // would otherwise be silently dropped from PPTX decks (the capture
  // walk skips visibility:hidden imgs).
  // Attribution error tile: REPLACES the photo when an Unsplash src has
  // no credit attribute — rendering the photo uncredited is the terms
  // violation, so the photo must not appear at all.
  // Calm and neutral on purpose (review feedback): the tile informs the
  // user; the fix instructions are machine-facing (usage docblock, tool
  // description, and the turn-end scan's bounce copy name the attributes
  // for the agent).
  '.attr-error{position:absolute;inset:0;display:none;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  background:#f2f1ef;color:#6e6c66;user-select:none;' + '  font:13px/1.45 system-ui,-apple-system,sans-serif}' + '.attr-error svg{opacity:.55}' + '.attr-error .cap{max-width:92%;font-weight:500;letter-spacing:.01em}' + ':host([data-attribution-error]) .attr-error{display:flex}' + ':host([data-attribution-error]) .ring{display:none}';
  const icon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>' + '<path d="m21 15-5-5L5 21"/></svg>';
  const warnIcon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<path d="m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/>' + '<path d="M12 9v4"/><path d="M12 17h.01"/></svg>';
  class ImageSlot extends HTMLElement {
    static get observedAttributes() {
      return ['shape', 'radius', 'mask', 'fit', 'placeholder', 'src', 'id', 'credit', 'credit-href'];
    }

    /** Duplicate-slide hook (called by deck-stage, see its
     *  _remintDuplicateIds): copy this id's stored image, if any, under a
     *  freshly minted key and return that key — so a duplicated slide's
     *  slot keeps its dropped photo instead of reverting to the
     *  placeholder. 'isFree' is the caller's uniqueness check (document
     *  ids); candidates must ALSO be unused in the sidecar, which can
     *  hold keys from other pages sharing the project root. (An EMPTY
     *  slot on another page leaves no sidecar entry, so its id is not
     *  detectable here — a minted key can collide with it and that slot
     *  would show this photo. Same blast radius as two pages reusing an
     *  id by hand, which the shared sidecar already permits.) Returns null
     *  when no id could be minted (caller strips the id, today's
     *  behavior). */
    static cloneSlot(fromId, isFree) {
      if (typeof fromId !== 'string' || !fromId) return null;
      // Pre-hydration the store can't veto candidates or source the copy
      // — degrade to the strip (today's behavior) rather than mint
      // against keys we can't see yet. Any rendered (= droppable) slot
      // means load() has already settled.
      if (!loaded) return null;
      const stem = fromId.replace(/-\d+$/, '') || fromId;
      for (let n = 2; n < 100; n++) {
        const toId = stem + '-' + n;
        if (toId === fromId) continue;
        if (slots[toId] !== undefined) {
          // Reuse a key holding this exact value (bytes AND crop) if no
          // live element here owns it — a duplicate op the host refused
          // after minting leaves such a key behind, and reusing keeps
          // refused retries from accumulating one orphaned copy per
          // attempt. Full equality (not just bytes) so a byte-identical
          // key another PAGE owns with its own crop is stepped past, not
          // adopted or rewritten. (Entries without .u never match.)
          const prev = getSlot(toId);
          const cur = getSlot(fromId);
          if (!(prev && cur && prev.u && prev.u === cur.u && prev.s === cur.s && prev.x === cur.x && prev.y === cur.y && (typeof isFree !== 'function' || isFree(toId)))) continue;
          return toId;
        }
        if (typeof isFree === 'function' && !isFree(toId)) continue;
        const v = getSlot(fromId);
        if (v) setSlot(toId, Object.assign({}, v));
        return toId;
      }
      return null;
    }
    constructor() {
      super();
      // clonable: rail thumbnails deep-clone slides and carry this shadow
      // along; reuse an already-cloned root so upgrade-after-clone works.
      // (Deliberately NOT serializable — a getHTML consumer would embed
      // multi-MB sidecar data-URLs into serialized page HTML.)
      const root = this.shadowRoot || this.attachShadow({
        mode: 'open',
        clonable: true
      });
      // .spill and .ctl sit OUTSIDE .frame so overflow:hidden + border-radius
      // on the frame (circle, pill, rounded) can't clip them.
      root.innerHTML = '<style>' + stylesheet + '</style>' + '<div class="frame" part="frame">' + '  <img part="image" alt="" draggable="false" style="display:none">' + '  <div class="empty" part="empty">' + icon + '    <div class="cap"></div>' + '    <div class="sub">or <u>browse files</u></div></div>' + '  <div class="attr-error" part="attribution-error">' + warnIcon + '    <div class="cap">This photo needs attribution</div></div>' + '  <div class="loading" part="loading"></div>' + '  <div class="ring" part="ring"></div>' + '</div>' +
      // Outside .frame, like .spill/.ctl — the frame's overflow:hidden +
      // border-radius/clip-path would cut the credit off on circle/pill/mask.
      // A SPAN, not an <a>: the prescribed Unsplash credit holds two links
      // (photographer + Unsplash), built per-render in _render().
      '<span class="credit" part="credit"></span>' + '<div class="spill" popover="manual" data-dc-edit-transparent>' + '  <img class="ghost" alt="" draggable="false">' + '  <div class="handle" data-c="nw"></div><div class="handle" data-c="ne"></div>' + '  <div class="handle" data-c="sw"></div><div class="handle" data-c="se"></div>' + '</div>' +
      // data-dc-edit-transparent: the DC editor's edit-mode picker lets
      // clicks through for chrome marked with it (EDIT_TRANSPARENT_SEL)
      // — without it, Replace/Edit clicks in Edit mode are swallowed by
      // element selection and the controls look dead.
      '<div class="ctl" popover="manual" data-dc-edit-transparent><button data-act="replace" title="Replace image">Replace</button>' + '  <button data-act="edit" title="Reframe image">Edit</button></div>' + '<input type="file" accept="' + ACCEPT.join(',') + '" hidden>';
      this._frame = root.querySelector('.frame');
      this._ring = root.querySelector('.ring');
      this._img = root.querySelector('.frame img');
      this._empty = root.querySelector('.empty');
      this._cap = root.querySelector('.cap');
      this._sub = root.querySelector('.sub');
      this._spill = root.querySelector('.spill');
      this._ctl = root.querySelector('.ctl');
      this._credit = root.querySelector('.credit');
      this._attrError = root.querySelector('.attr-error');
      // Credit clicks open the link, not browse/reframe.
      this._credit.addEventListener('click', e => e.stopPropagation());
      this._credit.addEventListener('dblclick', e => e.stopPropagation());
      this._ghost = root.querySelector('.ghost');
      this._err = null;
      this._input = root.querySelector('input');
      this._depth = 0;
      this._gen = 0;
      // Encode-in-flight marker (the owning _ingest generation): while set,
      // the same-src "nothing in flight" clear in _render must not fire —
      // the stored value still points at the OLD image until the encode
      // lands, so that clear would unmask the stale image mid-replace.
      this._swapGen = 0;
      // Render-owned swap in flight: set when _render assigns a new src,
      // cleared only by the img's own load/error (or the empty branch).
      // img.complete CANNOT stand in for this — setting src only QUEUES
      // the current-request swap (a microtask), so synchronously after an
      // assignment, complete still reports the OLD settled request. The
      // pick path does exactly that: the host sets src, credit, and
      // credit-href back-to-back in one task, and renders #2/#3 would
      // read the stale complete === true and drop the mask one render
      // after it was set.
      this._loadPending = false;
      // See _render's empty branch: a transient attribution-error wipe of a
      // showing image must make the follow-up render a replacement (spinner),
      // not a first fill (blank frame).
      this._hidShowing = false;
      this._view = {
        s: 1,
        x: 0,
        y: 0
      };
      this._subFn = () => this._render();
      // Shadow-DOM listeners live with the shadow DOM — bound once here so
      // disconnect/reconnect (e.g. React remount) doesn't stack handlers.
      this._empty.addEventListener('click', () => this._input.click());
      root.addEventListener('click', e => {
        const act = e.target && e.target.getAttribute && e.target.getAttribute('data-act');
        if (!act) return;
        // The hidden controls are opacity-0 but still tabbable — without
        // this gate a keyboard user could drive them on a read-only share
        // link (mirrors the dblclick handler's editable gate).
        if (!this.hasAttribute('data-editable')) return;
        if (act === 'replace') {
          this._exitReframe(true);
          // Host-owned picker (Unsplash modal; it also offers local import).
          this.dispatchEvent(new CustomEvent('image-slot:pick', {
            bubbles: true,
            composed: true,
            detail: {
              id: this.id || null
            }
          }));
        }
        if (act === 'edit') {
          if (!this._reframes()) return;
          if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
        }
      });
      this._input.addEventListener('change', () => {
        const f = this._input.files && this._input.files[0];
        if (f) this._ingest(f);
        this._input.value = '';
      });
      // naturalWidth/Height aren't known until load — re-apply so the cover
      // baseline is computed from real dimensions, not the 100%×100% fallback.
      // load/error also release the replacement-in-flight mask (via the
      // single discipline in _releaseMask): the swap is only revealed once
      // the new image can actually paint (on error the frame shows its
      // background, same as a fresh slot with a broken src).
      this._img.addEventListener('load', () => {
        this._loadPending = false;
        this._releaseMask(true);
        this._applyView();
      });
      this._img.addEventListener('error', () => {
        this._loadPending = false;
        this._releaseMask(true);
      });
      // Gated only on editable — any filled slot can be repositioned/scaled,
      // regardless of fit. Share links (no writeFile) stay static.
      this.addEventListener('dblclick', e => {
        if (!this.hasAttribute('data-editable') || !this._reframes()) return;
        e.preventDefault();
        if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
      });
      // Pan + resize both originate on the spill layer. A handle pointerdown
      // drives an aspect-locked resize anchored at the opposite corner; any
      // other pointerdown on the spill pans. Offsets are frame-% so a
      // reframed slot survives responsive resize / PPTX export.
      this._spill.addEventListener('pointerdown', e => {
        if (e.button !== 0 || !this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        e.stopPropagation();
        this._spill.setPointerCapture(e.pointerId);
        const rect = this.getBoundingClientRect();
        const fw = rect.width || 1,
          fh = rect.height || 1;
        const corner = e.target.getAttribute && e.target.getAttribute('data-c');
        let move;
        if (corner) {
          // Resize about the OPPOSITE corner. Viewport-px throughout (rect
          // fw/fh, not clientWidth) so the math survives a transform:scale()
          // ancestor — deck_stage renders slides scaled-to-fit.
          const iw = this._img.naturalWidth || 1,
            ih = this._img.naturalHeight || 1;
          const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
          const base = contain ? Math.min(fw / iw, fh / ih) : Math.max(fw / iw, fh / ih);
          const sx = corner.includes('e') ? 1 : -1;
          const sy = corner.includes('s') ? 1 : -1;
          const s0 = this._view.s;
          const w0 = iw * base * s0,
            h0 = ih * base * s0;
          const cx0 = (50 + this._view.x) / 100 * fw;
          const cy0 = (50 + this._view.y) / 100 * fh;
          const ox = cx0 - sx * w0 / 2,
            oy = cy0 - sy * h0 / 2;
          const diag0 = Math.hypot(w0, h0);
          const ux = sx * w0 / diag0,
            uy = sy * h0 / diag0;
          move = ev => {
            const proj = (ev.clientX - rect.left - ox) * ux + (ev.clientY - rect.top - oy) * uy;
            const s = clampS(s0 * proj / diag0);
            const d = diag0 * s / s0;
            this._view.s = s;
            this._view.x = (ox + ux * d / 2) / fw * 100 - 50;
            this._view.y = (oy + uy * d / 2) / fh * 100 - 50;
            this._clampView();
            this._applyView();
          };
        } else {
          this.setAttribute('data-panning', '');
          const start = {
            px: e.clientX,
            py: e.clientY,
            x: this._view.x,
            y: this._view.y
          };
          move = ev => {
            this._view.x = start.x + (ev.clientX - start.px) / fw * 100;
            this._view.y = start.y + (ev.clientY - start.py) / fh * 100;
            this._clampView();
            this._applyView();
          };
        }
        const up = () => {
          try {
            this._spill.releasePointerCapture(e.pointerId);
          } catch {}
          this._spill.removeEventListener('pointermove', move);
          this._spill.removeEventListener('pointerup', up);
          this._spill.removeEventListener('pointercancel', up);
          this.removeAttribute('data-panning');
          this._dragUp = null;
        };
        // Stashed so _exitReframe (Escape / outside-click mid-drag) can
        // tear the capture + listeners down synchronously.
        this._dragUp = up;
        this._spill.addEventListener('pointermove', move);
        this._spill.addEventListener('pointerup', up);
        this._spill.addEventListener('pointercancel', up);
      });
      // Wheel zoom stays available inside reframe mode as a trackpad nicety —
      // zooms toward the cursor (offset' = cursor·(1-k) + offset·k).
      this.addEventListener('wheel', e => {
        if (!this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        const r = this.getBoundingClientRect();
        const cx = (e.clientX - r.left) / r.width * 100 - 50;
        const cy = (e.clientY - r.top) / r.height * 100 - 50;
        const prev = this._view.s;
        const next = clampS(prev * Math.pow(1.0015, -e.deltaY));
        if (next === prev) return;
        const k = next / prev;
        this._view.s = next;
        this._view.x = cx * (1 - k) + this._view.x * k;
        this._view.y = cy * (1 - k) + this._view.y * k;
        this._clampView();
        this._applyView();
      }, {
        passive: false
      });
    }
    connectedCallback() {
      // Warn once per page — an id-less slot works for the session but
      // cannot persist, and two id-less slots would share nothing.
      if (!this.id && !ImageSlot._warned) {
        ImageSlot._warned = true;
        console.warn('<image-slot> without an id will not persist its dropped image.');
      }
      this.addEventListener('dragenter', this);
      this.addEventListener('dragover', this);
      this.addEventListener('dragleave', this);
      this.addEventListener('drop', this);
      subs.add(this._subFn);
      // The host may inject window.omelette.writeFile AFTER the first render;
      // re-render on hover so the editable-gated controls reliably appear.
      this.addEventListener('pointerenter', this._subFn);
      // width%/height% in _applyView encode the frame aspect at call time —
      // a host resize (responsive grid, pane divider) would stretch the
      // image until the next _render. Re-render on size change: _render()
      // re-seeds _view from stored before clamp/apply, so a shrink→grow
      // cycle round-trips instead of ratcheting x/y toward the narrower
      // frame's clamp range.
      this._ro = new ResizeObserver(() => this._render());
      this._ro.observe(this);
      load();
      this._render();
    }
    disconnectedCallback() {
      subs.delete(this._subFn);
      this.removeEventListener('pointerenter', this._subFn);
      this.removeEventListener('dragenter', this);
      this.removeEventListener('dragover', this);
      this.removeEventListener('dragleave', this);
      this.removeEventListener('drop', this);
      if (this._ro) {
        this._ro.disconnect();
        this._ro = null;
      }
      // commit=false: a disconnect is not a user intent — committing here
      // would persist whatever half-finished drag a React remount or DOM
      // splice happened to interrupt. Deliberate exits commit on their own
      // paths (Escape/click-out/toggle), and unloads commit via pagehide.
      this._exitReframe(false);
    }
    _enterReframe() {
      if (this.hasAttribute('data-reframe')) return;
      this.setAttribute('data-reframe', '');
      this._signalReframe(true);
      // Best-effort commit when the document unloads mid-reframe (a host
      // navigation racing the enter signal, a manual reload, tab close):
      // the sidecar write rides the host bridge, which outlives this
      // document, so the crop survives even though the mode dies with the
      // DOM. Held on the instance so _exitReframe detaches exactly what
      // was attached.
      this._pagehide = () => {
        this._exitReframe(true);
        flushNow();
      };
      window.addEventListener('pagehide', this._pagehide);
      // Promote spill to the top layer, then keep it pinned over the frame:
      // scroll/resize cover the common cases, and a per-frame rect check
      // catches layout shifts that fire neither (an image above finishing
      // load, streamed DOM pushing the slot down, an ancestor transform
      // change) so the overlay can't detach from the frame.
      try {
        this._spill.showPopover();
      } catch {}
      // After the spill, so the controls stack above it in the top layer.
      try {
        this._ctl.showPopover();
      } catch {}
      this._reposition = () => {
        if (this.hasAttribute('data-reframe')) this._applyView();
      };
      window.addEventListener('scroll', this._reposition, true);
      window.addEventListener('resize', this._reposition);
      this._lastRect = '';
      this._watch = () => {
        if (!this.hasAttribute('data-reframe')) return;
        const r = this.getBoundingClientRect();
        const key = r.left + ',' + r.top + ',' + r.width + ',' + r.height;
        if (key !== this._lastRect) {
          this._lastRect = key;
          this._applyView();
        }
        this._watchId = requestAnimationFrame(this._watch);
      };
      this._watchId = requestAnimationFrame(this._watch);
      this._applyView();
      // Close on click outside (the spill handler stopPropagation()s so
      // in-image drags don't reach this) and on Escape. Listeners are held
      // on the instance so _exitReframe / disconnectedCallback can detach
      // exactly what was attached.
      this._outside = e => {
        if (e.composedPath && e.composedPath().includes(this)) return;
        this._exitReframe(true);
      };
      this._esc = e => {
        if (e.key === 'Escape') this._exitReframe(true);
      };
      document.addEventListener('pointerdown', this._outside, true);
      document.addEventListener('keydown', this._esc, true);
    }
    _exitReframe(commit) {
      if (!this.hasAttribute('data-reframe')) return;
      if (this._dragUp) this._dragUp();
      this.removeAttribute('data-reframe');
      this.removeAttribute('data-panning');
      if (this._outside) document.removeEventListener('pointerdown', this._outside, true);
      if (this._esc) document.removeEventListener('keydown', this._esc, true);
      this._outside = this._esc = null;
      if (this._reposition) {
        window.removeEventListener('scroll', this._reposition, true);
        window.removeEventListener('resize', this._reposition);
        this._reposition = null;
      }
      if (this._watchId) {
        cancelAnimationFrame(this._watchId);
        this._watchId = 0;
      }
      if (this._pagehide) {
        window.removeEventListener('pagehide', this._pagehide);
        this._pagehide = null;
      }
      try {
        this._spill.hidePopover();
      } catch {}
      try {
        this._ctl.hidePopover();
      } catch {}
      this._ctl.style.left = '';
      this._ctl.style.top = '';
      if (commit) this._commitView();
      this._signalReframe(false);
    }

    // Reframe state lives only in this DOM until commit, invisible to the
    // host's dirty signals — announce enter/exit so the host can hold
    // auto-reloads for exactly the gesture (the guest bundle forwards
    // image-slot:reframe to the host as imageSlotReframe). Dispatched on
    // the element (composed, so it escapes shadow roots) while connected;
    // a disconnected exit (disconnectedCallback) falls back to document so
    // the host still hears it.
    _signalReframe(active) {
      const target = this.isConnected ? this : document;
      target.dispatchEvent(new CustomEvent('image-slot:reframe', {
        bubbles: true,
        composed: true,
        detail: {
          active: active,
          id: this.id || null
        }
      }));
    }

    // Public: host's "Import from computer" calls this to run local browse.
    openFilePicker() {
      this._exitReframe(true);
      this._input.click();
    }

    // A src write is a newer intent for this slot's content — the host
    // pick path (setImageSlotImage) or an agent edit — so it must win
    // over any encode still in flight from an earlier drop: left live,
    // that encode lands later, passes _ingest's gen guard, and its
    // setSlot silently overwrites the pick (the stored value shadows
    // src in _render). Bumping _gen kills the encode before its own
    // _swapGen clear runs, so clear the dead claim here too — otherwise
    // _releaseMask (gated on !_swapGen) never fires and the pick's
    // spinner is stranded. src ONLY: the pick sets credit/credit-href
    // in the same task, and clearing _swapGen on those would let the
    // same-src branch unmask the old image mid-encode.
    attributeChangedCallback(name, oldVal, newVal) {
      if (name === 'src' && oldVal !== newVal) {
        this._gen++;
        this._swapGen = 0;
      }
      if (this.shadowRoot) this._render();
    }

    // handleEvent — one listener object for all four drag events keeps the
    // add/remove symmetric and the depth counter correct.
    handleEvent(e) {
      if (e.type === 'dragenter' || e.type === 'dragover') {
        // Without preventDefault the browser never fires 'drop'.
        e.preventDefault();
        e.stopPropagation();
        if (e.dataTransfer) e.dataTransfer.dropEffect = 'copy';
        if (e.type === 'dragenter') this._depth++;
        this.setAttribute('data-over', '');
      } else if (e.type === 'dragleave') {
        // dragenter/leave fire for every descendant crossing — count depth
        // so hovering the icon inside the empty state doesn't flicker.
        if (--this._depth <= 0) {
          this._depth = 0;
          this.removeAttribute('data-over');
        }
      } else if (e.type === 'drop') {
        e.preventDefault();
        e.stopPropagation();
        this._depth = 0;
        this.removeAttribute('data-over');
        const f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
        if (f) this._ingest(f);
      }
    }
    async _ingest(file) {
      this._setError(null);
      if (!file || ACCEPT.indexOf(file.type) < 0) {
        this._setError('Drop a PNG, JPEG, WebP, or AVIF image.');
        return;
      }
      // toDataUrl can take hundreds of ms on a large photo. A Clear or a
      // newer drop during that window would be clobbered when this await
      // resumes — bump + capture a generation so stale encodes bail.
      const gen = ++this._gen;
      // Replacing a shown image: surface the swap through the encode too,
      // not just the decode — otherwise the old photo sits there with no
      // feedback while the canvas re-encode runs. An empty slot keeps its
      // placeholder (no spinner) until the encode lands, as before.
      // _swapGen guards the mask against re-renders DURING the encode
      // (pointerenter, ResizeObserver, another slot's store write): the
      // stored value still resolves to the old image there, so _render's
      // same-src clear would otherwise unmask it mid-replace.
      if (this.hasAttribute('data-filled')) {
        this.setAttribute('data-swapping', '');
        this._swapGen = gen;
      }
      try {
        const w = this.clientWidth || this.offsetWidth || MAX_DIM;
        const url = await toDataUrl(file, w);
        if (gen !== this._gen) return;
        // Only exit reframe once the new image is in hand — a rejected type
        // or decode failure leaves the in-progress crop untouched.
        this._exitReframe(false);
        // Clear BEFORE setSlot: its synchronous re-render must see no
        // pending encode, so a byte-identical re-upload (same data URL, no
        // load event coming) still clears the mask via the complete branch.
        this._swapGen = 0;
        const val = {
          u: url,
          s: 1,
          x: 0,
          y: 0
        };
        setSlot(this.id || '', val);
        // Keep a session-local copy for id-less slots so the drop still
        // shows, even though it cannot persist.
        if (!this.id) {
          this._local = val;
          this._render();
        }
      } catch (err) {
        if (gen !== this._gen) return;
        this._swapGen = 0;
        // Reveal the kept old image — unless another replacement (a
        // remote pick's src swap) is still in flight, in which case the
        // mask stays until THAT image settles (its load/error releases).
        this._releaseMask();
        this._setError('Could not read that image.');
        console.warn('<image-slot> ingest failed:', err);
      }
    }
    _setError(msg) {
      if (this._err) {
        this._err.remove();
        this._err = null;
      }
      if (!msg) return;
      const d = document.createElement('div');
      d.className = 'err';
      d.textContent = msg;
      this.shadowRoot.appendChild(d);
      this._err = d;
      setTimeout(() => {
        if (this._err === d) {
          d.remove();
          this._err = null;
        }
      }, 3000);
    }

    // Reframing (pan/resize) is available on any filled slot — the user can
    // always reposition/scale. `fit` only sets the initial baseline (see
    // _geom): contain starts fully-visible, cover starts frame-filling.
    _reframes() {
      return this.hasAttribute('data-filled');
    }

    // The single release discipline for the replacement-in-flight mask
    // (data-swapping). The mask comes off only when BOTH hold:
    //  - no encode is pending (_swapGen) — mid-encode the stored value
    //    still resolves to the old image, so any reveal paints it;
    //  - the frame img has settled on its current src — an unsettled src
    //    means some replacement is still in flight (e.g. a remote pick),
    //    whoever started it, and revealing would paint the previous
    //    frame. The load/error listeners pass settled=true (the event IS
    //    the settlement signal, per spec complete is true by then);
    //    other callers rely on the complete flag (covers loaded AND
    //    failed).
    // Every release path funnels through here EXCEPT _render's empty
    // branch (the img is being cleared — nothing will ever settle).
    _releaseMask(settled) {
      if (!this._swapGen && !this._loadPending && (settled || this._img.complete)) {
        this.removeAttribute('data-swapping');
      }
    }

    // Baseline geometry, shared by clamp/apply/resize. `base` is the scale at
    // view-scale s=1: cover = fill the frame (overflow on the looser axis),
    // contain = fit fully inside (letterboxed). Zooming a contain image past
    // s where it overflows naturally becomes a crop. Null until the img has
    // loaded (naturalWidth is 0 before that) or when the slot has no layout
    // box — ResizeObserver fires with a 0×0 rect under display:none, and
    // clamping against a degenerate 1×1 frame would silently pull the stored
    // pan toward zero.
    _geom() {
      const iw = this._img.naturalWidth,
        ih = this._img.naturalHeight;
      const fw = this.clientWidth,
        fh = this.clientHeight;
      if (!iw || !ih || !fw || !fh) return null;
      const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
      const base = contain ? Math.min(fw / iw, fh / ih) : Math.max(fw / iw, fh / ih);
      return {
        iw,
        ih,
        fw,
        fh,
        base
      };
    }
    _clampView() {
      // Pan range on each axis is half the overflow past the frame edge.
      const g = this._geom();
      if (!g) return;
      const mx = Math.max(0, (g.iw * g.base * this._view.s / g.fw - 1) * 50);
      const my = Math.max(0, (g.ih * g.base * this._view.s / g.fh - 1) * 50);
      this._view.x = Math.max(-mx, Math.min(mx, this._view.x));
      this._view.y = Math.max(-my, Math.min(my, this._view.y));
    }
    _applyView() {
      const g = this._geom();
      // Top-layer controls: pin to the frame's top-right in viewport px
      // (the same 8px inset as the in-frame layout; unscaled — top-layer UI
      // reads as chrome, not page content). BEFORE the geometry branch:
      // placement needs only the frame rect, and a not-yet-loaded or broken
      // src must not leave the promoted strip floating unpositioned. Gated
      // on the popover actually being open: without the Popover API,
      // showPopover() threw (swallowed in _enterReframe), .ctl stays in
      // its in-frame absolute layout, and viewport-px coordinates would
      // shove it off-frame — and matches(':popover-open') itself throws
      // there (unknown pseudo-class), hence the try/catch.
      if (this.hasAttribute('data-reframe')) {
        let onTop = false;
        try {
          onTop = this._ctl.matches(':popover-open');
        } catch {}
        if (onTop) {
          const r = this.getBoundingClientRect();
          this._ctl.style.left = r.right - 8 + 'px';
          this._ctl.style.top = r.top + 8 + 'px';
        }
      }
      if (!g) {
        // Dimensions not known yet (before img load) — centered fit so there
        // is no flash of an unpositioned image before the geometry lands.
        const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
        this._img.style.width = '100%';
        this._img.style.height = '100%';
        this._img.style.left = '50%';
        this._img.style.top = '50%';
        this._img.style.objectFit = contain ? 'contain' : 'cover';
        return;
      }
      // Baseline (cover-fill or contain-fit) × view scale. Width/height and
      // left/top are all frame-% — depends only on the frame aspect ratio, so
      // a responsive resize keeps the same crop. The spill layer mirrors the
      // same box so its corners = image corners.
      const k = g.base * this._view.s;
      const w = g.iw * k / g.fw * 100 + '%';
      const h = g.ih * k / g.fh * 100 + '%';
      const l = 50 + this._view.x + '%';
      const t = 50 + this._view.y + '%';
      this._img.style.width = w;
      this._img.style.height = h;
      this._img.style.left = l;
      this._img.style.top = t;
      this._img.style.objectFit = '';
      if (this.hasAttribute('data-reframe')) {
        // Top-layer spill: position in viewport px over the frame. The top
        // layer escapes ancestor transforms entirely, so EVERY term must be
        // in viewport units: getBoundingClientRect gives the frame's scaled
        // origin AND size, and the rect/layout ratio rescales the ghost —
        // sizing from layout px alone renders it 1/scale too large under a
        // scaled deck slide. Inner ghost + handles stay box-relative.
        const r = this.getBoundingClientRect();
        const sx = g.fw ? r.width / g.fw : 1;
        const sy = g.fh ? r.height / g.fh : 1;
        this._spill.style.width = g.iw * k * sx + 'px';
        this._spill.style.height = g.ih * k * sy + 'px';
        this._spill.style.left = r.left + (50 + this._view.x) / 100 * r.width + 'px';
        this._spill.style.top = r.top + (50 + this._view.y) / 100 * r.height + 'px';
      }
    }
    _commitView() {
      const v = {
        s: this._view.s,
        x: this._view.x,
        y: this._view.y
      };
      if (this._userUrl) v.u = this._userUrl;
      // Framing-only (no u) persists too so an author-src slot remembers its
      // crop; clearing the sidecar still falls through to src=.
      if (this.id) setSlot(this.id, v);else {
        this._local = v;
      }
    }
    _render() {
      // Shape / mask. Presets use border-radius so the dashed ring can
      // follow the rounded outline; clip-path is only applied for an
      // explicit `mask` (the ring is hidden there since a rectangle
      // dashed border chopped by an arbitrary polygon looks broken).
      const mask = this.getAttribute('mask');
      const shape = (this.getAttribute('shape') || 'rounded').toLowerCase();
      let radius = '';
      if (shape === 'circle') radius = '50%';else if (shape === 'pill') radius = '9999px';else if (shape === 'rounded') {
        const n = parseFloat(this.getAttribute('radius'));
        radius = (Number.isFinite(n) ? n : 12) + 'px';
      }
      this._frame.style.borderRadius = mask ? '' : radius;
      this._frame.style.clipPath = mask || '';
      this._ring.style.borderRadius = mask ? '' : radius;
      this._ring.style.display = mask ? 'none' : '';

      // Controls and reframe entry gate on this so share links stay read-only.
      const editable = !!(window.omelette && window.omelette.writeFile);
      this.toggleAttribute('data-editable', editable);
      this._sub.style.display = editable ? '' : 'none';

      // Content. The sidecar is also writable by the agent's write_file
      // tool, so its value isn't guaranteed canvas-originated — only accept
      // data:image/ URLs from it. The `src` attribute is author-controlled
      // (Claude wrote it into the HTML) so it passes through unchanged.
      let stored = this.id ? getSlot(this.id) : this._local;
      if (stored && stored.u && !/^data:image\//i.test(stored.u)) stored = null;
      const srcAttr = this.getAttribute('src') || '';
      this._userUrl = stored && stored.u || null;
      const url = this._userUrl || srcAttr;
      // Don't clobber an in-flight reframe with a store-triggered re-render.
      if (!this.hasAttribute('data-reframe')) {
        this._view = {
          s: stored && Number.isFinite(stored.s) ? clampS(stored.s) : 1,
          x: stored && Number.isFinite(stored.x) ? stored.x : 0,
          y: stored && Number.isFinite(stored.y) ? stored.y : 0
        };
      }
      this._cap.textContent = this.getAttribute('placeholder') || 'Drop an image';
      // Toggle via style.display — the [hidden] attribute alone loses to
      // the display:flex / display:block rules in the stylesheet above.
      // An Unsplash src with no credit attribute must NOT render — showing
      // the photo uncredited is the Unsplash-terms violation itself. The
      // error tile replaces the photo until the credit is written. A
      // user-dropped image is the user's own content and always renders.
      // Trimmed: credit is agent/user-editable content, and a whitespace-
      // only value must count as missing — otherwise it would suppress the
      // error tile AND render an empty credit box (no text, no links),
      // exactly the unattributed state this gate exists to prevent.
      const credit = (this.getAttribute('credit') || '').trim();
      const attrError = !!(!credit && !this._userUrl && srcAttr && isUnsplashHost(srcAttr));
      this.toggleAttribute('data-attribution-error', attrError);
      if (url && !attrError) {
        const prev = this._img.getAttribute('src');
        if (prev !== url) {
          // Replacing an already-shown image: mark the swap BEFORE setting
          // src so the stale frame is never revealed (see the data-swapping
          // stylesheet rules). First fill (prev empty) keeps the existing
          // placeholder-until-load behavior — no spinner. _hidShowing
          // covers the pick path's transient attribution-error wipe: prev
          // is gone, but an image WAS showing, so this is a replacement.
          if (prev || this._hidShowing) this.setAttribute('data-swapping', '');
          // Mark the swap BEFORE assigning src: complete keeps reporting
          // the old settled request until the browser's
          // update-the-image-data microtask runs, so same-task re-renders
          // (the pick path's credit/credit-href setAttributes) need this
          // flag, not complete, to know a load is in flight.
          this._loadPending = true;
          this._img.src = url;
          this._ghost.src = url;
        } else {
          // Same-src re-render — release if settled, so an ingest-set
          // spinner can't stick after a byte-identical re-upload (same
          // data URL, no further load event ever fires).
          this._releaseMask();
        }
        this._hidShowing = false;
        this._img.style.display = 'block';
        this._empty.style.display = 'none';
        this.setAttribute('data-filled', '');
        this._clampView();
        this._applyView();
      } else {
        this.removeAttribute('data-swapping');
        // The src is being removed — no load/error will ever fire for it.
        this._loadPending = false;
        // A transient attribution-error wipe of a showing image happens on
        // the pick path: the host sets src one setAttribute before credit,
        // so render N hides the old image (attrError) and render N+1
        // restores a URL. Remember the wipe so that restore renders as a
        // replacement (spinner), not a first fill (blank frame).
        this._hidShowing = attrError && !!this._img.getAttribute('src');
        this._img.style.display = 'none';
        this._img.removeAttribute('src');
        this._ghost.removeAttribute('src');
        // The error tile owns the blocked-photo state; .empty stays for
        // the genuinely-empty slot.
        this._empty.style.display = attrError ? 'none' : 'flex';
        this.removeAttribute('data-filled');
      }

      // Credit belongs to the author src, so a user drop hides it.
      // textContent + the http(s)-only funnel keep external strings inert.
      const showCredit = !!(url && credit && !this._userUrl && !attrError);
      this._credit.textContent = '';
      if (showCredit) {
        // Validate once (resolved against the document, http(s) only),
        // then append the terms-required utm referral params to links
        // that point back at unsplash.com.
        let href = '';
        const rawHref = this.getAttribute('credit-href') || '';
        if (rawHref) {
          try {
            const u = new URL(rawHref, document.baseURI);
            if (u.protocol === 'http:' || u.protocol === 'https:') {
              href = withReferral(u.href);
            }
          } catch {}
        }
        const mkLink = (text, linkHref) => {
          const a = document.createElement('a');
          a.setAttribute('target', '_blank');
          a.setAttribute('rel', 'noopener noreferrer');
          a.setAttribute('href', linkHref);
          a.textContent = text;
          return a;
        };
        // Unsplash's prescribed credit is TWO links — the photographer's
        // name to their profile (credit-href) and 'Unsplash' to the
        // homepage. Render that split whenever the text has the canonical
        // shape; other text keeps the legacy single-link rendering.
        const m = /^Photo by (.+) on Unsplash$/.exec(credit);
        if (m) {
          this._credit.appendChild(document.createTextNode('Photo by '));
          this._credit.appendChild(href ? mkLink(m[1], href) : document.createTextNode(m[1]));
          this._credit.appendChild(document.createTextNode(' on '));
          this._credit.appendChild(mkLink('Unsplash', UNSPLASH_HOMEPAGE_HREF));
        } else if (href) {
          this._credit.appendChild(mkLink(credit, href));
        } else {
          this._credit.textContent = credit;
        }
      }
      this.toggleAttribute('data-credit', showCredit);
    }
  }
  if (!customElements.get('image-slot')) {
    customElements.define('image-slot', ImageSlot);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "guidelines/image-slot.js", error: String((e && e.message) || e) }); }

// ui_kits/guildyard-site/app.jsx
try { (() => {
function SiteApp({
  initialView = "home",
  initialArticle = null
}) {
  const {
    SiteHeader,
    SiteFooter,
    HomeView,
    JournalView,
    ArticleView,
    ArchiveView,
    AboutView,
    PolicyView
  } = window;
  const [view, setView] = React.useState(initialView);
  const [article, setArticle] = React.useState(initialArticle);
  const go = v => {
    setView(v);
    window.scrollTo(0, 0);
  };
  const open = a => {
    setArticle(a);
    setView("article");
    window.scrollTo(0, 0);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--gy-surface-page)",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement(SiteHeader, {
    view: view,
    onNavigate: go
  }), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1
    }
  }, view === "home" && /*#__PURE__*/React.createElement(HomeView, {
    onNavigate: go,
    onOpenArticle: open
  }), view === "journal" && /*#__PURE__*/React.createElement(JournalView, {
    onNavigate: go,
    onOpenArticle: open
  }), view === "article" && /*#__PURE__*/React.createElement(ArticleView, {
    article: article,
    onNavigate: go,
    onOpenArticle: open
  }), view === "archive" && /*#__PURE__*/React.createElement(ArchiveView, {
    onOpenArticle: open
  }), view === "about" && /*#__PURE__*/React.createElement(AboutView, {
    onNavigate: go
  }), view === "policy" && /*#__PURE__*/React.createElement(PolicyView, {
    onNavigate: go
  })), /*#__PURE__*/React.createElement(SiteFooter, {
    onNavigate: go
  }));
}
Object.assign(window, {
  SiteApp
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/guildyard-site/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/guildyard-site/archive.jsx
try { (() => {
const {
  Tabs,
  Pagination,
  Input,
  Field,
  Divider,
  ArticleMeta
} = window.GuildyardDesignSystem_59975b;
const GY_PAGE_SIZE = 4;
function ArchiveView({
  onOpenArticle
}) {
  const {
    Container
  } = window;
  const all = window.GY_ARTICLES;
  const [cat, setCat] = React.useState("all");
  const [page, setPage] = React.useState(1);
  const [query, setQuery] = React.useState("");
  const tabs = [{
    id: "all",
    label: "All",
    count: all.length
  }, ...window.GY_CATEGORIES.map(c => ({
    id: c,
    label: c,
    count: all.filter(a => a.category === c).length
  }))];
  const q = query.trim().toLowerCase();
  const filtered = all.filter(a => {
    if (!q && cat !== "all" && a.category !== cat) return false;
    if (!q) return true;
    return [a.title, a.lede, a.category, a.kind, a.date].join(" ").toLowerCase().indexOf(q) !== -1;
  });
  const pageCount = Math.max(1, Math.ceil(filtered.length / GY_PAGE_SIZE));
  const current = Math.min(page, pageCount);
  const pageRows = filtered.slice((current - 1) * GY_PAGE_SIZE, current * GY_PAGE_SIZE);
  const years = [...new Set(pageRows.map(a => a.iso.slice(0, 4)))].sort().reverse();
  const goPage = n => {
    setPage(n);
    window.scrollTo(0, 0);
  };
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "72px 0 96px"
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      gap: 40,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14,
      maxWidth: 620
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--gy-type-meta)",
      letterSpacing: "var(--gy-tracking-wider)",
      textTransform: "uppercase",
      color: "var(--gy-copper-600)"
    }
  }, "Archive"), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: "var(--gy-weight-semibold) var(--gy-text-4xl)/1.16 var(--gy-font-serif)",
      letterSpacing: "-0.012em",
      color: "var(--gy-ink-900)"
    }
  }, "Everything the Journal has published"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--gy-type-body)",
      color: "var(--gy-text-secondary)",
      margin: 0
    }
  }, "Newest first. ", filtered.length, " ", filtered.length === 1 ? "article" : "articles", pageCount > 1 ? ". Page " + current + " of " + pageCount : "", ".")), /*#__PURE__*/React.createElement("div", {
    className: "gy-search"
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Search the archive",
    htmlFor: "arch-q"
  }, /*#__PURE__*/React.createElement(Input, {
    id: "arch-q",
    size: "sm",
    icon: "search",
    placeholder: "Keyword or category",
    value: query,
    onChange: e => {
      setQuery(e.target.value);
      setCat("all");
      setPage(1);
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 36
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    items: tabs,
    activeId: cat,
    onChange: id => {
      setCat(id);
      setPage(1);
    }
  })), pageRows.length === 0 && /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--gy-type-body)",
      color: "var(--gy-text-secondary)",
      margin: "48px 0 0"
    }
  }, q ? "No articles match that search." : "Nothing published in this category yet."), years.map(y => /*#__PURE__*/React.createElement("div", {
    key: y,
    style: {
      marginTop: 48
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 18,
      paddingBottom: 12,
      borderBottom: "1px solid var(--gy-ink-800)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--gy-weight-medium) var(--gy-text-2xl)/1 var(--gy-font-mono)",
      color: "var(--gy-ink-900)"
    }
  }, y), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--gy-type-meta)",
      letterSpacing: "var(--gy-tracking-wide)",
      textTransform: "uppercase",
      color: "var(--gy-ink-500)"
    }
  }, pageRows.filter(a => a.iso.startsWith(y)).length, " on this page")), pageRows.filter(a => a.iso.startsWith(y)).map(a => /*#__PURE__*/React.createElement("div", {
    key: a.id,
    className: "gy-archive-row",
    onClick: () => onOpenArticle(a)
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--gy-type-meta)",
      letterSpacing: "var(--gy-tracking-wide)",
      color: "var(--gy-ink-500)"
    }
  }, a.iso), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--gy-weight-semibold) var(--gy-text-lg)/1.3 var(--gy-font-serif)",
      color: "var(--gy-ink-900)"
    }
  }, a.title), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--gy-type-meta)",
      letterSpacing: "var(--gy-tracking-wide)",
      textTransform: "uppercase",
      color: "var(--gy-copper-600)"
    }
  }, a.category), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--gy-type-meta)",
      letterSpacing: "var(--gy-tracking-wide)",
      textTransform: "uppercase",
      color: "var(--gy-ink-400)",
      textAlign: "right"
    }
  }, a.kind))))), pageCount > 1 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      marginTop: 44
    }
  }, /*#__PURE__*/React.createElement(Pagination, {
    page: current,
    pageCount: pageCount,
    onChange: goPage
  }))));
}
Object.assign(window, {
  ArchiveView
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/guildyard-site/archive.jsx", error: String((e && e.message) || e) }); }

// ui_kits/guildyard-site/article.jsx
try { (() => {
const {
  Prose,
  ArticleMeta,
  Breadcrumbs,
  Divider,
  Button,
  IconButton,
  Tooltip,
  Icon,
  Tag
} = window.GuildyardDesignSystem_59975b;
function ArticleView({
  article,
  onNavigate,
  onOpenArticle
}) {
  const {
    Container
  } = window;
  const a = article || window.GY_ARTICLES[0];
  const more = window.GY_ARTICLES.filter(x => x.id !== a.id).slice(0, 3);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "40px 0 0"
    }
  }, /*#__PURE__*/React.createElement(Container, {
    width: 1160
  }, /*#__PURE__*/React.createElement(Breadcrumbs, {
    items: [{
      id: "journal",
      label: "Journal"
    }, {
      label: a.category
    }],
    onNavigate: id => id && onNavigate(id)
  }))), /*#__PURE__*/React.createElement("article", {
    style: {
      padding: "36px 0 0"
    }
  }, /*#__PURE__*/React.createElement(Container, {
    width: 1160
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      maxWidth: 820,
      display: "flex",
      flexDirection: "column",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(ArticleMeta, {
    date: a.date,
    category: a.category,
    readingTime: a.read
  }), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--gy-font-serif)",
      fontWeight: "var(--gy-weight-semibold)",
      fontSize: "clamp(34px,3.9vw,54px)",
      lineHeight: 1.1,
      letterSpacing: "-0.014em",
      color: "var(--gy-ink-900)"
    }
  }, a.title), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--gy-type-lede)",
      color: "var(--gy-ink-700)",
      margin: 0,
      maxWidth: "var(--gy-measure-lede)"
    }
  }, a.lede), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14,
      paddingTop: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 44,
      height: 3,
      background: "var(--gy-copper-500)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--gy-type-meta)",
      letterSpacing: "var(--gy-tracking-wide)",
      textTransform: "uppercase",
      color: "var(--gy-ink-500)"
    }
  }, a.kind, " \xB7 The Guildyard Journal"))), /*#__PURE__*/React.createElement("div", {
    className: "gy-split is-prose",
    style: {
      marginTop: 48
    }
  }, /*#__PURE__*/React.createElement(Prose, null, /*#__PURE__*/React.createElement("p", null, "The first person who reads an offer is not a customer. They are a measurement \u2014 and the measurement is usually thrown away, because it arrives before anyone has decided what it would mean."), /*#__PURE__*/React.createElement("h2", null, "Decide what the reader is being asked"), /*#__PURE__*/React.createElement("p", null, "A reader can be asked for attention, for an opinion, or for money. These are different tests with different failure modes, and running them together produces a result that cannot be interpreted. Pick one, and write down which."), /*#__PURE__*/React.createElement("p", null, "The temptation is to ask for all three at once \u2014 a page that explains, persuades and sells \u2014 on the grounds that a visitor is expensive and should be fully used. That reasoning is sound for a business with a known offer. For a venture still establishing whether the offer exists, it destroys the only information the visit could have produced."), /*#__PURE__*/React.createElement("h4", null, "Field note"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Write the claim the page is testing, in one sentence."), /*#__PURE__*/React.createElement("li", null, "Name the number that would falsify it."), /*#__PURE__*/React.createElement("li", null, "Set the date you will look at that number.")), /*#__PURE__*/React.createElement("h2", null, "Interest is not evidence"), /*#__PURE__*/React.createElement("p", null, "Encouragement is the cheapest thing a reader can give, and the most likely thing to be offered. Evidence costs the reader something \u2014 a reply, a schedule, a payment, a name they have to defend later."), /*#__PURE__*/React.createElement("blockquote", null, /*#__PURE__*/React.createElement("p", null, "Evidence beats enthusiasm, and a written date beats both.")), /*#__PURE__*/React.createElement("p", null, "This is why a small, specific response is worth more than a large, vague one. Ten people who each did something inconvenient tell you more than a thousand who nodded."), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement("h2", null, "What the first reader is owed"), /*#__PURE__*/React.createElement("p", null, "Clarity, mostly. What this is, who it is for, what it costs, and what it does not do. Stating the limits is not modesty; it is the fastest way to find the reader who wants exactly this, and to stop wasting the ones who do not."), /*#__PURE__*/React.createElement("p", null, "The venture that writes its exclusions down finds its audience sooner, because the audience can recognise itself.")), /*#__PURE__*/React.createElement("aside", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 22,
      position: "sticky",
      top: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12,
      alignItems: "flex-start",
      paddingBottom: 20,
      borderBottom: "var(--gy-border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--gy-type-meta)",
      letterSpacing: "var(--gy-tracking-wider)",
      textTransform: "uppercase",
      color: "var(--gy-ink-500)"
    }
  }, "Share"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Tooltip, {
    content: "Copy permalink"
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "link",
    label: "Copy permalink",
    variant: "outline",
    size: "sm"
  })), /*#__PURE__*/React.createElement(Tooltip, {
    content: "Email this article"
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "mail",
    label: "Email this article",
    variant: "outline",
    size: "sm"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12,
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--gy-type-meta)",
      letterSpacing: "var(--gy-tracking-wider)",
      textTransform: "uppercase",
      color: "var(--gy-ink-500)"
    }
  }, "Category"), /*#__PURE__*/React.createElement(Tag, {
    onClick: () => onNavigate("journal")
  }, a.category)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10,
      paddingTop: 20,
      borderTop: "var(--gy-border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--gy-type-meta)",
      letterSpacing: "var(--gy-tracking-wider)",
      textTransform: "uppercase",
      color: "var(--gy-ink-500)"
    }
  }, "Corrections"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--gy-type-body-sm)",
      color: "var(--gy-text-secondary)",
      margin: 0
    }
  }, "Articles are corrected in place and the change is noted at the foot. See the ", /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate("policy");
    }
  }, "editorial policy"), ".")))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "80px 0 96px",
      marginTop: 64,
      borderTop: "var(--gy-border-subtle)"
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--gy-type-meta)",
      letterSpacing: "var(--gy-tracking-wider)",
      textTransform: "uppercase",
      color: "var(--gy-copper-600)"
    }
  }, "More from the Journal"), /*#__PURE__*/React.createElement("div", {
    className: "gy-more",
    style: {
      marginTop: 26
    }
  }, more.map(m => /*#__PURE__*/React.createElement("div", {
    key: m.id,
    onClick: () => onOpenArticle(m),
    style: {
      cursor: "pointer",
      display: "flex",
      flexDirection: "column",
      gap: 12,
      paddingTop: 18,
      borderTop: "3px solid var(--gy-ink-800)"
    }
  }, /*#__PURE__*/React.createElement(ArticleMeta, {
    date: m.date,
    category: m.category
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      font: "var(--gy-weight-semibold) var(--gy-text-xl)/1.26 var(--gy-font-serif)",
      color: "var(--gy-ink-900)"
    }
  }, m.title), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--gy-type-body)",
      color: "var(--gy-text-secondary)",
      margin: 0
    }
  }, m.lede)))))));
}
Object.assign(window, {
  ArticleView
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/guildyard-site/article.jsx", error: String((e && e.message) || e) }); }

// ui_kits/guildyard-site/data.jsx
try { (() => {
/* Realistic editorial content for the prototype. These are article concepts the
   Journal could plausibly publish — no ventures, customers, results, people,
   addresses or company history are invented anywhere in this kit. */
const GY_CATEGORIES = ["Venture building", "Market evidence", "Operating systems", "Brand architecture", "Decision making"];
const GY_ARTICLES = [{
  id: "first-reader",
  title: "What a venture owes its first reader",
  kind: "Essay",
  category: "Venture building",
  date: "14 March 2026",
  iso: "2026-03-14",
  read: "9 min read",
  lede: "The first person who reads your offer is not a customer. They are a test — and most ventures waste the result."
}, {
  id: "falsify",
  title: "Write the number that would prove you wrong",
  kind: "Field note",
  category: "Market evidence",
  date: "27 February 2026",
  iso: "2026-02-27",
  read: "6 min read",
  lede: "A claim without a falsifying number is a preference. Naming the number in advance is the cheapest discipline available."
}, {
  id: "decide-once",
  title: "Deciding once, then writing it down",
  kind: "Essay",
  category: "Operating systems",
  date: "09 February 2026",
  iso: "2026-02-09",
  read: "11 min read",
  lede: "Most operating drag is not indecision. It is re-deciding — the same argument, quarterly, with no record of the last one."
}, {
  id: "naming-late",
  title: "Name it late",
  kind: "Field note",
  category: "Brand architecture",
  date: "21 January 2026",
  iso: "2026-01-21",
  read: "5 min read",
  lede: "Naming is the only part of a venture that can be finished in an afternoon, which is exactly why it gets done first."
}, {
  id: "umbrella",
  title: "Why an umbrella, and what it is not",
  kind: "Essay",
  category: "Brand architecture",
  date: "12 January 2026",
  iso: "2026-01-12",
  read: "8 min read",
  lede: "A parent company can provide continuity without demanding that every venture wear its name."
}, {
  id: "cheap-evidence",
  title: "Cheap evidence first",
  kind: "Field note",
  category: "Market evidence",
  date: "18 December 2025",
  iso: "2025-12-18",
  read: "7 min read",
  lede: "Rank the questions by what it costs to answer them, then answer the cheap ones in public."
}, {
  id: "stop-rule",
  title: "The stop rule you write before you start",
  kind: "Essay",
  category: "Decision making",
  date: "02 December 2025",
  iso: "2025-12-02",
  read: "10 min read",
  lede: "Deciding when to stop is a design problem, and it is much easier to solve before there is anything to defend."
}, {
  id: "one-page",
  title: "One page, or it isn't a plan",
  kind: "Field note",
  category: "Operating systems",
  date: "14 November 2025",
  iso: "2025-11-14",
  read: "4 min read",
  lede: "Length is a proxy for unresolved thinking. The page limit does the arguing for you."
}, {
  id: "audience-of-one",
  title: "An audience of one is still an audience",
  kind: "Essay",
  category: "Venture building",
  date: "29 October 2025",
  iso: "2025-10-29",
  read: "8 min read",
  lede: "Small does not mean unreal. What matters is whether the one is repeatable."
}];
Object.assign(window, {
  GY_ARTICLES,
  GY_CATEGORIES
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/guildyard-site/data.jsx", error: String((e && e.message) || e) }); }

// ui_kits/guildyard-site/home.jsx
try { (() => {
const {
  Button,
  Divider,
  RuleLabel,
  ArticleMeta,
  Icon
} = window.GuildyardDesignSystem_59975b;
function HomeView({
  onNavigate,
  onOpenArticle
}) {
  const {
    Container,
    ArticleRow
  } = window;
  const latest = window.GY_ARTICLES.slice(0, 3);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    className: "gy-hero",
    style: {
      padding: "112px 0 96px",
      borderBottom: "var(--gy-border-subtle)"
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    className: "gy-split"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 30,
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--gy-type-meta)",
      letterSpacing: "var(--gy-tracking-wider)",
      textTransform: "uppercase",
      color: "var(--gy-copper-600)"
    }
  }, "Guildyard LLC \xB7 Texas"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--gy-font-serif)",
      fontWeight: "var(--gy-weight-semibold)",
      fontSize: "clamp(42px,4.9vw,64px)",
      lineHeight: 1.08,
      letterSpacing: "-0.014em",
      color: "var(--gy-ink-900)",
      margin: 0,
      maxWidth: 780
    }
  }, "Built on Intent.", /*#__PURE__*/React.createElement("br", null), "Focused on Value."), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 44,
      height: 3,
      background: "var(--gy-copper-500)"
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--gy-type-lede)",
      color: "var(--gy-ink-700)",
      margin: 0,
      maxWidth: "var(--gy-measure-lede)"
    }
  }, "Guildyard LLC develops and tests practical business ideas, giving each venture the freedom to establish its own audience, identity, and operating model."), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    iconRight: "arrow-right",
    onClick: () => onNavigate("journal")
  }, "Read the Journal")), /*#__PURE__*/React.createElement("aside", {
    style: {
      borderTop: "3px solid var(--gy-ink-800)",
      paddingTop: 22,
      display: "flex",
      flexDirection: "column",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--gy-type-meta)",
      letterSpacing: "var(--gy-tracking-wider)",
      textTransform: "uppercase",
      color: "var(--gy-ink-500)"
    }
  }, "What this is"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--gy-type-prose)",
      color: "var(--gy-ink-800)",
      margin: 0
    }
  }, "A parent company, not an operating brand. Guildyard holds ownership and continuity; the ventures it develops carry their own names, audiences and commercial models \u2014 and are not required to use the Guildyard name publicly."), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate("about");
    },
    style: {
      font: "var(--gy-type-meta)",
      letterSpacing: "var(--gy-tracking-wider)",
      textTransform: "uppercase",
      color: "var(--gy-copper-600)",
      borderBottom: "none",
      display: "inline-flex",
      alignItems: "center",
      gap: 7
    }
  }, "More about the model ", /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 13
  })))))), /*#__PURE__*/React.createElement("section", {
    className: "gy-band",
    style: {
      padding: "88px 0",
      background: "var(--gy-ink-100)"
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(RuleLabel, {
    align: "left",
    tone: "ink"
  }, "How the umbrella works"), /*#__PURE__*/React.createElement("div", {
    className: "gy-thirds",
    style: {
      marginTop: 44
    }
  }, [["01", "Ideas are tested, not launched", "An idea earns its next stage by answering a question that was written down before the work began."], ["02", "Each venture keeps its own identity", "Audience, name, offer and commercial model belong to the venture. The parent name stays out of the way."], ["03", "Continuity sits with the parent", "Ownership, records and the decisions already made persist here, so nothing has to be re-argued from scratch."]].map(([n, t, b]) => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 13,
      paddingTop: 18,
      borderTop: "3px solid var(--gy-copper-500)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--gy-type-meta)",
      letterSpacing: "var(--gy-tracking-wide)",
      color: "var(--gy-copper-600)"
    }
  }, n), /*#__PURE__*/React.createElement("h3", {
    style: {
      font: "var(--gy-weight-semibold) var(--gy-text-xl)/1.26 var(--gy-font-serif)",
      color: "var(--gy-ink-900)"
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--gy-type-body)",
      color: "var(--gy-ink-700)",
      margin: 0
    }
  }, b)))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "88px 0 96px"
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      gap: 40,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14,
      maxWidth: 640
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--gy-type-meta)",
      letterSpacing: "var(--gy-tracking-wider)",
      textTransform: "uppercase",
      color: "var(--gy-copper-600)"
    }
  }, "The Guildyard Journal"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--gy-weight-semibold) var(--gy-text-3xl)/1.2 var(--gy-font-serif)",
      letterSpacing: "var(--gy-tracking-tight)",
      color: "var(--gy-ink-900)"
    }
  }, "Original articles and field notes about building, testing, and operating practical business ventures."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--gy-type-body)",
      color: "var(--gy-text-secondary)",
      margin: 0
    }
  }, "Free to read. Not a lead magnet.")), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    iconRight: "arrow-right",
    onClick: () => onNavigate("journal")
  }, "All articles")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40,
      borderTop: "1px solid var(--gy-ink-800)"
    }
  }, latest.map(a => /*#__PURE__*/React.createElement(ArticleRow, {
    key: a.id,
    a: a,
    onOpen: onOpenArticle
  }))))));
}
Object.assign(window, {
  HomeView
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/guildyard-site/home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/guildyard-site/journal.jsx
try { (() => {
const {
  Button,
  Tag,
  Divider,
  ArticleMeta,
  Icon,
  Card
} = window.GuildyardDesignSystem_59975b;
function JournalView({
  onNavigate,
  onOpenArticle
}) {
  const {
    Container,
    ArticleRow
  } = window;
  const all = window.GY_ARTICLES;
  const [cat, setCat] = React.useState("All");
  const cats = ["All", ...window.GY_CATEGORIES];
  const rows = cat === "All" ? all : all.filter(a => a.category === cat);
  const lead = rows[0];
  const rest = rows.slice(1);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "72px 0 40px"
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 18,
      maxWidth: "var(--gy-measure-lede)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--gy-type-meta)",
      letterSpacing: "var(--gy-tracking-widest)",
      textTransform: "uppercase",
      color: "var(--gy-copper-600)"
    }
  }, "The Guildyard Journal"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--gy-type-lede)",
      color: "var(--gy-ink-700)",
      margin: 0
    }
  }, "Original articles and field notes about building, testing, and operating practical business ventures. Free to read, published when there is something worth reporting.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      flexWrap: "wrap",
      marginTop: 32
    }
  }, cats.map(c => /*#__PURE__*/React.createElement(Tag, {
    key: c,
    selected: c === cat,
    onClick: () => setCat(c)
  }, c))))), lead && /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "8px 0 56px"
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("article", {
    className: "gy-split is-lead",
    onClick: () => onOpenArticle(lead),
    style: {
      cursor: "pointer",
      borderTop: "3px solid var(--gy-ink-800)",
      paddingTop: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(ArticleMeta, {
    date: lead.date,
    category: lead.category,
    readingTime: lead.read
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--gy-weight-semibold) var(--gy-text-4xl)/1.14 var(--gy-font-serif)",
      letterSpacing: "-0.012em",
      color: "var(--gy-ink-900)",
      maxWidth: 720
    }
  }, lead.title), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--gy-type-lede)",
      color: "var(--gy-ink-700)",
      margin: 0,
      maxWidth: 680
    }
  }, lead.lede), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      font: "var(--gy-type-meta)",
      letterSpacing: "var(--gy-tracking-wider)",
      textTransform: "uppercase",
      color: "var(--gy-copper-600)"
    }
  }, "Read the article ", /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 13
  }))), /*#__PURE__*/React.createElement("aside", {
    className: "gy-aside-left",
    style: {
      borderLeft: "var(--gy-border-default)",
      paddingLeft: 28,
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--gy-type-meta)",
      letterSpacing: "var(--gy-tracking-wider)",
      textTransform: "uppercase",
      color: "var(--gy-ink-500)"
    }
  }, lead.kind), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--gy-type-body)",
      color: "var(--gy-text-secondary)",
      margin: 0
    }
  }, "Essays argue a position at length. Field notes are shorter and report a single observation."))))), /*#__PURE__*/React.createElement("section", {
    style: {
      paddingBottom: 96
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--gy-ink-800)"
    }
  }, rest.map(a => /*#__PURE__*/React.createElement(ArticleRow, {
    key: a.id,
    a: a,
    onOpen: onOpenArticle
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      marginTop: 40
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => onNavigate("archive"),
    iconRight: "arrow-right"
  }, "Browse the full archive")))));
}
Object.assign(window, {
  JournalView
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/guildyard-site/journal.jsx", error: String((e && e.message) || e) }); }

// ui_kits/guildyard-site/pages.jsx
try { (() => {
const {
  Prose,
  SectionHeading,
  Divider,
  Button,
  Alert,
  RuleLabel,
  Icon
} = window.GuildyardDesignSystem_59975b;
function AboutView({
  onNavigate
}) {
  const {
    Container
  } = window;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "72px 0 96px"
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    className: "gy-split is-prose"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 32
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "About",
    level: 1,
    title: "Guildyard LLC develops and tests independent ventures and brands."
  }), /*#__PURE__*/React.createElement(Prose, null, /*#__PURE__*/React.createElement("p", null, "Guildyard LLC is a Texas umbrella company used to develop and test independent business ideas and DBAs. It is a parent company rather than an operating brand: it does not sell a single defined product or service to a fixed customer segment."), /*#__PURE__*/React.createElement("h2", null, "What the umbrella provides"), /*#__PURE__*/React.createElement("p", null, "Continuity and ownership. Records, decisions and accumulated judgement live at the parent, so an idea that reaches its next stage does not begin from nothing \u2014 and an idea that stops does so on the record."), /*#__PURE__*/React.createElement("h2", null, "What each venture keeps"), /*#__PURE__*/React.createElement("p", null, "Everything customer-facing. A venture establishes its own name, audience, website, offer and commercial model, and is not required to use the Guildyard name publicly."), /*#__PURE__*/React.createElement("h2", null, "What \u201CBuilt on Intent. Focused on Value.\u201D means"), /*#__PURE__*/React.createElement("p", null, "Intent is written before work begins: the claim being tested, the evidence that would settle it, and the date it will be looked at. Value is the test applied afterwards \u2014 whether the result was worth what it cost to learn. \u201CBuilt\u201D here refers to businesses, systems, brands and operating ideas, not physical structures."), /*#__PURE__*/React.createElement("h2", null, "What Guildyard is not"), /*#__PURE__*/React.createElement("p", null, "Not a construction or contracting company, a real-estate developer, an architecture or engineering practice, an agency, a fund, an incubator, or a software company. Where those readings have been inferred from the mark's geometry, they are wrong."))), /*#__PURE__*/React.createElement("aside", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 26,
      position: "sticky",
      top: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 18,
      borderTop: "3px solid var(--gy-ink-800)",
      display: "flex",
      flexDirection: "column",
      gap: 12,
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--gy-type-meta)",
      letterSpacing: "var(--gy-tracking-wider)",
      textTransform: "uppercase",
      color: "var(--gy-ink-500)"
    }
  }, "In one line"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--gy-type-prose)",
      color: "var(--gy-ink-800)",
      margin: 0
    }
  }, "Guildyard LLC develops and tests independent ventures and brands.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12,
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--gy-type-meta)",
      letterSpacing: "var(--gy-tracking-wider)",
      textTransform: "uppercase",
      color: "var(--gy-ink-500)"
    }
  }, "Registered"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--gy-type-body)",
      color: "var(--gy-ink-700)"
    }
  }, "Texas, United States")), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12,
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--gy-type-meta)",
      letterSpacing: "var(--gy-tracking-wider)",
      textTransform: "uppercase",
      color: "var(--gy-ink-500)"
    }
  }, "The Journal"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--gy-type-body)",
      color: "var(--gy-text-secondary)",
      margin: 0
    }
  }, "Most of the depth on this site is published there, free to read."), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "secondary",
    iconRight: "arrow-right",
    onClick: () => onNavigate("journal")
  }, "Read the Journal"))))));
}
function PolicyView({
  onNavigate
}) {
  const {
    Container
  } = window;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "72px 0 96px"
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--gy-measure-prose)",
      display: "flex",
      flexDirection: "column",
      gap: 32
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "The Guildyard Journal",
    level: 1,
    title: "Editorial policy",
    description: "What the Journal publishes, how it is funded, and how it handles being wrong."
  }), /*#__PURE__*/React.createElement(Alert, {
    tone: "info",
    title: "The Journal is free to read"
  }, "It is not a lead magnet, a gated download, or advertising for a Guildyard venture."), /*#__PURE__*/React.createElement(Prose, null, /*#__PURE__*/React.createElement("h2", null, "What we publish"), /*#__PURE__*/React.createElement("p", null, "Articles and field notes on venture building, market evidence, operating systems, brand architecture and disciplined business decision-making. Essays argue a position at length; field notes report a single observation and stay short."), /*#__PURE__*/React.createElement("h2", null, "Who it is for"), /*#__PURE__*/React.createElement("p", null, "Independent operators, founders, small-business builders, and product and operations leaders \u2014 anyone evaluating or building a practical venture."), /*#__PURE__*/React.createElement("h2", null, "Evidence and sources"), /*#__PURE__*/React.createElement("p", null, "Claims that rest on outside work cite it and link to it. Where a claim rests on our own experience, it says so plainly rather than borrowing the authority of research."), /*#__PURE__*/React.createElement("h2", null, "Corrections"), /*#__PURE__*/React.createElement("p", null, "Errors of fact are corrected in the article itself, with a dated note at the foot describing what changed. Articles are not silently rewritten and are not deleted to hide a mistake."), /*#__PURE__*/React.createElement("h2", null, "Independence"), /*#__PURE__*/React.createElement("p", null, "No sponsored posts, no paid placements, no affiliate links. Nothing is published in exchange for consideration of any kind."), /*#__PURE__*/React.createElement("h2", null, "Conflicts of interest"), /*#__PURE__*/React.createElement("p", null, "Where an article touches on work Guildyard has a stake in, the relationship is disclosed in the article, at the top."), /*#__PURE__*/React.createElement("h2", null, "Reader contact"), /*#__PURE__*/React.createElement("p", null, "Corrections, disagreements and better evidence are welcome and are read. Not every message can be answered.")), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement(RuleLabel, {
    align: "left",
    tone: "ink"
  }, "Built on Intent. Focused on Value."))));
}
Object.assign(window, {
  AboutView,
  PolicyView
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/guildyard-site/pages.jsx", error: String((e && e.message) || e) }); }

// ui_kits/guildyard-site/site-parts.jsx
try { (() => {
const {
  Logo,
  Button,
  Divider,
  Icon,
  RuleLabel,
  ArticleMeta,
  Card
} = window.GuildyardDesignSystem_59975b;
function Container({
  children,
  width = 1160,
  style,
  className = ""
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "gy-wrap " + className,
    style: {
      maxWidth: width,
      ...style
    }
  }, children);
}
const GY_NAV = [{
  id: "home",
  label: "Guildyard"
}, {
  id: "journal",
  label: "Journal"
}, {
  id: "archive",
  label: "Archive"
}, {
  id: "about",
  label: "About"
}];
function SiteHeader({
  view,
  onNavigate
}) {
  const active = view === "article" ? "journal" : view === "policy" ? "about" : view;
  return /*#__PURE__*/React.createElement("header", {
    className: "gy-header"
  }, /*#__PURE__*/React.createElement(Container, {
    className: "gy-header-inner"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate("home");
    },
    style: {
      borderBottom: "none"
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "lockup",
    tone: "charcoal",
    height: 32,
    basePath: "../.."
  })), /*#__PURE__*/React.createElement("nav", {
    className: "gy-nav"
  }, GY_NAV.map(it => /*#__PURE__*/React.createElement("a", {
    key: it.id,
    href: "#",
    className: it.id === active ? "is-active" : "",
    onClick: e => {
      e.preventDefault();
      onNavigate(it.id);
    }
  }, it.label))), /*#__PURE__*/React.createElement("div", {
    className: "gy-header-cta"
  }, /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "secondary",
    iconRight: "arrow-right",
    onClick: () => onNavigate("journal")
  }, "Read the Journal"))));
}
function SiteFooter({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--gy-ink-900)",
      padding: "64px 0 36px",
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    className: "gy-footer-grid"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 18,
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "lockup",
    tone: "ivory",
    height: 32,
    basePath: "../.."
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--gy-weight-semibold) 18px/1.35 var(--gy-font-serif)",
      letterSpacing: "0.02em",
      color: "var(--gy-ink-50)",
      margin: 0
    }
  }, "Built on Intent. Focused on Value."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--gy-type-body)",
      color: "var(--gy-text-on-inverse-muted)",
      margin: 0,
      maxWidth: 380
    }
  }, "Guildyard LLC develops and tests independent ventures and brands.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--gy-type-meta)",
      letterSpacing: "var(--gy-tracking-wider)",
      textTransform: "uppercase",
      color: "var(--gy-copper-400)"
    }
  }, "Journal"), [["Latest", "journal"], ["Archive", "archive"], ["Editorial policy", "policy"]].map(([l, v]) => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate(v);
    },
    style: {
      font: "var(--gy-type-body)",
      color: "var(--gy-text-on-inverse-muted)",
      textDecoration: "none",
      borderBottom: "none"
    }
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--gy-type-meta)",
      letterSpacing: "var(--gy-tracking-wider)",
      textTransform: "uppercase",
      color: "var(--gy-copper-400)"
    }
  }, "Company"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate("about");
    },
    style: {
      font: "var(--gy-type-body)",
      color: "var(--gy-text-on-inverse-muted)",
      textDecoration: "none",
      borderBottom: "none"
    }
  }, "About Guildyard"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--gy-type-body)",
      color: "rgba(246,243,238,.38)"
    }
  }, "Texas, United States"))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 48,
      paddingTop: 18,
      borderTop: "1px solid rgba(246,243,238,.12)",
      display: "flex",
      justifyContent: "space-between",
      gap: 16,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--gy-type-meta)",
      letterSpacing: "var(--gy-tracking-wide)",
      color: "rgba(246,243,238,.42)"
    }
  }, "\xA9 2026 Guildyard LLC"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--gy-type-meta)",
      letterSpacing: "var(--gy-tracking-wide)",
      color: "rgba(246,243,238,.42)"
    }
  }, "The Journal is free to read"))));
}

/* A Journal listing row. Shared by the archive and Journal home. */
function ArticleRow({
  a,
  onOpen,
  showLede = true
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("article", {
    className: "gy-article-row",
    onClick: () => onOpen(a),
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--gy-type-meta)",
      letterSpacing: "var(--gy-tracking-wide)",
      textTransform: "uppercase",
      color: "var(--gy-ink-500)"
    }
  }, a.date), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 7
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: "var(--gy-weight-semibold) var(--gy-text-xl)/1.26 var(--gy-font-serif)",
      letterSpacing: "var(--gy-tracking-tight)",
      color: hover ? "var(--gy-copper-700)" : "var(--gy-ink-900)",
      transition: "color var(--gy-duration-fast) var(--gy-ease-standard)"
    }
  }, a.title), showLede && /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--gy-type-body)",
      color: "var(--gy-text-secondary)",
      margin: 0,
      maxWidth: 620
    }
  }, a.lede)), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--gy-type-meta)",
      letterSpacing: "var(--gy-tracking-wide)",
      textTransform: "uppercase",
      color: "var(--gy-copper-600)",
      whiteSpace: "nowrap"
    }
  }, a.category));
}
Object.assign(window, {
  Container,
  SiteHeader,
  SiteFooter,
  ArticleRow,
  GY_NAV
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/guildyard-site/site-parts.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.RuleLabel = __ds_scope.RuleLabel;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.AbstractField = __ds_scope.AbstractField;

__ds_ns.ArticleMeta = __ds_scope.ArticleMeta;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.Figure = __ds_scope.Figure;

__ds_ns.GY_ICON_CDN = __ds_scope.GY_ICON_CDN;

__ds_ns.GY_ICONS = __ds_scope.GY_ICONS;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Prose = __ds_scope.Prose;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Breadcrumbs = __ds_scope.Breadcrumbs;

__ds_ns.NavBar = __ds_scope.NavBar;

__ds_ns.Pagination = __ds_scope.Pagination;

__ds_ns.Tabs = __ds_scope.Tabs;

})();

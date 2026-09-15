import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { ArrowUpRight, Github, Send } from "lucide-react";
//#region src/lib/i18n/translations.ts
var translations = {
	en: {
		"nav.about": "about",
		"nav.stack": "stack",
		"nav.work": "work",
		"nav.experience": "experience",
		"nav.reviews": "reviews",
		"nav.now": "now",
		"nav.contact": "contact",
		"nav.available": "AVAILABLE FOR HIRE",
		"hero.tag1": "FULLSTACK",
		"hero.tag2": "AI ENGINEER",
		"hero.tag3": "EST. 2021",
		"hero.tag4": "REMOTE / WORLDWIDE",
		"hero.tagline": "Senior Full Stack Engineer",
		"hero.cta1": "view_work()",
		"hero.cta2": "contact_me()",
		"about.kicker": "// 01",
		"about.title": "About Me",
		"about.note": "A short transmission about who you're hiring.",
		"about.p1": "I'm a fullstack Engineer(React, Next.js, Node, TypeScript, Python) who spends most days at the intersection of product and AI — wiring Claude, GPT and custom agents into real, shippable web apps",
		"about.p2": "I take projects from a half-formed idea to deployed product: architecture, frontend, backend, infra, the boring CI/CD glue. I write clean TypeScript, ship fast, and obsess about the parts users actually feel",
		"about.p3": "For 10+ years I've worked with founders, agencies and product teams across the US and EU — usually on AI-heavy SaaS, internal tools and dashboards",
		"about.stat1": "YEARS BUILDING",
		"about.stat2": "PROJECTS SHIPPED",
		"about.stat3": "AI APPS LAUNCHED",
		"about.stat4": "JOB SUCCESS",
		"stack.kicker": "// 02",
		"stack.title": "MY STACK",
		"stack.note": "The tools I reach for. Pick a category to filter.",
		"stack.all": "ALL",
		"stack.frontend": "FRONTEND",
		"stack.backend": "BACKEND",
		"stack.ai": "AI / LLM",
		"stack.infra": "INFRA / DEVOPS",
		"stack.tooling": "TOOLING",
		"work.kicker": "// 03",
		"work.title": "SELECTED WORK",
		"work.note": "Recent shipped projects. Most are NDA — high-level only.",
		"exp.kicker": "// 04",
		"exp.title": "Experience",
		"exp.note": "How I got here, what I'm doing.",
		"exp.work": "WORK",
		"exp.learning": "LEARNING",
		"rev.kicker": "// 05",
		"rev.title": "Client Reviews",
		"rev.note": "Pulled from Upwork. Rendered as a code review, because of course.",
		"now.kicker": "// 06",
		"now.title": "NOW",
		"now.note": "A live snapshot of what's on my desk this week.",
		"now.heading": "Currently working on",
		"now.local": "LOCAL TIME",
		"now.hours": "Working hours · 09:00 — 21:00",
		"contact.kicker": "// 07",
		"contact.title": "CONTACT",
		"contact.note": "I read every message. Reply within 24h.",
		"contact.h1": "LET'S BUILD",
		"contact.h2": "SOMETHING",
		"contact.h3": "WORTH SHIPPING.",
		"contact.body": "Got an AI product idea, a stuck React codebase, or just want a second opinion? Drop me a line — or ask the assistant on the right anything you'd ask in a screening call.",
		"footer.line": "DESIGNED & CODED BY Riku — 2026",
		"footer.tag1": "NO COOKIES",
		"footer.tag2": "NO TRACKERS",
		"footer.tag3": "JUST CODE"
	},
	ua: {
		"nav.about": "про мене",
		"nav.stack": "стек",
		"nav.work": "роботи",
		"nav.experience": "досвід",
		"nav.reviews": "відгуки",
		"nav.now": "зараз",
		"nav.contact": "контакти",
		"nav.available": "ДОСТУПНИЙ ДЛЯ НАЙМУ",
		"hero.tag1": "FULLSTACK",
		"hero.tag2": "AI ІНЖЕНЕР",
		"hero.tag3": "З 2021",
		"hero.tag4": "ВІДДАЛЕНО / СВІТ",
		"hero.tagline": "будую fullstack веб-системи, швидко.",
		"hero.cta1": "view_work()",
		"hero.cta2": "contact_me()",
		"about.kicker": "// 01",
		"about.title": "про мене",
		"about.note": "Коротка трансляція про того, кого ви наймаєте.",
		"about.p1": "Я fullstack-розробник (React, Next.js, Node, TypeScript), який щодня живе на перетині продукту та AI — вбудовую Claude, GPT та власних агентів у реальні веб-додатки.",
		"about.p2": "Беру проєкти від ідеї до задеплоєного продукту: архітектура, фронтенд, бекенд, інфра, нудний CI/CD. Пишу чистий TypeScript, шиплю швидко й одержимий деталями, які користувач відчуває.",
		"about.p3": "Понад 5 років на Upwork працюю з фаундерами, агенціями та продуктовими командами зі США та ЄС — здебільшого AI-важкий SaaS, внутрішні інструменти та дашборди.",
		"about.stat1": "РОКІВ ДОСВІДУ",
		"about.stat2": "ЗДАНО ПРОЄКТІВ",
		"about.stat3": "AI ДОДАТКІВ",
		"about.stat4": "JOB SUCCESS",
		"stack.kicker": "// 02",
		"stack.title": "стек",
		"stack.note": "Інструменти, які я використовую. Оберіть категорію.",
		"stack.all": "ВСЕ",
		"stack.frontend": "ФРОНТЕНД",
		"stack.backend": "БЕКЕНД",
		"stack.ai": "AI / LLM",
		"stack.infra": "ІНФРА / DEVOPS",
		"stack.tooling": "ІНСТРУМЕНТИ",
		"work.kicker": "// 03",
		"work.title": "обрані роботи",
		"work.note": "Нещодавні проєкти. Більшість під NDA — лише загально.",
		"exp.kicker": "// 04",
		"exp.title": "досвід",
		"exp.note": "Як я сюди дійшов і чим займаюся.",
		"exp.work": "РОБОТА",
		"exp.learning": "НАВЧАННЯ",
		"rev.kicker": "// 05",
		"rev.title": "відгуки клієнтів",
		"rev.note": "З Upwork. Відображено як code review, звісно.",
		"now.kicker": "// 06",
		"now.title": "зараз",
		"now.note": "Живий знімок того, що в мене на столі цього тижня.",
		"now.heading": "Зараз працюю над",
		"now.local": "МІСЦЕВИЙ ЧАС",
		"now.hours": "Робочі години · 09:00 — 21:00",
		"contact.kicker": "// 07",
		"contact.title": "контакти",
		"contact.note": "Я читаю кожне повідомлення. Відповідь протягом 24 год.",
		"contact.h1": "ЗБУДУЄМО",
		"contact.h2": "ЩОСЬ ВАРТЕ",
		"contact.h3": "ВІДПРАВКИ.",
		"contact.body": "Маєте ідею AI-продукту, завислу React-кодбазу, або потрібна друга думка? Напишіть — або запитайте асистента справа все, що питали б на скринінгу.",
		"footer.line": "ДИЗАЙН І КОД ВІД Riku — 2026",
		"footer.tag1": "БЕЗ COOKIES",
		"footer.tag2": "БЕЗ ТРЕКЕРІВ",
		"footer.tag3": "ЛИШЕ КОД"
	}
};
//#endregion
//#region src/lib/i18n/I18nProvider.tsx
var Ctx = createContext(null);
function I18nProvider({ children }) {
	const [lang, setLangState] = useState("en");
	const setLang = useCallback((l) => setLangState(l), []);
	const t = useCallback((key) => translations[lang][key] ?? translations.en[key] ?? key, [lang]);
	return /* @__PURE__ */ jsx(Ctx.Provider, {
		value: {
			lang,
			setLang,
			t
		},
		children
	});
}
function useI18n() {
	const v = useContext(Ctx);
	if (!v) throw new Error("useI18n outside provider");
	return v;
}
//#endregion
//#region src/components/site/Header.tsx
function Header() {
	const { t, lang, setLang } = useI18n();
	return /* @__PURE__ */ jsx("header", {
		className: "sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-3 text-sm",
					children: [
						/* @__PURE__ */ jsx("span", { className: "inline-block size-2.5 bg-accent" }),
						/* @__PURE__ */ jsx("span", {
							className: "font-semibold tracking-wider text-foreground",
							children: "Riku.SYS"
						}),
						/* @__PURE__ */ jsx("span", {
							className: "text-muted",
							children: "v2.6.0"
						})
					]
				}),
				/* @__PURE__ */ jsx("nav", {
					className: "hidden items-center gap-6 text-sm text-muted-foreground md:flex",
					children: [
						"about",
						"stack",
						"work",
						"experience",
						"reviews",
						"now",
						"contact"
					].map((s, i) => /* @__PURE__ */ jsxs("a", {
						href: `#${s}`,
						className: "transition-colors hover:text-foreground",
						children: [
							/* @__PURE__ */ jsxs("span", {
								className: "text-muted",
								children: ["0", i + 1]
							}),
							" ",
							/* @__PURE__ */ jsx("span", { children: t(`nav.${s}`) })
						]
					}, s))
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ jsxs("span", {
						className: "hidden items-center gap-2 rounded-sm border border-border px-3 py-1.5 text-xs tracking-wider sm:flex",
						children: [/* @__PURE__ */ jsx("span", { className: "inline-block size-1.5 rounded-full bg-accent shadow-[0_0_8px] shadow-accent" }), t("nav.available")]
					}), /* @__PURE__ */ jsx("div", {
						className: "flex items-center gap-0 overflow-hidden rounded-sm border border-border text-xs",
						children: ["en", "ua"].map((l) => /* @__PURE__ */ jsx("button", {
							onClick: () => setLang(l),
							className: "px-2.5 py-1.5 uppercase tracking-wider transition-colors " + (lang === l ? "bg-accent text-accent-foreground" : "text-muted-foreground hover:text-foreground"),
							children: l
						}, l))
					})]
				})
			]
		})
	});
}
//#endregion
//#region src/components/site/Hero.tsx
function Terminal() {
	return /* @__PURE__ */ jsxs("div", {
		className: "card-water rounded-md border border-border bg-surface/60 text-[12.5px] leading-relaxed",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "flex items-center justify-between border-b border-border px-4 py-2 text-muted-foreground",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "flex gap-1.5",
					children: [
						/* @__PURE__ */ jsx("span", { className: "size-2.5 rounded-full bg-red-500/80" }),
						/* @__PURE__ */ jsx("span", { className: "size-2.5 rounded-full bg-yellow-500/80" }),
						/* @__PURE__ */ jsx("span", { className: "size-2.5 rounded-full bg-accent" })
					]
				}),
				/* @__PURE__ */ jsx("span", {
					className: "text-[11px]",
					children: "~/Riku/portfolio · zsh · 10:56:54"
				}),
				/* @__PURE__ */ jsx("span", {})
			]
		}), /* @__PURE__ */ jsxs("pre", {
			className: "overflow-auto px-5 py-4 font-mono text-foreground/90",
			children: [`Riku@dev ~ $ whoami
→ Riku "J" Cruz
→ Fullstack + AI Engineer

Riku@dev ~ $ cat ./mission.json
{
  "build":    "AI-native web apps",
  "speed":    "idea → prod, fast",
  "quality":  "clean, typed, tested",
  "stack":    ["react", "next", "node", "claude"],
  "available": true
}

Riku@dev ~ $ ./say_hi.sh`, /* @__PURE__ */ jsx("span", { className: "ml-0.5 inline-block size-2 translate-y-[1px] bg-accent blink" })]
		})]
	});
}
function PhotoCard() {
	return /* @__PURE__ */ jsx("div", {
		className: "card-water rounded-md border border-border bg-surface/60 p-4",
		children: /* @__PURE__ */ jsxs("div", {
			className: "flex gap-4",
			children: [/* @__PURE__ */ jsx("div", {
				className: "flex size-24 shrink-0 items-center justify-center rounded-sm border border-border bg-[repeating-linear-gradient(45deg,transparent,transparent_6px,oklch(0.3_0.01_250)_6px,oklch(0.3_0.01_250)_7px)] text-[10px] text-muted-foreground",
				children: "[ photo ]"
			}), /* @__PURE__ */ jsx("dl", {
				className: "flex-1 space-y-1 text-xs",
				children: [
					["HUMAN", "Riku Kato"],
					["LOC", "Earth · Remote"],
					["TZ", "UTC+3"],
					["STATUS", "online"]
				].map(([k, v]) => /* @__PURE__ */ jsxs("div", {
					className: "flex items-baseline justify-between border-b border-dashed border-border/60 py-1",
					children: [/* @__PURE__ */ jsx("dt", {
						className: "text-muted-foreground tracking-wider",
						children: k
					}), /* @__PURE__ */ jsx("dd", {
						className: k === "STATUS" ? "text-accent" : "text-foreground",
						children: v
					})]
				}, k))
			})]
		})
	});
}
function Hero() {
	const { t } = useI18n();
	return /* @__PURE__ */ jsxs("section", {
		className: "relative border-b border-border",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "mx-auto grid max-w-[1400px] gap-10 px-6 py-16 lg:grid-cols-[1.1fr_1fr]",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "flex flex-col",
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "mb-8 flex flex-wrap gap-3 text-xs text-muted-foreground",
						children: [
							"hero.tag1",
							"hero.tag2",
							"hero.tag3",
							"hero.tag4"
						].map((k, i) => /* @__PURE__ */ jsxs("span", {
							className: "flex items-center gap-3",
							children: [i > 0 && /* @__PURE__ */ jsx("span", {
								className: "text-muted",
								children: "/"
							}), /* @__PURE__ */ jsx("span", {
								className: "tracking-wider",
								children: t(k)
							})]
						}, k))
					}),
					/* @__PURE__ */ jsxs("h1", {
						className: "font-display text-[clamp(64px,11vw,180px)] font-bold leading-[0.88] tracking-tight",
						children: [/* @__PURE__ */ jsx("span", {
							className: "block text-foreground/85",
							children: "Riku"
						}), /* @__PURE__ */ jsx("span", {
							className: "block text-accent",
							children: "Kato"
						})]
					}),
					/* @__PURE__ */ jsx("div", { className: "mt-12 h-2 w-20 bg-accent" }),
					/* @__PURE__ */ jsxs("p", {
						className: "mt-6 text-sm text-muted-foreground",
						children: [
							/* @__PURE__ */ jsx("span", {
								className: "text-muted",
								children: "└"
							}),
							" ",
							t("hero.tagline"),
							/* @__PURE__ */ jsx("span", { className: "ml-1 inline-block size-2 translate-y-[1px] bg-accent blink" })
						]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "mt-10 flex flex-wrap gap-3",
						children: [/* @__PURE__ */ jsxs("a", {
							href: "#work",
							className: "card-water rounded-sm bg-accent px-5 py-3 text-sm font-medium text-accent-foreground",
							children: [t("hero.cta1"), " →"]
						}), /* @__PURE__ */ jsxs("a", {
							href: "#contact",
							className: "card-water rounded-sm border border-border px-5 py-3 text-sm text-foreground",
							children: [t("hero.cta2"), " ↗"]
						})]
					})
				]
			}), /* @__PURE__ */ jsxs("div", {
				className: "flex flex-col gap-4",
				children: [/* @__PURE__ */ jsx(Terminal, {}), /* @__PURE__ */ jsx(PhotoCard, {})]
			})]
		}), /* @__PURE__ */ jsx(Marquee, {})]
	});
}
function Marquee() {
	const items = [
		"REACT",
		"NEXT.JS",
		"TYPESCRIPT",
		"NODE",
		"CLAUDE",
		"GPT",
		"CURSOR",
		"AVAILABLE FOR HIRE",
		"SHIPPING SINCE 2021",
		"UPWORK TOP RATED",
		"AI ENGINEERING",
		"FULLSTACK"
	];
	return /* @__PURE__ */ jsx("div", {
		className: "overflow-hidden border-t border-border py-4",
		children: /* @__PURE__ */ jsx("div", {
			className: "marquee-track flex w-max gap-8 whitespace-nowrap text-xs text-muted-foreground",
			children: [...items, ...items].map((x, i) => /* @__PURE__ */ jsxs("span", {
				className: "flex items-center gap-8",
				children: [/* @__PURE__ */ jsx("span", { children: x }), /* @__PURE__ */ jsx("span", {
					className: "text-accent",
					children: "✦"
				})]
			}, i))
		})
	});
}
function useNow() {
	const [now, setNow] = useState(() => /* @__PURE__ */ new Date());
	useEffect(() => {
		const id = setInterval(() => setNow(/* @__PURE__ */ new Date()), 1e3);
		return () => clearInterval(id);
	}, []);
	return now;
}
//#endregion
//#region src/components/site/Section.tsx
function SectionHeader({ kicker, title, note }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between",
		children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
			className: "mb-2 text-xs text-muted-foreground",
			children: kicker
		}), /* @__PURE__ */ jsxs("h2", {
			className: "font-display text-4xl font-bold tracking-tight md:text-5xl",
			children: [
				/* @__PURE__ */ jsx("span", {
					className: "text-accent",
					children: ">"
				}),
				" ",
				title
			]
		})] }), /* @__PURE__ */ jsx("p", {
			className: "text-xs text-muted-foreground md:max-w-sm md:text-right",
			children: note
		})]
	});
}
function Section({ id, children }) {
	return /* @__PURE__ */ jsx("section", {
		id,
		className: "border-b border-border/60",
		children: /* @__PURE__ */ jsx("div", {
			className: "mx-auto max-w-[1400px] px-6 py-20",
			children
		})
	});
}
//#endregion
//#region src/components/site/About.tsx
function About() {
	const { t } = useI18n();
	const stats = [
		[
			"5",
			"+",
			t("about.stat1")
		],
		[
			"100",
			"+",
			t("about.stat2")
		],
		[
			"18",
			"",
			t("about.stat3")
		],
		[
			"100",
			"%",
			t("about.stat4")
		]
	];
	return /* @__PURE__ */ jsxs(Section, {
		id: "about",
		children: [/* @__PURE__ */ jsx(SectionHeader, {
			kicker: t("about.kicker"),
			title: t("about.title"),
			note: t("about.note")
		}), /* @__PURE__ */ jsxs("div", {
			className: "grid gap-12 lg:grid-cols-[1.1fr_1fr]",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "space-y-5 text-lg leading-relaxed text-foreground/85",
				children: [
					/* @__PURE__ */ jsx("p", { children: t("about.p1") }),
					/* @__PURE__ */ jsx("p", { children: t("about.p2") }),
					/* @__PURE__ */ jsx("p", { children: t("about.p3") })
				]
			}), /* @__PURE__ */ jsx("div", {
				className: "grid grid-cols-2 overflow-hidden rounded-md border border-border bg-surface/40",
				children: stats.map(([n, sfx, lbl], i) => /* @__PURE__ */ jsxs("div", {
					className: "card-water border-border p-8 [&:nth-child(-n+2)]:border-b [&:nth-child(odd)]:border-r",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "font-display text-5xl font-bold text-foreground",
						children: [n, /* @__PURE__ */ jsx("span", {
							className: "text-accent",
							children: sfx
						})]
					}), /* @__PURE__ */ jsx("div", {
						className: "mt-3 text-xs tracking-wider text-muted-foreground",
						children: lbl
					})]
				}, i))
			})]
		})]
	});
}
//#endregion
//#region src/components/site/Stack.tsx
var items = [
	{
		name: "React",
		cat: "frontend",
		years: 5
	},
	{
		name: "Next.js",
		cat: "frontend",
		years: 4
	},
	{
		name: "TypeScript",
		cat: "frontend",
		years: 5
	},
	{
		name: "Tailwind CSS",
		cat: "frontend",
		years: 4
	},
	{
		name: "shadcn/ui",
		cat: "frontend",
		years: 2
	},
	{
		name: "Vite",
		cat: "frontend",
		years: 3
	},
	{
		name: "Node.js",
		cat: "backend",
		years: 5
	},
	{
		name: "Bun",
		cat: "backend",
		years: 1
	},
	{
		name: "Hono",
		cat: "backend",
		years: 1
	},
	{
		name: "PostgreSQL",
		cat: "backend",
		years: 3
	},
	{
		name: "MongoDB",
		cat: "backend",
		years: 5
	},
	{
		name: "Supabase",
		cat: "backend",
		years: 2
	},
	{
		name: "tRPC",
		cat: "backend",
		years: 2
	},
	{
		name: "Drizzle ORM",
		cat: "backend",
		years: 1
	},
	{
		name: "Claude API",
		cat: "ai",
		years: 3
	},
	{
		name: "OpenAI",
		cat: "ai",
		years: 4
	},
	{
		name: "Vercel AI SDK",
		cat: "ai",
		years: 1
	},
	{
		name: "MCP",
		cat: "ai",
		years: 1
	},
	{
		name: "LangGraph",
		cat: "ai",
		years: 1
	},
	{
		name: "LangChain",
		cat: "ai",
		years: 2
	},
	{
		name: "Vector DBs",
		cat: "ai",
		years: 3
	},
	{
		name: "RAG",
		cat: "ai",
		years: 3
	},
	{
		name: "AI Agents",
		cat: "ai",
		years: 2
	},
	{
		name: "Vercel",
		cat: "infra",
		years: 5
	},
	{
		name: "Docker",
		cat: "infra",
		years: 4
	},
	{
		name: "AWS",
		cat: "infra",
		years: 3
	},
	{
		name: "GitHub CI",
		cat: "infra",
		years: 5
	},
	{
		name: "Trigger.dev",
		cat: "infra",
		years: 1
	},
	{
		name: "Cursor",
		cat: "tooling",
		years: 2
	},
	{
		name: "Claude Code",
		cat: "tooling",
		years: 1
	},
	{
		name: "Zod",
		cat: "tooling",
		years: 3
	},
	{
		name: "Figma",
		cat: "tooling",
		years: 4
	},
	{
		name: "Linear",
		cat: "tooling",
		years: 3
	}
];
var catLabels = {
	frontend: "FRONTEND",
	backend: "BACKEND",
	ai: "AI / LLM",
	infra: "INFRA / DEVOPS",
	tooling: "TOOLING"
};
function Stack() {
	const { t } = useI18n();
	const [active, setActive] = useState("all");
	const filtered = useMemo(() => active === "all" ? items : items.filter((i) => i.cat === active), [active]);
	const counts = useMemo(() => {
		const c = { all: items.length };
		for (const i of items) c[i.cat] = (c[i.cat] ?? 0) + 1;
		return c;
	}, []);
	return /* @__PURE__ */ jsxs(Section, {
		id: "stack",
		children: [/* @__PURE__ */ jsx(SectionHeader, {
			kicker: t("stack.kicker"),
			title: t("stack.title"),
			note: t("stack.note")
		}), /* @__PURE__ */ jsxs("div", {
			className: "grid gap-6 lg:grid-cols-[220px_1fr]",
			children: [/* @__PURE__ */ jsx("aside", {
				className: "flex flex-col gap-2",
				children: [
					"all",
					"frontend",
					"backend",
					"ai",
					"infra",
					"tooling"
				].map((c) => {
					const isActive = active === c;
					const label = c === "all" ? t("stack.all") : t(`stack.${c}`);
					return /* @__PURE__ */ jsxs("button", {
						onClick: () => setActive(c),
						className: "card-water flex items-center justify-between rounded-sm border px-4 py-3 text-left text-xs tracking-wider transition-colors " + (isActive ? "border-accent bg-accent text-accent-foreground" : "border-border bg-surface/40 text-muted-foreground hover:text-foreground"),
						children: [/* @__PURE__ */ jsx("span", { children: label }), /* @__PURE__ */ jsxs("span", {
							className: isActive ? "text-accent-foreground/70" : "text-muted",
							children: [
								"[",
								counts[c] ?? 0,
								"]"
							]
						})]
					}, c);
				})
			}), /* @__PURE__ */ jsx("div", {
				className: "grid auto-rows-min grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6",
				children: filtered.map((i) => /* @__PURE__ */ jsxs("div", {
					className: "card-water rounded-sm border border-border bg-surface/40 p-4",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "text-sm font-semibold text-foreground",
							children: i.name
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "mt-1 text-[10px] tracking-wider text-muted-foreground",
							children: [
								catLabels[i.cat],
								" · ",
								i.years,
								"Y"
							]
						}),
						/* @__PURE__ */ jsx("div", {
							className: "mt-3 h-px w-full bg-border",
							children: /* @__PURE__ */ jsx("div", {
								className: "h-px bg-accent",
								style: { width: `${Math.min(100, i.years * 18 + 20)}%` }
							})
						})
					]
				}, i.name))
			})]
		})]
	});
}
//#endregion
//#region src/components/site/Work.tsx
var projects = [
	{
		idx: "[01]",
		tags: ["AI", "MUSIC"],
		year: "2025",
		title: "Delphos — AI music copilot",
		badges: [{
			label: "AI",
			tone: "ai"
		}, {
			label: "NDA",
			tone: "nda"
		}],
		desc: "Frontend for an AI music copilot that lets you build custom \"soundworlds\", generate full tracks and stems from chord progressions, and manage projects for artists, labels and platforms in a single dashboard.",
		stack: [
			"React",
			"TypeScript",
			"Tailwind CSS",
			"shadcn/ui",
			"Auth0",
			"Wavesurfer.js",
			"Web Audio"
		]
	},
	{
		idx: "[02]",
		tags: ["HRTECH"],
		year: "2023",
		title: "Hirenest — pre-employment assessment",
		badges: [{
			label: "NDA",
			tone: "nda"
		}],
		desc: "Frontend platform for pre-employment assessments that lets employers browse and configure tests, build role-specific assessment flows, manage a rich test library, and track candidate results in a single dashboard.",
		stack: [
			"React",
			"TypeScript",
			"Redux + Redux-Saga",
			"Tailwind CSS",
			"i18next",
			"Stripe",
			"Jest / RTL"
		]
	},
	{
		idx: "[03]",
		tags: ["MARKETPLACE"],
		year: "2025",
		title: "MoveShop24 — moving services",
		badges: [{
			label: "NDA",
			tone: "nda"
		}],
		desc: "Fullstack platform for moving services: customers describe their relocation needs, the system scores and structures requests, then routes them to vetted moving partners who respond with tailored, trackable offers.",
		stack: [
			"React",
			"TypeScript",
			"Vite",
			"Tailwind CSS",
			"Supabase"
		]
	},
	{
		idx: "[04]",
		tags: ["WEB", "SSR"],
		year: "2025",
		title: "Eco Holiday — children's eco camp",
		badges: [{
			label: "NDA",
			tone: "nda"
		}],
		desc: "Website for a children's eco camp in the Carpathians (ages 8–16). Parallax hero, seasonal shift scheduling, daily activity breakdown, photo gallery, team showcase, pricing, and parent reviews. Telegram Bot integration for booking inquiries, JSON-LD structured data, and full SEO.",
		stack: [
			"Next.js 16",
			"React 19",
			"TypeScript",
			"Tailwind CSS 4",
			"Telegram Bot API",
			"Schema.org / JSON-LD",
			"Vercel"
		]
	},
	{
		idx: "[05]",
		tags: ["FULLSTACK", "SPORT"],
		year: "2026",
		title: "World Crokinole Rankings",
		badges: [{
			label: "NDA",
			tone: "nda"
		}],
		desc: "Global competitive platform for the board game crokinole. Tournament management with multi-stage brackets, Elo-based world rankings across singles/doubles/laurels, player profiles with match history, club directory, and paid event registration. Admin console for full CRUD management.",
		stack: [
			"Next.js 16",
			"React 19",
			"TypeScript",
			"Supabase",
			"Stripe",
			"Recharts",
			"React Hook Form",
			"Sass",
			"next-intl"
		]
	},
	{
		idx: "[06]",
		tags: ["AI", "FULLSTACK"],
		year: "2026",
		title: "Prodigious Piggy — food discovery",
		badges: [{
			label: "AI",
			tone: "ai"
		}, {
			label: "NDA",
			tone: "nda"
		}],
		desc: "AI-powered global restaurant discovery platform. Chat with \"Piggy\" — a GPT-4o-mini assistant with RAG over a curated place database — to find restaurants, cafes and bars worldwide. Features interactive Mapbox maps, trip planning, sentiment-scored places, and Stripe subscription tiers.",
		stack: [
			"React 18",
			"TypeScript",
			"Vite",
			"Supabase",
			"OpenAI GPT-4o",
			"Mapbox GL",
			"TailwindCSS",
			"shadcn/ui",
			"Stripe",
			"Framer Motion",
			"TanStack Query",
			"Zod"
		]
	}
];
function Work() {
	const { t } = useI18n();
	return /* @__PURE__ */ jsxs(Section, {
		id: "work",
		children: [/* @__PURE__ */ jsx(SectionHeader, {
			kicker: t("work.kicker"),
			title: t("work.title"),
			note: t("work.note")
		}), /* @__PURE__ */ jsx("div", {
			className: "flex flex-col divide-y divide-border",
			children: projects.map((p, i) => /* @__PURE__ */ jsxs("article", {
				className: "card-water group grid gap-6 rounded-sm p-6 transition-colors hover:bg-surface/40 lg:grid-cols-[80px_1.2fr_1.4fr_1fr_40px]",
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "text-xs text-muted-foreground",
						children: p.idx
					}),
					/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("div", {
						className: "mb-2 flex flex-wrap items-center gap-2 text-[10px] tracking-wider text-muted-foreground",
						children: [
							p.tags.map((t, j) => /* @__PURE__ */ jsxs("span", {
								className: "flex items-center gap-2",
								children: [
									/* @__PURE__ */ jsx("span", { className: "size-1.5 rounded-full bg-accent text-accent" }),
									t,
									j < p.tags.length - 1 && /* @__PURE__ */ jsx("span", {
										className: "text-muted",
										children: "·"
									})
								]
							}, j)),
							/* @__PURE__ */ jsx("span", {
								className: "text-muted text-accent",
								children: "·"
							}),
							/* @__PURE__ */ jsx("span", {
								className: "text-accent",
								children: p.year
							})
						]
					}), /* @__PURE__ */ jsx("h3", {
						className: "font-display text-2xl font-semibold leading-tight",
						children: p.title
					})] }),
					/* @__PURE__ */ jsxs("div", {
						className: "text-sm leading-relaxed text-muted-foreground",
						children: [/* @__PURE__ */ jsx("div", {
							className: "mb-2 flex flex-wrap gap-1.5",
							children: p.badges.map((b, j) => /* @__PURE__ */ jsx("span", {
								className: "rounded-sm border px-1.5 py-0.5 text-[10px] tracking-wider " + (b.tone === "ai" ? "border-fuchsia-400/40 text-fuchsia-300" : "border-border text-muted-foreground"),
								children: b.label
							}, j))
						}), p.desc]
					}),
					/* @__PURE__ */ jsx("div", {
						className: "flex flex-wrap gap-1.5 self-start",
						children: p.stack.map((s) => /* @__PURE__ */ jsx("span", {
							className: "rounded-sm border border-border bg-surface/60 px-2 py-1 text-[10px] text-muted-foreground",
							children: s
						}, s))
					}),
					/* @__PURE__ */ jsx("div", {
						className: "flex items-start justify-end text-muted-foreground transition-colors group-hover:text-accent",
						children: "↗"
					})
				]
			}, p.idx))
		})]
	});
}
//#endregion
//#region src/components/site/Experience.tsx
var work = [
	{
		date: "JAN 2024 — NOW",
		title: "Senior Fullstack + AI Engineer",
		org: "Upwork · Top Rated Plus",
		body: "Building AI-first SaaS for US/EU founders. Claude, RAG, agents. Architecture → ship."
	},
	{
		date: "DEC 2022 — JAN 2024",
		title: "Middle Frontend Developer",
		org: "Hirenest · Full-time",
		body: "Frontend ownership on an HRtech SaaS: component library, Stripe payment integration, complex business logic, performance optimization. React + TypeScript."
	},
	{
		date: "OCT 2021 — DEC 2022",
		title: "Junior Frontend Developer",
		org: "Incode Group · Full-time",
		body: "Built multi-page sites and admin panels with complex logic. Worked on large projects solo and in team, communicated directly with clients. React + Tailwind."
	}
];
var learning = [
	{
		date: "2026 — NOW",
		title: "Building with Claude API · MCP · Claude Code",
		org: "Anthropic Academy",
		body: "Official Anthropic courses: Claude API, Model Context Protocol (intro + advanced), Claude Code in Action. Ongoing."
	},
	{
		date: "MAR 2024",
		title: "Modern React with Redux",
		org: "Udemy · Certificate",
		body: "Deep dive into React 18 + Redux Toolkit: hooks, context, performance patterns, production-grade state management.",
		cert: true
	},
	{
		date: "AUG 2021",
		title: "Frontend Software Development Course",
		org: "Mate Academy · Certificate",
		body: "Part-time program: JavaScript, HTML/CSS, React, Redux. Foundation of my frontend career.",
		cert: true
	}
];
function Col({ heading, entries }) {
	return /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("div", {
		className: "mb-6 flex items-center gap-3 text-xs tracking-wider text-muted-foreground",
		children: [/* @__PURE__ */ jsx("span", { className: "h-px w-6 bg-muted-foreground/40" }), heading]
	}), /* @__PURE__ */ jsx("div", {
		className: "flex flex-col gap-8",
		children: entries.map((e, i) => /* @__PURE__ */ jsxs("div", {
			className: "card-water rounded-sm border border-transparent p-4",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "mb-2 flex items-center gap-3 text-[11px] tracking-wider text-muted-foreground",
					children: [/* @__PURE__ */ jsx("span", { className: "size-2 bg-accent" }), e.date]
				}),
				/* @__PURE__ */ jsx("h3", {
					className: "font-display text-xl font-semibold text-foreground",
					children: e.title
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mt-1 text-xs text-accent",
					children: e.org
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-3 text-sm leading-relaxed text-muted-foreground",
					children: e.body
				}),
				e.cert && /* @__PURE__ */ jsxs("button", {
					className: "mt-4 inline-flex items-center gap-2 rounded-sm border border-border bg-surface/40 px-3 py-2 text-[11px] text-accent",
					children: [/* @__PURE__ */ jsx("span", { className: "size-6 rounded-sm bg-surface-2" }), "view certificate ↗"]
				})
			]
		}, i))
	})] });
}
function GitGraph() {
	const cols = 53;
	const cells = Array.from({ length: cols * 7 }, (_, i) => {
		const r = (i * 9301 + 49297) % 233280 / 233280;
		return r < .55 ? 0 : r < .75 ? 1 : r < .9 ? 2 : 3;
	});
	const shade = [
		"bg-surface-2/60",
		"bg-accent/25",
		"bg-accent/55",
		"bg-accent"
	];
	return /* @__PURE__ */ jsxs("div", {
		className: "card-water mt-12 rounded-md border border-border bg-surface/40 p-6",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "mb-4 flex items-center justify-between",
				children: [/* @__PURE__ */ jsx("h4", {
					className: "font-mono text-sm text-foreground",
					children: "github_activity.log"
				}), /* @__PURE__ */ jsx("span", {
					className: "text-xs text-muted-foreground",
					children: "714 contributions in 2026"
				})]
			}),
			/* @__PURE__ */ jsx("div", {
				className: "grid gap-[3px]",
				style: {
					gridTemplateColumns: `repeat(${cols}, 1fr)`,
					gridAutoRows: "12px"
				},
				children: cells.map((v, i) => /* @__PURE__ */ jsx("div", { className: `size-3 rounded-[2px] ${shade[v]}` }, i))
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "mt-4 flex items-center justify-between text-[11px] text-muted-foreground",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex gap-8",
					children: [
						/* @__PURE__ */ jsxs("span", { children: [/* @__PURE__ */ jsx("span", {
							className: "text-accent",
							children: "0d"
						}), " STREAK"] }),
						/* @__PURE__ */ jsxs("span", { children: [/* @__PURE__ */ jsx("span", {
							className: "text-accent",
							children: "95"
						}), " REPOS"] }),
						/* @__PURE__ */ jsxs("span", { children: [/* @__PURE__ */ jsx("span", {
							className: "text-accent",
							children: "1"
						}), " STARS"] })
					]
				}), /* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-1.5",
					children: [
						"less",
						shade.map((s, i) => /* @__PURE__ */ jsx("span", { className: `size-3 rounded-[2px] ${s}` }, i)),
						"more"
					]
				})]
			})
		]
	});
}
function Experience() {
	const { t } = useI18n();
	return /* @__PURE__ */ jsxs(Section, {
		id: "experience",
		children: [
			/* @__PURE__ */ jsx(SectionHeader, {
				kicker: t("exp.kicker"),
				title: t("exp.title"),
				note: t("exp.note")
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "grid gap-12 lg:grid-cols-2",
				children: [/* @__PURE__ */ jsx(Col, {
					heading: t("exp.work"),
					entries: work
				}), /* @__PURE__ */ jsx(Col, {
					heading: t("exp.learning"),
					entries: learning
				})]
			}),
			/* @__PURE__ */ jsx(GitGraph, {})
		]
	});
}
//#endregion
//#region src/components/site/Reviews.tsx
var reviews = [
	{
		file: "~/upwork/review_001.md",
		project: "Web-Based Foodie Discovery App",
		text: "Absolute rock star. I would have never been able to get where I am without his help."
	},
	{
		file: "~/upwork/review_002.md",
		project: "Web App Development",
		text: "Riku is absolutely fantastic to work with. His work is great, the web app he built completely fit the specification. Super responsive with any issues."
	},
	{
		file: "~/upwork/review_003.md",
		project: "SaaS Project Follow Up",
		text: "It was great to work with Riku again. He is solution oriented and easy to communicate."
	},
	{
		file: "~/upwork/review_004.md",
		project: "Music Chat User Interface",
		text: "Riku built a fantastic front end interface for our platform, would highly recommend!"
	},
	{
		file: "~/upwork/review_005.md",
		project: "Frontend Development",
		text: "Great freelancer, done the job according the requirements, accommodated all the requests and done quality job on time even the deadline was very tight."
	},
	{
		file: "~/upwork/review_006.md",
		project: "Frontend Codebase Improvement",
		text: "Riku fixed our messy codebase in a blink of an eye. We have hired him to improve the frontend of our app and he has been doing so ever since."
	}
];
function Reviews() {
	const { t } = useI18n();
	return /* @__PURE__ */ jsxs(Section, {
		id: "reviews",
		children: [/* @__PURE__ */ jsx(SectionHeader, {
			kicker: t("rev.kicker"),
			title: t("rev.title"),
			note: t("rev.note")
		}), /* @__PURE__ */ jsx("div", {
			className: "grid gap-5 md:grid-cols-2",
			children: reviews.map((r, i) => /* @__PURE__ */ jsxs("div", {
				className: "card-water overflow-hidden rounded-md border border-border bg-surface/40",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "flex items-center justify-between border-b border-border bg-surface/60 px-4 py-2 text-xs",
						children: [/* @__PURE__ */ jsx("span", {
							className: "text-accent",
							children: r.file
						}), /* @__PURE__ */ jsx("span", {
							className: "text-yellow-400",
							children: "★ ★ ★ ★ ★"
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "grid grid-cols-[40px_1fr] gap-3 px-4 py-5 text-sm",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "select-none border-r border-border pr-3 text-right text-muted",
							children: [
								/* @__PURE__ */ jsx("div", { children: "1" }),
								/* @__PURE__ */ jsx("div", { children: "2" }),
								/* @__PURE__ */ jsx("div", { children: "3" })
							]
						}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
							className: "text-muted-foreground",
							children: `// Project: ${r.project}`
						}), /* @__PURE__ */ jsxs("div", {
							className: "mt-3 text-foreground/90",
							children: [
								"\"",
								r.text,
								"\""
							]
						})] })]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "flex items-center justify-between border-t border-border px-4 py-2 text-[11px]",
						children: [
							/* @__PURE__ */ jsx("span", {
								className: "text-accent",
								children: "Upwork Client"
							}),
							/* @__PURE__ */ jsx("span", {
								className: "text-muted-foreground",
								children: "· Upwork · Verified"
							}),
							/* @__PURE__ */ jsx("span", {
								className: "text-muted-foreground",
								children: "via Upwork"
							})
						]
					})
				]
			}, i))
		})]
	});
}
//#endregion
//#region src/components/site/Now.tsx
function Now() {
	const { t } = useI18n();
	const now = useNow();
	const hh = String(now.getHours()).padStart(2, "0");
	const mm = String(now.getMinutes()).padStart(2, "0");
	const ss = String(now.getSeconds()).padStart(2, "0");
	return /* @__PURE__ */ jsxs(Section, {
		id: "now",
		children: [/* @__PURE__ */ jsx(SectionHeader, {
			kicker: t("now.kicker"),
			title: t("now.title"),
			note: t("now.note")
		}), /* @__PURE__ */ jsxs("div", {
			className: "grid gap-6 lg:grid-cols-[1.6fr_1fr]",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "card-water rounded-md border border-border bg-surface/40 p-8",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "mb-2 text-[11px] tracking-wider text-muted-foreground",
						children: [now.toDateString().toUpperCase(), " · STATUS_REPORT"]
					}),
					/* @__PURE__ */ jsx("h3", {
						className: "font-display text-2xl font-semibold",
						children: t("now.heading")
					}),
					/* @__PURE__ */ jsx("ul", {
						className: "mt-6 space-y-4 text-sm leading-relaxed",
						children: [
							/* @__PURE__ */ jsxs(Fragment, { children: [
								"Freelancing on ",
								/* @__PURE__ */ jsx("span", {
									className: "text-accent",
									children: "Upwork"
								}),
								" — AI-native SaaS and fullstack projects for US/EU founders."
							] }),
							/* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("span", {
								className: "text-accent",
								children: "Cursor + Claude Code"
							}), " daily — AI-assisted development on every project."] }),
							/* @__PURE__ */ jsxs(Fragment, { children: [
								"Studying ",
								/* @__PURE__ */ jsx("span", {
									className: "text-accent",
									children: "Anthropic courses"
								}),
								": Claude API, MCP, Claude Code in Action."
							] }),
							/* @__PURE__ */ jsxs(Fragment, { children: [
								"Open to ",
								/* @__PURE__ */ jsx("span", {
									className: "text-accent",
									children: "1 new project"
								}),
								". AI-first preferred, fullstack welcome."
							] }),
							/* @__PURE__ */ jsxs(Fragment, { children: [
								"Reading: ",
								/* @__PURE__ */ jsx("span", {
									className: "text-accent",
									children: "\"Designing Data-Intensive Applications\""
								}),
								" — back for round two."
							] })
						].map((b, i) => /* @__PURE__ */ jsxs("li", {
							className: "flex gap-3 border-b border-dashed border-border/60 pb-3 last:border-0",
							children: [/* @__PURE__ */ jsx("span", {
								className: "text-accent",
								children: "▸"
							}), /* @__PURE__ */ jsx("span", {
								className: "text-foreground/90",
								children: b
							})]
						}, i))
					})
				]
			}), /* @__PURE__ */ jsxs("div", {
				className: "flex flex-col gap-4",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "card-water rounded-md border border-border bg-surface/40 p-6",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "flex items-center justify-between text-[11px] tracking-wider text-muted-foreground",
							children: [/* @__PURE__ */ jsx("span", { children: t("now.local") }), /* @__PURE__ */ jsx("span", { children: "UTC+3" })]
						}),
						/* @__PURE__ */ jsxs("div", {
							suppressHydrationWarning: true,
							className: "mt-4 font-display text-5xl font-bold tabular-nums text-accent",
							children: [
								hh,
								":",
								mm,
								":",
								ss
							]
						}),
						/* @__PURE__ */ jsx("div", {
							className: "mt-4 text-[11px] text-muted-foreground",
							children: t("now.hours")
						})
					]
				}), /* @__PURE__ */ jsxs("div", {
					className: "card-water rounded-md border border-border bg-surface/40 p-6",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "flex items-center justify-between text-[11px] tracking-wider text-muted-foreground",
						children: [/* @__PURE__ */ jsx("span", { children: "NOW PLAYING" }), /* @__PURE__ */ jsxs("span", {
							className: "flex items-center gap-1.5 text-accent",
							children: [/* @__PURE__ */ jsx("span", { className: "size-1.5 rounded-full bg-accent" }), " LIVE"]
						})]
					}), /* @__PURE__ */ jsxs("div", {
						className: "mt-4 flex items-center gap-3 rounded-sm bg-surface-2 p-3",
						children: [
							/* @__PURE__ */ jsx("div", { className: "size-12 shrink-0 bg-gradient-to-br from-amber-400 to-emerald-600" }),
							/* @__PURE__ */ jsxs("div", {
								className: "flex-1",
								children: [/* @__PURE__ */ jsx("div", {
									className: "text-sm font-semibold",
									children: "Shape Of My Heart"
								}), /* @__PURE__ */ jsx("div", {
									className: "text-xs text-muted-foreground",
									children: "Sting"
								})]
							}),
							/* @__PURE__ */ jsx("button", {
								className: "grid size-9 place-items-center rounded-full bg-accent text-accent-foreground",
								children: "▶"
							})
						]
					})]
				})]
			})]
		})]
	});
}
//#endregion
//#region src/components/site/Contact.tsx
var links = [{
	label: "GITHUB",
	value: "/0xjoeldavis",
	Icon: Github
}, {
	label: "Gmail",
	value: "rikukato001@gmail.com",
	Icon: Send
}];
var prompts = [
	"What's your AI stack?",
	"Are you available now?",
	"Show me an AI project",
	"Hourly rate?",
	"How many years of experience do you have?"
];
function Contact() {
	const { t } = useI18n();
	const [input, setInput] = useState("");
	const [msgs, setMsgs] = useState([{
		role: "ai",
		text: "Hi 👋 I'm an AI trained on Riku's portfolio. Ask me about his stack, projects, AI experience, availability — anything."
	}]);
	const send = (text) => {
		if (!text.trim()) return;
		setMsgs((m) => [
			...m,
			{
				role: "user",
				text
			},
			{
				role: "ai",
				text: "Thanks — Riku will follow up directly. For an instant answer, ping him on Telegram @Akane."
			}
		]);
		setInput("");
	};
	return /* @__PURE__ */ jsxs(Section, {
		id: "contact",
		children: [/* @__PURE__ */ jsx(SectionHeader, {
			kicker: t("contact.kicker"),
			title: t("contact.title"),
			note: t("contact.note")
		}), /* @__PURE__ */ jsxs("div", {
			className: "grid gap-10 lg:grid-cols-2",
			children: [/* @__PURE__ */ jsxs("div", { children: [
				/* @__PURE__ */ jsxs("h3", {
					className: "font-display text-5xl font-bold leading-[0.95] tracking-tight md:text-6xl",
					children: [
						/* @__PURE__ */ jsx("span", {
							className: "block text-foreground/80",
							children: t("contact.h1")
						}),
						/* @__PURE__ */ jsx("span", {
							className: "block text-accent",
							children: t("contact.h2")
						}),
						/* @__PURE__ */ jsx("span", {
							className: "block text-foreground/80",
							children: t("contact.h3")
						})
					]
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-6 max-w-md text-sm leading-relaxed text-muted-foreground",
					children: t("contact.body")
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mt-10 flex flex-col",
					children: links.map(({ label, value, Icon }) => /* @__PURE__ */ jsxs("a", {
						href: "#",
						className: "card-water grid grid-cols-[28px_110px_1fr_20px] items-center gap-4 rounded-sm border border-border bg-surface/40 px-5 py-4 text-sm transition-colors hover:bg-surface/60",
						children: [
							/* @__PURE__ */ jsx(Icon, {
								className: "size-4 text-accent",
								strokeWidth: 1.75
							}),
							/* @__PURE__ */ jsx("span", {
								className: "text-[11px] tracking-wider text-muted-foreground",
								children: label
							}),
							/* @__PURE__ */ jsx("span", {
								className: "text-foreground",
								children: value
							}),
							/* @__PURE__ */ jsx(ArrowUpRight, {
								className: "size-4 text-muted-foreground",
								strokeWidth: 1.75
							})
						]
					}, label))
				})
			] }), /* @__PURE__ */ jsxs("div", {
				className: "card-water flex flex-col rounded-md border border-accent/30 bg-surface/40",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-2 border-b border-border px-4 py-3 text-sm",
						children: [/* @__PURE__ */ jsx("span", { className: "size-2 rounded-full bg-water" }), /* @__PURE__ */ jsx("span", {
							className: "tracking-wider text-foreground",
							children: "ASK_Riku.AI"
						})]
					}),
					/* @__PURE__ */ jsx("div", {
						className: "min-h-[320px] flex-1 space-y-3 px-4 py-4 text-sm",
						children: msgs.map((m, i) => /* @__PURE__ */ jsxs("div", {
							className: m.role === "ai" ? "text-foreground/90" : "text-accent",
							children: [/* @__PURE__ */ jsx("span", {
								className: "text-accent",
								children: m.role === "ai" ? "Riku.ai" : "you"
							}), /* @__PURE__ */ jsxs("div", {
								className: "mt-1",
								children: [m.role === "ai" ? "> " : "", m.text]
							})]
						}, i))
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "border-t border-border px-4 py-3",
						children: [/* @__PURE__ */ jsxs("form", {
							onSubmit: (e) => {
								e.preventDefault();
								send(input);
							},
							className: "flex items-center gap-2 text-sm",
							children: [/* @__PURE__ */ jsx("span", {
								className: "text-accent",
								children: "▸"
							}), /* @__PURE__ */ jsx("input", {
								value: input,
								onChange: (e) => setInput(e.target.value),
								placeholder: "Ask anything about Riku…",
								className: "flex-1 bg-transparent outline-none placeholder:text-muted-foreground"
							})]
						}), /* @__PURE__ */ jsx("div", {
							className: "mt-3 flex flex-wrap gap-2",
							children: prompts.map((p) => /* @__PURE__ */ jsx("button", {
								onClick: () => send(p),
								className: "rounded-sm border border-border px-2.5 py-1 text-[11px] text-muted-foreground transition-colors hover:border-accent hover:text-accent",
								children: p
							}, p))
						})]
					})
				]
			})]
		})]
	});
}
//#endregion
//#region src/components/site/Footer.tsx
function Footer() {
	const { t } = useI18n();
	return /* @__PURE__ */ jsx("footer", {
		className: "border-t border-border",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto flex max-w-[1400px] flex-col justify-between gap-3 px-6 py-6 text-[11px] tracking-wider text-muted-foreground md:flex-row",
			children: [/* @__PURE__ */ jsx("span", { children: t("footer.line") }), /* @__PURE__ */ jsxs("div", {
				className: "flex gap-4",
				children: [
					/* @__PURE__ */ jsx("span", { children: t("footer.tag1") }),
					/* @__PURE__ */ jsx("span", { children: "·" }),
					/* @__PURE__ */ jsx("span", { children: t("footer.tag2") }),
					/* @__PURE__ */ jsx("span", { children: "·" }),
					/* @__PURE__ */ jsx("span", { children: t("footer.tag3") })
				]
			})]
		})
	});
}
//#endregion
//#region src/routes/index.tsx?tsr-split=component
function Index() {
	return /* @__PURE__ */ jsx(I18nProvider, { children: /* @__PURE__ */ jsxs("div", {
		className: "min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ jsx(Header, {}),
			/* @__PURE__ */ jsxs("main", { children: [
				/* @__PURE__ */ jsx(Hero, {}),
				/* @__PURE__ */ jsx(About, {}),
				/* @__PURE__ */ jsx(Stack, {}),
				/* @__PURE__ */ jsx(Work, {}),
				/* @__PURE__ */ jsx(Experience, {}),
				/* @__PURE__ */ jsx(Reviews, {}),
				/* @__PURE__ */ jsx(Now, {}),
				/* @__PURE__ */ jsx(Contact, {})
			] }),
			/* @__PURE__ */ jsx(Footer, {})
		]
	}) });
}
//#endregion
export { Index as component };

/* empty css                                 */
import { e as createComponent, r as renderTemplate, k as renderScript, g as addAttribute, u as unescapeHTML, l as renderHead } from '../chunks/astro/server_DS63Pi7D.mjs';
export { renderers } from '../renderers.mjs';

const profileImg = new Proxy({"src":"/_astro/profile2026.IoQptCG9.jpg","width":348,"height":351,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/tre/code/my-portfolio/src/assets/profile2026.jpg";
							}
							
							return target[name];
						}
					});

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const name = "Tre Galloway";
  const location = "Louisiana";
  const title = "Professional Tinkerer";
  const bio = "I'm a overly curious man with a passion for learning and creating. Networking and Embedded Systems";
  const socialLinks = [
    { label: "GitHub", url: "https://github.com/TreGalloway", icon: "github" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/tregalloway/", icon: "linkedin" },
    { label: "YouTube", url: "https://www.youtube.com/@tregalloway", icon: "youtube" },
    { label: "Bluesky", url: "https://bsky.app/profile/tregalloway.bsky.social", icon: "bluesky" }
  ];
  const icons = {
    github: `<svg role="img" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>`,
    linkedin: `<svg role="img" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`,
    youtube: `<svg role="img" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>`,
    bluesky: `<svg role="img" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6"><path d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"/></svg>`
  };
  return renderTemplate(_a || (_a = __template(['<html lang="en" data-theme="dark" data-astro-cid-j7pv25f6> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>', '</title><meta name="description"', "><script>\n      const getThemePreference = () => {\n        const stored = localStorage.getItem('theme');\n        if (stored === 'light' || stored === 'dark') return stored;\n        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';\n      };\n      document.documentElement.setAttribute('data-theme', getThemePreference());\n    <\/script>", '</head> <body class="min-h-screen transition-colors duration-300" style="background-color: var(--bg-color); color: var(--text-color);" data-astro-cid-j7pv25f6> <button id="theme-toggle" class="fixed top-4 right-4 p-2 rounded-lg transition-opacity z-50" style="background-color: var(--btn-bg); color: var(--btn-text);" aria-label="Toggle theme" data-astro-cid-j7pv25f6> <svg id="sun-icon" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-j7pv25f6><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" data-astro-cid-j7pv25f6></path></svg> <svg id="moon-icon" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-j7pv25f6><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" data-astro-cid-j7pv25f6></path></svg> </button> <main class="min-h-screen flex items-center justify-center px-4 py-16" data-astro-cid-j7pv25f6> <div class="max-w-4xl w-full flex flex-col md:flex-row items-start md:items-end justify-between gap-8" data-astro-cid-j7pv25f6> <div class="flex-1 order-2 md:order-1" data-astro-cid-j7pv25f6> <h1 class="text-5xl md:text-6xl font-bold mb-2" style="color: var(--text-color);" data-astro-cid-j7pv25f6>', '</h1> <p class="text-xl md:text-2xl mb-4" style="color: var(--text-muted);" data-astro-cid-j7pv25f6>', '</p> <p class="text-2xl md:text-3xl font-medium mb-4" style="color: var(--accent-color);" data-astro-cid-j7pv25f6>', '</p> <p class="text-lg md:text-xl mb-8 max-w-lg leading-relaxed" style="color: var(--text-muted);" data-astro-cid-j7pv25f6> ', ' </p> <div class="flex gap-4" style="color: var(--accent-color);" data-astro-cid-j7pv25f6> ', " </div> </div> <img", "", ' class="w-64 h-64 md:w-72 md:h-72 rounded-full order-1 md:order-2 flex-shrink-0" style="border-color: #F39C12; border-width: 4px;" data-astro-cid-j7pv25f6> </div> </main> ', " </body> </html>"])), name, addAttribute(`${name} - ${title}`, "content"), renderHead(), name, location, title, bio, socialLinks.map((link) => renderTemplate`<a${addAttribute(link.url, "href")} target="_blank" rel="noopener noreferrer" class="social-btn"${addAttribute(link.label, "aria-label")} data-astro-cid-j7pv25f6>${unescapeHTML(icons[link.icon])}</a>`), addAttribute(profileImg.src, "src"), addAttribute(`${name} profile`, "alt"), renderScript($$result, "/Users/tre/code/my-portfolio/src/pages/index.astro?astro&type=script&index=0&lang.ts"));
}, "/Users/tre/code/my-portfolio/src/pages/index.astro", void 0);

const $$file = "/Users/tre/code/my-portfolio/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

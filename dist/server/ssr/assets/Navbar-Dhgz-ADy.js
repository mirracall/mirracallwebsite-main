import { a as require_react, o as __toESM, t as require_jsx_runtime } from "../index.js";
//#region data/product.ts
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var navigation = [
	{
		label: "How it works",
		href: "#how-it-works"
	},
	{
		label: "Technology",
		href: "#technology"
	},
	{
		label: "About",
		href: "#about"
	},
	{
		label: "News",
		href: "#news"
	},
	{
		label: "FAQ",
		href: "#faq"
	}
];
//#endregion
//#region components/Logo.tsx
var import_jsx_runtime = require_jsx_runtime();
function Logo({ inverse = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: `brand ${inverse ? "brand-inverse" : ""}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "brand-mark",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/images/logo/mirra-call-logo.jpg",
				alt: "",
				width: "40",
				height: "40"
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Mirra Call" })]
	});
}
//#endregion
//#region components/Navbar.tsx
function Navbar() {
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "nav-wrap",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			className: "navbar container",
			"aria-label": "Main navigation",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#top",
					"aria-label": "Mirra Call home",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: `nav-links ${open ? "open" : ""}`,
					children: [navigation.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: item.href,
						onClick: () => setOpen(false),
						children: item.label
					}, item.href)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						className: "button button-small",
						href: "#waitlist",
						onClick: () => setOpen(false),
						children: "Join waitlist"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					className: "menu-button",
					type: "button",
					"aria-expanded": open,
					"aria-controls": "mobile-navigation",
					onClick: () => setOpen(!open),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "sr-only",
							children: "Toggle menu"
						})
					]
				})
			]
		})
	});
}
//#endregion
export { Navbar };

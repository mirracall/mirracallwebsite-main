import { a as require_react, o as __toESM, t as require_jsx_runtime } from "../index.js";
//#region components/Waitlist.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
function Waitlist() {
	const [state, setState] = (0, import_react.useState)("idle");
	function submit(e) {
		e.preventDefault();
		setState("loading");
		window.setTimeout(() => setState("success"), 550);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "waitlist section",
		id: "waitlist",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container waitlist-grid",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: "Early access"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Be among the first to experience Mirra Call." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Mirra Call is currently in development. Join the waitlist for product updates, pilot opportunities, and early access." })
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: submit,
				"aria-describedby": "form-status",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "form-row",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["First name", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							name: "firstName",
							autoComplete: "given-name",
							required: true
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Last name", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							name: "lastName",
							autoComplete: "family-name",
							required: true
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Email", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "email",
						name: "email",
						autoComplete: "email",
						required: true
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["I am a…", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
						name: "userType",
						defaultValue: "",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "",
								disabled: true,
								children: "Select one (optional)"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Patient / user" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Caregiver" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Occupational therapist" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Physiotherapist" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Clinician" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Researcher" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Healthcare organization" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Other" })
						]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["What interests you about Mirra Call?", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
						name: "interest",
						rows: 3
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "button",
						type: "submit",
						disabled: state === "loading",
						children: state === "loading" ? "Joining…" : "Join the waitlist"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						id: "form-status",
						className: `form-status ${state}`,
						"aria-live": "polite",
						children: [state === "success" && "Thanks — this prototype is ready to connect to your waitlist endpoint.", state === "error" && "Something went wrong. Please try again."]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "form-note",
						children: "Prototype form only. No information is transmitted or stored yet."
					})
				]
			})]
		})
	});
}
//#endregion
export { Waitlist };

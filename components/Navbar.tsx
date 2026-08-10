"use client";
import { useState } from "react";
import { navigation } from "@/data/product";
import { Logo } from "./Logo";

export function Navbar() {
  const [open, setOpen] = useState(false);
  return <header className="nav-wrap"><nav className="navbar container" aria-label="Main navigation"><a href="#top" aria-label="Mirra Call home"><Logo /></a><div className={`nav-links ${open ? "open" : ""}`}>{navigation.map(item => <a key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</a>)}<a className="button button-small" href="#waitlist" onClick={() => setOpen(false)}>Join waitlist</a></div><button className="menu-button" type="button" aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}><span></span><span></span><span className="sr-only">Toggle menu</span></button></nav></header>;
}

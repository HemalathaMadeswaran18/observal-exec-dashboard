"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Building2, DollarSign, Bot, TrendingUp, Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { href: "/", label: "Overview", icon: LayoutDashboard },
  { href: "/adoption", label: "Adoption", icon: Building2 },
  { href: "/cost", label: "Investment", icon: DollarSign },
  { href: "/performance", label: "Agents", icon: Bot },
  { href: "/roi", label: "Impact", icon: TrendingUp },
];

export function Sidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)} className="fixed top-4 left-4 z-50 md:hidden p-2 rounded-lg bg-card">
        <Menu className="w-5 h-5" />
      </button>
      <aside className={`glass-sidebar fixed inset-y-0 left-0 z-40 w-64 flex flex-col transition-transform md:translate-x-0 ${open ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="flex items-center justify-between p-6 border-b border-sidebar-border">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-xs font-bold text-white">O</span>
            </div>
            <span className="text-base font-semibold text-foreground tracking-tight">Observal</span>
          </div>
          <button onClick={() => setOpen(false)} className="md:hidden text-muted-foreground"><X className="w-5 h-5" /></button>
        </div>
        <nav className="flex-1 p-3 space-y-0.5">
          {links.map(({ href, label, icon: Icon }) => {
            const active = pathname === href;
            return (
              <Link key={href} href={href} onClick={() => setOpen(false)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${active ? "bg-sidebar-accent text-foreground" : "text-sidebar-foreground hover:text-foreground hover:bg-sidebar-accent/50"}`}>
                <Icon className={`w-4 h-4 ${active ? "text-primary" : ""}`} />
                {label}
                {active && <div className="ml-auto w-1 h-4 rounded-full bg-primary" />}
              </Link>
            );
          })}
        </nav>
        <div className="p-4 border-t border-sidebar-border">
          <p className="text-xs text-muted-foreground">Executive Dashboard</p>
        </div>
      </aside>
      {open && <div className="fixed inset-0 z-30 bg-black/50 md:hidden" onClick={() => setOpen(false)} />}
    </>
  );
}

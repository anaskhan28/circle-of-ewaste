import Link from "next/link";
import { LayoutDashboard, Package, FileText, Users, Settings, BarChart3, Recycle } from "lucide-react";
import { CirkalLogo } from "@/components/brand/CirkalLogo";

const SIDEBAR_ITEMS = [
  { icon: LayoutDashboard, label: "Overview", href: "/dashboard" },
  { icon: Package, label: "My Assets", href: "/dashboard/assets" },
  { icon: FileText, label: "Requests", href: "/dashboard/requests" },
  { icon: Users, label: "Campaigns", href: "/dashboard/campaigns" },
  { icon: Recycle, label: "Collections", href: "/dashboard/collections" },
  { icon: BarChart3, label: "Reports", href: "/dashboard/reports" },
  { icon: Settings, label: "Settings", href: "/dashboard/settings" },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-light-bg flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-100 flex-shrink-0 hidden md:flex flex-col">
        <div className="p-5 border-b border-gray-100">
          <Link href="/">
            <CirkalLogo scrolled={true} size="sm" />
          </Link>
        </div>
        <nav className="flex-1 p-4 space-y-1">
          {SIDEBAR_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-gray-600 hover:bg-very-light-blue hover:text-brand-blue transition-colors"
            >
              <item.icon className="w-5 h-5" strokeWidth={1.5} />
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="p-4 border-t border-gray-100">
          <Link href="/" className="text-xs text-muted hover:text-brand-blue transition-colors">
            ← Back to Website
          </Link>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top bar */}
        <header className="bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between">
          <h1 className="font-bold text-dark text-lg">Business Dashboard</h1>
          <div className="flex items-center gap-3">
            <span className="text-xs text-muted bg-yellow-100 text-yellow-700 px-3 py-1.5 rounded-full font-semibold">
              Preview Mode — Authentication Coming Soon
            </span>
          </div>
        </header>
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}

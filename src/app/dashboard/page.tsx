import Link from "next/link";
import { ArrowRight, Package, FileText, Users, BarChart3 } from "lucide-react";
import { DashboardPreview } from "@/components/ui/DashboardPreview";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Welcome */}
      <div>
        <h2 className="text-2xl font-bold text-dark">Welcome to CIRKAL OF E-WASTE</h2>
        <p className="text-muted mt-1">Your business dashboard — manage assets, requests, campaigns and reports.</p>
      </div>

      {/* Coming soon notice */}
      <div className="bg-very-light-blue rounded-2xl p-6 border border-brand-blue/10">
        <h3 className="font-bold text-dark text-base mb-2">Platform in Development</h3>
        <p className="text-sm text-muted mb-4">
          The CIRKAL OF E-WASTE business dashboard is being developed. This preview shows the planned interface. Full functionality — including authentication, asset tracking, report generation and partner matching — will be available on launch.
        </p>
        <Link href="/contact" className="inline-flex items-center gap-2 text-brand-blue text-sm font-semibold hover:underline">
          Contact us for early access <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Preview dashboard */}
      <DashboardPreview />

      {/* Quick links */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { icon: Package, label: "My Assets", href: "/dashboard/assets", desc: "View and manage asset records" },
          { icon: FileText, label: "Requests", href: "/dashboard/requests", desc: "Track assessment requests" },
          { icon: Users, label: "Campaigns", href: "/dashboard/campaigns", desc: "Awareness campaign management" },
          { icon: BarChart3, label: "Reports", href: "/dashboard/reports", desc: "Download closure reports" },
        ].map((item) => (
          <div key={item.href} className="bg-white rounded-2xl border border-gray-100 p-5 opacity-60">
            <item.icon className="w-8 h-8 text-brand-blue mb-3" strokeWidth={1.5} />
            <h3 className="font-bold text-dark text-sm">{item.label}</h3>
            <p className="text-xs text-muted mt-1">{item.desc}</p>
            <span className="text-xs text-brand-blue font-semibold mt-3 inline-block">Coming soon</span>
          </div>
        ))}
      </div>
    </div>
  );
}

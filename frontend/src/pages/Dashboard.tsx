
import { Navbar } from "@/components/Navbar";
import { StatsCard } from "@/components/StatsCard";
import { URLTable } from "@/components/URLTable";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <Navbar />
      <main className="pt-24 px-4">
        <div className="max-w-7xl mx-auto space-y-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StatsCard
              title="Total URLs Created"
              value="1,234"
            />
            <StatsCard
              title="Total Hits"
              value="45.2K"
            />
            <StatsCard
              title="Most Popular URL"
              value="2.1K"
              description="hits this month"
            />
          </div>

          <div className="bg-white/30 rounded-xl p-6 backdrop-blur-sm">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Your URLs</h2>
            <URLTable />
          </div>
        </div>
      </main>
    </div>
  );
}

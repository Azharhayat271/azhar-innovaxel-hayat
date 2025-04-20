
interface StatsCardProps {
  title: string; 
  value: string | number;
  description?: string;
}

export function StatsCard({ title, value, description }: StatsCardProps) {
  return (
    <div className="bg-white/50 backdrop-blur-sm rounded-xl border p-6 hover:shadow-lg transition-shadow">
      <h3 className="text-sm font-medium text-gray-500">{title}</h3>
      <div className="mt-2 flex items-baseline gap-2">
        <span className="text-3xl font-semibold text-gray-900">{value}</span>
        {description && <span className="text-sm text-gray-500">{description}</span>}
      </div>
    </div>
  );
}

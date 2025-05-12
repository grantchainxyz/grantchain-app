export function AgentCard({ name, description }: { name: string, description: string }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-white hover:bg-white/10 transition">
      <h3 className="text-xl font-bold mb-1">{name}</h3>
      <p className="text-blue-300 text-sm">{description}</p>
    </div>
  );
}

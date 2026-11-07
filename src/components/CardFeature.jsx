export default function CardFeature({ icone, titulo, descricao, tag }) {
  return (
    <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition">
      <div className="flex items-center justify-between mb-3">
        <span className="text-3xl inline-flex items-center h-9">{icone}</span>
        {tag && (
          <span className="bg-indigo-50 text-indigo-600 text-xs px-2.5 py-1 rounded-full font-medium">
            {tag}
          </span>
        )}
      </div>
      <h3 className="text-lg font-bold text-slate-800">{titulo}</h3>
      <p className="text-slate-600 text-sm mt-2">{descricao}</p>
    </div>
  );
}

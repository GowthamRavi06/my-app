const TechCard = ({ item }) => {
  return (
    <div className="w-[400px] h-[500px] flex-none relative group bg-slate-900 border border-slate-700 rounded-3xl overflow-hidden hover:border-cyan-500/50 transition-colors duration-500">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={item.imageUrl}
          alt={item.name}
          className="w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="absolute inset-0 p-8 flex flex-col justify-end">
        {/* Type */}
        <div className="mb-auto pt-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-wider backdrop-blur-md">
            {item.type}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-3xl font-bold text-white mb-2 leading-tight">
          {item.name}
        </h3>

        {/* Description */}
        <p className="text-slate-400 mb-6 leading-relaxed line-clamp-3">
          {item.description}
        </p>

        {/* Specs + Price */}
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-2">
            {item.specs?.slice(0, 4).map((spec, i) => (
              <div
                key={i}
                className="flex items-center text-xs text-slate-300 bg-slate-800/50 rounded-lg p-2 border border-slate-700/50"
              >
                {spec}
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-slate-800">
            <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">
              {item.price}
            </span>

            <button className="px-6 py-2 bg-white text-slate-950 font-bold rounded-lg hover:bg-cyan-50 transition-colors">
              Pre-order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechCard;

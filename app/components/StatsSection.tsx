const STATS = [
  { value: '+8 años', label: 'en Córdoba Capital' },
  { value: '+2000 hogares', label: 'nos eligen' },
  { value: '+150 empresas', label: 'cordobesas son parte' },
];

export function StatsSection() {
  return (
    <section className="bg-eco-green py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-12">
          <span className="text-eco-text-dark">Decisiones concientes, </span>
          <span className="text-white">impacto real</span>
        </h2>
        <div className="flex flex-col items-center gap-6">
          {STATS.map((stat, index) => (
            <div
              key={stat.value}
              className="bg-eco-beige w-full max-w-xl py-6 rounded-xl shadow-md"
            >
              <div className="text-eco-green text-2xl md:text-3xl font-extrabold">
                {stat.value}
              </div>
              <div className="text-eco-text-dark text-sm md:text-base font-normal mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


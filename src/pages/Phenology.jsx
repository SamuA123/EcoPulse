export default function Phenology() {
  return (
    <div className="min-h-screen w-full bg-green-50 p-10 overflow-x-hidden flex flex-col items-center">
      <h1 className="text-3xl font-bold text-green-900 mb-6">
        Phenology in Plants
      </h1>
      <p className="text-gray-700 leading-relaxed max-w-4xl text-center">
        Phenology is the study of how seasonal and climatic changes affect plant
        life cycles, such as flowering, fruiting, and pollination. Observing
        these events is critical for biodiversity conservation, agricultural
        planning, and understanding how ecosystems adapt to a changing climate.
      </p>

      <img
        src="https://images.unsplash.com/photo-1524594081293-190a2fe0baae?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
        alt="Phenology"
        className="mt-6 rounded-xl shadow-lg max-w-4xl w-full object-cover"
      />
    </div>
  );
}

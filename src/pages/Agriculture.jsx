export default function Agriculture() {
  return (
    <div className="min-h-screen w-full bg-green-50 p-10 overflow-x-hidden flex flex-col items-center">
      <h1 className="text-3xl font-bold text-green-900 mb-6">
        Agriculture & Crops
      </h1>
      <p className="text-gray-700 leading-relaxed max-w-4xl text-center">
        Vegetation cycles are deeply connected to climate. Seasonal changes in 
        temperature, precipitation, and sunlight influence plant growth, 
        photosynthesis, and biodiversity.
      </p>

      <img
        src="https://cdn2-group.bureauveritas.com/sites/g/files/zypfnx196/files/2020-10/shutterstock_612566915_compressed.jpg"
        alt="Vegetation"
        className="mt-6 rounded-xl shadow-lg max-w-4xl w-full object-cover"
      />
    </div>
  );
}

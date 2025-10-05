export default function Vegetation() {
  return (
    <div className="min-h-screen w-full bg-green-50 p-10 overflow-x-hidden flex flex-col items-center gap-10">
      {/* Título principal */}
      <h1 className="text-4xl md:text-5xl font-bold text-green-900 text-center">
        Vegetation & Climate
      </h1>

      {/* Imagen principal */}
      <img
        src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
        alt="Vegetation"
        className="w-full max-w-5xl rounded-xl shadow-lg object-cover"
      />

      {/* Introducción */}
      <div className="max-w-4xl text-gray-700 text-center leading-relaxed">
        <p>
          Understanding the dynamic relationship between climate and vegetation is essential to interpret how Earth’s ecosystems respond to environmental change. Climate factors such as temperature, rainfall, and sunlight directly influence plant growth, flowering, and productivity. Through satellite observation and data analysis, researchers can explore these patterns on a global scale, uncovering how variations in climate drive the rhythm of life across landscapes.
        </p>
      </div>

      {/* Secciones numeradas */}
      <div className="max-w-4xl flex flex-col gap-6">
        {/* 1 */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold text-green-800 mb-2">1. Interconnection Between Climate and Vegetation</h2>
          <p className="text-gray-700 leading-relaxed">
            Climate is one of the main regulators of plant growth and development. Factors such as temperature, solar radiation, and precipitation determine when and how plants bloom. Changes in these climatic conditions can advance or delay flowering cycles, affecting both agricultural productivity and natural ecosystems. Understanding this relationship helps identify the impacts of climate change on ecosystems and anticipate alterations in natural blooming calendars.
          </p>
        </div>

        {/* 2 */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold text-green-800 mb-2">2. Importance of Satellite Monitoring</h2>
          <p className="text-gray-700 leading-relaxed">
            NASA’s Earth observation satellites, such as MODIS, VIIRS, and Landsat, provide continuous insight into the state of global vegetation. These sensors capture variations in surface color and reflectance, allowing the calculation of vegetation indices like NDVI and EVI. Through these measurements, it becomes possible to detect seasonal changes, anomalies, and long-term trends, revealing how vegetation responds to climatic conditions across different regions of the planet.
          </p>
        </div>

        {/* 3 */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold text-green-800 mb-2">3. Detection of Blooming Patterns</h2>
          <p className="text-gray-700 leading-relaxed">
            By analyzing time series from satellite data, key stages of the vegetative cycle—such as the onset, peak, and end of flowering—can be identified. These events, known as phenological phases, reflect the interaction between climate and plant physiology. For instance, an early rise in temperature can trigger premature blooms, while prolonged drought may reduce their intensity. Detecting these large-scale patterns provides valuable information for environmental management and agricultural planning.
          </p>
        </div>

        {/* 4 */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold text-green-800 mb-2">4. Indicators of Climate Change</h2>
          <p className="text-gray-700 leading-relaxed">
            Shifts in flowering patterns serve as bioindicators of climate change. Global studies show that many species are blooming earlier than usual due to rising average temperatures. This temporal shift alters the relationships between plants, pollinators, and entire ecosystems. Monitoring these variations through satellite data helps identify vulnerable regions and understand the cumulative effects of global warming on vegetation productivity and biodiversity.
          </p>
        </div>

        {/* 5 */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold text-green-800 mb-2">5. Ecological and Social Applications</h2>
          <p className="text-gray-700 leading-relaxed">
            Analyzing the dynamics between climate and vegetation has wide-ranging applications. In agriculture, it helps forecast optimal planting and harvesting periods; in conservation, it supports the detection of areas at risk due to water stress or biodiversity loss. Moreover, information on anomalous blooming events contributes to better natural resource management and more precise environmental policies. Together, these insights enhance humanity’s capacity to adapt to a changing climate, using space-based observation as a key tool for planetary sustainability.
          </p>
        </div>
      </div>
    </div>
  );
}

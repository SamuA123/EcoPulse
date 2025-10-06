export default function Agriculture() {
  return (
    <div className="min-h-screen w-full bg-green-50 p-10 overflow-x-hidden flex flex-col items-center gap-10">
      
      {/* Título principal */}
      <h1 className="text-4xl md:text-5xl font-bold text-green-900 text-center">
        Agriculture & Crops
      </h1>

      

      {/* Imagen principal */}
      <img
        src="https://cdn2-group.bureauveritas.com/sites/g/files/zypfnx196/files/2020-10/shutterstock_612566915_compressed.jpg"
        alt="Vegetation"
        className="w-full max-w-4xl rounded-xl shadow-lg h-auto"
      />

      {/* Introducción */}
      <div className="max-w-4xl text-gray-700 text-center leading-relaxed">
        <p>
          Monitoring crop flowering is vital for ensuring food security and optimizing agricultural production. Flowering marks a critical phase in the growth cycle of many crops, determining pollination success, yield potential, and harvest timing. By leveraging NASA’s Earth observation data, it is possible to detect and track bloom events across diverse agricultural regions, providing valuable insights for farmers, researchers, and policymakers.
        </p>
      </div>

      {/* Secciones numeradas */}
      <div className="max-w-4xl flex flex-col gap-6 mt-6">

        {/* 1 */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold text-green-800 mb-2">1. Satellite-Based Crop Bloom Detection</h2>
          
          <p className="text-gray-700 leading-relaxed">
            High-resolution imagery from satellites like Landsat and MODIS enables the identification of flowering stages in crops by analyzing changes in reflectance patterns, vegetation indices, and canopy color dynamics. These indicators help pinpoint when and where bloom events occur, even in vast or remote agricultural areas.
          </p>

          {/* Imagen y texto debajo */}
          <div className="flex flex-col items-center mt-4">
            <img 
              src="/images/Satellite-Based.png" 
              alt="Satellite Crop Bloom" 
              className="mb-2 rounded-lg max-w-full h-auto" 
            />
            <p className="text-gray-600 text-center">
              Scatter plots of actual versus estimated dates at field scale for different crop stages. Gómez, D., Salvador, P., et al. (2025). Remote Sensing. https://doi.org/10.3390/rs17142336
            </p>
          </div>
        </div>

        {/* 2 */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold text-green-800 mb-2">2. Climate and Seasonal Correlations</h2>

          <p className="text-gray-700 leading-relaxed">
            Bloom timing is highly sensitive to climatic factors such as temperature, precipitation, and humidity. By cross-referencing satellite vegetation data with climate models, researchers can forecast how seasonal shifts or extreme weather events influence flowering, thus supporting adaptive farming strategies.
          </p>

          <div className="flex flex-col items-center mt-4">
            <img 
              src="/images/ClimateandSeasonal.png" 
              alt="Climate and Seasonal Correlations" 
              className="mb-2 rounded-lg max-w-full h-auto" 
            />
            <p className="text-gray-600 text-center">
              A simple presentation of climate warming effects on growth and development of crop plants. Fatima, Z., et al. (2020). Scientific Reports. https://doi.org/10.1038/s41598-020-74740-3
            </p>
          </div>
        </div>

        {/* 3 */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold text-green-800 mb-2">3. Precision Agriculture and Resource Management</h2>

          <p className="text-gray-700 leading-relaxed">
            BloomWatch supports precision agriculture by integrating phenological data with soil moisture, temperature, and evapotranspiration maps. This allows farmers to make data-driven decisions about irrigation, fertilization, and pest control during critical flowering windows, reducing waste and maximizing yields.
          </p>

          <div className="flex flex-col items-center mt-4">
            <img 
              src="/images/PrecisionAgriculture.png" 
              alt="Precision Agriculture" 
              className="mb-2 rounded-lg max-w-full h-auto" 
            />
            <p className="text-gray-600 text-center">
              Location of arable fields for surveys of silage maize, late potato, and winter wheat. MDPI. (2023). Remote Sensing. https://doi.org/10.3390/rs15082090
            </p>
          </div>
        </div>

        {/* 4 */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold text-green-800 mb-2">4. Early Warning for Crop Stress and Anomalies</h2>

          <p className="text-gray-700 leading-relaxed">
            By comparing current bloom patterns with historical baselines, deviations can signal crop stress, pest outbreaks, or environmental anomalies. This early warning system enables timely intervention, preventing large-scale losses and enhancing resilience in food production systems.
          </p>

          <div className="flex flex-col items-center mt-4">
            <img 
              src="/images/EarlyWarning.png" 
              alt="Crop Stress and Anomalies" 
              className="mb-2 rounded-lg max-w-full h-auto" 
            />
            <p className="text-gray-600 text-center">
              NDVI anomalies in Africa between 2017 and 2022. Digital Earth Africa. https://digitalearthafrica.org/en_za/mean-ndvi-and-anomalies/
            </p>
          </div>
        </div>

        {/* 5 */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold text-green-800 mb-2">5. Supporting Sustainable Agricultural Policies</h2>

          <p className="text-gray-700 leading-relaxed">
            Aggregated bloom data across regions helps policymakers assess agricultural performance, biodiversity, and climate resilience. These insights can guide the design of sustainable agricultural policies and global food monitoring frameworks.
          </p>

          <div className="flex flex-col items-center mt-4">
            <img 
              src="/images/SupportingSustainable.png" 
              alt="Sustainable Policies" 
              className="mb-2 rounded-lg max-w-full h-auto" 
            />
            <p className="text-gray-600 text-center">
              Temporal trends of phenological indicators and climate variables during growing periods. Niu, Q., et al. (2022). Earth System Science Data. https://doi.org/10.5194/essd-14-2851-2022
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

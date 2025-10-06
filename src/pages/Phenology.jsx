export default function Phenology() {
  return (
    <div className="min-h-screen w-full bg-green-50 p-10 overflow-x-hidden flex flex-col items-center gap-10">
      
      {/* Título principal */}
      <h1 className="text-4xl md:text-5xl font-bold text-green-900 text-center">
        Plant Phenology & Ecosystem Patterns
      </h1>

      {/* Imagen principal */}
      <img
        src="https://i.pinimg.com/originals/b7/00/e9/b700e9ec890f2fd45b00a47abcc55c35.jpg"
        alt="Phenology"
        className="w-full max-w-5xl rounded-xl shadow-lg h-auto"
      />

      {/* Introducción */}
      <div className="max-w-4xl text-gray-700 text-center leading-relaxed">
        <p>
          Plant phenology—the study of the timing of life cycle events such as
          leaf-out, flowering, and fruiting—is one of the most sensitive indicators
          of ecosystem health. Changes in these natural rhythms reveal how plants
          respond to variations in temperature, precipitation, and sunlight. By
          tracking these patterns globally, scientists can better understand the
          ecological balance of our planet and the impacts of climate change on
          biodiversity and productivity.
        </p>
      </div>

      {/* Secciones numeradas */}
      <div className="max-w-4xl flex flex-col gap-6 mt-6">

        {/* 1 */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold text-green-800 mb-2">
            1. Seasonal Rhythms and Phenological Cycles
          </h2>
          
          <p className="text-gray-700 leading-relaxed">
            Phenological events follow seasonal cues that differ across ecosystems.
            For example, spring bloom in temperate forests or the flowering bursts
            in tropical savannas mark critical transitions in biological activity.
            Observing these cycles helps scientists understand how energy and
            nutrients flow through ecosystems over time.
          </p>

          {/* Imagen y texto debajo */}
          <div className="flex flex-col mt-4 items-center">
            <img
              src="/images/SeasonalRhythms.png"
              alt="Seasonal Rhythms"
              className="mb-2 rounded-lg max-w-full h-auto"
            />
            <p className="text-gray-600 text-center max-w-full break-words">
              Smoothed LAI time series with estimated phenological metrics.
              “Earth Observation for Phenological Metrics (EO4PM): Temporal Discriminant to Characterize Forest Ecosystems.” Remote Sensing, 14(3), 721. 
              <a href="https://www.mdpi.com/2072-4292/14/3/721" className="text-blue-600 underline" target="_blank" rel="noreferrer">Link</a>
            </p>
          </div>
        </div>

        {/* 2 */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold text-green-800 mb-2">
            2. Satellite Observation of Phenological Shifts
          </h2>

          <p className="text-gray-700 leading-relaxed">
            NASA’s Earth observation platforms—such as MODIS and VIIRS—enable
            continuous monitoring of vegetation greenness and bloom intensity. These
            long-term datasets allow researchers to detect phenological shifts, such
            as earlier or delayed flowering, which serve as early indicators of
            climate-driven ecosystem change.
          </p>

          <div className="flex flex-col mt-4 items-center">
            <img
              src="/images/SatelliteObservation.png"
              alt="Satellite Observation"
              className="mb-2 rounded-lg max-w-full h-auto"
            />
            <p className="text-gray-600 text-center max-w-full break-words">
             Overview of NASA's MODIS and VIIRS Snow-Cover Earth System Data Records. Manuscript under review: <a href="https://essd.copernicus.org/preprints/essd-2017-25/essd-2017-25.pdf" className="text-blue-600 underline" target="_blank" rel="noreferrer">Link</a>
            </p>
          </div>
        </div>

        {/* 3 */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold text-green-800 mb-2">
            3. Ecological Interactions and Pollinator Dynamics
          </h2>

          <p className="text-gray-700 leading-relaxed">
            Flowering phenology directly affects pollinator behavior and survival.
            Mismatches between plant bloom timing and pollinator activity can
            disrupt food webs. Monitoring these interactions from space provides
            valuable insights into ecosystem stability and biodiversity resilience.
          </p>

          <div className="flex flex-col mt-4 items-center">
            <img
              src="/images/EcologicalInteractions.png"
              alt="Pollinator Dynamics"
              className="mb-2 rounded-lg max-w-full h-auto"
            />
            <p className="text-gray-600 text-center max-w-full break-words">
              Simplified representation of phenological desynchronization between plant flowering (red curve) and pollinator activity (blue curve) under climate change.
              <a href="https://www.pollinationecology.org/index.php/jpe/article/view/221" className="text-blue-600 underline" target="_blank" rel="noreferrer">Link</a>
            </p>
          </div>
        </div>

        {/* 4 */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold text-green-800 mb-2">
            4. Long-Term Phenological Trends
          </h2>

          <p className="text-gray-700 leading-relaxed">
            By analyzing multi-year datasets, BloomWatch helps detect long-term
            trends in vegetation dynamics. These trends can reveal how ecosystems
            adapt—or struggle to adapt—to ongoing climate stressors like droughts,
            heatwaves, and changing precipitation patterns.
          </p>

          <div className="flex flex-col mt-4 items-center">
            <img
              src="/images/Long-Term.png"
              alt="Long-Term Trends"
              className="mb-2 rounded-lg max-w-full h-auto"
            />
            <p className="text-gray-600 text-center max-w-full break-words">
              Trends in phenology metrics (start, middle, end, length of season) over decades, mostrando variación espacial en las direcciones de cambio. 
              <a href="https://www.researchgate.net/publication/315536369_Long-term_trends_in_vegetation_phenology_and_productivity_over_Namaqualand_using_the_GIMMS_AVHRR_NDVI3g_data_from_1982_to_2011" className="text-blue-600 underline" target="_blank" rel="noreferrer">Link</a>
            </p>
          </div>
        </div>

        {/* 5 */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold text-green-800 mb-2">
            5. Integrating Ground Observations with Satellite Data
          </h2>

          <p className="text-gray-700 leading-relaxed">
            Combining local field data from citizen scientists, researchers, and
            automated sensors with NASA’s satellite imagery enhances accuracy and
            spatial coverage. This hybrid approach strengthens the global phenology
            database and fosters collaboration across scientific and environmental
            communities.
          </p>

          <div className="flex flex-col mt-4 items-center">
            <img
              src="/images/IntegratingGround.png"
              alt="Ground and Satellite Data"
              className="mb-2 rounded-lg max-w-full h-auto"
            />
            <p className="text-gray-600 text-center max-w-full break-words">
              Comparison of phenological curves from PhenoCam and satellite sensors (MODIS, Sentinel-2, UAV) mostrando alineación y discrepancias en el inicio, pico y fin de la temporada.
              <a href="https://doi.org/10.3390/rs13081597" className="text-blue-600 underline" target="_blank" rel="noreferrer">Link</a>
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

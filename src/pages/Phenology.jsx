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
    className="w-full max-w-5xl rounded-xl shadow-lg object-cover"
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
  <div className="max-w-4xl flex flex-col gap-6">
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
    </div>
  </div>
</div>

  );
}

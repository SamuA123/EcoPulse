export default function Learning() {
  return (
    <div className="min-h-screen w-full bg-green-50 p-10 overflow-x-hidden flex flex-col items-center gap-10">
      
      {/* Título principal */}
      <h1 className="text-4xl md:text-5xl font-bold text-green-900 text-center">
        Learning Resources & Informative Images
      </h1>

      {/* Contenedor de imágenes */}
      <div className="w-full flex flex-col md:flex-row gap-6 justify-center items-start">

        {/* Imagen 1 */}
        <div className="flex-1 flex flex-col items-center w-full">
          <img
            src="/images/TheAnnualFlowering.png"
            alt="Learning 1"
            className="rounded-xl shadow-lg w-full h-auto"
          />
        </div>

        {/* Imagen 2 */}
        <div className="flex-1 flex flex-col items-center w-full">
          <img
            src="/images/AgricultureHumanHealth.png"
            alt="Learning 2"
            className="rounded-xl shadow-lg w-full h-auto"
          />
        </div>

        {/* Imagen 3 */}
        <div className="flex-1 flex flex-col items-center w-full">
          <img
            src="/images/Blooming.png"
            alt="Learning 3"
            className="rounded-xl shadow-lg w-full h-auto"
          />
        </div>

      </div>

      {/* Video informativo */}
      <div className="w-full max-w-5xl mt-10 flex justify-center">
        <video 
          controls 
          autoPlay 
          muted 
          loop
          className="w-full h-auto rounded-xl shadow-lg"
        >
          <source src="/videos/1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

    </div>
  );
}

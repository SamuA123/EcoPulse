import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 bg-green-900 text-white shadow-md">
        {/* Título clickeable */}
        <Link to="/" className="text-xl font-bold tracking-wide hover:text-green-300 transition">
          EcoPulse
        </Link>

        {/* Links de navegación */}
        <div className="flex space-x-6">
          <Link to="/learning" className="hover:text-green-300 transition">Learning with us</Link>
          <Link to="/vegetation" className="hover:text-green-300 transition">Vegetation</Link>
          <Link to="/agriculture" className="hover:text-green-300 transition">Agriculture</Link>
          <Link to="/phenology" className="hover:text-green-300 transition">Phenology</Link>
        </div>
      </nav>

      {/* Aquí se renderizan las páginas según la ruta */}
      <main>
        <Outlet />
      </main>
    </div>
  );
}

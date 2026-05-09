import logo from "../assets/roadway-logo.png";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-roadwayBlack/90 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <a href="#home" className="flex items-center">
          <img
            src={logo}
            alt="ROADWAY Auto Maintenance"
            className="h-28 md:h-32 w-auto object-contain"
          />
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-300">
          <a href="#home" className="hover:text-roadwayRed transition">Home</a>
          <a href="#services" className="hover:text-roadwayRed transition">Services</a>
          <a href="#about" className="hover:text-roadwayRed transition">About</a>
          <a href="#contact" className="hover:text-roadwayRed transition">Contact</a>
        </nav>

        <a
          href="#contact"
          className="px-5 py-2.5 rounded-full bg-roadwayRed hover:bg-red-700 font-semibold shadow-lg shadow-red-500/20 transition"
        >
          Book Service
        </a>
      </div>
    </header>
  );
}
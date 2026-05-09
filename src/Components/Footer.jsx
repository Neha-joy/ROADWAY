export default function Footer() {
  return (
    <footer className="py-8 border-t border-white/10 bg-roadwayBlack">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-black text-roadwayWhite tracking-wider">
            ROADWAY
          </h2>

          <p className="text-gray-400 text-sm mt-1">
            Professional Auto Maintenance Service
          </p>
        </div>

        <div className="text-gray-400 text-sm text-center md:text-right">
          <p>© 2026 ROADWAY Auto Maintenance.</p>
          <p>All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
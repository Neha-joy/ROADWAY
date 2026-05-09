import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppFloat() {

  const phoneNumber = "971562588295";

  const message = encodeURIComponent(
    "Hello ROADWAY, I need car service."
  );

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[999] group"
    >
      <div className="relative">

        {/* Ping Animation */}
        <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-30" />

        {/* Button */}
        <div className="relative w-16 h-16 rounded-full bg-green-500 hover:bg-green-600 transition flex items-center justify-center shadow-2xl shadow-green-500/40">

          <FaWhatsapp className="text-white text-4xl" />

        </div>

      </div>
    </a>
  );
}
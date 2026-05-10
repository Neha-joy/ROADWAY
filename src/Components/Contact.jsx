import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Phone,
  MapPin,
  Clock,
  Mail,
} from "lucide-react";

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    setStatus("Sending...");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setStatus("Message Sent Successfully!");
          form.current.reset();
        },
        (error) => {
          console.log("EmailJS Error:", error);
          setStatus("Failed: " + error.text);
        }
      );
  };


  return (
    <section
      id="contact"
      className="py-24 bg-black"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">

          <p className="text-roadwayRed font-semibold tracking-widest uppercase">
            Contact Us
          </p>

          <h2 className="text-4xl md:text-6xl font-black italic text-white mt-4">
            Book Your Service
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            Get in touch with ROADWAY Auto Maintenance for
            professional car repair and maintenance services.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* LEFT */}
          <div className="rounded-[2rem] bg-neutral-950 border border-white/10 p-8">

            <h3 className="text-3xl font-black text-white mb-8">
              Send Us Message
            </h3>

            <form
              ref={form}
              onSubmit={sendEmail}
              className="space-y-5"
            >

              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
                className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 text-white outline-none focus:border-roadwayRed"
              />

              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
                className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 text-white outline-none focus:border-roadwayRed"
              />

              <input
                type="text"
                name="user_phone"
                placeholder="Phone Number"
                required
                className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 text-white outline-none focus:border-roadwayRed"
              />

              <input
                type="text"
                name="car_model"
                placeholder="Car Model"
                className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 text-white outline-none focus:border-roadwayRed"
              />

              <textarea
                name="message"
                placeholder="Service Required"
                rows="5"
                required
                className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 text-white outline-none focus:border-roadwayRed resize-none"
              />

              <button
                type="submit"
                className="w-full py-4 rounded-2xl bg-roadwayRed hover:bg-red-700 transition text-white font-bold text-lg shadow-lg shadow-red-500/30"
              >
                Send Message
              </button>



              {status && (
                <p className="text-center text-gray-300 pt-2">
                  {status}
                </p>
              )}

            </form>
          </div>

          {/* RIGHT */}
          <div className="rounded-[2rem] overflow-hidden border border-white/10 bg-neutral-950">

            {/* Info */}
            <div className="p-8 space-y-6">

              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-roadwayRed/15 flex items-center justify-center">
                  <Phone className="text-roadwayRed" />
                </div>

                <div>
                  <h4 className="text-white font-bold text-lg">
                    Phone
                  </h4>

                  <p className="text-gray-400">
                    +971542920168
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-roadwayRed/15 flex items-center justify-center">
                  <Mail className="text-roadwayRed" />
                </div>

                <div>
                  <h4 className="text-white font-bold text-lg">
                    Email
                  </h4>

                  <p className="text-gray-400">
                    roadwayautomaintenance@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-roadwayRed/15 flex items-center justify-center">
                  <MapPin className="text-roadwayRed" />
                </div>

                <div>
                  <h4 className="text-white font-bold text-lg">
                    Address
                  </h4>

                  <p className="text-gray-400">
                    Roadway Auto Maint.
                    Shj Ind Area 4,
                    Shajrah
                    UAE
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-roadwayRed/15 flex items-center justify-center">
                  <Clock className="text-roadwayRed" />
                </div>

                <div>
                  <h4 className="text-white font-bold text-lg">
                    Working Hours
                  </h4>

                  <p className="text-gray-400">
                    Daily: 9 AM - 11 PM
                  </p>
                </div>
              </div>

            </div>

            {/* MAP */}
            <iframe
              title="ROADWAY Garage Location"
              src="https://maps.google.com/maps?q=ROADWAY&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-[350px] border-0"
              loading="lazy"
              allowFullScreen
            ></iframe>

          </div>

        </div>
      </div>
    </section>
  );
}
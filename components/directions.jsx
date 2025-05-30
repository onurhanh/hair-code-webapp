import React from 'react'
import { FaWhatsapp } from 'react-icons/fa';

export default function Directions() {
  return (
        <section id="yoltarifi" className="w-full min-h-screen bg-white pt-16 relative">
      <div className="mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Yol Tarifi</h2>

        <div className="gap-8 flex absolute bottom-0 w-full">
          {/* Google Maps */}
          <div className="w-full h-90">
            <iframe
              title="Salon Konumu"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d266.31122451400495!2d29.078803708830662!3d40.96028940020194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac751c5bf33dd%3A0x7c10b5cb411b305e!2sHair%20Code%20Suadiye%20Kuaf%C3%B6r!5e0!3m2!1str!2str!4v1747927102592!5m2!1str!2str"
              width="100%"
              height="100%"
              className="rounded-lg border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}

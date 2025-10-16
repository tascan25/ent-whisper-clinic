import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Phone, Clock, Video, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import cal from "@/assets/icons/cal.png";
import tel from "@/assets/icons/tel.png";
import online from "@/assets/icons/online.png";
import clock from "@/assets/icons/clock.png";

const About = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.25 });

  return (
    <section
      id="about"
      className="py-16 md:py-24 px-4 relative overflow-hidden"
      aria-labelledby="about-heading"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-background to-background" />

      {/* Animated background bubble (subtle, keeps theme) */}
      <motion.div
        className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-primary/10 blur-3xl"
        animate={{ scale: [1, 1.15, 1], x: [0, 24, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
      />

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <motion.header
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.85 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect mb-6"
          >
            <PhoneCall className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">Book Your Visit</span>
          </motion.div>

          <h2 id="about-heading" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 gradient-text px-4">
            About Us
          </h2>

          <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-4 leading-relaxed italic font-serif">
            Meet the Experts Behind the Care — compassionate, experienced, and dedicated to your wellbeing.
          </p>
        </motion.header>

        {/* Card */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="glass-effect rounded-2xl md:rounded-3xl p-6 md:p-10 max-w-4xl mx-auto group hover:scale-[1.02] transition-all duration-500 shadow-sm"
          whileHover={{ boxShadow: "var(--shadow-xl)" }}
          aria-labelledby="about-card-heading"
        >
          <div className="flex flex-col md:flex-row items-center gap-6">
            {/* Left: image/avatar */}
            <div className="w-full md:w-1/3 flex justify-center">
              <div className="rounded-xl overflow-hidden w-44 h-44 md:w-52 md:h-52 flex-shrink-0 shadow-md ring-1 ring-primary/10">
                {/* Placeholder image — swap with actual image or <Image> component if using next/image */}
                <img
                  src={cal}
                  alt="Clinic team portrait"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right: content */}
            <div className="w-full md:w-2/3">
              <h3 id="about-card-heading" className="text-xl md:text-2xl font-semibold mb-3">
                Compassionate Care. Clinical Excellence.
              </h3>

              <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4">
                Our multidisciplinary team brings together years of experience in patient-centered care. We blend cutting-edge
                treatments with a human approach — listening first, explaining clearly, and tailoring plans that fit your life.
              </p>

              {/* Feature chips */}
              <div className="grid grid-cols-2 gap-3 mb-5 md:grid-cols-4">
                <div className="flex items-center gap-2 p-2 rounded-lg bg-muted/10">
                  <img src={tel} alt="phone icon" className="w-6 h-6" />
                  <div className="text-xs">
                    <div className="font-medium">Phone</div>
                    <div className="text-muted-foreground text-[11px]">+91 12345 67890</div>
                  </div>
                </div>

                <div className="flex items-center gap-2 p-2 rounded-lg bg-muted/10">
                  <img src={clock} alt="clock icon" className="w-6 h-6" />
                  <div className="text-xs">
                    <div className="font-medium">Hours</div>
                    <div className="text-muted-foreground text-[11px]">Mon–Sat • 9:00 AM – 6:00 PM</div>
                  </div>
                </div>

                <div className="flex items-center gap-2 p-2 rounded-lg bg-muted/10">
                  <img src={online} alt="online icon" className="w-6 h-6" />
                  <div className="text-xs">
                    <div className="font-medium">Teleconsult</div>
                    <div className="text-muted-foreground text-[11px]">Video & Phone</div>
                  </div>
                </div>

                <div className="flex items-center gap-2 p-2 rounded-lg bg-muted/10">
                  <img src={cal} alt="calendar icon" className="w-6 h-6" />
                  <div className="text-xs">
                    <div className="font-medium">Appointments</div>
                    <div className="text-muted-foreground text-[11px]">Book online in 2 minutes</div>
                  </div>
                </div>
              </div>

              {/* CTA row */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Button className="w-full sm:w-auto" aria-label="Book appointment">
                  <span className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    Book Appointment
                  </span>
                </Button>

                <Button variant="ghost" className="w-full sm:w-auto" aria-label="Contact us">
                  <span className="flex items-center gap-2">
                    <Video className="h-4 w-4" />
                    Teleconsult
                  </span>
                </Button>
              </div>
            </div>
          </div>

          {/* Bottom: quick stats / specialties */}
          <div className="mt-6 pt-6 border-t border-muted/10 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold">12+</div>
              <div className="text-xs text-muted-foreground">Years of combined experience</div>
            </div>

            <div className="text-center">
              <div className="text-2xl font-bold">5k+</div>
              <div className="text-xs text-muted-foreground">Patients cared</div>
            </div>

            <div className="text-center">
              <div className="text-2xl font-bold">20</div>
              <div className="text-xs text-muted-foreground">Specialists on roster</div>
            </div>
          </div>
        </motion.section>
      </div>
    </section>
  );
};

export default About;

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, Clock, Video, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import cal from "@/assets/icons/cal.png";
import tel from "@/assets/icons/tel.png";
import online from "@/assets/icons/online.png";
import clock from "@/assets/icons/clock.png";
import docimage from "@/assets/Images/docimage.jpg";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      id="about"
      className="py-16 md:py-24 px-4 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-background to-background" />

      {/* Animated background */}
      <motion.div
        className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-primary/10 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
            }
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect mb-6"
          >
            <PhoneCall className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">Book Your Visit</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 gradient-text px-4">
            About Us
          </h2>

          <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-4 leading-relaxed italic font-serif">
            Meet the Experts Behind the Care
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="glass-effect rounded-2xl md:rounded-3xl p-6 md:p-12 max-w-5xl mx-auto group hover:scale-[1.02] transition-all duration-500"
          whileHover={{ boxShadow: "var(--shadow-xl)" }}
        >
          <div className="grid md:grid-cols-5 gap-8 md:gap-12 items-center">
            {/* Image Section */}
            <motion.div
              className="md:col-span-2 flex justify-center"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <div className="relative">
                <div className="w-48 h-48 md:w-64 md:h-64 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 backdrop-blur-sm flex items-center justify-center overflow-hidden border border-primary/20 shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
                  <div className="text-6xl md:text-8xl "><img src={docimage} alt={"Doc Image!"}/></div>
                </div>
                <motion.div
                  className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-xl shadow-lg"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: 1 }}
                >
                  <p className="text-xs font-semibold">35+ Years</p>
                  <p className="text-xs opacity-90">Experience</p>
                </motion.div>
              </div>
            </motion.div>

            {/* Content Section */}
            <motion.div
              className="md:col-span-3 space-y-6"
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-2 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                  Dr. Abha Bhatnagar
                </h3>
                <p className="text-primary font-semibold mb-3">
                  ENT Surgeon & Specialist
                </p>
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                  With over 35 years of dedicated experience in healthcare, we are
                  committed to providing exceptional patient care through
                  evidence-based practices and compassionate service. Our practice
                  combines cutting-edge medical expertise with a personalized approach
                  to ensure the best outcomes for every patient.
                </p>
              </div>

              <div className="border-t border-border/50 pt-6">
                <h4 className="text-sm font-semibold mb-4 text-muted-foreground uppercase tracking-wider">
                  Qualifications & Expertise
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span>MBBS, MD</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span>Board Certified</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span>Fellowship Training</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span>Published Researcher</span>
                  </div>
                </div>
              </div>

              <div className="border-t border-border/50 pt-6">
                <h4 className="text-sm font-semibold mb-4 text-muted-foreground uppercase tracking-wider">
                  Schedule Your Appointment
                </h4>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                  <motion.div
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="flex flex-col items-center gap-2 p-3 rounded-xl bg-background/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-colors cursor-pointer"
                  >
                    <img src={tel} alt="Phone" className="w-8 h-8 opacity-70" />
                    <span className="text-xs font-medium">Call Us</span>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="flex flex-col items-center gap-2 p-3 rounded-xl bg-background/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-colors cursor-pointer"
                  >
                    <img src={online} alt="Online" className="w-8 h-8 opacity-70" />
                    <span className="text-xs font-medium">Online</span>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="flex flex-col items-center gap-2 p-3 rounded-xl bg-background/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-colors cursor-pointer"
                  >
                    <img src={cal} alt="Book" className="w-8 h-8 opacity-70" />
                    <span className="text-xs font-medium">Book Now</span>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="flex flex-col items-center gap-2 p-3 rounded-xl bg-background/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-colors cursor-pointer"
                  >
                    <img src={clock} alt="Hours" className="w-8 h-8 opacity-70" />
                    <span className="text-xs font-medium">Hours</span>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

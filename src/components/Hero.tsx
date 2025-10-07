import { motion } from "framer-motion";
import { Phone, Clock, Video, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import tel from "@/assets/icons/tel.png";
import online from "@/assets/icons/online.png";
import cons from "@/assets/icons/cons.png"
import clock from "@/assets/icons/clock.png"

const Hero = () => {
  return (
    <section id="home" className="min-h-screen relative overflow-hidden flex items-center justify-center px-4 py-20 md:py-0">
      <div className="absolute inset-0 bg-gradient-secondary" />
      
      {/* Animated background elements */}
      <motion.div
        className="absolute top-10 md:top-20 left-5 md:left-20 w-48 md:w-96 h-48 md:h-96 rounded-full bg-primary/20 blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-1/4 right-5 md:right-20 w-40 md:w-80 h-40 md:h-80 rounded-full bg-secondary/20 blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      <motion.div
        className="absolute bottom-10 md:bottom-32 left-1/4 w-36 md:w-72 h-36 md:h-72 rounded-full bg-accent/15 blur-3xl"
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect mb-6 md:mb-8"
          >
            <Sparkles className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium">Premium ENT Care</span>
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 gradient-text px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Dr. Abha Bhatnagar
          </motion.h1>
          
          <motion.p
            className="text-xl sm:text-2xl md:text-3xl text-primary mb-3 md:mb-4 font-semibold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            ENT Specialist
          </motion.p>
          
          <motion.p
            className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 md:mb-12 max-w-2xl mx-auto px-4 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Providing comprehensive ear, nose, and throat care with advanced diagnostic procedures and surgical expertise
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 md:mb-20 px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <a href="#contact" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto bg-gradient-primary hover:opacity-90 hover:scale-105 transition-all duration-300 text-primary-foreground shadow-xl">
                  <img
                  src={tel}
                  alt="Girl in a jacket"
                  className="w-6 h-6 "
                />
                Book Appointment
              </Button>
            </a>
            <a href="#services" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground hover:scale-105 transition-all duration-300">
                View Services
              </Button>
            </a>
          </motion.div>

          {/* Quick Info Cards */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <motion.div 
              className="glass-effect rounded-2xl md:rounded-3xl p-6 md:p-8 hover:scale-105 hover:-translate-y-2 transition-all duration-500 cursor-pointer group"
              whileHover={{ boxShadow: "0 20px 60px -10px rgba(0,0,0,0.2)" }}
            >
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                 <img
                  src={clock}
                  alt="Girl in a jacket"
                  className="h-10 w-10 md:h-12 md:w-12 text-accent mx-auto mb-4 group-hover:scale-110 transition-transform "
                />
              </motion.div>
              <h3 className="font-bold text-lg md:text-xl mb-3 text-primary">Clinic Hours</h3>
              <p className="text-sm md:text-base text-muted-foreground font-medium">9:30 AM - 1:30 PM</p>
              <p className="text-sm md:text-base text-muted-foreground font-medium">6:00 PM - 8:30 PM</p>
            </motion.div>
            
            <motion.div 
              className="glass-effect rounded-2xl md:rounded-3xl p-6 md:p-8 hover:scale-105 hover:-translate-y-2 transition-all duration-500 cursor-pointer group"
              whileHover={{ boxShadow: "0 20px 60px -10px rgba(0,0,0,0.2)" }}
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                  <img
                  src={online}
                  alt="Girl in a jacket"
                  className="h-10 w-10 md:h-12 md:w-12 text-accent mx-auto mb-4 group-hover:scale-110 transition-transform "
                />
              </motion.div>
              <h3 className="font-bold text-lg md:text-xl mb-3 text-secondary">Teleconsultation</h3>
              <p className="text-sm md:text-base text-muted-foreground">Available for remote</p>
              <p className="text-sm md:text-base text-muted-foreground">consultations</p>
            </motion.div>
            
            <motion.div 
              className="glass-effect rounded-2xl md:rounded-3xl p-6 md:p-8 hover:scale-105 hover:-translate-y-2 transition-all duration-500 cursor-pointer group sm:col-span-2 lg:col-span-1"
              whileHover={{ boxShadow: "0 20px 60px -10px rgba(0,0,0,0.2)" }}
            >
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                  <img
                  src={cons}
                  alt="Girl in a jacket"
                  className="h-10 w-10 md:h-12 md:w-12 text-accent mx-auto mb-4 group-hover:scale-110 transition-transform "
                />
              </motion.div>
              <h3 className="font-bold text-lg md:text-xl mb-3 text-primary">Consultation Fee</h3>
              <p className="text-3xl md:text-4xl font-bold gradient-text">₹1,000</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

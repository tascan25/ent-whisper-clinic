import { motion } from "framer-motion";
import { Phone, Clock, Video } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen relative overflow-hidden flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-gradient-secondary" />
      
      {/* Animated background circles */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 rounded-full bg-primary/10 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-secondary/10 blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 gradient-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Dr. Abha Bhatnagar
          </motion.h1>
          
          <motion.p
            className="text-2xl md:text-3xl text-primary mb-4 font-semibold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            ENT Specialist
          </motion.p>
          
          <motion.p
            className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Providing comprehensive ear, nose, and throat care with advanced diagnostic procedures and surgical expertise
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <a href="#contact">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 transition-opacity text-primary-foreground">
                <Phone className="mr-2 h-5 w-5" />
                Book Appointment
              </Button>
            </a>
            <a href="#services">
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                View Services
              </Button>
            </a>
          </motion.div>

          {/* Quick Info Cards */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <div className="glass-effect rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
              <Clock className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-lg mb-2">Clinic Hours</h3>
              <p className="text-sm text-muted-foreground">9:30 AM - 1:30 PM</p>
              <p className="text-sm text-muted-foreground">6:00 PM - 8:30 PM</p>
            </div>
            
            <div className="glass-effect rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
              <Video className="h-8 w-8 text-secondary mx-auto mb-3" />
              <h3 className="font-semibold text-lg mb-2">Teleconsultation</h3>
              <p className="text-sm text-muted-foreground">Available for remote consultations</p>
            </div>
            
            <div className="glass-effect rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
              <Phone className="h-8 w-8 text-accent mx-auto mb-3" />
              <h3 className="font-semibold text-lg mb-2">Consultation Fee</h3>
              <p className="text-xl font-bold text-primary">₹1,000</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

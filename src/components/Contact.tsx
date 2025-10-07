import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, Clock, Video, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const contactInfo = [
    {
      icon: Phone,
      title: "General Contact",
      details: ["9818345012"],
      color: "text-primary",
      gradient: "bg-gradient-primary",
    },
    {
      icon: Clock,
      title: "Appointment Booking",
      details: ["8860302103", "During clinic hours"],
      color: "text-secondary",
      gradient: "bg-gradient-accent",
    },
    {
      icon: Video,
      title: "Teleconsultation",
      details: ["Available online", "Book via phone"],
      color: "text-accent",
      gradient: "bg-gradient-primary",
    },
  ];

  return (
    <section id="contact" className="py-16 md:py-24 px-4 relative overflow-hidden">
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
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect mb-6"
          >
            <PhoneCall className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">Book Your Visit</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 gradient-text px-4">
            Get In Touch
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-4 leading-relaxed">
            Book your appointment or reach out for any inquiries. We're here to help you
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-16">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="glass-effect rounded-2xl md:rounded-3xl p-6 md:p-8 text-center hover:scale-105 hover:-translate-y-2 transition-all duration-500 group"
              whileHover={{ boxShadow: "var(--shadow-xl)" }}
            >
              <motion.div 
                className={`inline-flex p-4 md:p-5 rounded-2xl ${info.gradient} mb-4 md:mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 }}
              >
                <info.icon className="h-8 w-8 md:h-10 md:w-10 text-primary-foreground" />
              </motion.div>
              <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-primary">{info.title}</h3>
              {info.details.map((detail, idx) => (
                <p key={idx} className="text-sm md:text-base text-muted-foreground mb-1 font-medium">
                  {detail}
                </p>
              ))}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="glass-effect rounded-2xl md:rounded-3xl p-6 md:p-12 max-w-4xl mx-auto group hover:scale-[1.02] transition-all duration-500"
          whileHover={{ boxShadow: "var(--shadow-xl)" }}
        >
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-8 text-primary">Clinic Hours</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-10">
              <motion.div 
                className="flex flex-col sm:flex-row items-center justify-center gap-4 p-4 md:p-6 rounded-2xl bg-primary/5 hover:bg-primary/10 transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                <Clock className="h-8 w-8 md:h-10 md:w-10 text-primary flex-shrink-0" />
                <div className="text-center sm:text-left">
                  <p className="font-bold text-base md:text-lg text-primary">Morning Session</p>
                  <p className="text-sm md:text-base text-muted-foreground font-medium">9:30 AM - 1:30 PM</p>
                </div>
              </motion.div>
              <motion.div 
                className="flex flex-col sm:flex-row items-center justify-center gap-4 p-4 md:p-6 rounded-2xl bg-secondary/5 hover:bg-secondary/10 transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                <Clock className="h-8 w-8 md:h-10 md:w-10 text-secondary flex-shrink-0" />
                <div className="text-center sm:text-left">
                  <p className="font-bold text-base md:text-lg text-secondary">Evening Session</p>
                  <p className="text-sm md:text-base text-muted-foreground font-medium">6:00 PM - 8:30 PM</p>
                </div>
              </motion.div>
            </div>

            <div className="pt-6 md:pt-8 border-t border-border">
              <p className="text-xl md:text-2xl font-bold text-primary mb-2 md:mb-3">Consultation Fee</p>
              <motion.p 
                className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text mb-6 md:mb-8"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                ₹1,000
              </motion.p>
              <a href="tel:8860302103" className="inline-block w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto bg-gradient-primary hover:opacity-90 hover:scale-105 transition-all duration-300 text-primary-foreground shadow-xl text-base md:text-lg px-6 md:px-8 py-4 md:py-6">
                  <Phone className="mr-2 h-5 w-5 md:h-6 md:w-6" />
                  Call for Appointment
                </Button>
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-center mt-12 md:mt-16"
        >
          <p className="text-xs md:text-sm text-muted-foreground">
            © 2025 Dr. Abha Bhatnagar ENT Clinic. All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

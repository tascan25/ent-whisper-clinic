import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, Clock, Video, MapPin, Mail } from "lucide-react";
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
    },
    {
      icon: Clock,
      title: "Appointment Booking",
      details: ["8860302103", "During clinic hours"],
      color: "text-secondary",
    },
    {
      icon: Video,
      title: "Teleconsultation",
      details: ["Available online", "Book via phone"],
      color: "text-accent",
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-background to-background" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Book your appointment or reach out for any inquiries
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="glass-effect rounded-3xl p-8 text-center hover:scale-105 transition-transform duration-500"
            >
              <div className="inline-flex p-4 rounded-2xl bg-gradient-primary mb-4">
                <info.icon className={`h-8 w-8 text-primary-foreground`} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary">{info.title}</h3>
              {info.details.map((detail, idx) => (
                <p key={idx} className="text-muted-foreground mb-1">
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
          className="glass-effect rounded-3xl p-8 md:p-12 max-w-3xl mx-auto"
        >
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-primary">Clinic Hours</h3>
            <div className="space-y-4 mb-8">
              <div className="flex items-center justify-center gap-4">
                <Clock className="h-6 w-6 text-primary" />
                <div className="text-left">
                  <p className="font-semibold">Morning Session</p>
                  <p className="text-muted-foreground">9:30 AM - 1:30 PM</p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-4">
                <Clock className="h-6 w-6 text-secondary" />
                <div className="text-left">
                  <p className="font-semibold">Evening Session</p>
                  <p className="text-muted-foreground">6:00 PM - 8:30 PM</p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-border">
              <p className="text-2xl font-bold text-primary mb-2">Consultation Fee</p>
              <p className="text-4xl font-bold gradient-text mb-6">₹1,000</p>
              <a href="tel:8860302103">
                <Button size="lg" className="bg-gradient-primary hover:opacity-90 transition-opacity text-primary-foreground">
                  <Phone className="mr-2 h-5 w-5" />
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
          className="text-center mt-12"
        >
          <p className="text-sm text-muted-foreground">
            © 2025 Dr. Abha Bhatnagar ENT Clinic. All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

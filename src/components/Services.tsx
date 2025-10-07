import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Stethoscope, Hospital, HeartPulse } from "lucide-react";

const diagnosticServices = [
  "Nasoendoscopy",
  "Laryngoscopy",
  "Otoendoscopy",
  "Foreign bodies removal from Ear, Nose and Throat",
  "Split ear lobe repair",
  "Ear Syringing",
  "Hearing test",
  "Balance test",
  "Allergy test & Immunotherapy",
  "Speech therapy",
  "Bera (on prior appointment)",
];

const surgicalServices = [
  "Tonsillectomy",
  "Adenoidectomy",
  "Grommets in ears",
  "Tympanoplasty",
  "Mastoid surgery in unsafe ears",
  "Septoplasty",
  "FESS (sinus surgery)",
  "Thyroid surgery (non-cancerous)",
  "Salivary gland surgery",
];

const ServiceCard = ({ title, services, icon: Icon, delay }: any) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay }}
      className="glass-effect rounded-3xl p-8 hover:scale-105 transition-transform duration-500"
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="p-3 rounded-2xl bg-gradient-primary">
          <Icon className="h-8 w-8 text-primary-foreground" />
        </div>
        <h3 className="text-2xl font-bold text-primary">{title}</h3>
      </div>
      <ul className="space-y-3">
        {services.map((service: string, index: number) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.4, delay: delay + index * 0.05 }}
            className="flex items-start gap-3 text-foreground"
          >
            <span className="mt-1.5 h-2 w-2 rounded-full bg-gradient-primary flex-shrink-0" />
            <span className="text-sm md:text-base">{service}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="services" className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive ENT care with state-of-the-art diagnostic procedures and surgical expertise
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <ServiceCard
            title="Diagnostic Procedures"
            services={diagnosticServices}
            icon={Stethoscope}
            delay={0.2}
          />
          <ServiceCard
            title="Surgical Procedures"
            services={surgicalServices}
            icon={Hospital}
            delay={0.4}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="glass-effect rounded-3xl p-8 max-w-2xl mx-auto hover:scale-105 transition-transform duration-500"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 rounded-2xl bg-gradient-primary">
              <HeartPulse className="h-8 w-8 text-primary-foreground" />
            </div>
            <h3 className="text-2xl font-bold text-primary">Additional Facilities</h3>
          </div>
          <ul className="space-y-3">
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.4, delay: 0.7 }}
              className="flex items-start gap-3 text-foreground"
            >
              <span className="mt-1.5 h-2 w-2 rounded-full bg-gradient-primary flex-shrink-0" />
              <span className="text-sm md:text-base">Gynaecologist available</span>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.4, delay: 0.75 }}
              className="flex items-start gap-3 text-foreground"
            >
              <span className="mt-1.5 h-2 w-2 rounded-full bg-gradient-primary flex-shrink-0" />
              <span className="text-sm md:text-base">Paediatrician available</span>
            </motion.li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;

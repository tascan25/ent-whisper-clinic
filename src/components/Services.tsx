import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Stethoscope, Hospital, HeartPulse, CheckCircle2 } from "lucide-react";

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

const ServiceCard = ({ title, services, icon: Icon, delay, gradient }: any) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay }}
      className="glass-effect rounded-2xl md:rounded-3xl p-6 md:p-10 hover:scale-[1.02] transition-all duration-500 group"
      whileHover={{ boxShadow: "var(--shadow-xl)" }}
    >
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6 md:mb-8">
        <motion.div 
          className={`p-4 md:p-5 rounded-2xl ${gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <Icon className="h-8 w-8 md:h-10 md:w-10 text-primary-foreground" />
        </motion.div>
        <h3 className="text-2xl md:text-3xl font-bold text-primary">{title}</h3>
      </div>
      <ul className="space-y-3 md:space-y-4">
        {services.map((service: string, index: number) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.4, delay: delay + index * 0.05 }}
            className="flex items-start gap-3 text-foreground group/item hover:translate-x-2 transition-transform duration-300"
          >
            <CheckCircle2 className="mt-0.5 h-5 w-5 md:h-6 md:w-6 text-primary flex-shrink-0 group-hover/item:text-secondary transition-colors" />
            <span className="text-sm md:text-base leading-relaxed">{service}</span>
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
    <section id="services" className="py-16 md:py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      {/* Floating elements */}
      <motion.div
        className="absolute top-20 right-10 w-64 h-64 rounded-full bg-secondary/10 blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <div className="container mx-auto max-w-7xl relative z-10">
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
            <Stethoscope className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">Comprehensive Care</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 gradient-text px-4">
            Our Services
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-4 leading-relaxed">
            Comprehensive ENT care with state-of-the-art diagnostic procedures and surgical expertise tailored to your needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
          <ServiceCard
            title="Diagnostic Procedures"
            services={diagnosticServices}
            icon={Stethoscope}
            delay={0.2}
            gradient="bg-gradient-primary"
          />
          <ServiceCard
            title="Surgical Procedures"
            services={surgicalServices}
            icon={Hospital}
            delay={0.4}
            gradient="bg-gradient-accent"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="glass-effect rounded-2xl md:rounded-3xl p-6 md:p-12 max-w-3xl mx-auto hover:scale-[1.02] transition-all duration-500 group"
          whileHover={{ boxShadow: "var(--shadow-xl)" }}
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6 md:mb-8">
            <motion.div 
              className="p-4 md:p-5 rounded-2xl bg-gradient-accent shadow-lg group-hover:scale-110 transition-transform duration-300"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <HeartPulse className="h-8 w-8 md:h-10 md:w-10 text-primary-foreground" />
            </motion.div>
            <h3 className="text-2xl md:text-3xl font-bold text-primary">Additional Facilities</h3>
          </div>
          <ul className="space-y-4">
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.4, delay: 0.7 }}
              className="flex items-start gap-3 text-foreground hover:translate-x-2 transition-transform duration-300"
            >
              <CheckCircle2 className="mt-0.5 h-5 w-5 md:h-6 md:w-6 text-secondary flex-shrink-0" />
              <span className="text-sm md:text-base leading-relaxed">Gynaecologist available</span>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.4, delay: 0.75 }}
              className="flex items-start gap-3 text-foreground hover:translate-x-2 transition-transform duration-300"
            >
              <CheckCircle2 className="mt-0.5 h-5 w-5 md:h-6 md:w-6 text-secondary flex-shrink-0" />
              <span className="text-sm md:text-base leading-relaxed">Paediatrician available</span>
            </motion.li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { 
  Calendar, 
  Users, 
  CheckCircle2, 
  Star, 
  MessageCircle, 
  MapPin, 
  Phone, 
  ChevronRight, 
  ChevronLeft,
  X,
  Clock,
  ShieldCheck,
  Coffee,
  Wifi,
  Tv,
  AirVent,
  Car,
  Waves,
  Utensils,
  HelpCircle,
  Sparkles,
  BedDouble,
  Heart
} from 'lucide-react';

import oneImg from './one.jpg';
import twoImg from './two.jpg';
import threeImg from './three.jpg';
import fourImg from './four.jpg';
import sevenImg from './seven.jpg';
import nineImg from './nine.jpg';
import tenImg from './ten.jpg';
import elevenImg from './eleven.jpg';

// --- Constants & Types ---

const HOTEL_NAME = "Hotel L’Arc En Ciel";
const WHATSAPP_NUMBER = "221774459061";

const HERO_IMAGE = oneImg;

const POOL_IMAGES = [
  {
    url: threeImg,
    label: "Le Grand Bassin Bleu",
    description: "Une splendide eau turquoise s'harmonisant avec le ciel azur sénégalais, offrant une vue dégagée pour des instants suspendus en banlieue dakaroise.",
    attributes: ["Vue panoramique", "Eau tempérée", "Transats ombragés"]
  },
  {
    url: fourImg,
    label: "Oasis de Fraîcheur",
    description: "Profitez d'une baignade haut de gamme ou prélassez-vous au bord de l'eau avec une superbe perspective sur la tranquillité de notre domaine.",
    attributes: ["Bain de soleil", "Serviettes moelleuses", "Atmosphère d'évasion"]
  }
];

const INTERIOR_IMAGES = [
  {
    url: nineImg,
    label: "Le Hall d'Accueil",
    description: "Un espace de réception haut de gamme mêlant confort et style sénégalais.",
    attributes: ["Entièrement climatisé", "Service d'accueil 24h/24", "Salon de réception"]
  },
  {
    url: sevenImg,
    label: "Finesse des Détails",
    description: "Chaque recoin exprime le calme, la douceur de vivre et la pureté esthétique.",
    attributes: ["Luminosité chaleureuse", "Art sénégalais", "Propreté irréprochable"]
  },
  {
    url: twoImg,
    label: "Chemins Intérieurs",
    description: "Des allées apaisantes et arborées qui mènent directement à vos suites réconfortantes.",
    attributes: ["Éclairage tamisé", "Calme absolu", "Fleurs sauvages"]
  }
];

const ROOM_IMAGES = [
  {
    url: tenImg,
    label: "Chambre Double Deluxe",
    description: "Un espace luxueusement aménagé avec salon et deux lits doubles pour des moments d'exception.",
    attributes: ["Lit Queen Size", "Climatisation douce", "Smart TV & Wi-Fi", "Produits d'accueil offerts"]
  },
  {
    url: elevenImg,
    label: "Suite Royale Familiale",
    description: "Climatisation moderne, lit de haute qualité et literie soyeuse pour un sommeil restaurateur.",
    attributes: ["Lits Double Confort", "Espace salon séparé", "Vue panoramique", "Minibar équipé"]
  }
];

// Fallback index-based images helper to make sure we do not break any other components
const IMAGES = [
  { url: HERO_IMAGE, label: "Vue Drone Piscine" },
  ...POOL_IMAGES,
  ...INTERIOR_IMAGES,
  ...ROOM_IMAGES
];

const TESTIMONIALS = [
  {
    name: "Moussa D.",
    rating: 5,
    text: "Personnel très accueillant, séjour agréable."
  },
  {
    name: "Fatou S.",
    rating: 4,
    text: "Très bon rapport qualité-prix."
  },
  {
    name: "Jean-Pierre L.",
    rating: 5,
    text: "Endroit calme et reposant."
  }
];

// --- Components ---

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 px-4 py-3 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <div className="bg-[#003580] text-white p-1 rounded font-bold text-xl uppercase">Arc</div>
        <span className="font-bold text-[#003580] text-lg hidden sm:block">{HOTEL_NAME}</span>
      </div>
      <div className="flex items-center gap-4">
        <a href={`tel:${WHATSAPP_NUMBER}`} className="text-gray-600 hover:text-[#003580] transition-colors">
          <Phone size={20} />
        </a>
        <button 
          onClick={() => document.getElementById('booking-form')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-[#003580] text-white px-4 py-2 rounded font-semibold text-sm hover:bg-[#002b66] transition-colors"
        >
          Réserver
        </button>
      </div>
    </nav>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);

  const scrollToBooking = () => {
    document.getElementById('booking-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
      <motion.div 
        className="absolute inset-0 bg-cover bg-center z-0 scale-110" 
        style={{ 
          backgroundImage: `url(${HERO_IMAGE})`,
          y 
        }}
      >
        <div className="absolute inset-0 bg-black/40 z-10" />
      </motion.div>
      
      <div className="relative z-20 text-center px-4 max-w-4xl">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight"
        >
          Votre séjour parfait près du Lac Rose
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl text-white/90 mb-8 font-medium"
        >
          Chambres confortables • Réservation simple • Séjour paisible
        </motion.p>
        <motion.button 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          onClick={scrollToBooking}
          className="bg-[#003580] text-white px-8 py-4 rounded-md font-bold text-lg shadow-lg hover:bg-[#002b66] transition-all transform hover:scale-105"
        >
          Réserver maintenant
        </motion.button>
      </div>
    </section>
  );
};

const BookingBar = () => {
  return (
    <div className="relative z-30 -mt-12 px-4 max-w-6xl mx-auto">
      <div className="bg-[#febb02] p-1 rounded-lg shadow-xl">
        <div className="bg-white rounded-md p-2 flex flex-col md:flex-row gap-2">
          <div className="flex-1 border border-gray-200 rounded p-2 flex items-center gap-3">
            <Calendar className="text-gray-400" size={20} />
            <div className="flex flex-col">
              <span className="text-[10px] uppercase font-bold text-gray-500">Arrivée</span>
              <input type="date" className="text-sm font-semibold outline-none w-full" />
            </div>
          </div>
          <div className="flex-1 border border-gray-200 rounded p-2 flex items-center gap-3">
            <Calendar className="text-gray-400" size={20} />
            <div className="flex flex-col">
              <span className="text-[10px] uppercase font-bold text-gray-500">Départ</span>
              <input type="date" className="text-sm font-semibold outline-none w-full" />
            </div>
          </div>
          <div className="flex-1 border border-gray-200 rounded p-2 flex items-center gap-3">
            <Users className="text-gray-400" size={20} />
            <div className="flex flex-col">
              <span className="text-[10px] uppercase font-bold text-gray-500">Personnes</span>
              <select className="text-sm font-semibold outline-none bg-transparent w-full">
                <option>1 adulte</option>
                <option defaultValue="2">2 adultes</option>
                <option>3 adultes</option>
                <option>4 adultes</option>
                <option>Famille (2+2)</option>
              </select>
            </div>
          </div>
          <button 
            onClick={() => document.getElementById('booking-form')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-[#003580] text-white px-8 py-3 rounded font-bold hover:bg-[#002b66] transition-colors whitespace-nowrap"
          >
            Voir disponibilité
          </button>
        </div>
      </div>
    </div>
  );
};

const ProblemSection = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
          Vous cherchez un hôtel calme, accessible et confortable près de Dakar ?
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          Beaucoup d’endroits sont chers, bruyants ou difficiles à réserver. 
          À l'Hôtel L'Arc En Ciel, nous avons conçu un espace où la simplicité rencontre le confort.
        </p>
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    {
      title: "Chambres confortables",
      desc: "Dormez dans un espace calme",
      icon: <ShieldCheck className="text-[#003580]" size={32} />
    },
    {
      title: "Proche Lac Rose",
      desc: "Accès facile aux attractions",
      icon: <MapPin className="text-[#003580]" size={32} />
    },
    {
      title: "Cadre paisible",
      desc: "Idéal pour se détendre",
      icon: <Coffee className="text-[#003580]" size={32} />
    },
    {
      title: "Réservation simple",
      desc: "Gain de temps",
      icon: <Clock className="text-[#003580]" size={32} />
    }
  ];

  return (
    <section className="py-20 px-4 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((f, i) => (
          <div key={i} className="flex flex-col items-center text-center p-6 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="mb-4 p-3 bg-blue-50 rounded-full">{f.icon}</div>
            <h3 className="font-bold text-lg text-gray-900 mb-2">{f.title}</h3>
            <p className="text-gray-500 text-sm">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const Gallery = () => {
  const [activeTab, setActiveTab] = useState<'pool' | 'interior' | 'rooms'>('pool');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Determine current active list of images based on tab
  const getActiveImages = () => {
    switch (activeTab) {
      case 'pool':
        return POOL_IMAGES;
      case 'interior':
        return INTERIOR_IMAGES;
      case 'rooms':
        return ROOM_IMAGES;
      default:
        return POOL_IMAGES;
    }
  };

  const activeImages = getActiveImages();

  // Keyboard navigation for Lightbox
  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'Escape') {
        setLightboxIndex(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, activeTab]);

  const handleNext = () => {
    setLightboxIndex((prev) => {
      if (prev === null) return null;
      return (prev + 1) % activeImages.length;
    });
  };

  const handlePrev = () => {
    setLightboxIndex((prev) => {
      if (prev === null) return null;
      return (prev - 1 + activeImages.length) % activeImages.length;
    });
  };

  return (
    <section className="py-24 bg-white px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Header section with refined typography, descriptive labels and smooth visual anchors */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#003580] text-xs font-bold uppercase tracking-wider mb-4"
          >
            <Sparkles size={14} />
            Découvrez notre domaine
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight"
          >
            Splendeurs de L’Arc En Ciel
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-500 mt-4 leading-relaxed text-base md:text-lg"
          >
            Laissez-vous charmer par notre domaine d’exception à Rufisque. Naviguez à travers nos espaces de rêve soigneusement aménagés.
          </motion.p>
        </div>

        {/* Tab switchers with sliding layout background effect & counter index badges */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex bg-gray-100 p-1.5 rounded-2xl border border-gray-200 shadow-inner max-w-2xl w-full flex-wrap sm:flex-nowrap">
            {[
              { id: 'pool', label: 'La Piscine', icon: <Waves size={16} />, count: POOL_IMAGES.length },
              { id: 'interior', label: 'Intérieurs & Salons', icon: <Sparkles size={16} />, count: INTERIOR_IMAGES.length },
              { id: 'rooms', label: 'Chambres & Suites', icon: <BedDouble size={16} />, count: ROOM_IMAGES.length }
            ].map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id as any);
                    setLightboxIndex(null);
                  }}
                  className="relative flex-1 py-3 px-4 rounded-xl font-bold text-sm tracking-wide transition-colors flex items-center justify-center gap-2 cursor-pointer outline-none select-none border-0 bg-transparent"
                  style={{ WebkitTapHighlightColor: 'transparent' }}
                  id={`tab-${tab.id}`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="active-gallery-tab"
                      className="absolute inset-0 bg-white rounded-xl shadow-md border border-gray-100"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className={`relative z-10 flex items-center gap-2 ${isActive ? 'text-[#003580]' : 'text-gray-500 hover:text-gray-800'}`}>
                    {tab.icon}
                    <span>{tab.label}</span>
                    <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${isActive ? 'bg-blue-100 text-[#003580]' : 'bg-gray-200 text-gray-500'}`}>
                      {tab.count}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Tab Informational Sub-text */}
        <div className="text-center mb-10 -mt-6">
          <AnimatePresence mode="wait">
            <motion.p
              key={activeTab}
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 5 }}
              className="text-sm font-semibold text-[#003580] tracking-wide"
            >
              {activeTab === 'pool' && "💦 Oasis de fraîcheur sous le soleil sénégalais — Idéal pour vos moments suspendus."}
              {activeTab === 'interior' && "✨ Authenticité et hospitalité (Teranga) au cœur de nos salons de réception."}
              {activeTab === 'rooms' && "🛌 Suites climatisées d’un calme d’exception équipées de literie royale."}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Dynamic Galleries Layout */}
        <div className="relative min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.35 }}
              className="w-full"
            >
              {activeTab === 'pool' && (
                /* Pool Gallery Layout: Gorgeous asymmetric premium grid with balanced spacing */
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[550px]" id="pool-gallery-grid">
                  <div 
                    className="md:col-span-7 relative rounded-3xl overflow-hidden cursor-pointer group h-[300px] md:h-full border border-gray-100 shadow-sm"
                    onClick={() => setLightboxIndex(0)}
                  >
                    <img 
                      src={POOL_IMAGES[0].url} 
                      alt={POOL_IMAGES[0].label}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10 opacity-90 group-hover:opacity-100 transition-all duration-300" />
                    <div className="absolute bottom-6 left-6 right-6 text-white text-left">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="bg-[#febb02] text-gray-900 text-[10px] font-black uppercase px-2 py-0.5 rounded-md">Piscine • Rêve</span>
                      </div>
                      <h3 className="text-xl md:text-3xl font-black leading-tight tracking-tight">{POOL_IMAGES[0].label}</h3>
                      <p className="text-gray-200 text-xs md:text-sm mt-1 max-w-xl font-medium opacity-90 leading-relaxed">{POOL_IMAGES[0].description}</p>
                    </div>
                  </div>

                  <div className="md:col-span-5 flex flex-col gap-6 h-full">
                    {POOL_IMAGES.slice(1).map((item, i) => (
                      <div 
                        key={i}
                        className="flex-1 relative rounded-3xl overflow-hidden cursor-pointer group h-[220px] md:h-auto border border-gray-100 shadow-sm"
                        onClick={() => setLightboxIndex(i + 1)}
                      >
                        <img 
                          src={item.url} 
                          alt={item.label}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10 opacity-90 group-hover:opacity-100 transition-all duration-300" />
                        <div className="absolute bottom-5 left-5 right-5 text-white text-left">
                          <h4 className="text-lg font-bold leading-tight tracking-tight">{item.label}</h4>
                          <p className="text-gray-200 text-xs mt-0.5 opacity-90 font-medium leading-normal">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'interior' && (
                /* Interior Gallery Layout: 3x2 Grid with high responsive design density */
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" id="interior-gallery-grid">
                  {INTERIOR_IMAGES.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05 }}
                      viewport={{ once: true }}
                      className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 group cursor-pointer flex flex-col hover:shadow-lg transition-all duration-300"
                      onClick={() => setLightboxIndex(i)}
                    >
                      <div className="relative h-[240px] overflow-hidden">
                        <img 
                          src={item.url} 
                          alt={item.label}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-all duration-300" />
                      </div>
                      <div className="p-5 flex-1 flex flex-col justify-between text-left border-t border-gray-50">
                        <div>
                          <h3 className="font-bold text-gray-900 text-lg group-hover:text-[#003580] transition-colors">{item.label}</h3>
                          <p className="text-gray-500 text-xs mt-1.5 leading-relaxed font-medium">{item.description}</p>
                        </div>
                        <div className="flex flex-wrap gap-1.5 mt-4">
                          {item.attributes.map((attr, ai) => (
                            <span key={ai} className="bg-gray-100 text-gray-600 text-[10px] px-2 py-0.5 rounded-full font-bold">
                              {attr}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}

              {activeTab === 'rooms' && (
                /* Rooms Gallery Layout: Elegant side-by-side luxurious cards with booking buttons */
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8" id="rooms-gallery-grid">
                  {ROOM_IMAGES.map((room, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: i === 0 ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-150 flex flex-col group hover:shadow-xl transition-all duration-300"
                    >
                      <div 
                        className="relative h-[300px] md:h-[350px] overflow-hidden cursor-pointer"
                        onClick={() => setLightboxIndex(i)}
                      >
                        <img 
                          src={room.url} 
                          alt={room.label}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent" />
                        <div className="absolute bottom-5 left-5 text-white text-left">
                          <span className="bg-[#febb02] text-gray-900 text-[10px] font-black uppercase px-2.5 py-1 rounded-md mb-2 inline-block">
                            {i === 0 ? "Premium Confort" : "Le summum de la suite"}
                          </span>
                          <h3 className="text-2xl font-black text-white leading-tight tracking-tight">{room.label}</h3>
                        </div>
                      </div>
                      <div className="p-6 md:p-8 flex-1 flex flex-col justify-between text-left">
                        <div className="space-y-4">
                          <p className="text-gray-600 font-medium leading-relaxed text-sm md:text-base">{room.description}</p>
                          <div className="grid grid-cols-2 gap-3 pt-2">
                            {room.attributes.map((attr, ai) => (
                              <div key={ai} className="flex items-center gap-2 text-xs font-semibold text-gray-700">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#003580]" />
                                <span>{attr}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                          <div>
                            <span className="text-xs font-bold uppercase text-gray-400 block tracking-widest">Tarif Privilège</span>
                            <span className="text-2xl font-black text-[#003580]">{i === 0 ? "À partir de 35 000" : "À partir de 50 000"} <span className="text-xs font-bold text-gray-500">FCFA / nuit</span></span>
                          </div>
                          <button
                            onClick={() => document.getElementById('booking-form')?.scrollIntoView({ behavior: 'smooth' })}
                            className="bg-[#003580] text-white hover:bg-[#002b66] font-bold text-sm tracking-wide px-6 py-3 rounded-xl transition-all shadow-md active:scale-95 duration-200 cursor-pointer border-0"
                          >
                            Réserver cette chambre
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>

      {/* Advanced Premium Full-Screen Immersive Lightbox with Loop Control & Keyboard Chevrons */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[120] bg-black/98 flex flex-col justify-between p-4 md:p-6"
            onClick={() => setLightboxIndex(null)}
          >
            {/* Top Bar inside Lightbox */}
            <div className="w-full flex items-center justify-between text-white border-b border-white/10 pb-4 relative z-10" onClick={(e) => e.stopPropagation()}>
              <div className="flex flex-col items-start text-left">
                <span className="text-[#febb02] text-[10px] font-black uppercase tracking-wider">
                  {activeTab === 'pool' && "Galerie Piscine"}
                  {activeTab === 'interior' && "Galerie Espaces Communs & Décorations"}
                  {activeTab === 'rooms' && "Galerie Chambres & Suites Principales"}
                </span>
                <h4 className="text-lg md:text-xl font-bold tracking-tight text-white/95 mt-0.5">{activeImages[lightboxIndex]?.label}</h4>
              </div>
              <div className="flex items-center gap-4">
                <span className="font-mono text-sm text-gray-400 font-semibold bg-white/5 py-1 px-3 rounded-full border border-white/5">
                  {lightboxIndex + 1} / {activeImages.length}
                </span>
                <button 
                  onClick={() => setLightboxIndex(null)}
                  className="text-white p-2 md:p-3 hover:bg-white/10 rounded-full transition-colors cursor-pointer outline-none border-0 bg-transparent"
                >
                  <X size={24} />
                </button>
              </div>
            </div>

            {/* Middle Image & Navigation container */}
            <div className="flex-1 flex items-center justify-between w-full relative py-6" onClick={(e) => e.stopPropagation()}>
              
              {/* Previous Image Action Trigger */}
              <button 
                onClick={handlePrev}
                className="absolute left-2 md:left-6 z-25 text-white/80 hover:text-white p-3 md:p-4 bg-white/5 hover:bg-white/15 rounded-full border border-white/10 backdrop-blur-md transition-all cursor-pointer focus:ring-2 focus:ring-[#febb02] outline-none select-none active:scale-90"
                aria-label="Image précédente"
              >
                <ChevronLeft size={28} />
              </button>

              {/* Main Content Render Frame with Scaling Transitions */}
              <div className="w-full flex items-center justify-center pointer-events-none px-12">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={lightboxIndex}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.25 }}
                    className="max-w-4xl max-h-[70vh] flex items-center justify-center relative shadow-2xl"
                  >
                    <img 
                      src={activeImages[lightboxIndex]?.url} 
                      alt={activeImages[lightboxIndex]?.label}
                      className="max-w-full max-h-[70vh] object-contain rounded-2xl border border-white/5 select-none"
                      referrerPolicy="no-referrer"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Next Image Action Trigger */}
              <button 
                onClick={handleNext}
                className="absolute right-2 md:right-6 z-25 text-white/80 hover:text-white p-3 md:p-4 bg-white/5 hover:bg-white/15 rounded-full border border-white/10 backdrop-blur-md transition-all cursor-pointer focus:ring-2 focus:ring-[#febb02] outline-none select-none active:scale-90"
                aria-label="Image suivante"
              >
                <ChevronRight size={28} />
              </button>
            </div>

            {/* Bottom Bar inside Lightbox with Descriptions */}
            <div className="w-full flex justify-center text-center pb-4 pt-2 border-t border-white/5" onClick={(e) => e.stopPropagation()}>
              <p className="text-gray-400 text-xs md:text-sm max-w-2xl font-medium leading-relaxed px-4">
                {activeImages[lightboxIndex]?.description}
              </p>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

const SocialProof = () => {
  return (
    <section className="py-20 bg-gray-50 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Ce que disent nos clients</h2>
            <div className="flex items-center gap-2">
              <div className="flex text-yellow-500">
                {[...Array(4)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
                <Star size={20} className="text-yellow-500" />
              </div>
              <span className="font-bold text-gray-900">3.5/5</span>
              <span className="text-gray-500">• +50 clients satisfaits</span>
            </div>
          </div>
          <div className="bg-white px-6 py-4 rounded-lg shadow-sm border border-gray-100 flex items-center gap-4">
            <div className="bg-green-100 text-green-700 p-2 rounded-full">
              <ShieldCheck size={24} />
            </div>
            <div>
              <p className="font-bold text-gray-900">Établissement vérifié</p>
              <p className="text-xs text-gray-500">Réservation 100% sécurisée</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex text-yellow-500 mb-4">
                {[...Array(t.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="text-gray-700 italic mb-4">“{t.text}”</p>
              <p className="font-bold text-gray-900 text-sm">— {t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Benefits = () => {
  const benefits = [
    "Détendez-vous après une longue journée",
    "Profitez d’un séjour sans stress",
    "Réservez en quelques secondes"
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((b, i) => (
            <div key={i} className="flex items-start gap-3">
              <div className="mt-1 bg-blue-100 text-[#003580] p-1 rounded-full shrink-0">
                <CheckCircle2 size={18} />
              </div>
              <p className="font-semibold text-gray-800">{b}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const DetailedAmenities = () => {
  const amenities = [
    { name: "Wi-Fi Gratuit", icon: <Wifi size={24} /> },
    { name: "Climatisation", icon: <AirVent size={24} /> },
    { name: "Télévision", icon: <Tv size={24} /> },
    { name: "Parking Sécurisé", icon: <Car size={24} /> },
    { name: "Piscine Extérieure", icon: <Waves size={24} /> },
    { name: "Espace Restauration", icon: <Utensils size={24} /> },
  ];

  return (
    <section className="py-16 bg-[#003580] text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Nos Équipements</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {amenities.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center gap-3 group"
            >
              <div className="p-4 bg-white/10 rounded-full group-hover:bg-white/20 transition-colors">
                {item.icon}
              </div>
              <span className="text-sm font-medium opacity-80">{item.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const RoomTypes = () => {
  const rooms = [
    { title: "Chambre Standard", detail: "Lit double, Wi-Fi, Clim", price: "À partir de 25k CFA" },
    { title: "Chambre Deluxe", detail: "Plus spacieuse, Vue piscine", price: "À partir de 35k CFA" },
    { title: "Chambre Familiale", detail: "2 Lits doubles, Espace salon", price: "À partir de 50k CFA" },
  ];

  return (
    <section className="py-20 px-4 bg-gray-50 border-t border-gray-100">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900">Nos Types de Chambres</h2>
        <p className="text-gray-500 mt-2">Choisissez le confort qui vous convient</p>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {rooms.map((room, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-[#003580] mb-2">{room.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{room.detail}</p>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-50">
              <span className="text-lg font-bold text-gray-900">{room.price}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const FAQ = () => {
  const faqs = [
    { q: "Quelles sont les heures de check-in et check-out ?", a: "Check-in à partir de 14h00, Check-out avant 12h00." },
    { q: "L'hôtel est-il proche du Lac Rose ?", a: "Oui, nous sommes à seulement 5-10 minutes en voiture du célèbre Lac Rose." },
    { q: "Le petit-déjeuner est-il inclus ?", a: "Le petit-déjeuner est disponible en option lors de votre réservation." },
    { q: "Comment se rendre à l'hôtel depuis Dakar ?", a: "Nous sommes situés à Rufisque, un accès rapide est possible via l'autoroute à péage." },
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center gap-3">
          <HelpCircle className="text-[#003580]" />
          Questions Fréquentes
        </h2>
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-gray-100 pb-6">
              <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const LocationSection = () => {
  return (
    <section className="py-20 px-4 bg-gray-50 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-center">
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Emplacement Idéal</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Situé à Rufisque, l'Hôtel L'Arc En Ciel est la base parfaite pour explorer la région de Dakar 
            et le magnifique Lac Rose. Profitez du calme de la banlieue tout en restant proche des points d'intérêt.
          </p>
          <div className="space-y-4 font-sans">
            <div className="flex items-center gap-4 text-gray-700">
              <div className="bg-white p-2 rounded-lg shadow-sm">
                <MapPin className="text-[#003580]" size={20} />
              </div>
              <span className="font-semibold text-sm">Rufisque, Sénégal</span>
            </div>
            <div className="flex items-center gap-4 text-gray-700">
              <div className="bg-white p-2 rounded-lg shadow-sm">
                <ChevronRight className="text-[#003580]" size={20} />
              </div>
              <span className="font-semibold text-sm">10 min du Lac Rose</span>
            </div>
            <div className="flex items-center gap-4 text-gray-700">
              <div className="bg-white p-2 rounded-lg shadow-sm">
                <ChevronRight className="text-[#003580]" size={20} />
              </div>
              <span className="font-semibold text-sm">30 min de Dakar (par autoroute)</span>
            </div>
          </div>
        </div>
        <div className="flex-1 w-full h-[400px] bg-white rounded-3xl p-2 shadow-lg border border-gray-150 relative overflow-hidden group">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3855.9189871147047!2d-17.231085!3d14.802181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec1bc1fb99fb0af3%3A0xe54e17de57ef7cf8!2sH%C3%B4tel%20L&#39;Arc-en-Ciel!5e0!3m2!1sfr!2s!4v1716641500000!5m2!1sfr!2s" 
            className="w-full h-full rounded-2xl border-0" 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Emplacement Hôtel L’Arc En Ciel"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    arrival: '',
    departure: '',
    guests: '2'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `Bonjour, je souhaite faire une réservation:

Nom: ${formData.name}
Téléphone: ${formData.phone}
Arrivée: ${formData.arrival}
Départ: ${formData.departure}
Personnes: ${formData.guests}`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, '_blank');
  };

  return (
    <section id="booking-form" className="py-20 px-4 bg-gray-50">
      <div className="max-w-xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          <div className="bg-[#003580] p-6 text-white text-center">
            <h2 className="text-2xl font-bold">Réservez votre chambre</h2>
            <p className="text-white/80 text-sm mt-1">Confirmation instantanée via WhatsApp</p>
          </div>
          <form onSubmit={handleSubmit} className="p-8 space-y-4">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">Nom complet</label>
              <input 
                required
                type="text" 
                placeholder="Votre nom"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#003580] focus:border-transparent outline-none transition-all"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">Téléphone</label>
              <input 
                required
                type="tel" 
                placeholder="Ex: +221 ..."
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#003580] focus:border-transparent outline-none transition-all"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Date d'arrivée</label>
                <input 
                  required
                  type="date" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#003580] focus:border-transparent outline-none transition-all"
                  value={formData.arrival}
                  onChange={(e) => setFormData({...formData, arrival: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Date de départ</label>
                <input 
                  required
                  type="date" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#003580] focus:border-transparent outline-none transition-all"
                  value={formData.departure}
                  onChange={(e) => setFormData({...formData, departure: e.target.value})}
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">Nombre de personnes</label>
              <select 
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#003580] focus:border-transparent outline-none transition-all bg-white"
                value={formData.guests}
                onChange={(e) => setFormData({...formData, guests: e.target.value})}
              >
                <option value="1">1 personne</option>
                <option value="2">2 personnes</option>
                <option value="3">3 personnes</option>
                <option value="4">4 personnes</option>
                <option value="Famille">Famille</option>
              </select>
            </div>
            <button 
              type="submit"
              className="w-full bg-[#003580] text-white py-4 rounded-lg font-bold text-lg hover:bg-[#002b66] transition-all shadow-lg flex items-center justify-center gap-2"
            >
              Confirmer réservation
            </button>
            <p className="text-center text-xs text-gray-400 mt-4">
              En cliquant, vous serez redirigé vers WhatsApp pour finaliser.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#003580] text-white py-12 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h3 className="text-xl font-bold mb-4">{HOTEL_NAME}</h3>
          <p className="text-white/70 text-sm leading-relaxed">
            Un séjour paisible près du Lac Rose avec piscine, chambres confortables et service chaleureux à prix accessible.
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-4 uppercase text-xs tracking-widest text-white/50">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <MapPin size={16} className="text-blue-300" />
              <span>Rufisque, Sénégal (Près du Lac Rose)</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} className="text-blue-300" />
              <span>+221 77 445 90 61</span>
            </li>
            <li className="flex items-center gap-2">
              <MessageCircle size={16} className="text-blue-300" />
              <span>WhatsApp disponible 24/7</span>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4 uppercase text-xs tracking-widest text-white/50">Navigation</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-blue-300 transition-colors">Accueil</a></li>
            <li><a href="#gallery" className="hover:text-blue-300 transition-colors">Galerie</a></li>
            <li><a href="#booking-form" className="hover:text-blue-300 transition-colors">Réservation</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-white/10 text-center text-white/40 text-xs">
        © {new Date().getFullYear()} {HOTEL_NAME}. Tous droits réservés.
      </div>
    </footer>
  );
};

const FloatingWhatsApp = () => {
  return (
    <a 
      href={`https://wa.me/${WHATSAPP_NUMBER}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-24 right-6 z-[60] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center gap-2 group"
    >
      <MessageCircle size={28} />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap font-bold">
        Chattez avec nous
      </span>
    </a>
  );
};

const StickyMobileCTA = () => {
  const scrollToBooking = () => {
    document.getElementById('booking-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 p-4 shadow-[0_-4px_10px_rgba(0,0,0,0.05)]">
      <button 
        onClick={scrollToBooking}
        className="w-full bg-[#003580] text-white py-3 rounded-lg font-bold text-lg shadow-lg active:scale-95 transition-transform"
      >
        Réserver maintenant
      </button>
    </div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-blue-100 selection:text-[#003580]">
      <Navbar />
      <main>
        <Hero />
        <BookingBar />
        <ProblemSection />
        <Features />
        <DetailedAmenities />
        <RoomTypes />
        <div id="gallery">
          <Gallery />
        </div>
        <SocialProof />
        <LocationSection />
        <Benefits />
        <FAQ />
        <BookingForm />
        <div className="py-10 bg-white text-center">
          <button 
            onClick={() => document.getElementById('booking-form')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-[#003580] text-white px-10 py-4 rounded-md font-bold text-xl shadow-lg hover:bg-[#002b66] transition-all transform hover:scale-105"
          >
            Réserver maintenant
          </button>
        </div>
      </main>
      <Footer />
      <FloatingWhatsApp />
      <StickyMobileCTA />
    </div>
  );
}

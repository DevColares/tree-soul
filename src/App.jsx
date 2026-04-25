import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShoppingBag, 
  MessageCircle, 
  MapPin, 
  ChevronRight,
  Shirt,
  Sparkles
} from 'lucide-react';
import { 
  FaWhatsapp, 
  FaInstagram, 
  FaTiktok 
} from 'react-icons/fa6';
import BackgroundWaves from './components/BackgroundWaves';

const links = [
  /* {
    title: 'Nova Coleção 2026',
    icon: <Shirt className="w-5 h-5 text-amber-400" />,
    url: '#',
    description: 'Confira as tendências do momento'
  }, */
  {
    title: 'WhatsApp Vendas',
    icon: <MessageCircle className="w-5 h-5 text-green-400" />,
    url: 'https://wa.me/559294893021',
    description: 'Atendimento personalizado'
  },
  {
    title: 'Instagram Oficial',
    icon: <FaInstagram className="w-5 h-5 text-pink-400" />,
    url: 'https://www.instagram.com/lojaasoulauthentic/',
    description: 'Acompanhe nossos lançamentos'
  },
  {
    title: 'TikTok Oficial',
    icon: <FaTiktok className="w-5 h-5 text-gray-200" />,
    url: '#',
    description: 'Assista aos nossos vídeos'
  },
  {
    title: 'Nossa Loja Física',
    icon: <MapPin className="w-5 h-5 text-red-400" />,
    url: 'https://share.google/iS3foKvo8V8v3xLS3',
    description: 'Venha nos visitar'
  }
];

const socialLinks = [
  { icon: <FaInstagram className="w-6 h-6" />, url: 'https://www.instagram.com/lojaasoulauthentic/' },
  { icon: <FaWhatsapp className="w-6 h-6" />, url: 'https://wa.me/559294893021' },
  { icon: <FaTiktok className="w-6 h-6" />, url: '#' }
];

function App() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-start px-6 py-12 overflow-hidden">
      {/* Premium Background with 3D Waves */}
      <BackgroundWaves />

      {/* Header / Logo Section */}
      <motion.header 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex flex-col items-center mb-10 text-center z-10"
      >
        <div className="relative group">
          {/* Outer Glow */}
          <div className="absolute -inset-4 bg-gradient-to-r from-amber-600 to-yellow-400 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition duration-1000"></div>
          
          <img 
            src="/logo_Soul-_Authentic-Photoroom.png" 
            alt="Logo Loja Soul Authentic" 
            className="relative w-48 h-48 animate-float drop-shadow-[0_0_15px_rgba(197,160,33,0.3)] object-contain"
          />
        </div>
        
        <div className="mt-8">
          <h1 className="text-4xl md:text-5xl font-black tracking-tighter text-gold gold-glow uppercase italic text-center">
            LOJA SOUL AUTHENTIC
          </h1>
          <div className="flex items-center justify-center gap-2 mt-2">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <p className="text-gray-400 font-medium tracking-[0.3em] uppercase text-[10px]">
              Elegância & Autenticidade
            </p>
            <Sparkles className="w-4 h-4 text-amber-500" />
          </div>
        </div>
      </motion.header>

      {/* Main Links Area */}
      <main className="w-full max-w-md flex flex-col gap-5 z-10">
        {links.map((link, index) => (
          <motion.a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            className="glass glass-hover p-5 rounded-3xl flex items-center justify-between group"
          >
            <div className="flex items-center gap-5">
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-amber-500/50 transition-colors">
                {link.icon}
              </div>

              <div className="flex flex-col text-left">
                <span className="font-bold text-gray-100 text-lg tracking-tight">{link.title}</span>
                <span className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors">{link.description}</span>
              </div>
            </div>
            <ChevronRight className="w-6 h-6 text-gray-700 group-hover:text-amber-500 group-hover:translate-x-1 transition-all" />
          </motion.a>
        ))}
      </main>

      {/* Action CTA */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-8 flex items-center gap-2 bg-gradient-to-r from-amber-600 to-yellow-500 px-8 py-3 rounded-full font-bold text-black hover:scale-105 transition-transform shadow-[0_0_20px_rgba(197,160,33,0.4)] z-10"
      >
        <ShoppingBag className="w-5 h-5" />
        VER TODOS OS PRODUTOS
      </motion.button>

      {/* Footer Socials */}
      <motion.footer 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="mt-auto pt-12 flex gap-10 z-10"
      >
        {socialLinks.map((social, index) => (
          <a 
            key={index}
            href={social.url}
            className="text-gray-500 hover:text-amber-500 transition-all duration-300 transform hover:scale-125"
          >
            {social.icon}
          </a>
        ))}
      </motion.footer>

      {/* Bottom Text */}
      <p className="mt-8 text-[10px] text-gray-700 font-bold tracking-[0.5em] uppercase z-10">
        LOJA SOUL AUTHENTIC &copy; 2026
      </p>
    </div>
  );
}

export default App;

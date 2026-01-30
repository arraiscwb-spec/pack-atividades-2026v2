import { motion } from "framer-motion";
import { CTAButton } from "@/components/ui/cta-button";
import { CheckCircle2, Clock } from "lucide-react";
import { useState, useEffect } from "react";

function TopTimer() {
  const [time, setTime] = useState({ minutes: 9, seconds: 59 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => {
        if (prev.seconds === 0) {
          if (prev.minutes === 0) return prev;
          return { minutes: prev.minutes - 1, seconds: 59 };
        }
        return { ...prev, seconds: prev.seconds - 1 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] bg-red-600 text-white py-2 px-4 shadow-lg">
      <div className="container mx-auto flex items-center justify-between md:justify-center gap-4 md:gap-8">
        <div className="flex items-center gap-2 text-xs md:text-sm font-bold uppercase tracking-tighter">
          <Clock className="w-4 h-4 animate-pulse" />
          <span className="hidden sm:inline">Oferta Exclusiva:</span> 
          <span>Preço promocional expira em:</span>
        </div>
        <div className="font-mono font-bold text-lg md:text-xl bg-black/20 px-3 py-0.5 rounded border border-white/20">
          {String(time.minutes).padStart(2, '0')}:{String(time.seconds).padStart(2, '0')}
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.location.href = "https://www.ggcheckout.com/checkout/v5/sKTtmB1lTMiJhDlB7qWW"}
          className="h-8 md:h-10 px-4 text-[10px] md:text-sm font-bold bg-white text-red-600 rounded-full shadow-xl flex items-center justify-center whitespace-nowrap border-2 border-white hover:bg-slate-100 transition-colors"
        >
          APROVEITAR AGORA
        </motion.button>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative pt-28 pb-32 md:pt-40 md:pb-48 overflow-hidden bg-slate-900">
      <TopTimer />
      {/* Background Graphic */}
      <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop')] bg-cover bg-center" />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-slate-900/90 via-slate-900/80 to-slate-900" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-8">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 rounded-full px-4 py-1.5 text-blue-200 font-medium text-sm md:text-base backdrop-blur-sm"
          >
            <span className="flex h-2 w-2 rounded-full bg-blue-400 animate-pulse"></span>
            Atualizado para BNCC 2026
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1]"
          >
            Elimine o <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">Bloqueio Criativo</span> e Recupere seus <span className="underline decoration-orange-500">Finais de Semana</span>.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-2xl text-slate-300 max-w-3xl leading-relaxed"
          >
            Pare de gastar horas no Pinterest. Tenha em mãos o maior banco de atividades de Gêneros Textuais, <span className="text-white font-bold">100% editáveis</span> e alinhadas à BNCC 2026.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-12 w-full max-w-5xl rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-800 bg-slate-800"
          >
            {/* HTML Comment: Landing page hero banner from provided assets */}
            <img 
              src="https://13xdigital.com.br/wp-content/uploads/2026/01/banner-headline-pack.png" 
              alt="Preview do Pack de Atividades" 
              className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="w-full flex flex-col items-center gap-4 mt-8"
          >
            <div className="bg-red-600 text-white text-xs md:text-sm font-bold px-4 py-1 rounded-full animate-bounce uppercase tracking-tighter">
              Atenção: Promoção acaba hoje!
            </div>
            <CTAButton size="xl" pulse className="w-full md:w-auto shadow-orange-900/20">
              SIM! QUERO ACESSO IMEDIATO
            </CTAButton>
            <p className="text-sm text-slate-400 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              Acesso vitalício e envio imediato no seu e-mail
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

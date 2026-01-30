import { Section } from "@/components/ui/section";
import { CTAButton } from "@/components/ui/cta-button";
import { Clock, ShieldCheck, CreditCard } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function Countdown() {
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

  const today = new Date();
  const dateStr = today.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' });

  return (
    <div className="space-y-4">
      <div className="text-red-600 font-bold animate-pulse text-sm md:text-base">
        ESTA OFERTA EXPIRA EM DEFINITIVO HOJE: {dateStr}
      </div>
      <div className="flex gap-4 justify-center font-mono text-2xl md:text-4xl font-bold text-slate-800 my-6">
        <div className="bg-white px-4 py-2 rounded-lg shadow-sm border border-slate-200">
          {String(time.minutes).padStart(2, '0')} <span className="text-sm font-sans font-normal text-slate-400 block text-center mt-1">Minutos</span>
        </div>
        <div className="self-start py-2">:</div>
        <div className="bg-white px-4 py-2 rounded-lg shadow-sm border border-slate-200">
          {String(time.seconds).padStart(2, '0')} <span className="text-sm font-sans font-normal text-slate-400 block text-center mt-1">Segundos</span>
        </div>
      </div>
    </div>
  );
}

export function Pricing() {
  return (
    <Section background="blue" className="relative overflow-visible">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-0 w-64 h-64 bg-orange-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-3xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] relative border-4 border-white/20 backdrop-blur-sm">
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-orange-500 text-white px-6 py-2 rounded-full font-bold shadow-lg shadow-orange-500/30 whitespace-nowrap">
          OFERTA POR TEMPO LIMITADO
        </div>

        <div className="text-center space-y-6">
          <h2 className="text-slate-900 text-3xl md:text-4xl font-bold">
            Desconto Especial
          </h2>
          
          <div className="flex flex-col items-center">
            <span className="text-slate-400 text-lg line-through decoration-red-500 decoration-2">De R$ 197,00</span>
            <div className="text-5xl md:text-7xl font-extrabold text-slate-900 my-2 tracking-tight">
              <span className="text-2xl md:text-3xl font-medium text-slate-500 align-top mr-1">Apenas</span>
              19,90
            </div>
            <span className="text-orange-600 font-bold text-sm mb-4">Você economiza R$ 177,10 garantindo hoje!</span>
            <span className="text-green-600 font-semibold bg-green-50 px-3 py-1 rounded-full text-sm">Pagamento Único • Acesso Vitalício</span>
          </div>

          <div className="w-full bg-slate-100 rounded-full h-4 overflow-hidden relative">
            <motion.div 
              initial={{ width: "0%" }}
              whileInView={{ width: "98%" }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute left-0 top-0 h-full bg-gradient-to-r from-orange-500 to-red-500 rounded-full"
            />
          </div>
          <div className="flex justify-between text-xs font-bold text-slate-500 uppercase tracking-wide">
            <span>Vagas Restantes</span>
            <span className="text-red-500">98% Preenchido</span>
          </div>

          <Countdown />

          <CTAButton size="xl" pulse className="w-full">
            QUERO APROVEITAR AGORA
          </CTAButton>

          <div className="flex flex-wrap justify-center gap-4 text-xs text-slate-500 mt-6 pt-6 border-t border-slate-100">
            <div className="flex items-center gap-1">
              <ShieldCheck className="w-4 h-4 text-green-500" /> Compra Segura
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4 text-blue-500" /> Acesso Imediato
            </div>
            <div className="flex items-center gap-1">
              <CreditCard className="w-4 h-4 text-purple-500" /> 7 Dias de Garantia
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

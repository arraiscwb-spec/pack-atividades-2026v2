import { Section } from "@/components/ui/section";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-autoplay";
import { useEffect, useState } from "react";

const images = [
  "https://13xdigital.com.br/wp-content/uploads/2026/01/Exemplo-atividade-8.png",
  "https://13xdigital.com.br/wp-content/uploads/2026/01/Exemplo-atividade-7.png",
  "https://13xdigital.com.br/wp-content/uploads/2026/01/Exemplo-atividade-6.png",
  "https://13xdigital.com.br/wp-content/uploads/2026/01/Exemplo-atividade-5-scaled.png",
  "https://13xdigital.com.br/wp-content/uploads/2026/01/Exemplo-atividade-1-scaled.png",
  "https://13xdigital.com.br/wp-content/uploads/2026/01/Exemplo-atividade-2.png",
  "https://13xdigital.com.br/wp-content/uploads/2026/01/Exemplo-atividade-3-scaled.png",
  "https://13xdigital.com.br/wp-content/uploads/2026/01/Exemplo-atividade-4.png",
];

export function Gallery() {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: "start" }, [
    AutoScroll({ delay: 3000, stopOnInteraction: false }),
  ]);

  return (
    <Section className="bg-slate-900 text-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Espie o que vem dentro</h2>
        <p className="text-slate-400 text-lg">
          Exemplos reais das atividades em alta qualidade que você vai receber.
        </p>
      </div>

      <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
        <div className="flex gap-4 md:gap-8">
          {images.map((src, idx) => (
            <div key={idx} className="flex-[0_0_85%] md:flex-[0_0_40%] min-w-0 pl-4">
              <div className="rounded-2xl overflow-hidden border-4 border-slate-700 bg-white shadow-2xl h-[400px] md:h-[500px] relative group">
                {/* HTML Comment: Gallery item ${idx + 1} */}
                <img
                  src={src}
                  alt={`Atividade Exemplo ${idx + 1}`}
                  className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-8 text-slate-500 text-sm">
        ← Arraste para ver mais →
      </div>
    </Section>
  );
}

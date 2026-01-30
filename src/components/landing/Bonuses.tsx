import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";

const bonuses = [
  {
    title: "Kit Leitura e Interpretação",
    description: "Potencialize o aprendizado com material complementar focado em capacidade crítica.",
    price: "47,90",
    image: "https://13xdigital.com.br/wp-content/uploads/2023/12/9_-2-e1687900516487.png",
    label: "Presente #01",
  },
  {
    title: "E-book: Sala em Ordem",
    description: "Estratégias práticas de gestão de sala de aula para manter a ordem e harmonia.",
    price: "47,90",
    image: "https://13xdigital.com.br/wp-content/uploads/2023/12/10_-e1687900554642.png",
    label: "Presente #02",
  },
  {
    title: "20 Mapas Mentais",
    description: "Recursos visuais coloridos e didáticos para fixação e memorização de conteúdo.",
    price: "97,90",
    image: "https://13xdigital.com.br/wp-content/uploads/2026/01/bonus-3-mapas-mentais.png",
    label: "Presente #03",
  },
];

export function Bonuses() {
  return (
    <Section background="pattern">
      <div className="text-center mb-16">
        <Badge variant="outline" className="mb-4 text-orange-600 border-orange-200 bg-orange-50 px-4 py-1 text-sm">GRÁTIS HOJE</Badge>
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Bônus <span className="text-orange-600">Exclusivos</span>
        </h2>
        <p className="text-xl text-muted-foreground">
          Se garantir sua vaga agora, você leva gratuitamente:
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {bonuses.map((bonus, idx) => (
          <div key={idx} className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden flex flex-col">
            <div className="h-48 bg-slate-100 relative overflow-hidden group">
              {/* HTML Comment: Bonus Image ${idx + 1} */}
              <img 
                src={bonus.image} 
                alt={bonus.title} 
                className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-slate-900 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {bonus.label}
                </span>
              </div>
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-xl font-bold mb-3">{bonus.title}</h3>
              <p className="text-slate-600 text-sm mb-6 flex-1">{bonus.description}</p>
              
              <div className="border-t pt-4">
                <div className="text-slate-400 text-sm line-through">De R$ {bonus.price}</div>
                <div className="text-green-600 font-bold text-lg">POR: R$ 0,00</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

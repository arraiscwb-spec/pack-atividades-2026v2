import { Section } from "@/components/ui/section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "O QUE É O KIT DE ATIVIDADES DE GÊNEROS TEXTUAIS?",
    answer: "O Kit é um pacote completo de recursos pedagógicos projetado para auxiliar professores no ensino e desenvolvimento de habilidades de escrita e leitura, com mais de 850 atividades prontas.",
  },
  {
    question: "QUAIS BENEFÍCIOS VOU OBTER?",
    answer: "Você terá acesso a uma ampla variedade de atividades prontas, economizando horas de planejamento. Todo o material é alinhado à BNCC 2026 e 100% editável.",
  },
  {
    question: "COMO POSSO ACESSAR O MATERIAL?",
    answer: "O acesso é imediato e enviado para o seu e-mail assim que o pagamento for confirmado. Você recebe os arquivos em Word (editável) e PDF (para impressão).",
  },
  {
    question: "AS ATIVIDADES SÃO COMPATÍVEIS COM A BNCC 2026?",
    answer: "Sim, todas as atividades foram desenvolvidas rigorosamente seguindo as competências e habilidades da Base Nacional Comum Curricular (BNCC) vigente.",
  },
  {
    question: "EXISTEM BÔNUS INCLUSOS NA COMPRA?",
    answer: "Sim! Você recebe gratuitamente 3 bônus exclusivos: Kit de Leitura e Interpretação, E-book 'Sala em Ordem' e 20 Mapas Mentais de Fixação.",
  },
];

export function FAQ() {
  return (
    <Section>
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Dúvidas Frequentes</h2>
          <p className="text-muted-foreground">
            Tire suas dúvidas e faça sua compra com tranquilidade.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, idx) => (
            <AccordionItem 
              key={idx} 
              value={`item-${idx}`} 
              className="border border-slate-200 rounded-lg px-4 bg-white shadow-sm data-[state=open]:border-blue-200 data-[state=open]:ring-1 data-[state=open]:ring-blue-100 transition-all"
            >
              <AccordionTrigger className="text-left font-semibold text-slate-800 hover:text-blue-600 hover:no-underline py-4">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  );
}

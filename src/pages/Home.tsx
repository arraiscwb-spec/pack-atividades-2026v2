import { Hero } from "@/components/landing/Hero";
import { Features } from "@/components/landing/Features";
import { Audience } from "@/components/landing/Audience";
import { Gallery } from "@/components/landing/Gallery";
import { Bonuses } from "@/components/landing/Bonuses";
import { Pricing } from "@/components/landing/Pricing";
import { FAQ } from "@/components/landing/FAQ";
import { NewsletterModal } from "@/components/landing/NewsletterModal";
import { Section } from "@/components/ui/section";
import { Check, Shield, Lock, Headphones } from "lucide-react";
import { CTAButton } from "@/components/ui/cta-button";

export default function Home() {
  return (
    <div className="min-h-screen font-sans">
      <Hero />
      <Features />
      
      <Audience />

      {/* Categories / Content List */}
      <Section background="white">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-slate-900">
              O que você vai encontrar:
            </h2>
            <ul className="space-y-4">
              {[
                "Narrativas, Contos e Fábulas",
                "Textos Instrucionais e Receitas",
                "Cartas, E-mails e Convites",
                "Notícias e Reportagens",
                "Poemas, Rimas e Cordel",
                "Histórias em Quadrinhos e Tiras"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-lg text-slate-700 p-3 bg-slate-50 rounded-lg border border-slate-100">
                  <span className="bg-green-100 text-green-600 p-1 rounded-full">
                    <Check className="w-5 h-5" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 text-white shadow-2xl rotate-2">
            <h3 className="text-2xl font-bold mb-6">✅ E tem muito mais:</h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                "Adivinhas", "Parlendas", "Entrevistas", 
                "Anúncios", "Listas", "Diários"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 font-medium">
                  <div className="w-2 h-2 bg-white rounded-full" />
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-8 pt-8 border-t border-white/20">
              <p className="font-bold text-xl mb-4">Atualizado 2026</p>
              <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                "O material mais completo que já encontrei. Salvou meu planejamento!"
                <div className="mt-2 text-sm opacity-80">- Profa. Ana Clara</div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Gallery />
      
      {/* Customization Section */}
      <Section background="gray">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Adicione seu toque pessoal</h2>
          <p className="text-xl text-slate-600">
            Sabemos que cada turma é única. Por isso, criamos o único material que se adapta à sua didática.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
           <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-blue-500">
             <h3 className="text-xl font-bold mb-2">✏️ Edição Total (Word)</h3>
             <p className="text-slate-600">Receba os arquivos abertos. Mude o cabeçalho, insira o logotipo da sua escola ou adapte as questões.</p>
           </div>
           <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-green-500">
             <h3 className="text-xl font-bold mb-2">🛡️ Segurança Pedagógica</h3>
             <p className="text-slate-600">Ganhe confiança no planejamento. Todas as atividades seguem rigorosamente as competências da BNCC.</p>
           </div>
        </div>
      </Section>

      <Bonuses />

      {/* Guarantee Section */}
      <Section background="white" className="border-t border-slate-100">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 bg-slate-50 p-8 rounded-3xl border border-slate-200">
          <div className="flex-shrink-0">
            <div className="w-32 h-32 bg-slate-900 rounded-full flex items-center justify-center border-4 border-slate-200 shadow-xl">
               <Shield className="w-16 h-16 text-yellow-400" />
            </div>
          </div>
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2">Garantia Incondicional de 7 Dias</h3>
            <p className="text-slate-600 mb-4">
              O risco é todo nosso! Se você baixar o material e achar que não vale a pena, nós devolvemos <strong>100% do seu dinheiro</strong>. Sem perguntas, sem letras miúdas.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 text-xs font-bold text-slate-400 uppercase">
              <span className="flex items-center gap-1"><Lock className="w-4 h-4" /> Pagamento Blindado</span>
              <span className="flex items-center gap-1"><Headphones className="w-4 h-4" /> Suporte Dedicado</span>
            </div>
          </div>
        </div>
      </Section>

      <Pricing />
      <FAQ />

      <footer className="bg-slate-900 text-slate-400 py-12 text-center border-t border-slate-800">
        <div className="container mx-auto px-4">
          <p className="font-medium">COPYRIGHT © 2026 TODOS OS DIREITOS RESERVADOS</p>
          <div className="mt-4 flex justify-center gap-4 text-sm">
             <a href="#" className="hover:text-white">Termos de Uso</a>
             <a href="#" className="hover:text-white">Políticas de Privacidade</a>
             <a href="#" className="hover:text-white">Contato</a>
          </div>
          <div className="mt-8 pt-8 border-t border-slate-800 text-xs">
            Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook. 
            Depois que você sair do Facebook, a responsabilidade não é deles e sim do nosso site.
          </div>
        </div>
      </footer>
    </div>
  );
}

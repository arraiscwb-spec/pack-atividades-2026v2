import { Section } from "@/components/ui/section";
import { UserX, Star, Zap } from "lucide-react";

export function Audience() {
  return (
    <Section background="gray">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Você se sente assim?</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          O planejamento de aulas não precisa ser um fardo. Veja se você se identifica:
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
          <div className="bg-red-100 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
            <UserX className="text-red-600 w-6 h-6" />
          </div>
          <h3 className="text-2xl font-bold mb-3">A Professora Exausta</h3>
          <p className="text-slate-600">
            Você ama ensinar, mas sente que sua vida pessoal está sendo engolida pelo planejamento de aulas, sobrando pouco tempo para relaxar.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-full -mr-4 -mt-4" />
          <div className="bg-blue-100 w-12 h-12 rounded-xl flex items-center justify-center mb-6 relative z-10">
            <Star className="text-blue-600 w-6 h-6" />
          </div>
          <h3 className="text-2xl font-bold mb-3 relative z-10">A Professora Exigente</h3>
          <p className="text-slate-600 relative z-10">
            Você não aceita qualquer atividade da internet. Você quer materiais bonitos, pedagógicos e 100% alinhados à BNCC para seus alunos.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
          <div className="bg-purple-100 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
            <Zap className="text-purple-600 w-6 h-6" />
          </div>
          <h3 className="text-2xl font-bold mb-3">A Professora Prática</h3>
          <p className="text-slate-600">
            Você quer resolver o planejamento da semana em minutos, apenas baixando, imprimindo e aplicando, sem dor de cabeça.
          </p>
        </div>
      </div>

      <div className="bg-blue-900 rounded-3xl p-8 md:p-12 text-center text-white shadow-xl">
        <h3 className="text-2xl md:text-3xl font-bold mb-4">
          🎯 Resumindo
        </h3>
        <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
          Se você quer ensinar com excelência sem perder sua saúde mental, este Pack é para você.
        </p>
      </div>
    </Section>
  );
}

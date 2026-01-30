import { Zap, BookOpen, FolderOpen, BadgeCheck } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Zap,
    title: "Acesso Imediato",
    description: "Mais de 850 atividades prontas e editáveis disponíveis em segundos.",
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    icon: BookOpen,
    title: "Banco Completo",
    description: "Diversidade de gêneros textuais para você nunca ficar sem ideias.",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: FolderOpen,
    title: "Organização",
    description: "Tudo organizado por pastas. Simplifique seu arquivamento hoje.",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: BadgeCheck,
    title: "100% BNCC",
    description: "Atividades totalmente alinhadas às diretrizes de 2026.",
    color: "bg-purple-100 text-purple-600",
  },
];

export function Features() {
  return (
    <section className="py-16 bg-white relative -mt-20 z-20 rounded-t-[3rem]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-white border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className={`p-4 rounded-2xl ${feature.color} mb-4`}>
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { useMutation } from "@tanstack/react-query";
import { api, type LeadInput } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";

export function useCreateLead() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: LeadInput) => {
      const res = await fetch(api.leads.create.path, {
        method: api.leads.create.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      
      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || "Failed to submit");
      }
      
      return res.json();
    },
    onSuccess: () => {
      toast({
        title: "Sucesso!",
        description: "Você entrou na nossa lista VIP.",
        variant: "default",
      });
    },
    onError: (error) => {
      toast({
        title: "Erro",
        description: error.message,
        variant: "destructive",
      });
    },
  });
}

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";
import { useCreateLead } from "@/hooks/use-leads";
import { Loader2 } from "lucide-react";

export function NewsletterModal() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const createLead = useCreateLead();

  useEffect(() => {
    // Show modal after 15 seconds or on exit intent (simplified here as timer)
    const timer = setTimeout(() => {
      const hasSeen = localStorage.getItem("hasSeenModal");
      if (!hasSeen) {
        setOpen(true);
        localStorage.setItem("hasSeenModal", "true");
      }
    }, 15000);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createLead.mutate({ email }, {
      onSuccess: () => {
        setTimeout(() => setOpen(false), 2000);
      }
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            🎁 Espere! Não vá ainda.
          </DialogTitle>
          <DialogDescription className="text-center text-base">
            Entre na nossa lista VIP e receba uma <strong>amostra grátis</strong> de 5 atividades no seu e-mail.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Input 
              type="email" 
              placeholder="Seu melhor e-mail" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-12 text-lg"
            />
          </div>
          <Button 
            type="submit" 
            className="w-full h-12 text-lg font-bold bg-green-600 hover:bg-green-700"
            disabled={createLead.isPending}
          >
            {createLead.isPending ? <Loader2 className="animate-spin" /> : "QUERO MINHA AMOSTRA"}
          </Button>
          <p className="text-xs text-center text-muted-foreground">
            Livre de spam. Seus dados estão seguros.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
}

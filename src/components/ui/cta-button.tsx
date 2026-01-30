import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface CTAButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "accent";
  size?: "default" | "lg" | "xl";
  pulse?: boolean;
}

export function CTAButton({ 
  className, 
  variant = "accent", 
  size = "default", 
  pulse = false,
  children,
  ...props 
}: CTAButtonProps) {
  const baseStyles = "inline-flex items-center justify-center rounded-full font-bold transition-all duration-300 shadow-lg hover:scale-105 active:scale-95";
  
  const variants = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white shadow-blue-500/30",
    secondary: "bg-teal-500 hover:bg-teal-600 text-white shadow-teal-500/30",
    accent: "bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white shadow-orange-500/30 border-b-4 border-red-800 active:border-b-0 active:translate-y-1",
  };

  const sizes = {
    default: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
    xl: "px-10 py-5 text-xl md:text-2xl uppercase tracking-wide",
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    // External link handling
    window.location.href = "https://www.ggcheckout.com/checkout/v5/sKTtmB1lTMiJhDlB7qWW";
    if (props.onClick) props.onClick(e);
  };

  return (
    <motion.button 
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      whileHover={{ y: -2 }}
      animate={pulse ? { 
        boxShadow: ["0 10px 20px -5px rgba(249, 115, 22, 0.4)", "0 20px 30px -5px rgba(249, 115, 22, 0.6)", "0 10px 20px -5px rgba(249, 115, 22, 0.4)"]
      } : {}}
      transition={pulse ? { duration: 2, repeat: Infinity } : {}}
      onClick={handleClick}
      {...props}
    >
      <span className="flex items-center gap-2">
        {children}
        <ArrowRight className="w-5 h-5 md:w-6 md:h-6 stroke-[3]" />
      </span>
    </motion.button>
  );
}

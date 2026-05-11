import React from "react";
import { motion } from "motion/react";
import { cn } from "@/src/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card = ({ children, className }: CardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={cn(
        "bg-white rounded-2xl p-8 shadow-sm border border-brand-900/5 hover:shadow-lg transition-shadow duration-300",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

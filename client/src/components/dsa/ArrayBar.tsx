import { motion } from "framer-motion";

interface ArrayBarProps {
  value: number;
  height: number;
  isComparing: boolean;
  isSorted: boolean;
  isSwapping: boolean;
}

export function ArrayBar({ value, height, isComparing, isSorted, isSwapping }: ArrayBarProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, height: 0 }}
      animate={{
        opacity: 1,
        height: `${height}%`,
        backgroundColor: isComparing 
          ? "hsl(var(--warning))" 
          : isSwapping 
          ? "hsl(var(--destructive))"
          : isSorted 
          ? "hsl(var(--success))"
          : "hsl(var(--primary))",
      }}
      transition={{ duration: 0.3 }}
      className="relative w-full min-w-[2px] rounded-t-md"
    >
      <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs">
        {value}
      </span>
    </motion.div>
  );
}

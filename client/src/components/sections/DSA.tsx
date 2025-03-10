import { motion } from "framer-motion";
import { SortingVisualizer } from "../dsa/SortingVisualizer";

export function DSA() {
  return (
    <section id="dsa" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">DSA Visualizations</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Interactive visualizations of common data structures and algorithms.
              Watch how different sorting algorithms work in real-time and understand
              their inner workings.
            </p>
          </div>
          
          <SortingVisualizer />
        </motion.div>
      </div>
    </section>
  );
}

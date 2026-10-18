import { motion } from "framer-motion";
import {
  Gamepad2,
  Crosshair,
  Shield,
  Target,
  Radio,
  Zap,
  Brain,
  Flame,
  Compass,
  Eye,
  Activity,
  Layers,
} from "lucide-react";

const disciplines = [
  { name: "PUBG Gameplay", icon: Gamepad2, color: "text-red-400" },
  { name: "Battle Royale Strategy", icon: Shield, color: "text-blue-400" },
  { name: "Zone Rotation", icon: Compass, color: "text-amber-400" },
  { name: "Map Awareness", icon: Eye, color: "text-purple-400" },
  { name: "Tactical Positioning", icon: Target, color: "text-emerald-400" },
  { name: "Recoil Control", icon: Zap, color: "text-yellow-400" },
  { name: "Team Communication", icon: Radio, color: "text-sky-400" },
  { name: "Close-Range Combat", icon: Flame, color: "text-rose-400" },
  { name: "Long-Range Engagement", icon: Crosshair, color: "text-indigo-400" },
  { name: "Loot Management", icon: Layers, color: "text-cyan-400" },
  { name: "Survival Strategy", icon: Activity, color: "text-green-400" },
  { name: "Decision Making", icon: Brain, color: "text-pink-400" },
];

const TechStackSection = () => {
  return (
    <div className="w-full py-6 border-t border-b border-foreground/10 bg-foreground/[0.02] flex flex-col items-center justify-center overflow-hidden">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full overflow-hidden relative flex items-center"
      >
        {/* Gradients to fade edges */}
        <div className="absolute left-0 w-32 h-full bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 w-32 h-full bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        
        {/* Marquee Animation */}
        <div className="flex w-max animate-[marquee_35s_linear_infinite] whitespace-nowrap items-center hover:[animation-play-state:paused] py-1">
          {[...disciplines, ...disciplines].map((item, i) => {
            const Icon = item.icon;
            return (
              <div 
                key={i} 
                className="mx-3 px-5 py-2.5 rounded-full border border-foreground/10 bg-background/80 text-foreground font-semibold text-sm flex items-center gap-3 transition-all hover:scale-105 hover:border-primary/50 hover:bg-foreground/5 cursor-default shadow-sm group shrink-0"
              >
                <Icon className={`w-4 h-4 ${item.color} group-hover:scale-110 transition-transform duration-300`} />
                <span className="tracking-wide text-xs md:text-sm">{item.name}</span>
              </div>
            );
          })}
        </div>
      </motion.div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}} />
    </div>
  );
};

export default TechStackSection;

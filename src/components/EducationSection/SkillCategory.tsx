import { motion, AnimatePresence } from "framer-motion";
import {
  Target,
  Zap,
  Brain,
  Crosshair,
  Shield,
  Crown,
  Flame,
  Radio,
  Sparkles,
  Gamepad2,
} from "lucide-react";

export default function ProfessionalProfile() {
  const pubgSkills = [
    { name: "PUBG Gameplay", focus: "Core Mastery", level: 95, icon: Target, color: "text-red-400" },
    { name: "Battle Royale Strategy", focus: "Strategic Focus", level: 92, icon: Shield, color: "text-blue-400" },
    { name: "Map Awareness & Zone Rotation", focus: "High Priority", level: 94, icon: Brain, color: "text-purple-400" },
    { name: "Tactical Positioning", focus: "Tactical Discipline", level: 91, icon: Crosshair, color: "text-emerald-400" },
    { name: "Recoil Control", focus: "Mechanical Precision", level: 93, icon: Zap, color: "text-amber-400" },
  ];

  const coreCompetencies = [
    { name: "Team Communication", icon: Radio, color: "text-sky-400 border-sky-500/30 bg-sky-500/10" },
    { name: "Survival Strategy", icon: Shield, color: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10" },
    { name: "Loot Management", icon: Sparkles, color: "text-amber-400 border-amber-500/30 bg-amber-500/10" },
    { name: "Close-Range Combat", icon: Flame, color: "text-rose-400 border-rose-500/30 bg-rose-500/10" },
    { name: "Long-Range Engagement", icon: Crosshair, color: "text-purple-400 border-purple-500/30 bg-purple-500/10" },
    { name: "Decision Making", icon: Crown, color: "text-yellow-400 border-yellow-500/30 bg-yellow-500/10" },
  ];

  return (
    <motion.section
      id="skills"
      className="space-y-8"
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
        transition: { staggerChildren: 0.2, delayChildren: 0.3 },
      }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
          <Gamepad2 className="w-5 h-5" />
        </div>
        <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">PUBG Expertise & Skills</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* PUBG Arsenal */}
        <div className="glass-panel p-8 rounded-[2rem] border border-foreground/15 shadow-xl relative overflow-hidden">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-border/60">
            <h4 className="text-xl font-bold text-foreground flex items-center gap-2">
              <Crosshair className="w-5 h-5 text-primary" /> PUBG Combat Arsenal
            </h4>
            <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground bg-muted/60 px-3 py-1 rounded-full border border-border/50">
              Training Focus (Illustrative)
            </span>
          </div>

          <div className="space-y-6">
            {pubgSkills.map((skill, i) => {
              const Icon = skill.icon;
              return (
                <div key={i} className="space-y-2.5">
                  <div className="flex justify-between items-center text-sm font-semibold">
                    <span className="text-foreground flex items-center gap-2.5">
                      <div className="p-1.5 rounded-lg bg-foreground/5 border border-foreground/10">
                        <Icon className={`w-4 h-4 ${skill.color}`} />
                      </div>
                      {skill.name}
                    </span>
                    <span className="font-mono font-semibold text-primary bg-primary/10 px-2.5 py-0.5 rounded-full text-xs border border-primary/20">
                      {skill.focus}
                    </span>
                  </div>
                  <div className="h-2.5 w-full bg-muted/60 rounded-full overflow-hidden border border-border/40 p-[1px]">
                    <motion.div
                      className="h-full bg-gradient-to-r from-purple-600 via-primary to-sky-400 rounded-full relative shadow-[0_0_12px_rgba(139,92,246,0.5)]"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 + i * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="absolute right-0 top-0 bottom-0 w-2 bg-white rounded-full shadow-[0_0_8px_#fff]" />
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Soft Skills & Traits */}
        <div className="glass-panel p-8 rounded-[2rem] border border-foreground/15 shadow-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-border/60">
              <h4 className="text-xl font-bold text-foreground flex items-center gap-2">
                <Brain className="w-5 h-5 text-primary" /> Tactical & Squad Competencies
              </h4>
              <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground bg-muted/60 px-3 py-1 rounded-full border border-border/50">
                Core Disciplines
              </span>
            </div>

            <div className="flex flex-wrap gap-3">
              <AnimatePresence>
                {coreCompetencies.map((skill, i) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, damping: 15, delay: i * 0.08 }}
                      viewport={{ once: true }}
                      className={`px-4 py-2.5 rounded-2xl border text-sm font-semibold flex items-center gap-2 shadow-sm hover:scale-105 transition-transform cursor-default ${skill.color}`}
                    >
                      <Icon className="w-4 h-4" />
                      <span>{skill.name}</span>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-border/60">
            <div className="p-4 rounded-2xl bg-gradient-to-r from-primary/10 via-purple-500/5 to-transparent border border-primary/20 flex items-start gap-3.5 shadow-sm">
              <div className="p-2 rounded-xl bg-primary/20 text-primary shrink-0 mt-0.5">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <strong className="text-foreground font-bold text-sm block mb-0.5">
                  Disciplined Practice & Continuous Improvement
                </strong>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Over 8+ years focused on PUBG recoil mastery, zone anticipation, tactical team communication, and strategic decision-making.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

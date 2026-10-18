import { ScrollTimeline } from "../lightswind/scroll-timeline";
import { Gamepad2, Target, Zap, Flame } from "lucide-react";

export const CareerTimeline = () => {
  const careerEvents = [
    {
      year: "2024 – Present",
      title: "Professional PUBG Gamer & Strategist",
      subtitle: "High-Level PUBG Execution",
      description:
        "Maintaining high-level competitive performance in PUBG, mastering circle positioning, squad tactical communication, and mental focus in high-stakes matches.",
      icon: <Gamepad2 className="h-4 w-4 mr-2 text-primary" />,
    },
    {
      year: "2021 – 2024",
      title: "Tactical PUBG & Battle Royale Specialist",
      subtitle: "Map Awareness & Team Play",
      description:
        "Refined squad callouts, zone anticipation, vehicle rotation strategies, and decisive shotcalling under intense combat pressure.",
      icon: <Target className="h-4 w-4 mr-2 text-primary" />,
    },
    {
      year: "2018 – 2021",
      title: "Competitive Battle Royale Player",
      subtitle: "Recoil & Mechanics Mastery",
      description:
        "Deepened mastery of PUBG mechanics, bullet trajectory, recoil patterns, and compound defense through disciplined practice.",
      icon: <Zap className="h-4 w-4 mr-2 text-primary" />,
    },
    {
      year: "2016 – 2018",
      title: "Competitive Gaming Inception",
      subtitle: "Early Fundamentals & Reflexes",
      description:
        "Began the journey into competitive gaming from Bangladesh, building motor reflexes, spatial awareness, and a dedication to high-tier play.",
      icon: <Flame className="h-4 w-4 mr-2 text-primary" />,
    },
  ];

  return (
    <div id="career">
      <ScrollTimeline
        events={careerEvents}
        title="Gaming Journey"
        subtitle="8+ Years of dedicated competitive PUBG and Battle Royale progression"
        animationOrder="staggered"
        cardAlignment="alternating"
        cardVariant="elevated"
        parallaxIntensity={0.15}
        revealAnimation="fade"
        progressIndicator={true}
        lineColor="bg-primary/20"
        activeColor="bg-primary"
        progressLineWidth={3}
        progressLineCap="round"
      />
    </div>
  );
};

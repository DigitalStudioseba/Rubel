import { motion } from "framer-motion";
import { Send, MapPin, Mail, MessageCircle, Facebook, Instagram } from "lucide-react";
import { Input } from "../lightswind/input";
import { Textarea } from "../lightswind/textarea";
import { Button } from "../lightswind/button";

export const ContactSection = () => {
  return (
    <section id="contact" className="max-w-7xl mx-auto px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        className="glass-panel p-8 md:p-12 rounded-[3rem] border border-foreground/10 relative overflow-hidden"
      >
        {/* Background Gradients */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/20 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row gap-12 md:gap-16">
          
          {/* Contact Info */}
          <div className="flex-1 space-y-6">
            <div>
              <div className="inline-block mb-3 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/25 text-primary text-xs font-bold tracking-wide">
                Get In Touch
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-2">
                Let's <span className="text-gradient-primary">Connect</span>
              </h2>
              <div className="mb-4">
                <h3 className="text-xl font-extrabold text-foreground">Mohammad Rubel</h3>
                <p className="text-sm font-semibold text-primary">Professional PUBG Gamer</p>
              </div>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                Feel free to reach out for PUBG squad matches, competitive collaborations, or general gaming inquiries. Connect via WhatsApp, Facebook, Instagram, or direct email.
              </p>
            </div>

            <div className="space-y-3.5">
              {/* Email */}
              <a 
                href="mailto:hello@digiseba.shop" 
                className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group p-2 rounded-2xl hover:bg-foreground/5"
              >
                <div className="w-11 h-11 rounded-xl glass-panel flex items-center justify-center group-hover:scale-110 group-hover:text-primary transition-transform shadow-sm">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground block">Email</span>
                  <span className="font-semibold text-foreground text-sm">hello@digiseba.shop</span>
                </div>
              </a>

              {/* WhatsApp */}
              <a 
                href="https://wa.me/60103728391" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group p-2 rounded-2xl hover:bg-foreground/5"
              >
                <div className="w-11 h-11 rounded-xl glass-panel flex items-center justify-center group-hover:scale-110 group-hover:text-primary transition-transform shadow-sm">
                  <MessageCircle className="w-5 h-5 text-emerald-500" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground block">WhatsApp</span>
                  <span className="font-semibold text-foreground text-sm">+60 10-372 8391</span>
                </div>
              </a>

              {/* Telegram (Unlinked number to avoid broken links) */}
              <div className="flex items-center gap-4 text-muted-foreground group p-2 rounded-2xl">
                <div className="w-11 h-11 rounded-xl glass-panel flex items-center justify-center shadow-sm">
                  <Send className="w-5 h-5 text-sky-400" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground block">Telegram</span>
                  <span className="font-semibold text-foreground text-sm">+60 10-372 8391</span>
                </div>
              </div>

              {/* Facebook */}
              <a 
                href="https://www.facebook.com/Mohammadrubel78" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group p-2 rounded-2xl hover:bg-foreground/5"
              >
                <div className="w-11 h-11 rounded-xl glass-panel flex items-center justify-center group-hover:scale-110 group-hover:text-primary transition-transform shadow-sm">
                  <Facebook className="w-5 h-5 text-blue-500" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground block">Facebook</span>
                  <span className="font-semibold text-foreground text-sm">Mohammadrubel78</span>
                </div>
              </a>

              {/* Instagram */}
              <a 
                href="https://www.instagram.com/stupid_nirob/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group p-2 rounded-2xl hover:bg-foreground/5"
              >
                <div className="w-11 h-11 rounded-xl glass-panel flex items-center justify-center group-hover:scale-110 group-hover:text-primary transition-transform shadow-sm">
                  <Instagram className="w-5 h-5 text-pink-500" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground block">Instagram</span>
                  <span className="font-semibold text-foreground text-sm">stupid_nirob</span>
                </div>
              </a>

              {/* Hometown */}
              <div className="flex items-center gap-4 text-muted-foreground group p-2 rounded-2xl">
                <div className="w-11 h-11 rounded-xl glass-panel flex items-center justify-center shadow-sm">
                  <MapPin className="w-5 h-5 text-red-400" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground block">Hometown</span>
                  <span className="font-semibold text-foreground text-sm">Lakshmipur, Bangladesh</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="flex-1 glass-panel p-8 rounded-[2rem] border border-foreground/10 relative">
            <form 
              className="space-y-5" 
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget;
                const name = (form.elements.namedItem("name") as HTMLInputElement)?.value || "";
                const email = (form.elements.namedItem("email") as HTMLInputElement)?.value || "";
                const message = (form.elements.namedItem("message") as HTMLTextAreaElement)?.value || "";
                window.location.href = `mailto:hello@digiseba.shop?subject=PUBG Portfolio Inquiry from ${encodeURIComponent(name)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
              }}
            >
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-1.5">Your Name</label>
                <Input 
                  name="name"
                  type="text" 
                  required
                  className="rounded-xl py-3 px-4 bg-foreground/5 border-foreground/10 text-foreground focus-visible:ring-primary placeholder:text-muted-foreground/50"
                  placeholder="Your Name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-1.5">Your Email</label>
                <Input 
                  name="email"
                  type="email" 
                  required
                  className="rounded-xl py-3 px-4 bg-foreground/5 border-foreground/10 text-foreground focus-visible:ring-primary placeholder:text-muted-foreground/50"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-1.5">Message</label>
                <Textarea 
                  name="message"
                  rows={4}
                  required
                  className="rounded-xl py-3 px-4 bg-foreground/5 border-foreground/10 text-foreground focus-visible:ring-primary resize-none placeholder:text-muted-foreground/50 min-h-[120px]"
                  placeholder="How can I help you or team up?"
                />
              </div>

              <Button type="submit" size="lg" className="w-full rounded-xl bg-primary text-primary-foreground font-bold shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] mt-4 h-12 cursor-pointer">
                Send via Email <Send className="w-4 h-4 ml-1" />
              </Button>
              <p className="text-[11px] text-muted-foreground/80 text-center mt-2">
                Sends directly to <span className="font-semibold text-foreground">hello@digiseba.shop</span>
              </p>
            </form>
          </div>

        </div>
      </motion.div>
    </section>
  );
};

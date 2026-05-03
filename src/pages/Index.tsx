import { MessageCircle, Phone, CircleCheck as CheckCircle2, Globe, Bot, Rocket, Search, Clock, Shield, Zap, TrendingUp, Star, Mail, Instagram, Sparkles, MousePointerClick, BrainCircuit, ShoppingCart, BadgeCheck, ArrowRight, MapPin } from "lucide-react";
import logo from "@/assets/mr-sites-logo.png";
import walterImg from "@/assets/walter-portrait.jpg";
import walterPhoneImg from "@/assets/walter-phone.jpg";
import walterHeroImg from "@/assets/walter-hero.jpg";
import walterLaptopImg from "@/assets/walter-laptop.png";
import ExitIntentPopup from "@/components/ExitIntentPopup";

const WALTER = {
  nome: "Walter Araujo",
  apelido: "Mr. Sites",
  telefone: "(11) 9 7469-8846",
  whatsappNumero: "5511974698846",
  email: "contato@mrsites.app",
  instagram: "@mrsites",
  endereco: "Av. Paulista, 1639 — São Paulo/SP",
};

const waLink = (msg: string) =>
  `https://wa.me/${WALTER.whatsappNumero}?text=${encodeURIComponent(msg)}`;

const CTAPrimary = ({ children, message, className = "", size = "md" }: { children: React.ReactNode; message: string; className?: string; size?: "sm" | "md" | "lg" }) => {
  const sizes = {
    sm: "px-5 py-2.5 text-xs",
    md: "px-6 py-3.5 text-sm",
    lg: "px-8 py-4 text-base",
  };
  return (
    <a
      href={waLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 bg-primary text-primary-foreground font-black uppercase tracking-wide rounded-full hover:scale-[1.03] transition-smooth shadow-glow ${sizes[size]} ${className}`}
    >
      {children}
      <ArrowRight className="w-4 h-4" strokeWidth={3} />
    </a>
  );
};

const CTAGhost = ({ children, message, className = "" }: { children: React.ReactNode; message: string; className?: string }) => (
  <a
    href={waLink(message)}
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-flex items-center gap-2 border border-white/20 bg-white/5 text-foreground font-bold uppercase tracking-wide rounded-full px-6 py-3.5 text-sm hover:bg-white/10 transition-smooth ${className}`}
  >
    <MessageCircle className="w-4 h-4 text-primary" strokeWidth={2.5} />
    {children}
  </a>
);

const Section = ({ id, children, className = "" }: { id?: string; children: React.ReactNode; className?: string }) => (
  <section id={id} className={`py-20 md:py-28 px-4 ${className}`}>
    <div className="container mx-auto max-w-6xl">{children}</div>
  </section>
);

const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <div className="inline-flex items-center gap-2 text-neon font-black uppercase text-xs tracking-[0.2em] mb-4">
    <span className="h-px w-8 bg-neon" />
    {children}
  </div>
);

const Index = () => {
  const mensagemPadrao = "Olá Walter! Vi o site do Mr. Sites e quero criar meu site com chat inteligente.";

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* TOP BAR — discreta com toque neon */}
      <div className="bg-primary text-primary-foreground text-[11px] font-bold overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap py-1.5">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-6 px-4 shrink-0">
              <span className="flex items-center gap-1.5"><Zap className="w-3 h-3 text-neon" /> SITE NO AR EM 24H</span>
              <span className="text-neon">•</span>
              <span className="flex items-center gap-1.5"><Bot className="w-3 h-3 text-neon" /> CHAT IA QUE VENDE 24/7</span>
              <span className="text-neon">•</span>
              <span className="flex items-center gap-1.5"><Search className="w-3 h-3 text-neon" /> SEO GOOGLE + CHATGPT</span>
              <span className="text-neon">•</span>
              <span className="flex items-center gap-1.5"><Sparkles className="w-3 h-3 text-neon" /> SITES QUE REALMENTE FUNCIONAM</span>
              <span className="text-neon">•</span>
            </div>
          ))}
        </div>
      </div>

      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-white/5">
        <div className="container mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <img src={logo} alt="Mr. Sites Walter Araujo logo" className="w-11 h-11 object-contain" width={44} height={44} />
            <div className="leading-tight">
              <div className="font-black text-base tracking-tight">MR. SITES</div>
              <div className="text-[10px] text-muted-foreground font-semibold uppercase tracking-widest">Walter Araujo</div>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold">
            <a href="#como" className="hover:text-primary transition-smooth">Como Funciona</a>
            <a href="#beneficios" className="hover:text-primary transition-smooth">Benefícios</a>
            <a href="#exemplos" className="hover:text-primary transition-smooth">Exemplos</a>
            <a href="#faq" className="hover:text-primary transition-smooth">FAQ</a>
          </nav>
          <CTAPrimary size="sm" message={mensagemPadrao}>Quero meu site</CTAPrimary>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 bg-grid opacity-60" aria-hidden />
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-gradient-glow opacity-80" aria-hidden />
        <div className="relative container mx-auto max-w-6xl px-4 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Eyebrow>Criação de Sites Inteligentes</Eyebrow>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.05] mb-6">
                Seu site pronto, inteligente e profissional <span className="text-primary">em menos de 24h</span>.
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-xl">
                Sites que <strong className="text-foreground">comunicam, vendem e trabalham por você</strong> com chat de IA 24/7. Foque no que importa — fazer seu negócio crescer. Mr. Sites cuida do resto.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                <CTAPrimary size="lg" message={mensagemPadrao} className="animate-pulse-glow">Quero meu site em 24h</CTAPrimary>
                <CTAGhost message={mensagemPadrao}>Falar com Walter</CTAGhost>
              </div>

              <div className="grid grid-cols-3 gap-4 max-w-lg">
                {[
                  { icon: Shield, t: "Design", d: "estratégico" },
                  { icon: Zap, t: "Tecnologia", d: "inteligente" },
                  { icon: Rocket, t: "Entrega", d: "em 24h" },
                ].map((f, i) => (
                  <div key={i} className="flex flex-col gap-1.5">
                    <div className="w-9 h-9 rounded-lg bg-primary/15 border border-primary/30 flex items-center justify-center">
                      <f.icon className="w-4 h-4 text-primary" strokeWidth={2.5} />
                    </div>
                    <div className="text-xs font-black uppercase">{f.t}</div>
                    <div className="text-[11px] text-muted-foreground -mt-1">{f.d}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-glow scale-110" aria-hidden />
              <img
                src={walterLaptopImg}
                alt="Walter Araujo — Mr. Sites mostrando site com performance 96 no Google PageSpeed"
                className="relative w-full drop-shadow-[0_25px_45px_hsl(225_100%_50%_/_0.35)]"
                width={948}
                height={996}
              />
              <div className="absolute -bottom-5 -left-5 bg-primary text-primary-foreground rounded-2xl px-5 py-3 shadow-glow rotate-[-4deg]">
                <div className="text-xs font-bold opacity-90">Entrega</div>
                <div className="text-2xl font-black leading-none">24h</div>
              </div>
              <div className="hidden md:block absolute top-6 -right-4 bg-background/80 backdrop-blur border border-primary/30 rounded-full px-4 py-2 text-xs font-black uppercase">
                <span className="text-primary">●</span> Sites que vendem
              </div>
            </div>
          </div>

          {/* Stats bar */}
          <div className="mt-16 bg-primary text-primary-foreground rounded-2xl p-6 md:p-8 grid grid-cols-2 md:grid-cols-4 gap-6 shadow-glow">
            <div>
              <div className="text-3xl md:text-4xl font-black">+200</div>
              <div className="text-xs uppercase font-bold opacity-90">sites entregues</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-black">24h</div>
              <div className="text-xs uppercase font-bold opacity-90">prazo médio</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-black">100%</div>
              <div className="text-xs uppercase font-bold opacity-90">focados em conversão</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-black">24/7</div>
              <div className="text-xs uppercase font-bold opacity-90">chat IA vendendo</div>
            </div>
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <Section id="como">
        <div className="text-center mb-14">
          <Eyebrow>Como Funciona</Eyebrow>
          <h2 className="text-3xl md:text-5xl font-black leading-tight">
            Do pedido ao site no ar <span className="text-primary">em 3 passos simples</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6 relative">
          {[
            { n: "01", icon: MessageCircle, t: "Briefing rápido", d: "Você me conta sobre seu negócio e seus objetivos pelo WhatsApp." },
            { n: "02", icon: BrainCircuit, t: "Criação inteligente", d: "Eu crio um site estratégico, moderno e otimizado para vender." },
            { n: "03", icon: Rocket, t: "Entrega em até 24h", d: "Seu site pronto, testado e publicado para o mundo. Pronto pra vender." },
          ].map((s, i) => (
            <div key={i} className="bg-card border border-white/5 rounded-2xl p-7 hover:border-primary/40 transition-smooth group">
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                  <s.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground" strokeWidth={2.5} />
                </div>
                <span className="text-4xl font-black text-primary/30">{s.n}</span>
              </div>
              <h3 className="font-black text-xl mb-2">{s.t}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <p className="inline-block bg-card border border-white/10 rounded-full px-6 py-3 text-sm font-bold">
            Simples assim. <span className="text-primary">Rápido, inteligente e sem complicação.</span>
          </p>
        </div>
      </Section>

      {/* CHAT IA */}
      <Section id="beneficios" className="bg-card/40 border-y border-white/5">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Eyebrow>A Tecnologia Que Muda Tudo</Eyebrow>
            <h2 className="text-3xl md:text-5xl font-black leading-tight mb-6">
              Site com <span className="text-primary">chat inteligente</span> que vende sozinho
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Esquece formulário que ninguém preenche. O chatbot com IA do Mr. Sites <strong className="text-foreground">conversa de verdade</strong>, qualifica o lead, mostra preço, agenda visita e <strong className="text-foreground">fecha negócio</strong> — em português, 24h por dia, sem você levantar um dedo.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: BrainCircuit, t: "IA treinada com seu negócio" },
                { icon: ShoppingCart, t: "Fecha venda direto no chat" },
                { icon: Clock, t: "24 horas, 7 dias por semana" },
                { icon: BadgeCheck, t: "Integra com seu WhatsApp" },
              ].map((it, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/15 border border-primary/30 flex items-center justify-center shrink-0">
                    <it.icon className="w-4 h-4 text-primary" strokeWidth={2.5} />
                  </div>
                  <div className="text-sm font-bold leading-tight pt-1">{it.t}</div>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <CTAPrimary size="lg" message={`${mensagemPadrao} Quero o chat IA.`}>Quero esse robô vendendo</CTAPrimary>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-glow scale-110" aria-hidden />
            <div className="relative bg-card border border-white/10 rounded-2xl p-5 shadow-card">
              <div className="flex items-center gap-2 pb-3 border-b border-white/10 mb-4">
                <div className="w-2.5 h-2.5 rounded-full bg-destructive/70" />
                <div className="w-2.5 h-2.5 rounded-full bg-primary/70" />
                <div className="w-2.5 h-2.5 rounded-full bg-whatsapp/70" />
                <div className="ml-2 text-xs text-muted-foreground">chat.mrsites.ai</div>
              </div>
              <div className="space-y-3 text-sm">
                <div className="bg-muted rounded-2xl rounded-tl-sm p-3 max-w-[85%]">Olá! Quero saber sobre o serviço de vocês 👋</div>
                <div className="bg-primary text-primary-foreground rounded-2xl rounded-tr-sm p-3 max-w-[85%] ml-auto">
                  Oi! Sou o assistente do Mr. Sites. Você quer um site novo, refazer um existente ou quer só o chat IA?
                </div>
                <div className="bg-muted rounded-2xl rounded-tl-sm p-3 max-w-[85%]">Quero meu primeiro site, pra clínica</div>
                <div className="bg-primary text-primary-foreground rounded-2xl rounded-tr-sm p-3 max-w-[85%] ml-auto">
                  Perfeito! Em 24h fica pronto. Quer que eu já te envie a proposta no WhatsApp do Walter?
                </div>
                <div className="flex items-center gap-2 pt-2">
                  <div className="flex-1 bg-muted rounded-full px-4 py-2.5 text-xs text-muted-foreground">Digite sua mensagem…</div>
                  <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center"><ArrowRight className="w-4 h-4 text-primary-foreground" /></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* EXEMPLOS / TIPOS */}
      <Section id="exemplos">
        <div className="text-center mb-14">
          <Eyebrow>Exemplos de Sites Inteligentes</Eyebrow>
          <h2 className="text-3xl md:text-5xl font-black leading-tight">
            Sites que falam, conectam <span className="text-primary">e vendem</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Do <strong className="text-foreground">primeiro site</strong> ao <strong className="text-foreground">e-commerce com IA</strong>: site rápido, profissional, que aparece no Google e no ChatGPT.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { icon: Globe, t: "Site Institucional", d: "Sua empresa profissional na internet" },
            { icon: MousePointerClick, t: "Landing Page", d: "Página de vendas que converte" },
            { icon: ShoppingCart, t: "E-commerce", d: "Loja virtual completa com Pix" },
            { icon: Bot, t: "Site com Chat IA", d: "Atendente virtual que fecha venda" },
          ].map((c, i) => (
            <div key={i} className="bg-card border border-white/5 rounded-2xl p-6 hover:border-primary/40 hover:-translate-y-1 transition-smooth">
              <div className="w-11 h-11 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center mb-4">
                <c.icon className="w-5 h-5 text-primary" strokeWidth={2.5} />
              </div>
              <h3 className="font-black text-lg mb-1.5">{c.t}</h3>
              <p className="text-sm text-muted-foreground">{c.d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* GARANTIA + DEPOIMENTO */}
      <Section className="bg-card/40 border-y border-white/5">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-primary text-primary-foreground rounded-2xl p-8 relative overflow-hidden">
            <Sparkles className="absolute -top-6 -right-6 w-32 h-32 opacity-15" />
            <div className="text-xs font-black uppercase tracking-widest mb-3 opacity-90">Por que escolher</div>
            <h3 className="text-2xl md:text-3xl font-black mb-5">Mr. Sites — Walter Araujo?</h3>
            <ul className="space-y-2.5">
              {[
                "Foco total em resultados",
                "Comunicação clara e direta",
                "Design moderno e estratégico",
                "Sites rápidos, seguros e responsivos",
                "Atendimento humano e personalizado",
              ].map((it, i) => (
                <li key={i} className="flex items-center gap-2.5 text-sm font-semibold">
                  <CheckCircle2 className="w-4 h-4 shrink-0" strokeWidth={3} />
                  {it}
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <a href={waLink(mensagemPadrao)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-background text-foreground font-black uppercase tracking-wide rounded-full px-6 py-3 text-sm hover:scale-[1.03] transition-smooth">
                Quero meu site em 24h <ArrowRight className="w-4 h-4" strokeWidth={3} />
              </a>
            </div>
          </div>

          <div className="grid gap-6">
            <div className="bg-card border border-white/10 rounded-2xl p-6 flex gap-4 items-start">
              <div className="w-12 h-12 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center shrink-0">
                <Shield className="w-5 h-5 text-primary" strokeWidth={2.5} />
              </div>
              <div>
                <div className="text-xs font-black uppercase tracking-widest text-primary mb-1">Garantia Mr. Sites</div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Sei que seu tempo é valioso. Por isso, entrego sites com qualidade <strong className="text-foreground">e em até 24h. Ou menos.</strong>
                </p>
                <div className="mt-3 text-primary italic font-bold">— Walter Araujo</div>
              </div>
            </div>

            <div className="bg-card border border-white/10 rounded-2xl p-6">
              <div className="flex gap-1 text-primary mb-3">
                {[...Array(5)].map((_, s) => <Star key={s} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-muted-foreground italic mb-4 leading-relaxed">
                "O Walter transformou minha ideia em um site incrível em menos de 24h. Simplesmente absurdo!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-black text-primary">CM</div>
                <div>
                  <div className="font-black text-sm">Carlos M.</div>
                  <div className="text-xs text-muted-foreground">Empresário</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA FINAL com foto */}
      <Section>
        <div className="relative bg-gradient-blue rounded-3xl overflow-hidden p-8 md:p-12 grid md:grid-cols-2 gap-8 items-center">
          <div className="absolute inset-0 bg-grid opacity-20" aria-hidden />
          <div className="relative">
            <Eyebrow>Última Chamada</Eyebrow>
            <h2 className="text-3xl md:text-5xl font-black leading-[1.05] mb-5 text-primary-foreground">
              Pronto para ter um site inteligente em <span className="underline decoration-white/40">menos de 24h?</span>
            </h2>
            <p className="text-primary-foreground/90 mb-8 text-lg">
              Basta clicar no botão e me chamar. O resto é comigo.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href={waLink(mensagemPadrao)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-background text-foreground font-black uppercase tracking-wide rounded-full px-7 py-4 text-sm hover:scale-[1.03] transition-smooth animate-pulse-glow">
                <MessageCircle className="w-4 h-4 text-primary" strokeWidth={3} />
                Quero meu site em 24h
              </a>
              <a href={`tel:+${WALTER.whatsappNumero}`} className="inline-flex items-center gap-2 border border-white/40 text-primary-foreground font-bold uppercase tracking-wide rounded-full px-6 py-4 text-sm hover:bg-white/10 transition-smooth">
                <Phone className="w-4 h-4" /> Ligar agora
              </a>
            </div>
            <div className="mt-5 text-xs font-bold text-primary-foreground/90 uppercase tracking-widest flex flex-wrap items-center gap-x-3 gap-y-1">
              <span>Atendimento 100% online • 7 dias</span>
              <span className="opacity-60">|</span>
              <span className="inline-flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-neon" /> {WALTER.endereco}</span>
            </div>
          </div>
          <div className="relative">
            <img src={walterPhoneImg} alt="Walter Araujo Mr. Sites pronto pra atender no WhatsApp" className="relative w-full rounded-2xl shadow-card" loading="lazy" width={1024} height={1280} />
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section id="faq">
        <div className="text-center mb-12">
          <Eyebrow>Dúvidas Frequentes</Eyebrow>
          <h2 className="text-3xl md:text-5xl font-black leading-tight">Perguntou, <span className="text-primary">Mr. Sites responde</span></h2>
        </div>
        <div className="max-w-3xl mx-auto space-y-3">
          {[
            { q: "Quanto custa fazer um site com o Mr. Sites?", a: "Depende do tipo (landing page, institucional, e-commerce) e se inclui chat IA. Trabalho com planos mensais acessíveis (com hospedagem e manutenção inclusas) e pacotes fechados. Manda no WhatsApp que volto com proposta direta." },
            { q: "Em quanto tempo meu site fica pronto?", a: "Landing page e site institucional: até 24h após o briefing. E-commerce: 7 a 15 dias. Chat IA é configurado e treinado em paralelo." },
            { q: "Como funciona o chat inteligente?", a: "O chat usa IA (GPT, Claude, Gemini) treinada com o conteúdo da sua empresa. Conversa em português natural, qualifica leads, mostra preço, agenda reunião, envia link de pagamento e encaminha lead quente pro seu WhatsApp. 24/7." },
            { q: "Eu preciso entender de tecnologia?", a: "Zero. Cuido de tudo: domínio, hospedagem, e-mail, configuração e treinamento da IA. Você manda os textos por áudio no WhatsApp e recebe o site pronto." },
            { q: "O site aparece no Google e no ChatGPT?", a: "Sim. SEO técnico e SEO generativo (GEO/AEO) inclusos. Schema markup, meta tags, sitemap, conteúdo otimizado, integração Search Console e Analytics." },
            { q: "Atendem todo o Brasil?", a: "Sim. 100% online via WhatsApp, Google Meet e e-mail. Cliente em qualquer cidade do Brasil ou exterior." },
          ].map((f, i) => (
            <details key={i} className="bg-card border border-white/10 rounded-xl p-5 group hover:border-primary/40 transition-smooth">
              <summary className="font-black uppercase text-sm cursor-pointer flex justify-between items-center gap-4">
                {f.q}
                <span className="text-primary text-2xl group-open:rotate-45 transition-smooth shrink-0">+</span>
              </summary>
              <p className="mt-3 text-muted-foreground leading-relaxed text-sm">{f.a}</p>
            </details>
          ))}
        </div>
      </Section>

      {/* SEO HIDDEN-ish content (kept for SEO but compact) */}
      <Section className="bg-card/30 border-t border-white/5">
        <div className="text-center mb-8">
          <Eyebrow>Sobre o Mr. Sites</Eyebrow>
          <h2 className="text-2xl md:text-3xl font-black leading-tight max-w-3xl mx-auto">
            Criação de sites profissionais, rápidos, com chat IA e SEO para Google e ChatGPT
          </h2>
        </div>
        <div className="prose prose-invert max-w-none text-muted-foreground text-sm leading-relaxed columns-1 md:columns-2 gap-8">
          <p>
            <strong className="text-foreground">Walter Araujo, o Mr. Sites</strong>, é especialista em <strong>criação de sites profissionais</strong>, <strong>desenvolvimento web</strong>, <strong>landing pages de alta conversão</strong>, <strong>SEO técnico</strong>, <strong>integração de chatbots com inteligência artificial</strong>, <strong>otimização para mecanismos generativos (GEO/AEO)</strong>, <strong>e-commerce</strong> e <strong>automação de marketing</strong>. Mais de uma década criando sites que vendem.
          </p>
          <p>
            Atendemos: <strong>criar primeiro site</strong>, site rápido, site profissional para empresa, site para advogado, médico, dentista, clínica, psicólogo, nutricionista, personal trainer, consultor, contador, arquiteto, fotógrafo, restaurante, loja, distribuidora, indústria, imobiliária, corretor, autônomo, MEI, infoprodutor, coach, mentor, agência e startup. Tudo com chat IA 24/7.
          </p>
          <p>
            Tecnologia: <strong>React, Next.js, Astro, Vite, Tailwind, TypeScript, Supabase, Vercel, Cloudflare</strong>. Integração com <strong>OpenAI, Claude, Gemini, WhatsApp Business API, Google Analytics 4, Search Console, RD Station, ActiveCampaign, HubSpot, Pix, Stripe, Asaas, Mercado Pago</strong>. Score 100/100 no PageSpeed.
          </p>
          <p>
            Palavras-chave atendidas: criação de sites, criar site profissional, criar site rápido, primeiro site, site moderno, site responsivo, landing page, página de vendas, e-commerce, loja virtual, chatbot inteligente, chatbot com IA, atendimento 24/7, assistente virtual, integrar ChatGPT no site, SEO Google, SEO ChatGPT, GEO, AEO, ranquear no Google, aparecer no ChatGPT, schema markup, Core Web Vitals, site que vende, site que funciona, walter araujo, mr sites — está tudo aqui.
          </p>
        </div>
        <div className="mt-10 text-center">
          <CTAPrimary size="lg" message={`${mensagemPadrao} Bora fazer meu site.`}>
            Manda mensagem pro Mr. Sites
          </CTAPrimary>
        </div>
      </Section>

      {/* EVENTOS — vanguarda da tecnologia */}
      <Section id="eventos" className="bg-card/40 border-y border-white/5">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 md:order-1">
            <div className="absolute inset-0 bg-gradient-glow scale-110" aria-hidden />
            <img
              src={walterHeroImg}
              alt="Walter Araujo sendo entrevistado em evento de tecnologia e inovação digital"
              className="relative w-full rounded-2xl shadow-card object-cover"
              loading="lazy"
              width={900}
              height={900}
            />
            <div className="absolute -bottom-5 -right-5 bg-neon text-neon-foreground rounded-2xl px-5 py-3 shadow-glow rotate-[3deg]">
              <div className="text-[10px] font-bold opacity-80 uppercase tracking-widest">Sempre na</div>
              <div className="text-xl font-black leading-none uppercase">Vanguarda</div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <Eyebrow>Eventos & Bastidores</Eyebrow>
            <h2 className="text-3xl md:text-5xl font-black leading-tight mb-6">
              Sempre na <span className="text-primary">vanguarda da tecnologia</span>
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Participo dos principais <strong className="text-foreground">eventos de tecnologia, IA, marketing digital e inovação</strong> do Brasil e do mundo. É assim que o Mr. Sites entrega o que existe de mais novo em <strong className="text-foreground">criação de sites com IA</strong>, automação e SEO generativo — antes do mercado.
            </p>
            <ul className="space-y-2.5 mb-8">
              {[
                "Web Summit, RD Summit e Fire Festival",
                "Eventos OpenAI, Google I/O e Meta Connect",
                "Painéis e entrevistas sobre IA aplicada a vendas",
                "Conexão direta com fundadores e early adopters",
              ].map((it, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm font-semibold">
                  <CheckCircle2 className="w-4 h-4 shrink-0 text-neon mt-0.5" strokeWidth={3} />
                  {it}
                </li>
              ))}
            </ul>
            <CTAGhost message={`${mensagemPadrao} Quero o que há de mais novo em IA pro meu site.`}>Quero tecnologia de ponta</CTAGhost>
          </div>
        </div>
      </Section>
      <footer className="bg-background border-t border-white/5 py-10 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <img src={logo} alt="Mr. Sites" className="w-10 h-10 object-contain" />
                <div className="font-black text-lg">MR. SITES</div>
              </div>
              <p className="text-sm text-muted-foreground">Sites inteligentes que conectam, convencem e vendem. Desenvolvido por quem entende de estratégia digital.</p>
            </div>
            <div>
              <div className="font-black uppercase text-xs tracking-widest text-neon mb-3">Contato</div>
              <a href={`https://wa.me/${WALTER.whatsappNumero}`} target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-2 mb-1.5 transition-smooth"><MessageCircle className="w-3.5 h-3.5 text-neon" /> {WALTER.telefone}</a>
              <a href={`mailto:${WALTER.email}`} className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-2 mb-1.5 transition-smooth"><Mail className="w-3.5 h-3.5 text-neon" /> {WALTER.email}</a>
              <p className="text-sm text-muted-foreground flex items-center gap-2 mb-1.5"><Instagram className="w-3.5 h-3.5 text-neon" /> {WALTER.instagram}</p>
              <p className="text-sm text-muted-foreground flex items-start gap-2"><MapPin className="w-3.5 h-3.5 text-neon mt-0.5 shrink-0" /> {WALTER.endereco}</p>
            </div>
            <div>
              <div className="font-black uppercase text-xs tracking-widest text-primary mb-3">Serviços</div>
              <p className="text-sm text-muted-foreground">Sites institucionais • Landing pages • E-commerce • Chat IA 24/7 • SEO Google + ChatGPT</p>
            </div>
          </div>
          <div className="border-t border-white/5 pt-6 text-xs text-center text-muted-foreground">
            © {new Date().getFullYear()} Mr. Sites — Walter Araujo. Todos os direitos reservados.
          </div>
        </div>
      </footer>

      {/* WHATSAPP FLUTUANTE */}
      <a
        href={waLink(mensagemPadrao)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Conversar com o Mr. Sites no WhatsApp"
        className="fixed bottom-6 right-6 z-50 bg-whatsapp text-whatsapp-foreground p-4 rounded-full shadow-glow hover:scale-110 transition-smooth animate-pulse-glow"
      >
        <MessageCircle className="w-6 h-6" strokeWidth={2.5} />
      </a>

      {/* POPUP exit-intent */}
      <ExitIntentPopup />
    </div>
  );
};

export default Index;

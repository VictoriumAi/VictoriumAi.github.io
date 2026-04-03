import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ArrowRight,
  CalendarCheck2,
  CheckCircle2,
  Gauge,
  LineChart,
  MapPin,
  SearchCheck,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const stats = [
  {
    value: "75 %",
    label: "kliknutí",
    text: "na Google mapách smeruje na prvé 3 výsledky.",
  },
  {
    value: "3x",
    label: "viac hovorov",
    text: "zvyknú mať firmy, ktoré sú stabilne v top pozíciách.",
  },
  {
    value: "90 dní",
    label: "jasný cieľ",
    text: "ak sa nedostanete do top 3, peniaze vraciame.",
  },
];

const process = [
  {
    icon: SearchCheck,
    title: "Diagnostika a plán",
    text: "Rýchlo skontrolujeme profil, konkurenciu a lokálne SEO signály. Do 48 hodín máte konkrétny plán krokov.",
  },
  {
    icon: MapPin,
    title: "Implementácia optimalizácie",
    text: "Upravíme profil, obsah a citácie tak, aby Google jasne videl vašu relevanciu pre Bratislavu.",
  },
  {
    icon: LineChart,
    title: "Meranie a rast",
    text: "Sledujeme pozície, hovory a dopyty. Priebežne dolaďujeme, aby výsledky neboli jednorazové.",
  },
];

const offer = [
  "Kompletný audit Google Business Profile",
  "Analýza top konkurentov v Bratislave",
  "Nastavenie kategórií, služieb a popisov",
  "Optimalizácia príspevkov a FAQ sekcie",
  "Čistenie nekvalitných citácií",
  "Budovanie relevantných lokálnych citácií",
];

const faq = [
  {
    question: "Je to jednorazová služba alebo mesačný paušál?",
    answer: "Je to jednorazový balík za 750 EUR. Bez viazanosti a bez skrytých mesačných poplatkov.",
  },
  {
    question: "Čo ak sa do top 3 nedostaneme?",
    answer:
      "Pri dodržaní dohodnutých podmienok máte 90-dňovú garanciu. Ak cieľ nesplníme, vraciame plnú sumu.",
  },
  {
    question: "Pre koho je služba vhodná?",
    answer:
      "Pre lokálne firmy, ktoré chcú viac telefonátov a rezervácií z Google máp: servisy, kliniky, remeslá, služby.",
  },
];

const Index = () => {
  const bookingUrl = "https://zbooking.eu/WWIn3";

  const handleBookAppointment = () => {
    window.open(bookingUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#top" className="flex items-center gap-2 text-sm font-semibold tracking-wide text-foreground">
            <Sparkles className="h-4 w-4 text-primary" />
            SEO Victorium
          </a>
          <Button onClick={handleBookAppointment} className="rounded-full px-5">
            Rezervovať hovor
          </Button>
        </div>
      </header>

      <main id="top">
        <section className="hero-ambient relative overflow-hidden px-4 pb-20 pt-16 sm:px-6 lg:px-8">
          <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="reveal">
              <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                <Gauge className="h-4 w-4" />
                Google Business Profile pre Bratislavu
              </p>
              <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                Dostaňte firmu medzi top 3 výsledky na Google mapách.
              </h1>
              <p className="mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
                Pomáhame lokálnym firmám získať viac dopytov, hovorov a rezervácií cez Google Business Profile.
                Praktický plán, jasné kroky a 90-dňová garancia.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button
                  size="lg"
                  onClick={handleBookAppointment}
                  className="h-auto rounded-full px-7 py-4 text-base shadow-elevated"
                >
                  Rezervovať konzultáciu
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" asChild className="h-auto rounded-full px-7 py-4 text-base">
                  <a href="#process">Ako prebieha spolupráca</a>
                </Button>
              </div>
            </div>

            <Card className="reveal reveal-delay-1 border-white/60 bg-white/80 p-7 shadow-elevated backdrop-blur">
              <h2 className="text-xl font-semibold">Čo získate počas úvodnej konzultácie</h2>
              <ul className="mt-5 space-y-4 text-sm sm:text-base">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-primary" />
                  Rýchly audit vášho profilu a porovnanie s top konkurenciou.
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-primary" />
                  Identifikáciu najväčších chýb, ktoré vám berú pozície.
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-primary" />
                  Konkrétny plán na nasledujúcich 90 dní.
                </li>
              </ul>
              <div className="mt-6 rounded-2xl bg-muted/70 p-4 text-sm text-muted-foreground">
                Bez nátlaku. Odídete s jasným odporúčaním, či je pre vás tento balík vhodný.
              </div>
            </Card>
          </div>
        </section>

        <section className="px-4 pb-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-4 sm:grid-cols-3">
              {stats.map((item, index) => (
                <Card
                  key={item.label}
                  className={`reveal border-white/60 bg-card/85 p-6 shadow-elevated reveal-delay-${index + 1}`}
                >
                  <p className="text-4xl font-semibold text-primary">{item.value}</p>
                  <p className="mt-2 text-lg font-medium">{item.label}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{item.text}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="px-4 pb-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 max-w-2xl">
              <h2 className="text-3xl font-semibold sm:text-4xl">Proces, ktorý je jasný a merateľný</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Žiadne nejasné reporty. Každý krok má cieľ a každý cieľ má metriku.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {process.map((step, index) => {
                const Icon = step.icon;
                return (
                  <Card
                    key={step.title}
                    className={`reveal border-white/60 bg-card/85 p-7 shadow-elevated reveal-delay-${index + 1}`}
                  >
                    <div className="mb-4 inline-flex rounded-2xl bg-primary/10 p-3 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                    <p className="mt-3 text-muted-foreground">{step.text}</p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <section className="px-4 pb-20 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1fr_0.95fr]">
            <Card className="reveal border-white/60 bg-card/85 p-8 shadow-elevated">
              <h2 className="text-3xl font-semibold sm:text-4xl">Čo je súčasťou balíka</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Optimalizácia nie je len o jednom texte v profile. Pokrývame všetko, čo Google v lokálnom vyhľadávaní
                reálne hodnotí.
              </p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {offer.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm sm:text-base">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="reveal reveal-delay-1 border-primary/30 bg-gradient-hero p-8 text-primary-foreground shadow-elevated">
              <p className="text-sm uppercase tracking-wide text-primary-foreground/80">Ponuka pre nové spolupráce</p>
              <h3 className="mt-3 text-3xl font-semibold">750 EUR jednorazovo</h3>
              <p className="mt-4 text-primary-foreground/90">
                Žiadne mesačné záväzky. Jedna investícia, jasný výsledok, plná transparentnosť.
              </p>
              <div className="mt-6 space-y-3 text-sm sm:text-base">
                <div className="flex items-start gap-2">
                  <CalendarCheck2 className="mt-0.5 h-5 w-5 shrink-0" />
                  90 dní na dosiahnutie top 3 pre dohodnuté kľúčové frázy.
                </div>
                <div className="flex items-start gap-2">
                  <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0" />
                  Ak cieľ nesplníme, vraciame 100 % investície.
                </div>
              </div>
              <Button
                size="lg"
                onClick={handleBookAppointment}
                className="mt-7 h-auto w-full rounded-full bg-white px-7 py-4 text-base text-primary hover:bg-white/90"
              >
                Chcem túto ponuku
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Card>
          </div>
        </section>

        <section className="px-4 pb-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-semibold sm:text-4xl">Časté otázky</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {faq.map((item, index) => (
                <Card
                  key={item.question}
                  className={`reveal border-white/60 bg-card/85 p-6 shadow-elevated reveal-delay-${index + 1}`}
                >
                  <h3 className="text-lg font-semibold">{item.question}</h3>
                  <p className="mt-3 text-muted-foreground">{item.answer}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 pb-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl rounded-3xl border border-border/70 bg-card/80 p-10 text-center shadow-elevated backdrop-blur">
            <h2 className="text-3xl font-semibold sm:text-4xl">
              Ak chcete viac dopytov z Bratislavy, toto je najrýchlejší štart.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
              Rezervujte si 30-minútovú konzultáciu. Získate jasný plán a hneď uvidíte, kde vám dnes unikajú zákazníci.
            </p>
            <Button
              size="lg"
              onClick={handleBookAppointment}
              className="mt-8 h-auto rounded-full px-8 py-4 text-base shadow-elevated"
            >
              Rezervovať konzultáciu
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import landingContent from "@/content/landing-content.json";
import {
  ArrowRight,
  CalendarCheck2,
  CheckCircle2,
  Gauge,
  LineChart,
  MapPin,
  SearchCheck,
  ShieldCheck,
} from "lucide-react";

const content = landingContent;

const processIcons = [SearchCheck, MapPin, LineChart];
const pricingIcons = [CalendarCheck2, ShieldCheck];

const Index = () => {
  const handleBookAppointment = () => {
    window.open(content.bookingUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#top" className="flex items-center gap-2 text-sm font-semibold tracking-wide text-foreground">
            {content.brandName}
          </a>
          <Button onClick={handleBookAppointment} className="rounded-full px-5">
            {content.headerCta}
          </Button>
        </div>
      </header>

      <main id="top">
        <section className="hero-ambient relative overflow-hidden px-4 pb-20 pt-16 sm:px-6 lg:px-8">
          <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="reveal">
              <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                <Gauge className="h-4 w-4" />
                {content.heroBadge}
              </p>
              <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">{content.heroTitle}</h1>
              <p className="mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">{content.heroText}</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button
                  size="lg"
                  onClick={handleBookAppointment}
                  className="h-auto rounded-full px-7 py-4 text-base shadow-elevated"
                >
                  {content.primaryCta}
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" asChild className="h-auto rounded-full px-7 py-4 text-base">
                  <a href="#process">{content.secondaryCta}</a>
                </Button>
              </div>
            </div>

            <Card className="reveal reveal-delay-1 border-white/60 bg-white/80 p-7 shadow-elevated backdrop-blur">
              <h2 className="text-xl font-semibold">{content.consultationTitle}</h2>
              <ul className="mt-5 space-y-4 text-sm sm:text-base">
                {content.consultationItems.map((item, index) => (
                  <li key={`${item}-${index}`} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-6 rounded-2xl bg-muted/70 p-4 text-sm text-muted-foreground">{content.consultationNote}</div>
            </Card>
          </div>
        </section>

        <section className="px-4 pb-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-4 sm:grid-cols-3">
              {content.stats.map((item, index) => (
                <Card
                  key={`${item.label}-${index}`}
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
              <h2 className="text-3xl font-semibold sm:text-4xl">{content.processSectionTitle}</h2>
              <p className="mt-4 text-lg text-muted-foreground">{content.processSectionText}</p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {content.process.map((step, index) => {
                const Icon = processIcons[index] ?? SearchCheck;
                return (
                  <Card
                    key={`${step.title}-${index}`}
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
              <h2 className="text-3xl font-semibold sm:text-4xl">{content.offerSectionTitle}</h2>
              <p className="mt-4 text-lg text-muted-foreground">{content.offerSectionText}</p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {content.offerItems.map((item, index) => (
                  <li key={`${item}-${index}`} className="flex items-start gap-2 text-sm sm:text-base">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="reveal reveal-delay-1 border-primary/30 bg-gradient-hero p-8 text-primary-foreground shadow-elevated">
              <p className="text-sm uppercase tracking-wide text-primary-foreground/80">{content.pricingEyebrow}</p>
              <h3 className="mt-3 text-3xl font-semibold">{content.pricingTitle}</h3>
              <p className="mt-4 text-primary-foreground/90">{content.pricingText}</p>
              <div className="mt-6 space-y-3 text-sm sm:text-base">
                {content.pricingItems.map((item, index) => {
                  const Icon = pricingIcons[index] ?? CheckCircle2;
                  return (
                    <div key={`${item}-${index}`} className="flex items-start gap-2">
                      <Icon className="mt-0.5 h-5 w-5 shrink-0" />
                      {item}
                    </div>
                  );
                })}
              </div>
              <Button
                size="lg"
                onClick={handleBookAppointment}
                className="mt-7 h-auto w-full rounded-full bg-white px-7 py-4 text-base text-primary hover:bg-white/90"
              >
                {content.pricingCta}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Card>
          </div>
        </section>

        <section className="px-4 pb-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-semibold sm:text-4xl">{content.faqTitle}</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {content.faq.map((item, index) => (
                <Card
                  key={`${item.question}-${index}`}
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
            <h2 className="text-3xl font-semibold sm:text-4xl">{content.finalTitle}</h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">{content.finalText}</p>
            <Button
              size="lg"
              onClick={handleBookAppointment}
              className="mt-8 h-auto rounded-full px-8 py-4 text-base shadow-elevated"
            >
              {content.primaryCta}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;

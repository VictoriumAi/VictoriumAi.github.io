import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Target, Search, FileCheck, Award } from "lucide-react";
const Index = () => {
  const handleBookAppointment = () => {
    window.open("https://victorium.zohobookings.eu/#/251779000000049052", "_blank");
  };
  return <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl">
              Dominujte Miestne Vyhľadávanie: Dostaňte Vašu Firmu do Top 3 v Bratislave
            </h1>
            <p className="mx-auto mb-8 max-w-3xl text-lg text-primary-foreground/90 sm:text-xl">
              Musíte byť v prvej trojke rebríčka Google Business Profile, kde sa uskutočňuje 75 % kliknutí. Kým vaši konkurenti zápasia s neaktuálnymi stratégiami, my sme vyvinuli systematický prístup, ktorý vám zaručí umiestnenie v prvej trojke rebríčka do 90 dní. Náš balík optimalizácie GBP kombinuje konkurenčné informácie, strategické riadenie citácií a vlastné techniky, o ktorých väčšina agentúr ani nevie, že existujú. Toto je váš plán na dosiahnutie dominancie v lokálnom vyhľadávaní.

















        
            </p>
            <Button size="lg" onClick={handleBookAppointment} className="bg-white text-primary hover:bg-white/90 shadow-elevated text-lg px-8 py-6 h-auto">
              Rezervovať Konzultáciu
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-foreground sm:text-4xl">
            3 hlavné výhody: Prečo by sa mali stať miestne rebríčky vašou hlavnou prioritou
          </h2>
          <div className="grid gap-8 sm:grid-cols-3">
            <Card className="p-8 text-center shadow-elevated hover:shadow-xl transition-shadow">
              <div className="mb-4 text-5xl font-bold text-primary">75%</div>
              <div className="text-lg font-semibold text-foreground mb-2">Kliknutí</div>
              <p className="text-muted-foreground">
                  75 % kliknutí smeruje na prvé 3 výsledky v Google Business Profile
              </p>
            </Card>
            <Card className="p-8 text-center shadow-elevated hover:shadow-xl transition-shadow">
              <div className="mb-4 text-5xl font-bold text-primary">3x</div>
              <div className="text-lg font-semibold text-foreground mb-2">Viac Hovorov</div>
              <p className="text-muted-foreground">
                dostávajú firmy v prvej trojke v porovnaní s firmami na pozíciách 4–10.
              </p>
            </Card>
            <Card className="p-8 text-center shadow-elevated hover:shadow-xl transition-shadow">
              <div className="mb-4 text-5xl font-bold text-primary">90</div>
              <div className="text-lg font-semibold text-foreground mb-2">Dní</div>
              <p className="text-muted-foreground">
                Náš garantovaný časový rámec na dosiahnutie výsledku alebo vrátenie peňazí      
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Competitive Intelligence Section */}
      <section className="bg-muted py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
              Náš systém konkurenčného spravodajstva: Viete to, čo vaši konkurenti nevedia
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
              Väčšina firiem optimalizuje naslepo a háda, čo by mohlo fungovať. My používame vlastnú technológiu LeadSnap na vykonávanie hlbokej konkurenčnej analýzy, ktorá odhaľuje, čo presne robia vaši najlepší konkurenti správne a, čo je ešte dôležitejšie, kde sú zraniteľní. Nie je to povrchný výskum. Analyzujeme ich profily Google Business na úrovni služieb, skúmame každú kategóriu, každý príspevok, každý vzor odpovede na recenziu a každý obsah, ktorý publikujú. Ale nezostávame len pri ich profiloch. Kontrolujeme ich webové stránky z hľadiska lokálnych SEO signálov, skúmame ich citácie v stovkách adresárov a identifikujeme medzery v ich stratégii, ktoré môžete využiť. Keď zistíme, že váš konkurent má dobré umiestnenie v rebríčku „havarijný servis Bratislava“, ale nie je optimalizovaný pre „24-hodinový havarijný servis v Bratislave“, je to príležitosť. Keď zistíme, že zanedbali možnosti citácií v adresároch špecializovaných odvetví, okamžite to využijeme.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <Card className="p-6 shadow-elevated">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <div className="mb-2 text-xl font-semibold text-foreground">01</div>
              <h3 className="mb-2 text-lg font-bold text-foreground">Hĺbková Analýza Profilu</h3>
              <p className="text-muted-foreground">
                Kompletná analýza optimalizácie GBP konkurentov, kategórií, príspevkov a vzorcov zapojenia
              </p>
            </Card>
            <Card className="p-6 shadow-elevated">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Search className="h-6 w-6 text-primary" />
              </div>
              <div className="mb-2 text-xl font-semibold text-foreground">02</div>
              <h3 className="mb-2 text-lg font-bold text-foreground">Audit Webovej Stránky</h3>
              <p className="text-muted-foreground">
                Technický SEO prehľad konkurenčných stránok na nájdenie miestnych faktorov hodnotenia, ktoré využívajú
              </p>
            </Card>
            <Card className="p-6 shadow-elevated">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <FileCheck className="h-6 w-6 text-primary" />
              </div>
              <div className="mb-2 text-xl font-semibold text-foreground">03</div>
              <h3 className="mb-2 text-lg font-bold text-foreground">Mapovanie Citácií</h3>
              <p className="text-muted-foreground">
                Komplexná analýza citácií odhaľujúca strategické príležitosti
              </p>
            </Card>
            <Card className="p-6 shadow-elevated">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <div className="mb-2 text-xl font-semibold text-foreground">04</div>
              <h3 className="mb-2 text-lg font-bold text-foreground">Identifikácia Medzier</h3>
              <p className="text-muted-foreground">
                Strategické príležitosti, kde môžete prekonať konkurentov cez cielenú optimalizáciu
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Citation Management Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
              Strategické Riadenie Citácií: Skrytý Faktor Hodnotenia
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
              Citácie sú zmienky o názve vašej firmy, adrese a telefónnom čísle na celom webe. Google ich používa na overenie legitimity vášho podnikania a určenie pozície v hodnotení. Ale tu je to, čo väčšina agentúr prehliadne: nie všetky citácie sú vytvorené rovnako a zlé citácie aktívne škodí vašim umiestneniam.
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            <Card className="p-8 shadow-elevated">
              <h3 className="mb-4 text-xl font-bold text-foreground">Audit Citácií</h3>
              <p className="text-muted-foreground">
                Identifikujeme všetky existujúce citácie, označujeme nezrovnalosti a spamové zdroje, ktoré poškodzujú vašu dôveryhodnosť.
              </p>
            </Card>
            <Card className="p-8 shadow-elevated">
              <h3 className="mb-4 text-xl font-bold text-foreground">Odstránenie Toxických Citácií  </h3>
              <p className="text-muted-foreground">
                Odstránenie alebo oprava citácií na nekvalitných stránkach, ktoré Google vníma ako spamové signály.
              </p>
            </Card>
            <Card className="p-8 shadow-elevated">
              <h3 className="mb-4 text-xl font-bold text-foreground">Prémiové Umiestnenie</h3>
              <p className="text-muted-foreground">
                Budovanie citácií na vysoko renomovaných, odvetvovo špecifických adresároch, o ktorých vaša konkurencia ani nepremýšľa.
              </p>
            </Card>
          </div>
          <div className="mt-12 rounded-lg bg-muted p-8 text-center">
            <p className="text-lg text-foreground">
              Naša tajná zbraň? Zostavili sme vlastnú databázu s viac ako 200 vysoko autoritatívnymi zdrojmi citácií, o ktorých existencii väčšina agentúr nevie. Nie sú to bežné adresáre, ktoré používa každý. Ide o špecializované platformy pre konkrétne odvetvia, ktoré majú v algoritme Google obrovskú váhu. Jedna citácia na správnej webovej stránke priemyselného združenia môže mať väčší vplyv ako 20 generických záznamov v adresároch. V tomto sa odlišujeme od všetkých ostatných služieb optimalizácie GBP. A tiež preto máme písomnú záruku, že vám vrátime plnú sumu, ak sa stane prakticky nemožné, že toto všetko nebude fungovať vo váš prospech. 
            </p>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="bg-gradient-hero py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="mb-8 text-3xl font-bold text-primary-foreground sm:text-4xl">
              90-dňová záruka Top 3: náš sľub pre vás
            </h2>
            <p className="mx-auto mb-12 max-w-3xl text-lg text-primary-foreground/90">
              Sme si takí istí našim systémom, že sme ochotní investovať naše peniaze tam, kde sú naše slová. Za jednorazový poplatok 750€ optimalizujeme váš profil Google Business Profile pomocou našej komplexnej metodiky. Ak sa do 90 dní nedostanete do top 3 pre vaše primárne kľúčové slová v Bratislave, dostanete späť všetky peniaze. Bez otázok. Bez skrytých poplatkov. Bez mesačných nákladov, ktoré znižujú vaše zisky.

Nejde o dlhodobú zmluvu, ktorej cieľom je získať od vás maximálny príjem. Ide o spoluprácu zameranú na výsledky, kde my vykonávame prácu, vy vidíte zlepšenie v rebríčku a vyťažíte z väčšej viditeľnosti a väčšieho počtu zákazníkov. Väčšina agentúr chce s vami uzavrieť 12-mesačné zmluvy, pretože si nie sú isté, či dokážu dosiahnuť rýchle výsledky. Vylepšili sme náš proces do takej miery, že 90 dní je viac než dostatočný čas na dosiahnutie umiestnenia v top 3 pre firmy, ktoré sa riadia našimi odporúčaniami.
            </p>
            <div className="grid gap-8 sm:grid-cols-3 mb-12">
              <Card className="p-8 bg-white/10 backdrop-blur-sm border-white/20">
                <h3 className="mb-2 text-2xl font-bold text-primary-foreground">750€ Jednorazový Poplatok</h3>
                <p className="text-primary-foreground/80">
                  Žiadne mesačné poplatky, žiadne prekvapenia, žiadne skryté náklady. Len jedna transparentná investícia.
                </p>
              </Card>
              <Card className="p-8 bg-white/10 backdrop-blur-sm border-white/20">
                <h3 className="mb-2 text-2xl font-bold text-primary-foreground">90-Dňový Časový Rámec</h3>
                <p className="text-primary-foreground/80">
                  Pracujeme rýchlo a strategicky. Zlepšenie pozície vo výsledkoch vyhľadávania uvidíte už za niekoľko týždňov, do 90 dní sa dostanete do prvej trojky.
                </p>
              </Card>
              <Card className="p-8 bg-white/10 backdrop-blur-sm border-white/20">
                <h3 className="mb-2 text-2xl font-bold text-primary-foreground">Záruka Vrátenia Peňazí</h3>
                <p className="text-primary-foreground/80">
                  Ak sa po 90 dňoch nedostanete do prvej trojky, vrátime vám 100 % vašej investície. Žiadne riziko pre vás.
                </p>
              </Card>
            </div>
            <Button size="lg" onClick={handleBookAppointment} className="bg-white text-primary hover:bg-white/90 shadow-elevated text-lg px-8 py-6 h-auto">
              Začať Teraz - Rezervovať Konzultáciu
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-3xl font-bold text-foreground sm:text-4xl">
            Ste pripravení ovládnuť lokálne vyhľadávanie v Bratislave?
          </h2>
          <p className="mb-8 text-lg text-muted-foreground">
            V súčasnosti spolupracujeme s obmedzeným počtom firiem, aby sme zachovali kvalitu a zabezpečili výsledky. Táto ponuka v hodnote 750€ s našou 90-dňovou zárukou umiestnenia v top 3 je k dispozícii na okamžité využitie. Akonáhle budeme spolupracovať s viacerými firmami vo vašej konkrétnej kategórii a geografickej oblasti, budeme musieť pozastaviť prijímanie nových klientov, aby sme sa vyhli konfliktu záujmov.

Konzultácia je jednoduchá. Preskúmame váš aktuálny profil v Google Business, identifikujeme okamžité príležitosti, vysvetlíme vám, ako vás dostaneme do top 3, a odpovieme na všetky vaše otázky týkajúce sa tohto procesu. Žiadny tlak, žiadny nátlak. Len úprimný rozhovor o tom, či je to správna voľba pre vaše obchodné ciele.

Zarezervujte si strategickú konzultáciu už teraz, aby ste si zabezpečili túto ponuku a začali svoju cestu k dominancii v lokálnom vyhľadávaní. Vaši konkurenti nečakajú. Ani vy by ste nemali.
          </p>
          <Button size="lg" onClick={handleBookAppointment} className="shadow-elevated text-lg px-8 py-6 h-auto">
            Rezervovať Konzultáciu Teraz
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>;
};
export default Index;

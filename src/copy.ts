export const LANGS = ['hr', 'en', 'de', 'it'] as const;
export type Lang = (typeof LANGS)[number];

export const LANG_NAMES: Record<Lang, string> = {
  hr: 'Hrvatski',
  en: 'English',
  de: 'Deutsch',
  it: 'Italiano',
};

// Headings are [before, emphasised, after] so the italic word can sit anywhere in the sentence.
const hr = {
  meta: { title: 'Caltha d.o.o. — Računovodstvo i porezno savjetovanje, Lovran' },
  ui: {
    skip: 'Preskoči na sadržaj',
    language: 'Jezik',
    primaryNav: 'Glavna navigacija',
    footerNav: 'Navigacija u podnožju',
    toTop: 'Caltha d.o.o., na vrh stranice',
  },
  nav: ['O nama', 'Usluge', 'Pristup', 'Kontakt'],
  cta: {
    book: 'Zakažite sastanak',
    request: 'Zatražite konzultacije',
    services: 'Naše usluge',
    write: 'Pišite nam',
    call: 'Nazovite ured',
  },
  hero: {
    eyebrow: 'Računovodstvo · Porezi · Savjetovanje',
    // Avoid đ in serif headings: Bodoni Moda draws its crossbar as a hairline that vanishes at display sizes.
    title: ['Tiho umijeće ', 'urednih', ' knjiga.'],
    lede:
      'Caltha je ured za računovodstvo, porezno i financijsko savjetovanje u Lovranu, na kvarnerskoj obali. Povjerenje nam daju obiteljske tvrtke, osnivači i međunarodne kompanije koje od svojih brojki očekuju jednaku promišljenost kao od svojih odluka.',
    flower: 'Kaljužnica',
  },
  house: {
    eyebrow: 'O nama',
    title: ['Malen ured, utemeljen na brojkama koje ', 'izdrže', ' svaku provjeru.'],
    p1: 'Osnovana 2000. godine, sa sjedištem u Lovranu na Opatijskoj rivijeri, Caltha vodi poslovne knjige obiteljskih tvrtki, poduzeća kojima upravljaju sami vlasnici te hrvatskih podružnica međunarodnih grupa diljem Primorsko-goranske županije i šire. Namjerno radimo s ograničenim brojem klijenata, kako bi svaki dobio pažnju kakvu njegovi poslovi zaslužuju.',
    p2: 'Svaki klijent ima svog voditelja i njegova zamjenika. Ništa ne ovisi o jednoj osobi, ništa se ne improvizira, a svaku brojku prije izlaska iz ureda pregleda još jedan par očiju.',
    signature: 'Partneri Calthe',
  },
  figures: ['Godina osnutka', 'Klijenata', 'Godina prosječne suradnje', 'Radna jezika'],
  services: {
    eyebrow: 'Usluge',
    title: ['Šest područja koja vodimo ', 'dosljedno', '.'],
    lede: 'Preuzimamo cjelokupno poslovanje ili samo jedno područje. U oba slučaja stojimo iza svake brojke koju potpišemo.',
    items: [
      ['Računovodstvo', 'Glavna knjiga, knjige obrtnika i upravljačka izvješća, na vašem stolu prije osmog u mjesecu.'],
      ['Porezno savjetovanje', 'PDV, porez na dobit i zakonito porezno planiranje, uz obranu svakog stajališta pred Poreznom upravom.'],
      ['Obračun plaća', 'Plaće, naknade, odsustva i putni nalozi, diskretno, na vrijeme i u skladu s GDPR-om.'],
      ['Financijsko izvještavanje', 'Godišnji financijski izvještaji, statistička izvješća i izvješća po mjeri vlasnika i matičnih društava.'],
      ['Poslovno savjetovanje', 'Osnivanje, restrukturiranje i dubinska analiza, od prve ideje do upisa u sudski registar.'],
      ['Podrška pri reviziji', 'Radna dokumentacija, suradnja s vašim revizorom i smireno zastupanje kroz svaki nadzor.'],
    ],
  },
  approach: {
    eyebrow: 'Pristup',
    title: ['Četiri koraka. ', 'Ništa', ' improvizirano.'],
    lede: 'Vaše poslovanje preuzimamo postupno, tako da vaša tvrtka ne osjeti ni jedan mjesec zastoja.',
    steps: [
      ['Konzultacije', 'Slušamo i pregledavamo vašu evidenciju, ugovore i poreznu povijest. Bez naknade i bez obveze.'],
      ['Ponuda', 'Pisani opseg posla, rokovi i fiksna naknada, zajedno s imenima vašeg voditelja i zamjenika.'],
      ['Preuzimanje', 'Knjige, računi i bankovno poslovanje preneseni unutar jednog mjeseca, bez zastoja.'],
      ['Kontinuitet', 'Mjesečna izvješća, tromjesečni pregled s vašim voditeljem i nikakvih iznenađenja u prosincu.'],
    ],
  },
  testimonial: {
    label: 'Izjava klijenta',
    quote:
      'U petnaest godina nismo primili nijedno pismo Porezne uprave koje Caltha nije unaprijed predvidjela. To se ne plaća. To se cijeni.',
    by: 'Direktor obiteljske tvrtke, Kvarner',
  },
  contact: {
    eyebrow: 'Kontakt',
    title: ['Započnimo ', 'razgovorom', '.'],
    lede: 'Prvi sastanak u našem uredu u Lovranu ili putem videopoziva. Traje četrdesetak minuta i ne naplaćuje se.',
    office: 'Ured',
    phone: 'Telefon',
    email: 'E-pošta',
    hours: 'Radno vrijeme',
    hoursValue: 'Pon – Pet, 08:30 – 16:30',
    country: 'Hrvatska',
  },
  footer: {
    tagline: 'Privatni ured za računovodstvo, porezno i financijsko savjetovanje u Lovranu, na kvarnerskoj obali.',
    navigate: 'Navigacija',
    registered: 'Podaci o tvrtki',
    court: 'Trgovački sud u Rijeci, MBS 040157374',
    capital: 'Temeljni kapital 20.000,00 kn (2.654,46 EUR)',
    director: 'Direktor: Klaudija Mohorovičić',
    rights: 'Sva prava pridržana.',
    motto: 'Diskrecija je naša prva usluga.',
  },
};

export type Copy = typeof hr;

const en: Copy = {
  meta: { title: 'Caltha d.o.o. — Accounting & Tax Counsel, Lovran' },
  ui: {
    skip: 'Skip to content',
    language: 'Language',
    primaryNav: 'Primary',
    footerNav: 'Footer',
    toTop: 'Caltha d.o.o., back to top',
  },
  nav: ['The House', 'Services', 'Approach', 'Contact'],
  cta: {
    book: 'Book a consultation',
    request: 'Request a consultation',
    services: 'Our services',
    write: 'Write to us',
    call: 'Call the office',
  },
  hero: {
    eyebrow: 'Accounting · Tax · Advisory',
    title: ['The quiet art of ', 'keeping', ' accounts.'],
    lede:
      'Caltha is a practice for accounting, tax and financial counsel in Lovran, on the Kvarner coast, trusted by family enterprises, founders and international companies who expect their figures to be as considered as their decisions.',
    flower: 'The marsh marigold',
  },
  house: {
    eyebrow: 'The House',
    title: ['A small house, built on figures that ', 'withstand', ' scrutiny.'],
    p1: 'Established in 2000 and based in Lovran, on the Opatija Riviera, Caltha keeps the books for family businesses, owner-led companies and the Croatian branches of international groups across Primorsko-goranska and beyond. We accept a deliberately limited number of clients, so that each receives the attention its affairs deserve.',
    p2: 'Every client has a named partner and a named deputy. Nothing depends on a single person, nothing is improvised, and every figure is reviewed by a second pair of eyes before it leaves the office.',
    signature: 'The Partners of Caltha',
  },
  figures: ['Year established', 'Clients served', 'Years average tenure', 'Working languages'],
  services: {
    eyebrow: 'Services',
    title: ['Six disciplines, practised with ', 'consistency', '.'],
    lede: 'We accept the full mandate or a single discipline. Either way, we stand behind every figure we sign.',
    items: [
      ['Accounting', 'General ledger, sole-trader books and management accounts, on your desk before the eighth of every month.'],
      ['Tax advisory', 'VAT, corporate income tax and lawful planning, with every position defended before the tax authority.'],
      ['Payroll', 'Salaries, benefits, leave and travel orders, handled discreetly, punctually and in line with GDPR.'],
      ['Financial reporting', 'Statutory annual filings, statistical returns and bespoke reporting for owners and parent companies.'],
      ['Corporate advisory', 'Formation, restructuring and due diligence, from the first idea to the entry in the court register.'],
      ['Audit support', 'Working papers, liaison with your auditor and calm representation through every inspection.'],
    ],
  },
  approach: {
    eyebrow: 'Approach',
    title: ['Four steps. ', 'Nothing', ' improvised.'],
    lede: 'We take over your mandate gradually, so that your business does not feel a single month of disruption.',
    steps: [
      ['Consultation', 'We listen and review your records, contracts and tax history. No fee, no obligation.'],
      ['Proposal', 'A written scope, timetable and fixed fee, together with the names of your partner and deputy.'],
      ['Transition', 'Books, accounts and banking moved across within a single month, without disruption.'],
      ['Continuity', 'Monthly reports, a quarterly review with your partner, and no surprises in December.'],
    ],
  },
  testimonial: {
    label: 'Client testimonial',
    quote:
      'In fifteen years we have not received a single letter from the tax authority that Caltha had not already anticipated. That is not something one pays for. It is something one values.',
    by: 'Managing Director, family-owned company, Kvarner',
  },
  contact: {
    eyebrow: 'Contact',
    title: ['Let us begin with a ', 'conversation', '.'],
    lede: 'A first meeting at our office in Lovran or by video call. It lasts about forty minutes and carries no fee.',
    office: 'Office',
    phone: 'Telephone',
    email: 'Email',
    hours: 'Hours',
    hoursValue: 'Mon – Fri, 08:30 – 16:30',
    country: 'Croatia',
  },
  footer: {
    tagline: 'A private practice for accounting, tax and financial counsel in Lovran, on the Kvarner coast.',
    navigate: 'Navigate',
    registered: 'Registered',
    court: 'Commercial Court in Rijeka, MBS 040157374',
    capital: 'Share capital HRK 20,000.00 (EUR 2,654.46)',
    director: 'Director: Klaudija Mohorovičić',
    rights: 'All rights reserved.',
    motto: 'Discretion is our first service.',
  },
};

const de: Copy = {
  meta: { title: 'Caltha d.o.o. — Buchhaltung & Steuerberatung, Lovran' },
  ui: {
    skip: 'Zum Inhalt springen',
    language: 'Sprache',
    primaryNav: 'Hauptnavigation',
    footerNav: 'Fußzeilennavigation',
    toTop: 'Caltha d.o.o., zum Seitenanfang',
  },
  nav: ['Über uns', 'Leistungen', 'Vorgehen', 'Kontakt'],
  cta: {
    book: 'Termin vereinbaren',
    request: 'Beratung anfragen',
    services: 'Unsere Leistungen',
    write: 'Schreiben Sie uns',
    call: 'Büro anrufen',
  },
  hero: {
    eyebrow: 'Buchhaltung · Steuern · Beratung',
    title: ['Die stille Kunst der ', 'Buchhaltung', '.'],
    lede:
      'Caltha ist ein Büro für Buchhaltung, Steuer- und Finanzberatung in Lovran an der Kvarner-Küste – geschätzt von Familienunternehmen, Gründern und internationalen Firmen, die von ihren Zahlen dieselbe Sorgfalt erwarten wie von ihren Entscheidungen.',
    flower: 'Die Sumpfdotterblume',
  },
  house: {
    eyebrow: 'Über uns',
    title: ['Ein kleines Haus, gebaut auf Zahlen, die jeder Prüfung ', 'standhalten', '.'],
    p1: 'Gegründet im Jahr 2000 und ansässig in Lovran an der Riviera von Opatija, führt Caltha die Bücher von Familienbetrieben, inhabergeführten Unternehmen und kroatischen Niederlassungen internationaler Gruppen in der Gespanschaft Primorje-Gorski kotar und darüber hinaus. Wir betreuen bewusst nur eine begrenzte Zahl von Mandanten, damit jeder die Aufmerksamkeit erhält, die seine Angelegenheiten verdienen.',
    p2: 'Jeder Mandant hat einen festen Ansprechpartner und eine feste Vertretung. Nichts hängt an einer einzelnen Person, nichts wird improvisiert, und jede Zahl wird von einem zweiten Augenpaar geprüft, bevor sie das Büro verlässt.',
    signature: 'Die Partner von Caltha',
  },
  figures: ['Gründungsjahr', 'Mandanten', 'Jahre durchschnittliche Zusammenarbeit', 'Arbeitssprachen'],
  services: {
    eyebrow: 'Leistungen',
    title: ['Sechs Disziplinen, mit ', 'Beständigkeit', ' ausgeübt.'],
    lede: 'Wir übernehmen das gesamte Mandat oder einen einzelnen Bereich. In jedem Fall stehen wir hinter jeder Zahl, die wir unterschreiben.',
    items: [
      ['Buchhaltung', 'Hauptbuch, Bücher für Einzelunternehmer und Managementberichte – vor dem Achten jedes Monats auf Ihrem Tisch.'],
      ['Steuerberatung', 'Umsatzsteuer, Körperschaftsteuer und rechtskonforme Planung – jede Position vertreten wir vor der Steuerbehörde.'],
      ['Lohnabrechnung', 'Gehälter, Zulagen, Urlaub und Reisekosten – diskret, pünktlich und DSGVO-konform.'],
      ['Finanzberichte', 'Gesetzliche Jahresabschlüsse, statistische Meldungen und maßgeschneiderte Berichte für Eigentümer und Muttergesellschaften.'],
      ['Unternehmensberatung', 'Gründung, Umstrukturierung und Due Diligence – von der ersten Idee bis zur Eintragung ins Handelsregister.'],
      ['Prüfungsbegleitung', 'Arbeitspapiere, Abstimmung mit Ihrem Abschlussprüfer und ruhige Begleitung durch jede Prüfung.'],
    ],
  },
  approach: {
    eyebrow: 'Vorgehen',
    title: ['Vier Schritte. ', 'Nichts', ' improvisiert.'],
    lede: 'Wir übernehmen Ihr Mandat schrittweise, damit Ihr Unternehmen keinen einzigen Monat der Unterbrechung spürt.',
    steps: [
      ['Erstgespräch', 'Wir hören zu und prüfen Ihre Unterlagen, Verträge und steuerliche Vorgeschichte. Kostenlos und unverbindlich.'],
      ['Angebot', 'Schriftlicher Leistungsumfang, Zeitplan und Festhonorar – samt den Namen Ihres Ansprechpartners und seiner Vertretung.'],
      ['Übergabe', 'Bücher, Konten und Bankverbindungen werden innerhalb eines Monats übernommen – ohne Unterbrechung.'],
      ['Kontinuität', 'Monatliche Berichte, ein vierteljährliches Gespräch mit Ihrem Ansprechpartner und keine Überraschungen im Dezember.'],
    ],
  },
  testimonial: {
    label: 'Kundenstimme',
    quote:
      'In fünfzehn Jahren haben wir keinen einzigen Brief vom Finanzamt erhalten, den Caltha nicht schon vorausgesehen hätte. Das bezahlt man nicht. Das schätzt man.',
    by: 'Geschäftsführung eines Familienunternehmens, Kvarner',
  },
  contact: {
    eyebrow: 'Kontakt',
    title: ['Beginnen wir mit einem ', 'Gespräch', '.'],
    lede: 'Ein erstes Treffen in unserem Büro in Lovran oder per Videoanruf. Es dauert etwa vierzig Minuten und ist kostenlos.',
    office: 'Büro',
    phone: 'Telefon',
    email: 'E-Mail',
    hours: 'Bürozeiten',
    hoursValue: 'Mo – Fr, 08:30 – 16:30',
    country: 'Kroatien',
  },
  footer: {
    tagline: 'Ein privates Büro für Buchhaltung, Steuer- und Finanzberatung in Lovran an der Kvarner-Küste.',
    navigate: 'Navigation',
    registered: 'Firmendaten',
    court: 'Handelsgericht Rijeka, MBS 040157374',
    capital: 'Stammkapital 20.000,00 HRK (2.654,46 EUR)',
    director: 'Geschäftsführung: Klaudija Mohorovičić',
    rights: 'Alle Rechte vorbehalten.',
    motto: 'Diskretion ist unsere erste Leistung.',
  },
};

const it: Copy = {
  meta: { title: 'Caltha d.o.o. — Contabilità e consulenza fiscale, Lovran' },
  ui: {
    skip: 'Vai al contenuto',
    language: 'Lingua',
    primaryNav: 'Navigazione principale',
    footerNav: 'Navigazione a piè di pagina',
    toTop: 'Caltha d.o.o., torna all’inizio',
  },
  nav: ['Chi siamo', 'Servizi', 'Approccio', 'Contatti'],
  cta: {
    book: 'Prenota una consulenza',
    request: 'Richiedi una consulenza',
    services: 'I nostri servizi',
    write: 'Scriveteci',
    call: 'Chiamate lo studio',
  },
  hero: {
    eyebrow: 'Contabilità · Fisco · Consulenza',
    title: ['L’arte discreta di ', 'tenere', ' i conti.'],
    lede:
      'Caltha è uno studio di contabilità, consulenza fiscale e finanziaria a Lovran, sulla costa del Quarnaro, scelto da imprese familiari, fondatori e aziende internazionali che si aspettano dai propri numeri la stessa cura che mettono nelle proprie decisioni.',
    flower: 'La calta palustre',
  },
  house: {
    eyebrow: 'Chi siamo',
    title: ['Una piccola casa, fondata su numeri che ', 'reggono', ' ogni verifica.'],
    p1: 'Fondata nel 2000 e con sede a Lovran, sulla Riviera di Opatija, Caltha tiene la contabilità di imprese familiari, aziende guidate dai titolari e filiali croate di gruppi internazionali in tutta la Regione litoraneo-montana e oltre. Accettiamo volutamente un numero limitato di clienti, perché ciascuno riceva l’attenzione che i suoi affari meritano.',
    p2: 'Ogni cliente ha un referente e un sostituto designati. Nulla dipende da una sola persona, nulla è improvvisato e ogni cifra viene controllata da un secondo paio d’occhi prima di lasciare lo studio.',
    signature: 'I partner di Caltha',
  },
  figures: ['Anno di fondazione', 'Clienti seguiti', 'Anni di collaborazione media', 'Lingue di lavoro'],
  services: {
    eyebrow: 'Servizi',
    title: ['Sei discipline, esercitate con ', 'costanza', '.'],
    lede: 'Assumiamo l’incarico completo o una singola disciplina. In ogni caso, rispondiamo di ogni cifra che firmiamo.',
    items: [
      ['Contabilità', 'Contabilità generale, registri per ditte individuali e report gestionali, sulla vostra scrivania entro l’otto di ogni mese.'],
      ['Consulenza fiscale', 'IVA, imposta sul reddito delle società e pianificazione nel rispetto della legge, con ogni posizione difesa davanti all’amministrazione fiscale.'],
      ['Paghe', 'Stipendi, indennità, ferie e trasferte, gestiti con discrezione, puntualità e nel rispetto del GDPR.'],
      ['Reporting finanziario', 'Bilanci annuali obbligatori, comunicazioni statistiche e report su misura per titolari e società capogruppo.'],
      ['Consulenza societaria', 'Costituzione, ristrutturazione e due diligence, dalla prima idea all’iscrizione nel registro delle imprese.'],
      ['Supporto alla revisione', 'Carte di lavoro, coordinamento con il vostro revisore e un’assistenza serena in ogni ispezione.'],
    ],
  },
  approach: {
    eyebrow: 'Approccio',
    title: ['Quattro passi. ', 'Nulla', ' di improvvisato.'],
    lede: 'Assumiamo l’incarico in modo graduale, così che la vostra attività non risenta di un solo mese di interruzione.',
    steps: [
      ['Consulenza', 'Ascoltiamo ed esaminiamo documenti, contratti e storia fiscale. Senza costi né impegno.'],
      ['Proposta', 'Ambito, tempistiche e compenso fisso per iscritto, insieme ai nomi del vostro referente e del suo sostituto.'],
      ['Passaggio', 'Libri contabili, conti e rapporti bancari trasferiti entro un solo mese, senza interruzioni.'],
      ['Continuità', 'Report mensili, una revisione trimestrale con il vostro referente e nessuna sorpresa a dicembre.'],
    ],
  },
  testimonial: {
    label: 'Testimonianza di un cliente',
    quote:
      'In quindici anni non abbiamo ricevuto una sola lettera dall’amministrazione fiscale che Caltha non avesse già previsto. Non è qualcosa che si paga. È qualcosa che si apprezza.',
    by: 'Direzione di un’azienda di famiglia, Quarnaro',
  },
  contact: {
    eyebrow: 'Contatti',
    title: ['Iniziamo con una ', 'conversazione', '.'],
    lede: 'Un primo incontro nel nostro studio a Lovran o in videochiamata. Dura circa quaranta minuti ed è gratuito.',
    office: 'Studio',
    phone: 'Telefono',
    email: 'E-mail',
    hours: 'Orari',
    hoursValue: 'Lun – Ven, 08:30 – 16:30',
    country: 'Croazia',
  },
  footer: {
    tagline: 'Uno studio privato di contabilità, consulenza fiscale e finanziaria a Lovran, sulla costa del Quarnaro.',
    navigate: 'Navigazione',
    registered: 'Dati societari',
    court: 'Tribunale commerciale di Rijeka, MBS 040157374',
    capital: 'Capitale sociale 20.000,00 HRK (2.654,46 EUR)',
    director: 'Legale rappresentante: Klaudija Mohorovičić',
    rights: 'Tutti i diritti riservati.',
    motto: 'La discrezione è il nostro primo servizio.',
  },
};

export const COPY: Record<Lang, Copy> = { hr, en, de, it };

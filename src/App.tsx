import { useEffect, useState } from 'react';
import { COPY, LANGS, LANG_NAMES, type Lang } from './copy';
import { Arrow, Flower, Guilloche, Seal } from './ornaments';

// Address, email and registry details are from the court register (sudreg.pravosudje.hr, MBS 040157374).
// The client/tenure/language figures, testimonial and office hours are still placeholders.
const CONTACT = {
  phone: '+385 51 293 900',
  email: 'caltha@ri.t-com.hr',
  street: '26. divizije 18',
  town: '51415 Lovran',
};

const HREFS = ['#house', '#services', '#approach', '#contact'];
const FIGURES = [['2000'], ['240', '+'], ['11'], ['4']];
const ROMAN = ['I', 'II', 'III', 'IV', 'V', 'VI'];
const STORAGE_KEY = 'caltha.lang';

const tel = `tel:${CONTACT.phone.replace(/\s/g, '')}`;

// Croatian unless the visitor picked another language on an earlier visit.
function useLang() {
  const [lang, setLang] = useState<Lang>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as Lang | null;
      return saved && LANGS.includes(saved) ? saved : 'hr';
    } catch {
      return 'hr';
    }
  });

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = COPY[lang].meta.title;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // Storage blocked (private mode): the choice simply lasts for this visit.
    }
  }, [lang]);

  return [lang, setLang] as const;
}

// Fades sections in once as they scroll into view. Content stays visible if this never runs.
function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
    );
    document.documentElement.classList.add('reveal-ready');
    document.querySelectorAll('[data-reveal]').forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

const Em = ({ parts }: { parts: string[] }) => (
  <>
    {parts[0]}
    <em>{parts[1]}</em>
    {parts[2]}
  </>
);

function Brand({ label }: { label: string }) {
  return (
    <a href="#top" className="brand" aria-label={label}>
      <Flower className="brand-mark" />
      <span>
        <span className="brand-name">Caltha</span>
        <span className="brand-sub">d.o.o. · Lovran</span>
      </span>
    </a>
  );
}

export default function App() {
  const [lang, setLang] = useLang();
  const t = COPY[lang];
  useReveal();

  return (
    <>
      <a className="skip" href="#main">
        {t.ui.skip}
      </a>

      <header className="header" id="top">
        <div className="container">
          <nav className="nav" aria-label={t.ui.primaryNav}>
            {HREFS.map((href, i) => (
              <a key={href} href={href}>
                {t.nav[i]}
              </a>
            ))}
          </nav>
          <Brand label={t.ui.toTop} />
          <div className="header-end">
            <div className="lang" role="group" aria-label={t.ui.language}>
              {LANGS.map((code) => (
                <button
                  key={code}
                  type="button"
                  lang={code}
                  aria-label={LANG_NAMES[code]}
                  aria-pressed={code === lang}
                  onClick={() => setLang(code)}
                >
                  {code.toUpperCase()}
                </button>
              ))}
            </div>
            <a className="btn btn-primary btn-sm" href="#contact">
              {t.cta.book}
            </a>
          </div>
        </div>
      </header>

      <main id="main">
        <section className="hero" aria-labelledby="hero-title">
          <div className="container">
            <div>
              <p className="eyebrow" data-reveal>
                {t.hero.eyebrow}
              </p>
              <h1 id="hero-title" data-reveal="1">
                <Em parts={t.hero.title} />
              </h1>
              <p className="lede" data-reveal="2">
                {t.hero.lede}
              </p>
              <div className="actions" data-reveal="3">
                <a className="btn btn-primary" href="#contact">
                  {t.cta.request} <Arrow />
                </a>
                <a className="link" href="#services">
                  {t.cta.services}
                </a>
              </div>
              <p className="languages" data-reveal="3">
                {LANGS.map((code) => LANG_NAMES[code]).join(' · ')}
              </p>
            </div>

            <div className="hero-art" data-reveal="2">
              <figure className="arch">
                <Guilloche className="arch-guilloche" />
                <Flower className="arch-flower" />
                <figcaption>
                  <em lang="la">Caltha palustris</em>
                  <span>{t.hero.flower}</span>
                </figcaption>
              </figure>
              <Seal className="seal" text="Caltha d.o.o. · Lovran · Anno MM · " />
              <div className="double-rule" />
            </div>
          </div>
        </section>

        <div className="band on-dark">
          <ul className="container">
            {t.services.items.slice(0, 5).map(([title], i) => (
              <li key={i}>{title}</li>
            ))}
          </ul>
        </div>

        <section className="section house" id="house" aria-labelledby="house-title">
          <div className="container">
            <div>
              <p className="eyebrow" data-reveal>
                {t.house.eyebrow}
              </p>
              <h2 className="h2" id="house-title" data-reveal="1">
                <Em parts={t.house.title} />
              </h2>
            </div>
            <div className="prose" data-reveal="2">
              <p>{t.house.p1}</p>
              <p>{t.house.p2}</p>
              <p className="signature">{t.house.signature}</p>
            </div>
            <dl className="figures" data-reveal>
              {FIGURES.map(([value, suffix], i) => (
                <div className="figure" key={i}>
                  <dt>{t.figures[i]}</dt>
                  <dd>
                    {value}
                    {suffix && <sup>{suffix}</sup>}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="section services on-dark" id="services" aria-labelledby="services-title">
          <Guilloche className="services-guilloche" />
          <div className="container">
            <div className="section-head">
              <div>
                <p className="eyebrow" data-reveal>
                  {t.services.eyebrow}
                </p>
                <h2 className="h2" id="services-title" data-reveal="1">
                  <Em parts={t.services.title} />
                </h2>
              </div>
              <p className="lede" data-reveal="2">
                {t.services.lede}
              </p>
            </div>
            <ul className="service-grid" data-reveal>
              {t.services.items.map(([title, text], i) => (
                <li className="service" key={i}>
                  <span className="service-num">{ROMAN[i]}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section approach" id="approach" aria-labelledby="approach-title">
          <div className="container">
            <div className="section-head">
              <div>
                <p className="eyebrow" data-reveal>
                  {t.approach.eyebrow}
                </p>
                <h2 className="h2" id="approach-title" data-reveal="1">
                  <Em parts={t.approach.title} />
                </h2>
              </div>
              <p className="lede" data-reveal="2">
                {t.approach.lede}
              </p>
            </div>
            <ol className="steps" data-reveal>
              {t.approach.steps.map(([title, text], i) => (
                <li className="step" key={i}>
                  <span className="step-dot">0{i + 1}</span>
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section testimonial" aria-label={t.testimonial.label}>
          <figure className="container" data-reveal>
            <span className="quote-mark" aria-hidden="true">
              “
            </span>
            <blockquote>
              <p>{t.testimonial.quote}</p>
            </blockquote>
            <figcaption>{t.testimonial.by}</figcaption>
          </figure>
        </section>

        <section className="section contact on-dark" id="contact" aria-labelledby="contact-title">
          <div className="container">
            <div>
              <p className="eyebrow" data-reveal>
                {t.contact.eyebrow}
              </p>
              <h2 className="h2" id="contact-title" data-reveal="1">
                <Em parts={t.contact.title} />
              </h2>
              <p className="lede" data-reveal="2">
                {t.contact.lede}
              </p>
              <div className="actions" data-reveal="3">
                <a className="btn btn-brass" href={`mailto:${CONTACT.email}`}>
                  {t.cta.write} <Arrow />
                </a>
                <a className="btn btn-ghost" href={tel}>
                  {t.cta.call}
                </a>
              </div>
            </div>

            <address className="card" data-reveal="2">
              <div className="card-head">
                <Flower className="brand-mark" />
                <span>Caltha d.o.o.</span>
              </div>
              <dl className="details">
                <div>
                  <dt>{t.contact.office}</dt>
                  <dd>
                    {CONTACT.street}
                    <br />
                    {CONTACT.town}, {t.contact.country}
                  </dd>
                </div>
                <div>
                  <dt>{t.contact.phone}</dt>
                  <dd>
                    <a href={tel}>{CONTACT.phone}</a>
                  </dd>
                </div>
                <div>
                  <dt>{t.contact.email}</dt>
                  <dd>
                    <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
                  </dd>
                </div>
                <div>
                  <dt>{t.contact.hours}</dt>
                  <dd>{t.contact.hoursValue}</dd>
                </div>
              </dl>
            </address>
          </div>
        </section>
      </main>

      <footer className="footer on-dark">
        <div className="container">
          <div className="footer-grid">
            <div>
              <Brand label={t.ui.toTop} />
              <p className="footer-tagline">{t.footer.tagline}</p>
            </div>
            <nav aria-label={t.ui.footerNav}>
              <p className="footer-title">{t.footer.navigate}</p>
              <ul>
                {HREFS.map((href, i) => (
                  <li key={href}>
                    <a href={href}>{t.nav[i]}</a>
                  </li>
                ))}
              </ul>
            </nav>
            <div>
              <p className="footer-title">{t.footer.registered}</p>
              <ul>
                <li lang="hr">CALTHA d.o.o. za prijevoz i otpremništvo</li>
                <li>{t.footer.court}</li>
                <li>OIB 90950146571</li>
                <li>{t.footer.capital}</li>
                <li>{t.footer.director}</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <span>
              © {new Date().getFullYear()} Caltha d.o.o. {t.footer.rights}
            </span>
            <span className="footer-motto">{t.footer.motto}</span>
          </div>
        </div>
      </footer>
    </>
  );
}

import { useEffect, useState } from 'react';
import {
  ArrowUpRight,
  Calendar,
  CheckCircle2,
  Download,import { useEffect, useState } from 'react';
import {
  ArrowUpRight,
  Calendar,
  CheckCircle2,
  Download,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Send,
  Sparkles,
  X,
} from 'lucide-react';

const resumeHref = `${import.meta.env.BASE_URL}resume.pdf`;

const profile = {
  name: 'Riddhesh Mehta',
  title: 'Commerce and Information Systems student at the University of New South Wales',
  location: 'Sydney, Australia',
  email: 'riddheshmehta006@gmail.com',
  summary:
    'I’m a Commerce and Information Systems student who is passionate about finance, accounting, and understanding how businesses and people make important financial decisions. I enjoy learning new things, solving problems, and working with others, which has led me to gain experience across financial services, mortgage broking support, CRM systems, and student mentoring. Through these experiences, I’ve developed strong communication, analytical, and interpersonal skills, and I’m excited to continue growing both personally and professionally within the finance and business world.',
};

const navigation = [
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Experience', href: '#experience' },
  { label: 'Volunteering', href: '#volunteering' },
  { label: 'Contact', href: '#contact' },
];

const socials = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/riddhesh-mehta-3581332b2/',
    icon: Linkedin,
  },
  {
    label: 'Email',
    href: `mailto:${profile.email}`,
    icon: Mail,
  },
];

const experience = [
  {
    company: 'Finance Experience Placeholder',
    role: 'Student Analyst',
    period: '2023 - 2024',
    points: [
      'Distinction Weighted Average Mark (78.33)',
    ],
  },
  {
    company: 'Technology Experience Placeholder',
    role: 'Information Systems Contributor',
    period: '2022 - 2023',
    points: [
      'Explored how systems, data, and technology can improve business processes and user outcomes.',
      'Documented workflows, identified improvement opportunities, and presented practical recommendations.',
    ],
  },
];

const education = [
  {
    institution: 'University of New South Wales',
    degree: 'Bachelor of Commerce / Information Systems',
    period: '2025 - Present',
    details: [
      'Distinction Weighted Average Mark (83.25)',
      'Ranked top 30 for Accounting and Accountability',
      'Ranked 7th for Data Accuracy in Introduction to Data Analytics KNIME assessment',
    ],
  },
  {
    institution: 'University of Technology Sydney',
    degree: 'Bachelor of Commerce / Information Systems',
    period: '2024 - 2025',
    details: [
      'Distinction Weighted Average Mark (78.33)',
      'Focused on finance, business analysis, information systems, and technology-enabled decision making.',
    ],
  },
];

const volunteering = [
  {
    organization: 'Student Society Placeholder',
    role: 'Volunteer',
    period: '2024 - Present',
    points: [
      'Supported student events, networking initiatives, and community engagement activities.',
      'Collaborated with peers to coordinate logistics, communications, and attendee experience.',
      'Built teamwork, leadership, and stakeholder communication skills in a university setting.',
    ],
  },
  {
    organization: 'Community Organisation Placeholder',
    role: 'Community Volunteer',
    period: '2023 - 2024',
    points: [
      'Contributed time to community-focused programs and practical support initiatives.',
      'Worked with volunteers and coordinators to deliver reliable, people-focused outcomes.',
    ],
  },
];

const certifications = [
  {
    name: 'Bloomberg Certificate',
    issuer: 'Bloomberg',
    detail: 'Market concepts, financial instruments, and applied terminal-based learning.',
  },
  {
    name: 'Financial Analysis Certificate',
    issuer: 'Placeholder provider',
    detail: 'Accounting fundamentals, valuation thinking, and business performance analysis.',
  },
  {
    name: 'Information Systems Certificate',
    issuer: 'Placeholder provider',
    detail: 'Systems thinking, data workflows, technology strategy, and digital transformation.',
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.12 },
    );

    document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen text-ink">
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main>
        <Hero />
        <Education />
        <Certifications />
        <Experience />
        <Volunteering />
        <ResumeBand />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function Header({ menuOpen, setMenuOpen }) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line/80 bg-white/90 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-6">
        <a
          href="#about"
          className="group flex items-center gap-3 text-sm font-semibold text-ink"
          onClick={() => setMenuOpen(false)}
        >
          <span className="grid h-9 w-9 place-items-center rounded-md border border-cyan/25 bg-cyan/10 text-cyan transition group-hover:border-cyan/60">
            RM
          </span>
          <span>{profile.name}</span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm text-slate-600 transition hover:bg-slate-100 hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={resumeHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-line bg-white px-4 py-2 text-sm font-medium text-ink transition hover:-translate-y-0.5 hover:border-cyan/50 hover:bg-cyan/5"
          >
            <Download size={16} aria-hidden="true" />
            Resume
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-line bg-white text-ink transition hover:border-cyan/50 hover:bg-cyan/5 lg:hidden"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-line bg-white px-5 py-4 shadow-soft lg:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-2">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-3 text-sm text-slate-700 transition hover:bg-slate-100 hover:text-ink"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href={resumeHref}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-md border border-cyan/30 bg-cyan/10 px-4 py-3 text-sm font-semibold text-cyan"
              onClick={() => setMenuOpen(false)}
            >
              <Download size={16} aria-hidden="true" />
              Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="about" className="px-5 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32 lg:pt-36">
      <div className="mx-auto max-w-4xl">
        <div className="reveal">
          <p className="mb-5 inline-flex items-center gap-2 rounded-md border border-mint/20 bg-mint/10 px-3 py-2 text-sm font-medium text-mint">
            <span className="h-2 w-2 rounded-full bg-mint animate-pulseSoft" aria-hidden="true" />
            Open to opportunities within the Finance and/or Accounting Industry
          </p>

          <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] text-ink sm:text-6xl lg:text-7xl">
            {profile.name}
          </h1>
          <p className="mt-5 max-w-3xl text-xl leading-8 text-cyan sm:text-2xl">{profile.title}</p>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-700 sm:text-lg">
            {profile.summary}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={resumeHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-cyan"
            >
              <Download size={18} aria-hidden="true" />
              Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-line bg-white px-5 py-3 text-sm font-semibold text-ink transition hover:-translate-y-1 hover:border-cyan/40 hover:bg-cyan/5"
            >
              <Send size={18} aria-hidden="true" />
              Contact
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            {socials.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('mailto:') ? undefined : '_blank'}
                  rel={social.href.startsWith('mailto:') ? undefined : 'noreferrer'}
                  aria-label={social.label}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-line bg-white text-slate-600 transition hover:-translate-y-1 hover:border-cyan/50 hover:bg-cyan/5 hover:text-cyan"
                >
                  <Icon size={19} aria-hidden="true" />
                </a>
              );
            })}
            <span className="inline-flex items-center gap-2 rounded-md border border-line bg-white px-3 py-2 text-sm text-slate-600">
              <MapPin size={16} aria-hidden="true" />
              {profile.location}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="education" className="px-5 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Education"
          title="Academic foundation in commerce, finance, and information systems."
          description="Currently studying Commerce and Information Systems at UNSW, with a growing focus on finance, analytics, and technology-driven solutions."
        />

        <div className="mt-10 space-y-4">
          {education.map((item, index) => (
            <article
              key={item.institution}
              className="reveal rounded-md border border-line bg-white p-5 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-cyan/40 sm:p-6"
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="grid gap-6 md:grid-cols-[0.9fr_1.4fr] md:items-start">
                <div>
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-md border border-line bg-cyan/10 text-cyan">
                    <GraduationCap size={24} aria-hidden="true" />
                  </div>
                  <p className="text-sm font-medium text-cyan">{item.institution}</p>
                  <h3 className="mt-2 text-xl font-semibold text-ink">{item.degree}</h3>
                  <p className="mt-3 inline-flex items-center gap-2 text-sm text-slate-500">
                    <Calendar size={16} aria-hidden="true" />
                    {item.period}
                  </p>
                </div>
                <ul className="space-y-3">
                  {item.details.map((detail) => (
                    <li key={detail} className="flex gap-3 text-sm leading-7 text-slate-700 sm:text-base">
                      <CheckCircle2 className="mt-1 shrink-0 text-mint" size={18} aria-hidden="true" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Certifications() {
  return (
    <section id="certifications" className="px-5 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Certifications"
          title="Certifications that support finance, markets, and systems knowledge."
          description="Keep your Bloomberg certificate here, then add any extra certificates as you complete them."
        />

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {certifications.map((certification, index) => (
            <article
              key={certification.name}
              className="reveal rounded-md border border-line bg-white p-5 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-cyan/40 sm:p-6"
              style={{ transitionDelay: `${index * 90}ms` }}
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-md border border-line bg-cyan/10 text-cyan">
                <CheckCircle2 size={23} aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold text-ink">{certification.name}</h3>
              <p className="mt-2 text-sm font-medium text-cyan">{certification.issuer}</p>
              <p className="mt-4 text-sm leading-7 text-slate-700">{certification.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="px-5 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Experience"
          title="Experience presented clearly, with space for finance and technology roles."
          description="Placeholder roles that show the tone and structure for your real history."
        />

        <div className="mt-10 space-y-4">
          {experience.map((job, index) => (
            <article
              key={`${job.company}-${job.role}`}
              className="reveal rounded-md border border-line bg-white p-5 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-cyan/40 sm:p-6"
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="grid gap-5 md:grid-cols-[0.9fr_1.4fr]">
                <div>
                  <p className="text-sm font-medium text-cyan">{job.company}</p>
                  <h3 className="mt-2 text-xl font-semibold text-ink">{job.role}</h3>
                  <p className="mt-3 inline-flex items-center gap-2 text-sm text-slate-500">
                    <Calendar size={16} aria-hidden="true" />
                    {job.period}
                  </p>
                </div>
                <ul className="space-y-3">
                  {job.points.map((point) => (
                    <li key={point} className="flex gap-3 text-sm leading-7 text-slate-700 sm:text-base">
                      <CheckCircle2 className="mt-1 shrink-0 text-mint" size={18} aria-hidden="true" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Volunteering() {
  return (
    <section id="volunteering" className="px-5 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Volunteering"
          title="Community involvement, leadership, and contribution beyond coursework."
          description="Use this section for societies, mentoring, community work, events, or causes you have supported."
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {volunteering.map((item, index) => (
            <article
              key={`${item.organization}-${item.role}`}
              className="reveal rounded-md border border-line bg-white p-5 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-mint/40 sm:p-6"
              style={{ transitionDelay: `${index * 90}ms` }}
            >
              <p className="text-sm font-medium text-cyan">{item.organization}</p>
              <h3 className="mt-2 text-xl font-semibold text-ink">{item.role}</h3>
              <p className="mt-3 inline-flex items-center gap-2 text-sm text-slate-500">
                <Calendar size={16} aria-hidden="true" />
                {item.period}
              </p>

              <ul className="mt-6 space-y-3">
                {item.points.map((point) => (
                  <li key={point} className="flex gap-3 text-sm leading-7 text-slate-700">
                    <CheckCircle2 className="mt-1 shrink-0 text-mint" size={18} aria-hidden="true" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ResumeBand() {
  return (
    <section className="px-5 py-12 sm:px-6">
      <div className="reveal mx-auto flex max-w-6xl flex-col gap-5 border-y border-line py-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="inline-flex items-center gap-2 text-sm font-medium text-amber">
            <Sparkles size={16} aria-hidden="true" />
            Resume
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-ink sm:text-3xl">
            A concise snapshot of experience, certifications, and academic background.
          </h2>
        </div>
        <a
          href={resumeHref}
          target="_blank"
          rel="noreferrer"
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-md bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-cyan"
        >
          <Download size={18} aria-hidden="true" />
          Open resume
        </a>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="px-5 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Contact"
          title="Let’s connect about finance, technology, and early-career opportunities."
          description="Use these placeholder links now, then replace them with your real profiles when ready."
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {socials.map((social, index) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith('mailto:') ? undefined : '_blank'}
                rel={social.href.startsWith('mailto:') ? undefined : 'noreferrer'}
                className="reveal group rounded-md border border-line bg-white p-5 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-mint/40 sm:p-6"
                style={{ transitionDelay: `${index * 90}ms` }}
              >
                <span className="mb-6 flex h-12 w-12 items-center justify-center rounded-md border border-line bg-mint/10 text-mint transition group-hover:border-mint/40">
                  <Icon size={22} aria-hidden="true" />
                </span>
                <span className="text-lg font-semibold text-ink">{social.label}</span>
                <span className="mt-3 flex items-center gap-2 text-sm text-slate-500">
                  Connect
                  <ArrowUpRight size={16} aria-hidden="true" />
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="reveal max-w-3xl">
      <p className="text-sm font-semibold text-cyan">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold leading-tight text-ink sm:text-4xl">{title}</h2>
      <p className="mt-4 text-base leading-7 text-slate-600">{description}</p>
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-line px-5 py-8 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <a href="#about" className="transition hover:text-cyan">
          Back to top
        </a>
      </div>
    </footer>
  );
}

export default App;
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Send,
  Sparkles,
  X,
} from 'lucide-react';

const resumeHref = `${import.meta.env.BASE_URL}resume.pdf`;

const profile = {
  name: 'Riddhesh Mehta',
  title: 'Commerce and Information Systems student at the University of New South Wales',
  location: 'Sydney, Australia',
  email: 'riddheshmehta006@gmail.com',
  summary:
    'I’m a Commerce and Information Systems student who is passionate about finance, accounting, and understanding how businesses and people make important financial decisions. I enjoy learning new things, solving problems, and working with others, which has led me to gain experience across financial services, mortgage broking support, CRM systems, and student mentoring. Through these experiences, I’ve developed strong communication, analytical, and interpersonal skills, and I’m excited to continue growing both personally and professionally within the finance and business world.',
};

const navigation = [
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Experience', href: '#experience' },
  { label: 'Volunteering', href: '#volunteering' },
  { label: 'Contact', href: '#contact' },
];

const socials = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/riddhesh-mehta-3581332b2/',
    icon: Linkedin,
  },
  {
    label: 'Email',
    href: `mailto:${profile.email}`,
    icon: Mail,
  },
];

const experience = [
  {
    company: 'Finance Experience Placeholder',
    role: 'Student Analyst',
    period: '2023 - 2024',
    points: [
      'Distinction Weighted Average Mark (78.33)',
    ],
  },
  {
    company: 'Technology Experience Placeholder',
    role: 'Information Systems Contributor',
    period: '2022 - 2023',
    points: [
      'Explored how systems, data, and technology can improve business processes and user outcomes.',
      'Documented workflows, identified improvement opportunities, and presented practical recommendations.',
    ],
  },
];

const education = [
  {
    institution: 'University of New South Wales',
    degree: 'Bachelor of Commerce / Information Systems',
    period: '2025 - Present',
    details: [
      'Distinction Weighted Average Mark (83.25)',
      'Ranked top 30 for Accounting and Accountability',
      'Ranked 7th for Data Accuracy in Introduction to Data Analytics KNIME assessment',
    ],
  },
  {
    institution: 'University of Technology Sydney',
    degree: 'Bachelor of Commerce / Information Systems',
    period: '2024 - 2025',
    details: [
      'Distinction Weighted Average Mark (78.33)',
      'Focused on finance, business analysis, information systems, and technology-enabled decision making.',
    ],
  },
];

const volunteering = [
  {
    organization: 'Student Society Placeholder',
    role: 'Volunteer',
    period: '2024 - Present',
    points: [
      'Supported student events, networking initiatives, and community engagement activities.',
      'Collaborated with peers to coordinate logistics, communications, and attendee experience.',
      'Built teamwork, leadership, and stakeholder communication skills in a university setting.',
    ],
  },
  {
    organization: 'Community Organisation Placeholder',
    role: 'Community Volunteer',
    period: '2023 - 2024',
    points: [
      'Contributed time to community-focused programs and practical support initiatives.',
      'Worked with volunteers and coordinators to deliver reliable, people-focused outcomes.',
    ],
  },
];

const certifications = [
  {
    name: 'Bloomberg Certificate',
    issuer: 'Bloomberg',
    detail: 'Market concepts, financial instruments, and applied terminal-based learning.',
  },
  {
    name: 'Financial Analysis Certificate',
    issuer: 'Placeholder provider',
    detail: 'Accounting fundamentals, valuation thinking, and business performance analysis.',
  },
  {
    name: 'Information Systems Certificate',
    issuer: 'Placeholder provider',
    detail: 'Systems thinking, data workflows, technology strategy, and digital transformation.',
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.12 },
    );

    document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen text-ink">
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main>
        <Hero />
        <Education />
        <Certifications />
        <Experience />
        <Volunteering />
        <ResumeBand />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function Header({ menuOpen, setMenuOpen }) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line/80 bg-white/90 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-6">
        <a
          href="#about"
          className="group flex items-center gap-3 text-sm font-semibold text-ink"
          onClick={() => setMenuOpen(false)}
        >
          <span className="grid h-9 w-9 place-items-center rounded-md border border-cyan/25 bg-cyan/10 text-cyan transition group-hover:border-cyan/60">
            RM
          </span>
          <span>{profile.name}</span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm text-slate-600 transition hover:bg-slate-100 hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={resumeHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-line bg-white px-4 py-2 text-sm font-medium text-ink transition hover:-translate-y-0.5 hover:border-cyan/50 hover:bg-cyan/5"
          >
            <Download size={16} aria-hidden="true" />
            Resume
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-line bg-white text-ink transition hover:border-cyan/50 hover:bg-cyan/5 lg:hidden"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-line bg-white px-5 py-4 shadow-soft lg:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-2">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-3 text-sm text-slate-700 transition hover:bg-slate-100 hover:text-ink"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href={resumeHref}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-md border border-cyan/30 bg-cyan/10 px-4 py-3 text-sm font-semibold text-cyan"
              onClick={() => setMenuOpen(false)}
            >
              <Download size={16} aria-hidden="true" />
              Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="about" className="px-5 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32 lg:pt-36">
      <div className="mx-auto max-w-4xl">
        <div className="reveal">
          <p className="mb-5 inline-flex items-center gap-2 rounded-md border border-mint/20 bg-mint/10 px-3 py-2 text-sm font-medium text-mint">
            <span className="h-2 w-2 rounded-full bg-mint animate-pulseSoft" aria-hidden="true" />
            Open to opportunities within the Finance and/or Accounting Industry
          </p>

          <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] text-ink sm:text-6xl lg:text-7xl">
            {profile.name}
          </h1>
          <p className="mt-5 max-w-3xl text-xl leading-8 text-cyan sm:text-2xl">{profile.title}</p>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-700 sm:text-lg">
            {profile.summary}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={resumeHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-cyan"
            >
              <Download size={18} aria-hidden="true" />
              Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-line bg-white px-5 py-3 text-sm font-semibold text-ink transition hover:-translate-y-1 hover:border-cyan/40 hover:bg-cyan/5"
            >
              <Send size={18} aria-hidden="true" />
              Contact
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            {socials.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('mailto:') ? undefined : '_blank'}
                  rel={social.href.startsWith('mailto:') ? undefined : 'noreferrer'}
                  aria-label={social.label}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-line bg-white text-slate-600 transition hover:-translate-y-1 hover:border-cyan/50 hover:bg-cyan/5 hover:text-cyan"
                >
                  <Icon size={19} aria-hidden="true" />
                </a>
              );
            })}
            <span className="inline-flex items-center gap-2 rounded-md border border-line bg-white px-3 py-2 text-sm text-slate-600">
              <MapPin size={16} aria-hidden="true" />
              {profile.location}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="education" className="px-5 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Education"
          title="Academic foundation in commerce, finance, and information systems."
          description="Currently studying Commerce and Information Systems at UNSW, with a growing focus on finance, analytics, and technology-driven solutions."
        />

        <div className="mt-10 space-y-4">
          {education.map((item, index) => (
            <article
              key={item.institution}
              className="reveal rounded-md border border-line bg-white p-5 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-cyan/40 sm:p-6"
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="grid gap-6 md:grid-cols-[0.9fr_1.4fr] md:items-start">
                <div>
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-md border border-line bg-cyan/10 text-cyan">
                    <GraduationCap size={24} aria-hidden="true" />
                  </div>
                  <p className="text-sm font-medium text-cyan">{item.institution}</p>
                  <h3 className="mt-2 text-xl font-semibold text-ink">{item.degree}</h3>
                  <p className="mt-3 inline-flex items-center gap-2 text-sm text-slate-500">
                    <Calendar size={16} aria-hidden="true" />
                    {item.period}
                  </p>
                </div>
                <ul className="space-y-3">
                  {item.details.map((detail) => (
                    <li key={detail} className="flex gap-3 text-sm leading-7 text-slate-700 sm:text-base">
                      <CheckCircle2 className="mt-1 shrink-0 text-mint" size={18} aria-hidden="true" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Certifications() {
  return (
    <section id="certifications" className="px-5 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Certifications"
          title="Certifications that support finance, markets, and systems knowledge."
          description="Keep your Bloomberg certificate here, then add any extra certificates as you complete them."
        />

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {certifications.map((certification, index) => (
            <article
              key={certification.name}
              className="reveal rounded-md border border-line bg-white p-5 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-cyan/40 sm:p-6"
              style={{ transitionDelay: `${index * 90}ms` }}
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-md border border-line bg-cyan/10 text-cyan">
                <CheckCircle2 size={23} aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold text-ink">{certification.name}</h3>
              <p className="mt-2 text-sm font-medium text-cyan">{certification.issuer}</p>
              <p className="mt-4 text-sm leading-7 text-slate-700">{certification.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="px-5 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Experience"
          title="Experience presented clearly, with space for finance and technology roles."
          description="Placeholder roles that show the tone and structure for your real history."
        />

        <div className="mt-10 space-y-4">
          {experience.map((job, index) => (
            <article
              key={`${job.company}-${job.role}`}
              className="reveal rounded-md border border-line bg-white p-5 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-cyan/40 sm:p-6"
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="grid gap-5 md:grid-cols-[0.9fr_1.4fr]">
                <div>
                  <p className="text-sm font-medium text-cyan">{job.company}</p>
                  <h3 className="mt-2 text-xl font-semibold text-ink">{job.role}</h3>
                  <p className="mt-3 inline-flex items-center gap-2 text-sm text-slate-500">
                    <Calendar size={16} aria-hidden="true" />
                    {job.period}
                  </p>
                </div>
                <ul className="space-y-3">
                  {job.points.map((point) => (
                    <li key={point} className="flex gap-3 text-sm leading-7 text-slate-700 sm:text-base">
                      <CheckCircle2 className="mt-1 shrink-0 text-mint" size={18} aria-hidden="true" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Volunteering() {
  return (
    <section id="volunteering" className="px-5 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Volunteering"
          title="Community involvement, leadership, and contribution beyond coursework."
          description="Use this section for societies, mentoring, community work, events, or causes you have supported."
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {volunteering.map((item, index) => (
            <article
              key={`${item.organization}-${item.role}`}
              className="reveal rounded-md border border-line bg-white p-5 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-mint/40 sm:p-6"
              style={{ transitionDelay: `${index * 90}ms` }}
            >
              <p className="text-sm font-medium text-cyan">{item.organization}</p>
              <h3 className="mt-2 text-xl font-semibold text-ink">{item.role}</h3>
              <p className="mt-3 inline-flex items-center gap-2 text-sm text-slate-500">
                <Calendar size={16} aria-hidden="true" />
                {item.period}
              </p>

              <ul className="mt-6 space-y-3">
                {item.points.map((point) => (
                  <li key={point} className="flex gap-3 text-sm leading-7 text-slate-700">
                    <CheckCircle2 className="mt-1 shrink-0 text-mint" size={18} aria-hidden="true" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ResumeBand() {
  return (
    <section className="px-5 py-12 sm:px-6">
      <div className="reveal mx-auto flex max-w-6xl flex-col gap-5 border-y border-line py-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="inline-flex items-center gap-2 text-sm font-medium text-amber">
            <Sparkles size={16} aria-hidden="true" />
            Resume
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-ink sm:text-3xl">
            A concise snapshot of experience, certifications, and academic background.
          </h2>
        </div>
        <a
          href={resumeHref}
          target="_blank"
          rel="noreferrer"
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-md bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-cyan"
        >
          <Download size={18} aria-hidden="true" />
          Open resume
        </a>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="px-5 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Contact"
          title="Let’s connect about finance, technology, and early-career opportunities."
          description="Use these placeholder links now, then replace them with your real profiles when ready."
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {socials.map((social, index) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith('mailto:') ? undefined : '_blank'}
                rel={social.href.startsWith('mailto:') ? undefined : 'noreferrer'}
                className="reveal group rounded-md border border-line bg-white p-5 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-mint/40 sm:p-6"
                style={{ transitionDelay: `${index * 90}ms` }}
              >
                <span className="mb-6 flex h-12 w-12 items-center justify-center rounded-md border border-line bg-mint/10 text-mint transition group-hover:border-mint/40">
                  <Icon size={22} aria-hidden="true" />
                </span>
                <span className="text-lg font-semibold text-ink">{social.label}</span>
                <span className="mt-3 flex items-center gap-2 text-sm text-slate-500">
                  Connect
                  <ArrowUpRight size={16} aria-hidden="true" />
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="reveal max-w-3xl">
      <p className="text-sm font-semibold text-cyan">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold leading-tight text-ink sm:text-4xl">{title}</h2>
      <p className="mt-4 text-base leading-7 text-slate-600">{description}</p>
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-line px-5 py-8 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <a href="#about" className="transition hover:text-cyan">
          Back to top
        </a>
      </div>
    </footer>
  );
}

export default App;

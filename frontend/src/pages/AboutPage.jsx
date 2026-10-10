import {
  Code2Icon,
  DatabaseIcon,
  ExternalLinkIcon,
  FacebookIcon,
  GithubIcon,
  Globe2Icon,
  InstagramIcon,
  LinkedinIcon,
  MailIcon,
  Layers3Icon,
  ServerIcon,
  ShieldCheckIcon,
  SparklesIcon,
} from "lucide-react";
import { createElement } from "react";
import { DEVELOPER_NAME, PORTFOLIO_URL } from "../config/site";

const technologies = [
  { name: "React", description: "Component-based user interface", icon: Code2Icon },
  { name: "Vite", description: "Fast frontend tooling", icon: SparklesIcon },
  { name: "Node.js", description: "JavaScript runtime", icon: ServerIcon },
  { name: "Express.js", description: "Backend API framework", icon: Layers3Icon },
  { name: "PostgreSQL", description: "Relational database", icon: DatabaseIcon },
  { name: "JavaScript", description: "Application language", icon: Code2Icon },
  { name: "Git", description: "Version control", icon: Globe2Icon },
  { name: "GitHub", description: "Repository hosting", icon: GithubIcon },
];

const features = [
  {
    title: "Product browsing",
    description: "Browse the public product catalogue and open individual product details.",
    icon: Globe2Icon,
  },
  {
    title: "Admin authentication",
    description: "Admin sign-in protects product management actions with JWT authorization.",
    icon: ShieldCheckIcon,
  },
  {
    title: "Product management",
    description: "Authenticated administrators can add, update, and delete products.",
    icon: Layers3Icon,
  },
];

function AboutPage() {
  return (
    <main className="flex-1">
      <section className="relative overflow-hidden border-b border-base-content/10 bg-base-100">
        <div className="absolute -top-24 right-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-56 w-56 rounded-full bg-secondary/10 blur-3xl" />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:py-24">
          <p className="mb-4 font-mono text-sm uppercase tracking-[0.3em] text-primary">About ByteBazaar</p>
          <h1 className="max-w-3xl text-4xl font-black leading-[1.05] tracking-tight sm:text-6xl">
            Technology that makes
            <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">shopping feel simple.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-base-content/70">
            ByteBazaar is a full-stack e-commerce project focused on a clean shopping experience,
            reliable product management, and a practical PERN architecture.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-16 md:grid-cols-[1fr_1.3fr] md:py-24">
        <div>
          <p className="mb-3 font-mono text-sm uppercase tracking-[0.2em] text-primary">About me</p>
          <h2 className="text-3xl font-bold sm:text-4xl">Sachin Kumar</h2>
          <p className="mt-2 text-base-content/60">Full-Stack Developer | Data Analyst </p>
        </div>
        <div className="rounded-2xl border border-base-content/10 bg-base-100 p-6 shadow-sm sm:p-8">
          <p className="text-lg leading-relaxed text-base-content/80">
            I'm Sachin, a Computer Science and Engineering student passionate about building modern, responsive, and user-friendly web applications. I enjoy working across the full stack, from crafting intuitive interfaces with React and JavaScript to developing robust backend systems with Node.js and Express.js and managing databases like PostgreSQL. I focus on writing clean, maintainable code and creating reliable, scalable digital experiences. I'm continuously exploring new technologies, strengthening my problem-solving skills, and turning ideas into practical applications through real-world projects like ByteBazaar.          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 md:pb-24">
        <div className="flex flex-col gap-8 rounded-2xl border border-base-content/10 bg-base-100 p-6 shadow-sm sm:p-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <p className="mb-3 font-mono text-sm uppercase tracking-[0.2em] text-primary">Meet the developer</p>
            <h2 className="text-3xl font-bold sm:text-4xl">{DEVELOPER_NAME}, Full-Stack Developer</h2>
            <p className="mt-4 leading-relaxed text-base-content/70">
              I&apos;m a Computer Science and Engineering student passionate about building modern,
              scalable, and responsive web applications. I enjoy working across the entire
              development lifecycle, from crafting intuitive user interfaces to building robust
              backend systems, designing databases, and integrating APIs. I focus on writing clean,
              maintainable code and creating reliable digital experiences.
            </p>
            <div className="mt-6 grid gap-4 text-sm text-base-content/70 sm:grid-cols-2">
              {[
                ["Frontend", "HTML5, CSS3, JavaScript, TypeScript, React.js, Next.js, Tailwind CSS, Bootstrap"],
                ["Backend", "Node.js, Express.js, REST APIs, JWT Authentication"],
                ["Databases", "PostgreSQL, MySQL, MongoDB, Redis"],
                ["Programming Languages", "Java, JavaScript, TypeScript, Python, C"],
                ["Tools & Platforms", "Git, GitHub, VS Code, Postman, npm, Vite"],
                ["Deployment & DevOps", "Vercel, Netlify, Docker, GitHub Actions, CI/CD, Linux"],
                ["Core Concepts", "Data Structures & Algorithms, Object-Oriented Programming, Database Design, Authentication & Authorization, Responsive Web Design"],
              ].map(([category, skills]) => (
                <div key={category} className="rounded-xl bg-base-200/70 p-4">
                  <h3 className="font-semibold text-base-content">{category}</h3>
                  <p className="mt-1 leading-relaxed">{skills}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 leading-relaxed text-base-content/70">
              I enjoy learning new technologies, solving real-world problems, and turning ideas
              into practical software solutions.
            </p>
          </div>
          <a
            href={PORTFOLIO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary min-h-12 shrink-0 gap-2"
          >
            View My Portfolio
            <ExternalLinkIcon className="size-4" aria-hidden="true" />
          </a>
        </div>
        <p className="mt-6 text-center text-base-content/65">
          Explore my portfolio to discover my projects, technical skills, and development journey.
        </p>
      </section>

      <section className="bg-base-100">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
          <div className="max-w-2xl">
            <p className="mb-3 font-mono text-sm uppercase tracking-[0.2em] text-primary">The project</p>
            <h2 className="text-3xl font-bold sm:text-4xl">About ByteBazaar</h2>
            <p className="mt-5 leading-relaxed text-base-content/70">
              ByteBazaar is an e-commerce catalogue where visitors can explore products and
              administrators can securely manage the inventory. The application uses React and
              Vite on the frontend, Node.js and Express.js for the API, and PostgreSQL for
              persistent product data.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {technologies.map(({ name, description, icon: Icon }) => (
              <div key={name} className="rounded-xl border border-base-content/10 p-5 transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-md">
                {createElement(Icon, { className: "mb-4 size-6 text-primary", "aria-hidden": true })}
                <h3 className="font-semibold">{name}</h3>
                <p className="mt-1 text-sm text-base-content/60">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <p className="mb-3 font-mono text-sm uppercase tracking-[0.2em] text-primary">What it offers</p>
        <h2 className="text-3xl font-bold sm:text-4xl">Project features</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {features.map(({ title, description, icon: Icon }) => (
            <article key={title} className="rounded-2xl bg-base-100 p-6 shadow-sm ring-1 ring-base-content/10">
              {createElement(Icon, { className: "mb-5 size-7 text-secondary", "aria-hidden": true })}
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-2 leading-relaxed text-base-content/65">{description}</p>
            </article>
          ))}
        </div>
        <a
          href="https://github.com/sachinydv0002/Bytebazaar-pern"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary mt-10"
        >
          View the repository
          <ExternalLinkIcon className="size-4" aria-hidden="true" />
        </a>
      </section>

      <section className="border-t border-base-content/10 bg-base-100">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-12 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">Stay connected</p>
            <h2 className="mt-2 text-2xl font-bold">Let&apos;s connect online.</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {[
              ["GitHub", "https://github.com/sachinydv0002", GithubIcon],
              ["LinkedIn", "https://www.linkedin.com/in/sachinydv0002/", LinkedinIcon],
              ["Instagram", "https://www.instagram.com/sachinydv0002_/", InstagramIcon],
              ["Facebook", "https://www.facebook.com/profile.php?id=100054782516915", FacebookIcon],
              ["Email", "mailto:sachincseiot@gmail.com", MailIcon],
            ].map(([label, href, Icon]) => (
              <a key={label} href={href} {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="btn btn-ghost btn-sm gap-2 border border-base-content/10">
                {createElement(Icon, { className: "size-4", "aria-hidden": true })}{label}
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default AboutPage;

"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Copy,
  List,
  Share2,
  Terminal,
} from "lucide-react";

const article = {
  category: "Deployment",
  title: "Complete Guide to Deploying a Next.js App on a VPS",
  description:
    "Learn how to deploy a production-ready Next.js application on a VPS using Node.js, PM2, Nginx, SSL and Cloudflare.",
  date: "August 10, 2026",
  readTime: "8 min read",
  author: "QuerLabs",
  authorRole: "Engineering Team",
  image: "/blogs/vps-deployment.jpg",
};

const toc = [
  "Why deploy Next.js on a VPS?",
  "Preparing the VPS",
  "Installing Node.js",
  "Deploying the application",
  "Running Next.js with PM2",
  "Configuring Nginx",
  "Adding HTTPS with SSL",
  "Production checklist",
];

export default function BlogArticlePage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">

      {/* ========================================================= */}
      {/* TOP NAV */}
      {/* ========================================================= */}

      <div className="border-b border-slate-100 bg-white">
        <div className="mx-auto flex max-w-7xl items-center px-4 py-3 sm:px-6 md:px-8 lg:px-10">

          <Link
            href="/blogs"
            className="
              group
              inline-flex
              items-center
              gap-2
              text-xs
              font-semibold
              text-slate-500
              transition
              hover:text-violet-600
            "
          >
            <span className="
              flex
              h-8
              w-8
              items-center
              justify-center
              rounded-lg
              bg-slate-50
              transition
              group-hover:bg-violet-50
            ">
              <ArrowLeft className="h-4 w-4" />
            </span>

            Back to Blogs
          </Link>

        </div>
      </div>


      {/* ========================================================= */}
      {/* ARTICLE HEADER */}
      {/* ========================================================= */}

      <header className="relative overflow-hidden border-b border-slate-100">

        {/* Background decoration */}
        <div className="
          pointer-events-none
          absolute
          -left-32
          -top-32
          h-80
          w-80
          rounded-full
          bg-violet-100/60
          blur-3xl
        " />

        <div className="
          pointer-events-none
          absolute
          -right-40
          top-10
          h-96
          w-96
          rounded-full
          bg-fuchsia-100/40
          blur-3xl
        " />

        <div className="
          relative
          mx-auto
          max-w-5xl
          px-4
          pb-10
          pt-10
          text-center
          sm:px-6
          sm:pb-14
          sm:pt-14
          md:px-8
          md:pt-16
          lg:pb-16
        ">

          {/* Category */}
          <div className="mb-5 flex justify-center">

            <span className="
              rounded-full
              bg-violet-50
              px-3
              py-1.5
              text-[10px]
              font-bold
              uppercase
              tracking-[1.5px]
              text-violet-600
              sm:text-xs
            ">
              {article.category}
            </span>

          </div>


          {/* Title */}
          <h1 className="
            mx-auto
            max-w-4xl
            text-3xl
            font-extrabold
            leading-[1.08]
            tracking-tight
            text-slate-950
            sm:text-4xl
            md:text-5xl
            lg:text-6xl
          ">
            {article.title}
          </h1>


          {/* Description */}
          <p className="
            mx-auto
            mt-5
            max-w-2xl
            text-sm
            leading-6
            text-slate-500
            sm:text-base
            sm:leading-7
            md:text-lg
          ">
            {article.description}
          </p>


          {/* Meta */}
          <div className="
            mt-7
            flex
            flex-wrap
            items-center
            justify-center
            gap-x-4
            gap-y-3
            text-[11px]
            font-medium
            text-slate-400
            sm:text-xs
          ">

            <div className="flex items-center gap-1.5">
              <CalendarDays className="h-3.5 w-3.5" />
              {article.date}
            </div>

            <span className="hidden h-1 w-1 rounded-full bg-slate-300 sm:block" />

            <div className="flex items-center gap-1.5">
              <Clock3 className="h-3.5 w-3.5" />
              {article.readTime}
            </div>

            <span className="hidden h-1 w-1 rounded-full bg-slate-300 sm:block" />

            <div className="flex items-center gap-1.5">
              <BookOpen className="h-3.5 w-3.5" />
              Technical Guide
            </div>

          </div>

        </div>
      </header>


      {/* ========================================================= */}
      {/* HERO IMAGE */}
      {/* ========================================================= */}

      <div className="mx-auto max-w-6xl px-4 pt-6 sm:px-6 sm:pt-8 md:px-8 lg:px-10">

        <div className="
          relative
          aspect-[16/9]
          overflow-hidden
          rounded-2xl
          bg-slate-100
          shadow-[0_15px_50px_rgba(15,23,42,0.10)]
          sm:rounded-3xl
          md:aspect-[2/1]
        ">

          <Image
            src={"/vps.png"}
            alt={article.title}
            fill
            priority
            className="object-cover"
          />

          <div className="
            absolute
            inset-0
            bg-gradient-to-t
            from-slate-950/20
            via-transparent
            to-transparent
          " />

        </div>

      </div>


      {/* ========================================================= */}
      {/* ARTICLE AREA */}
      {/* ========================================================= */}

      <div className="
        mx-auto
        max-w-7xl
        px-4
        py-10
        sm:px-6
        sm:py-14
        md:px-8
        lg:px-10
        lg:py-16
      ">

        <div className="grid gap-10 lg:grid-cols-[220px_minmax(0,720px)_1fr] lg:gap-14">

          {/* ===================================================== */}
          {/* LEFT SIDEBAR */}
          {/* ===================================================== */}

          <aside className="hidden lg:block">

            <div className="sticky top-8">

              <p className="
                mb-4
                flex
                items-center
                gap-2
                text-[10px]
                font-bold
                uppercase
                tracking-[1.5px]
                text-slate-400
              ">
                <List className="h-3.5 w-3.5" />
                On this page
              </p>

              <nav className="space-y-1">

                {toc.map((item, index) => (
                  <a
                    key={item}
                    href={`#section-${index + 1}`}
                    className="
                      block
                      border-l-2
                      border-transparent
                      py-1.5
                      pl-3
                      text-xs
                      leading-5
                      text-slate-400
                      transition
                      hover:border-violet-500
                      hover:text-violet-600
                    "
                  >
                    {item}
                  </a>
                ))}

              </nav>

            </div>

          </aside>


          {/* ===================================================== */}
          {/* ARTICLE CONTENT */}
          {/* ===================================================== */}

          <article className="min-w-0">

            {/* Author */}
            <div className="
              mb-9
              flex
              items-center
              justify-between
              gap-4
              border-b
              border-slate-100
              pb-7
            ">

              <div className="flex items-center gap-3">

                <div className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  bg-violet-600
                  text-sm
                  font-extrabold
                  text-white
                  shadow-lg
                  shadow-violet-200
                ">
                  Q
                </div>

                <div>
                  <p className="text-xs font-bold text-slate-900">
                    {article.author}
                  </p>

                  <p className="mt-0.5 text-[10px] text-slate-400">
                    {article.authorRole}
                  </p>
                </div>

              </div>


              <button
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-lg
                  border
                  border-slate-200
                  text-slate-400
                  transition
                  hover:border-violet-200
                  hover:bg-violet-50
                  hover:text-violet-600
                "
                aria-label="Share article"
              >
                <Share2 className="h-4 w-4" />
              </button>

            </div>


            {/* Intro */}
            <div className="
              mb-10
              rounded-2xl
              border
              border-violet-100
              bg-violet-50/60
              p-5
              sm:p-6
            ">

              <p className="
                text-sm
                font-medium
                leading-6
                text-violet-950
                sm:text-base
                sm:leading-7
              ">
                In this guide, we'll take a production-ready Next.js
                application from your local machine to a real VPS server.
                By the end, you'll have your application running behind
                Nginx with PM2 and HTTPS.
              </p>

            </div>


            {/* Section 1 */}
            <section id="section-1" className="scroll-mt-8">

              <h2 className="
                text-2xl
                font-bold
                tracking-tight
                text-slate-950
                sm:text-3xl
              ">
                Why deploy Next.js on a VPS?
              </h2>

              <p className="article-p">
                A VPS gives you direct control over your production
                environment. Instead of relying entirely on a managed
                hosting platform, you control the server, operating system,
                networking, reverse proxy and deployment process.
              </p>

              <p className="article-p">
                This is especially useful when you're building applications
                that require custom infrastructure, background processes,
                databases, private services or more control over deployment.
              </p>

            </section>


            {/* Section 2 */}
            <section id="section-2" className="mt-12 scroll-mt-8">

              <h2 className="
                text-2xl
                font-bold
                tracking-tight
                text-slate-950
                sm:text-3xl
              ">
                Preparing the VPS
              </h2>

              <p className="article-p">
                Start with a clean Ubuntu VPS. Connect to the server using
                SSH and update the system packages before installing the
                tools required for your application.
              </p>


              {/* Code */}
              <div className="code-block">

                <div className="code-header">
                  <div className="flex items-center gap-2">
                    <Terminal className="h-3.5 w-3.5" />
                    <span>Terminal</span>
                  </div>

                  <button className="code-copy">
                    <Copy className="h-3.5 w-3.5" />
                    Copy
                  </button>
                </div>

                <pre>
                  <code>{`sudo apt update
sudo apt upgrade -y

sudo apt install nginx -y`}</code>
                </pre>

              </div>

            </section>


            {/* Section 3 */}
            <section id="section-3" className="mt-12 scroll-mt-8">

              <h2 className="
                text-2xl
                font-bold
                tracking-tight
                text-slate-950
                sm:text-3xl
              ">
                Installing Node.js
              </h2>

              <p className="article-p">
                Next.js requires Node.js to build and run the application.
                For production environments, use a supported LTS version
                instead of relying on the Node.js version provided by the
                operating system.
              </p>

              <div className="code-block">

                <div className="code-header">
                  <span>Terminal</span>

                  <button className="code-copy">
                    <Copy className="h-3.5 w-3.5" />
                    Copy
                  </button>
                </div>

                <pre>
                  <code>{`node --version
npm --version`}</code>
                </pre>

              </div>

            </section>


            {/* Section 4 */}
            <section id="section-4" className="mt-12 scroll-mt-8">

              <h2 className="
                text-2xl
                font-bold
                tracking-tight
                text-slate-950
                sm:text-3xl
              ">
                Deploying the application
              </h2>

              <p className="article-p">
                Clone your project onto the VPS and install the production
                dependencies. Once the dependencies are installed, create
                a production build of your Next.js application.
              </p>

              <div className="code-block">

                <div className="code-header">
                  <span>Terminal</span>

                  <button className="code-copy">
                    <Copy className="h-3.5 w-3.5" />
                    Copy
                  </button>
                </div>

                <pre>
                  <code>{`git clone https://github.com/yourname/project.git

cd project

npm install
npm run build`}</code>
                </pre>

              </div>

            </section>


            {/* Section 5 */}
            <section id="section-5" className="mt-12 scroll-mt-8">

              <h2 className="
                text-2xl
                font-bold
                tracking-tight
                text-slate-950
                sm:text-3xl
              ">
                Running Next.js with PM2
              </h2>

              <p className="article-p">
                PM2 keeps your application running as a background process
                and automatically restarts it when the process crashes.
                This makes it a popular choice for Node.js applications
                deployed directly on VPS infrastructure.
              </p>

              <div className="code-block">

                <div className="code-header">
                  <span>Terminal</span>

                  <button className="code-copy">
                    <Copy className="h-3.5 w-3.5" />
                    Copy
                  </button>
                </div>

                <pre>
                  <code>{`npm install -g pm2

pm2 start npm --name "next-app" -- start

pm2 save
pm2 startup`}</code>
                </pre>

              </div>

            </section>


            {/* Tip */}
            <div className="
              my-10
              flex
              gap-3
              rounded-2xl
              border
              border-emerald-100
              bg-emerald-50
              p-5
            ">

              <CheckCircle2 className="
                mt-0.5
                h-5
                w-5
                shrink-0
                text-emerald-600
              " />

              <div>
                <p className="text-xs font-bold text-emerald-900 sm:text-sm">
                  Production Tip
                </p>

                <p className="
                  mt-1
                  text-xs
                  leading-5
                  text-emerald-800/80
                  sm:text-sm
                  sm:leading-6
                ">
                  Always run your production application through a process
                  manager such as PM2 instead of keeping the terminal session
                  open.
                </p>
              </div>

            </div>


            {/* Section 6 */}
            <section id="section-6" className="mt-12 scroll-mt-8">

              <h2 className="
                text-2xl
                font-bold
                tracking-tight
                text-slate-950
                sm:text-3xl
              ">
                Configuring Nginx
              </h2>

              <p className="article-p">
                Nginx sits in front of your Next.js server and receives
                incoming HTTP requests. It then forwards those requests to
                the application running on your internal port.
              </p>

              <div className="code-block">

                <div className="code-header">
                  <span>/etc/nginx/sites-available/next-app</span>

                  <button className="code-copy">
                    <Copy className="h-3.5 w-3.5" />
                    Copy
                  </button>
                </div>

                <pre>
                  <code>{`server {
    listen 80;

    server_name example.com;

    location / {
        proxy_pass http://127.0.0.1:3000;

        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}`}</code>
                </pre>

              </div>

            </section>


            {/* Section 7 */}
            <section id="section-7" className="mt-12 scroll-mt-8">

              <h2 className="
                text-2xl
                font-bold
                tracking-tight
                text-slate-950
                sm:text-3xl
              ">
                Adding HTTPS with SSL
              </h2>

              <p className="article-p">
                Once Nginx is working correctly, secure the application
                using HTTPS. Let's Encrypt provides free SSL certificates
                that can be automatically renewed.
              </p>

              <div className="code-block">

                <div className="code-header">
                  <span>Terminal</span>

                  <button className="code-copy">
                    <Copy className="h-3.5 w-3.5" />
                    Copy
                  </button>
                </div>

                <pre>
                  <code>{`sudo apt install certbot python3-certbot-nginx -y

sudo certbot --nginx -d example.com`}</code>
                </pre>

              </div>

            </section>


            {/* Section 8 */}
            <section id="section-8" className="mt-12 scroll-mt-8">

              <h2 className="
                text-2xl
                font-bold
                tracking-tight
                text-slate-950
                sm:text-3xl
              ">
                Production checklist
              </h2>

              <p className="article-p">
                Before considering the deployment complete, verify the
                following:
              </p>

              <ul className="my-5 space-y-3">

                {[
                  "Application is running through PM2.",
                  "Nginx reverse proxy is configured.",
                  "Domain DNS points to the VPS.",
                  "HTTPS certificate is active.",
                  "Firewall rules are configured.",
                  "PM2 startup is enabled.",
                  "Environment variables are configured securely.",
                ].map((item) => (
                  <li
                    key={item}
                    className="
                      flex
                      items-start
                      gap-3
                      text-sm
                      leading-6
                      text-slate-600
                    "
                  >
                    <CheckCircle2 className="
                      mt-1
                      h-4
                      w-4
                      shrink-0
                      text-emerald-500
                    " />

                    {item}
                  </li>
                ))}

              </ul>

            </section>


            {/* Conclusion */}
            <div className="
              mt-14
              rounded-2xl
              bg-slate-950
              p-6
              text-white
              sm:rounded-3xl
              sm:p-8
            ">

              <p className="
                text-[10px]
                font-bold
                uppercase
                tracking-[1.5px]
                text-violet-400
              ">
                Final Thoughts
              </p>

              <h2 className="
                mt-2
                text-xl
                font-bold
                sm:text-2xl
              ">
                Your application is now production-ready.
              </h2>

              <p className="
                mt-3
                text-sm
                leading-6
                text-slate-400
              ">
                Deploying a Next.js application on a VPS gives you complete
                control over your infrastructure while keeping your
                deployment stack simple and cost-effective.
              </p>

            </div>


            {/* Share */}
            <div className="
              mt-10
              flex
              flex-col
              gap-4
              border-y
              border-slate-100
              py-6
              sm:flex-row
              sm:items-center
              sm:justify-between
            ">

              <p className="text-xs font-semibold text-slate-500">
                Found this useful? Share it with another developer.
              </p>

              <div className="flex gap-2">

                <button className="social-btn">
                  {/* <Linkedin className="h-4 w-4" /> */}
                </button>

                <button className="social-btn">
                  {/* <Github className="h-4 w-4" /> */}
                </button>

                <button className="social-btn">
                  <Share2 className="h-4 w-4" />
                </button>

              </div>

            </div>

          </article>


          {/* ===================================================== */}
          {/* RIGHT SIDEBAR */}
          {/* ===================================================== */}

          <aside className="hidden lg:block">

            <div className="sticky top-8">

              <div className="
                rounded-2xl
                border
                border-slate-100
                bg-slate-50
                p-5
              ">

                <p className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[1.5px]
                  text-violet-600
                ">
                  Learn More
                </p>

                <h3 className="
                  mt-2
                  text-sm
                  font-bold
                  text-slate-900
                ">
                  Want to go deeper?
                </h3>

                <p className="
                  mt-2
                  text-xs
                  leading-5
                  text-slate-400
                ">
                  Learn complete VPS deployment through our practical
                  video course.
                </p>

                <Link
                  href="/all-courses"
                  className="
                    mt-4
                    flex
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    bg-violet-600
                    px-4
                    py-2.5
                    text-xs
                    font-bold
                    text-white
                    shadow-lg
                    shadow-violet-200
                    transition
                    hover:bg-violet-700
                  "
                >
                  Explore Course
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>

              </div>

            </div>

          </aside>

        </div>


        {/* ========================================================= */}
        {/* RELATED ARTICLES */}
        {/* ========================================================= */}

        <section className="mt-16 border-t border-slate-100 pt-12 sm:mt-20 sm:pt-14">

          <div className="mb-6">

            <p className="
              text-[10px]
              font-bold
              uppercase
              tracking-[1.5px]
              text-violet-600
            ">
              Keep Reading
            </p>

            <h2 className="
              mt-1
              text-xl
              font-bold
              tracking-tight
              text-slate-950
              sm:text-2xl
            ">
              Related Articles
            </h2>

          </div>


          <div className="
            grid
            grid-cols-1
            gap-4
            sm:grid-cols-2
            lg:grid-cols-3
          ">

            {[
              {
                title: "How to Deploy Node.js Apps with PM2",
                category: "Node.js",
                href: "/blogs/nodejs-pm2-deployment",
              },
              {
                title: "Nginx Reverse Proxy Explained",
                category: "DevOps",
                href: "/blogs/nginx-reverse-proxy",
              },
              {
                title: "HTTPS & SSL Setup with Let's Encrypt",
                category: "Security",
                href: "/blogs/ssl-with-nginx",
              },
            ].map((blog) => (
              <Link
                key={blog.title}
                href={blog.href}
                className="
                  group
                  rounded-2xl
                  border
                  border-slate-200
                  bg-white
                  p-5
                  transition
                  hover:-translate-y-1
                  hover:border-violet-100
                  hover:shadow-[0_12px_30px_rgba(15,23,42,0.07)]
                "
              >

                <span className="
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-wide
                  text-violet-600
                ">
                  {blog.category}
                </span>

                <h3 className="
                  mt-2
                  text-sm
                  font-bold
                  leading-5
                  text-slate-900
                  transition
                  group-hover:text-violet-600
                ">
                  {blog.title}
                </h3>

                <div className="
                  mt-4
                  flex
                  items-center
                  gap-1
                  text-xs
                  font-semibold
                  text-slate-400
                  group-hover:text-violet-600
                ">
                  Read article
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </div>

              </Link>
            ))}

          </div>

        </section>

      </div>


      {/* ========================================================= */}
      {/* GLOBAL ARTICLE STYLES */}
      {/* ========================================================= */}

      <style jsx global>{`
        .article-p {
          margin-top: 1.25rem;
          font-size: 0.95rem;
          line-height: 1.9;
          color: rgb(71 85 105);
        }

        @media (min-width: 640px) {
          .article-p {
            font-size: 1rem;
            line-height: 1.9;
          }
        }

        .code-block {
          margin-top: 1.5rem;
          overflow: hidden;
          border-radius: 1rem;
          background: rgb(15 23 42);
          box-shadow: 0 10px 30px rgba(15, 23, 42, 0.08);
        }

        .code-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid rgba(255,255,255,0.08);
          padding: 0.7rem 0.9rem;
          font-size: 0.65rem;
          font-weight: 600;
          color: rgb(148 163 184);
        }

        .code-copy {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          border-radius: 0.4rem;
          padding: 0.3rem 0.5rem;
          color: rgb(148 163 184);
          transition: 0.2s;
        }

        .code-copy:hover {
          background: rgba(255,255,255,0.06);
          color: white;
        }

        .code-block pre {
          overflow-x: auto;
          padding: 1rem;
          font-size: 0.72rem;
          line-height: 1.8;
          color: rgb(226 232 240);
        }

        @media (min-width: 640px) {
          .code-block pre {
            padding: 1.25rem;
            font-size: 0.78rem;
          }
        }

        .social-btn {
          display: flex;
          height: 2.25rem;
          width: 2.25rem;
          align-items: center;
          justify-content: center;
          border-radius: 0.6rem;
          border: 1px solid rgb(226 232 240);
          color: rgb(100 116 139);
          transition: 0.2s;
        }

        .social-btn:hover {
          border-color: rgb(221 214 254);
          background: rgb(245 243 255);
          color: rgb(124 58 237);
        }
      `}</style>

    </main>
  );
}
"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Copy,
  Share2,
} from "lucide-react";
import { useState } from "react";

export default function BlogView() {
  const [copied, setCopied] = useState(false);

  const copyCode = async () => {
    await navigator.clipboard.writeText(
      `npm install -g pm2

npm run build

pm2 start npm --name "next-app" -- start

pm2 save
pm2 startup`
    );

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-white text-slate-900">

      {/* ================= HEADER ================= */}

      <section className="relative overflow-hidden border-b border-slate-100 bg-gradient-to-b from-violet-50/70 via-white to-white">

        <div className="pointer-events-none absolute -left-32 -top-32 h-72 w-72 rounded-full bg-violet-100/70 blur-3xl" />

        <div className="pointer-events-none absolute -right-32 top-10 h-72 w-72 rounded-full bg-fuchsia-100/50 blur-3xl" />

        <div className="relative mx-auto max-w-5xl px-4 pb-10 pt-8 text-center sm:px-6 sm:pb-14 sm:pt-12 md:px-8 md:pt-16">

          {/* Back */}
          <Link
            href="/blogs"
            className="mb-7 inline-flex items-center gap-2 rounded-lg px-2 py-1.5 text-xs font-semibold text-slate-500 transition hover:bg-violet-50 hover:text-violet-600"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blogs
          </Link>

          {/* Category */}
          <div className="mb-5 flex justify-center">
            <span className="rounded-full bg-violet-50 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[1.5px] text-violet-600 sm:text-xs">
              Deployment
            </span>
          </div>

          {/* Title */}
          <h1 className="mx-auto max-w-4xl text-3xl font-extrabold leading-[1.08] tracking-tight text-slate-950 sm:text-4xl md:text-5xl lg:text-6xl">
            Complete Guide to Deploying a Next.js App on a VPS
          </h1>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base sm:leading-7 md:text-lg">
            Learn how to deploy a production-ready Next.js application on a
            VPS using Node.js, PM2, Nginx, SSL and Cloudflare.
          </p>

          {/* Meta */}
          <div className="mt-7 flex flex-wrap items-center justify-center gap-x-4 gap-y-3 text-[11px] font-medium text-slate-400 sm:text-xs">

            <div className="flex items-center gap-1.5">
              <CalendarDays className="h-3.5 w-3.5" />
              August 10, 2026
            </div>

            <span className="hidden h-1 w-1 rounded-full bg-slate-300 sm:block" />

            <div className="flex items-center gap-1.5">
              <Clock3 className="h-3.5 w-3.5" />
              8 min read
            </div>

            <span className="hidden h-1 w-1 rounded-full bg-slate-300 sm:block" />

            <span>By QuerLabs</span>

          </div>

        </div>
      </section>


      {/* ================= ARTICLE ================= */}

      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14 md:px-8 lg:py-16">

        <div className="grid gap-10 lg:grid-cols-[minmax(0,760px)_230px] lg:justify-center lg:gap-14">

          {/* ================= CONTENT ================= */}

          <article className="min-w-0">

            {/* Intro Card */}

            <div className="rounded-2xl border border-violet-100 bg-violet-50/60 p-5 sm:p-6">

              <p className="text-sm font-medium leading-7 text-violet-950 sm:text-base">
                Deploying your Next.js application to a VPS gives you complete
                control over your production environment. In this guide,
                we'll take the application from your local machine to a
                production-ready server.
              </p>

            </div>


            {/* ================= SECTION 1 ================= */}

            <section className="mt-12">

              <h2 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                Why deploy Next.js on a VPS?
              </h2>

              <div className="mt-5 space-y-5">

                <p className="text-[15px] leading-8 text-slate-600 sm:text-base">
                  A VPS gives you direct control over your production
                  environment. You control the server, operating system,
                  networking, reverse proxy and deployment process.
                </p>

                <p className="text-[15px] leading-8 text-slate-600 sm:text-base">
                  This is especially useful when you're building applications
                  that require custom infrastructure, background processes,
                  databases or more control over how your application runs.
                </p>

              </div>

            </section>


            {/* ================= SECTION 2 ================= */}

            <section className="mt-12">

              <h2 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                Preparing the VPS
              </h2>

              <p className="mt-5 text-[15px] leading-8 text-slate-600 sm:text-base">
                Start with a clean Ubuntu VPS. Connect to the server using SSH
                and update the system packages before installing the tools
                required by your application.
              </p>


              {/* Code */}

              <div className="mt-6 overflow-hidden rounded-2xl bg-slate-950 shadow-[0_12px_35px_rgba(15,23,42,0.12)]">

                <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">

                  <div className="flex items-center gap-1.5">

                    <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-green-400" />

                    <span className="ml-2 text-[10px] font-medium text-slate-500">
                      Terminal
                    </span>

                  </div>

                  <button
                    type="button"
                    onClick={copyCode}
                    className="flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-medium text-slate-400 transition hover:bg-white/10 hover:text-white"
                  >
                    <Copy className="h-3.5 w-3.5" />

                    {copied ? "Copied" : "Copy"}
                  </button>

                </div>

                <pre className="overflow-x-auto p-4 text-[12px] leading-6 text-slate-200 sm:p-5 sm:text-[13px]">
                  <code>{`sudo apt update
sudo apt upgrade -y

sudo apt install nginx -y`}</code>
                </pre>

              </div>

            </section>


            {/* ================= SECTION 3 ================= */}

            <section className="mt-12">

              <h2 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                Installing Node.js
              </h2>

              <p className="mt-5 text-[15px] leading-8 text-slate-600 sm:text-base">
                Next.js requires Node.js to build and run the application.
                For production environments, use a supported LTS version.
              </p>

              <div className="mt-6 overflow-hidden rounded-2xl bg-slate-950">

                <div className="border-b border-white/10 px-4 py-3 text-[10px] font-medium text-slate-500">
                  Terminal
                </div>

                <pre className="overflow-x-auto p-4 text-[12px] leading-6 text-slate-200 sm:p-5 sm:text-[13px]">
                  <code>{`node --version
npm --version`}</code>
                </pre>

              </div>

            </section>


            {/* ================= SECTION 4 ================= */}

            <section className="mt-12">

              <h2 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                Deploying the application
              </h2>

              <p className="mt-5 text-[15px] leading-8 text-slate-600 sm:text-base">
                Clone your project onto the VPS and install the dependencies.
                Once everything is installed, create a production build of
                your Next.js application.
              </p>

              <div className="mt-6 overflow-hidden rounded-2xl bg-slate-950">

                <div className="border-b border-white/10 px-4 py-3 text-[10px] font-medium text-slate-500">
                  Terminal
                </div>

                <pre className="overflow-x-auto p-4 text-[12px] leading-6 text-slate-200 sm:p-5 sm:text-[13px]">
                  <code>{`git clone https://github.com/yourname/project.git

cd project

npm install
npm run build`}</code>
                </pre>

              </div>

            </section>


            {/* ================= TIP ================= */}

            <div className="my-10 flex gap-3 rounded-2xl border border-emerald-100 bg-emerald-50 p-5">

              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />

              <div>

                <p className="text-xs font-bold text-emerald-900 sm:text-sm">
                  Production Tip
                </p>

                <p className="mt-1 text-xs leading-6 text-emerald-800/80 sm:text-sm">
                  Always run your production application through a process
                  manager such as PM2 instead of keeping the terminal session
                  open.
                </p>

              </div>

            </div>


            {/* ================= SECTION 5 ================= */}

            <section className="mt-12">

              <h2 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                Running Next.js with PM2
              </h2>

              <p className="mt-5 text-[15px] leading-8 text-slate-600 sm:text-base">
                PM2 keeps your application running as a background process
                and can automatically restart it if the process crashes.
              </p>

              <div className="mt-6 overflow-hidden rounded-2xl bg-slate-950">

                <div className="border-b border-white/10 px-4 py-3 text-[10px] font-medium text-slate-500">
                  Terminal
                </div>

                <pre className="overflow-x-auto p-4 text-[12px] leading-6 text-slate-200 sm:p-5 sm:text-[13px]">
                  <code>{`npm install -g pm2

pm2 start npm --name "next-app" -- start

pm2 save
pm2 startup`}</code>
                </pre>

              </div>

            </section>


            {/* ================= SECTION 6 ================= */}

            <section className="mt-12">

              <h2 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                Configuring Nginx
              </h2>

              <p className="mt-5 text-[15px] leading-8 text-slate-600 sm:text-base">
                Nginx sits in front of your Next.js server and receives
                incoming HTTP requests. It then forwards those requests to
                the application running on your internal port.
              </p>

              <div className="mt-6 overflow-hidden rounded-2xl bg-slate-950">

                <div className="border-b border-white/10 px-4 py-3 text-[10px] font-medium text-slate-500">
                  /etc/nginx/sites-available/next-app
                </div>

                <pre className="overflow-x-auto p-4 text-[12px] leading-6 text-slate-200 sm:p-5 sm:text-[13px]">
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


            {/* ================= SECTION 7 ================= */}

            <section className="mt-12">

              <h2 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                Adding HTTPS with SSL
              </h2>

              <p className="mt-5 text-[15px] leading-8 text-slate-600 sm:text-base">
                Once Nginx is working correctly, secure your application
                using HTTPS. Let's Encrypt provides free SSL certificates
                that can be automatically renewed.
              </p>

              <div className="mt-6 overflow-hidden rounded-2xl bg-slate-950">

                <div className="border-b border-white/10 px-4 py-3 text-[10px] font-medium text-slate-500">
                  Terminal
                </div>

                <pre className="overflow-x-auto p-4 text-[12px] leading-6 text-slate-200 sm:p-5 sm:text-[13px]">
                  <code>{`sudo apt install certbot python3-certbot-nginx -y

sudo certbot --nginx -d example.com`}</code>
                </pre>

              </div>

            </section>


            {/* ================= SECTION 8 ================= */}

            <section className="mt-12">

              <h2 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                Production checklist
              </h2>

              <p className="mt-5 text-[15px] leading-8 text-slate-600 sm:text-base">
                Before considering the deployment complete, verify the
                following:
              </p>

              <div className="mt-6 space-y-3">

                {[
                  "Application is running through PM2.",
                  "Nginx reverse proxy is configured.",
                  "Domain DNS points to the VPS.",
                  "HTTPS certificate is active.",
                  "Firewall rules are configured.",
                  "PM2 startup is enabled.",
                  "Environment variables are configured securely.",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-xl border border-slate-100 bg-slate-50 p-3.5"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />

                    <span className="text-sm leading-6 text-slate-600">
                      {item}
                    </span>
                  </div>
                ))}

              </div>

            </section>


            {/* ================= CONCLUSION ================= */}

            <section className="mt-14 overflow-hidden rounded-2xl bg-slate-950 p-6 text-white sm:rounded-3xl sm:p-8">

              <p className="text-[10px] font-bold uppercase tracking-[1.5px] text-violet-400">
                Final Thoughts
              </p>

              <h2 className="mt-2 text-xl font-bold sm:text-2xl">
                Your application is now production-ready.
              </h2>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                Deploying a Next.js application on a VPS gives you complete
                control over your infrastructure while keeping your deployment
                stack simple and cost-effective.
              </p>

            </section>


            {/* ================= SHARE ================= */}

            <div className="mt-10 flex flex-col gap-4 border-y border-slate-100 py-6 sm:flex-row sm:items-center sm:justify-between">

              <div>
                <p className="text-sm font-bold text-slate-900">
                  Found this useful?
                </p>

                <p className="mt-1 text-xs text-slate-400">
                  Share it with another developer.
                </p>
              </div>

              <div className="flex items-center gap-2">

                <button
                  type="button"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-400 transition hover:border-violet-200 hover:bg-violet-50 hover:text-violet-600"
                >
                  {/* <Twitter className="h-4 w-4" /> */}
                </button>

                <button
                  type="button"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-400 transition hover:border-violet-200 hover:bg-violet-50 hover:text-violet-600"
                >
                  {/* <Linkedin className="h-4 w-4" /> */}
                </button>

                <button
                  type="button"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-400 transition hover:border-violet-200 hover:bg-violet-50 hover:text-violet-600"
                >
                  <Share2 className="h-4 w-4" />
                </button>

              </div>

            </div>

          </article>


          {/* ================= SIDEBAR ================= */}

          <aside className="hidden lg:block">

            <div className="sticky top-8">

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">

                <p className="text-[10px] font-bold uppercase tracking-[1.5px] text-violet-600">
                  On This Page
                </p>

                <div className="mt-4 space-y-1">

                  {[
                    "Why VPS?",
                    "Preparing the VPS",
                    "Installing Node.js",
                    "Deploying",
                    "PM2",
                    "Nginx",
                    "HTTPS & SSL",
                    "Checklist",
                  ].map((item) => (
                    <div
                      key={item}
                      className="border-l-2 border-transparent px-3 py-2 text-xs text-slate-500 transition hover:border-violet-500 hover:text-violet-600"
                    >
                      {item}
                    </div>
                  ))}

                </div>

              </div>


              {/* Course CTA */}

              <div className="mt-4 rounded-2xl bg-violet-600 p-5 text-white shadow-lg shadow-violet-100">

                <p className="text-[10px] font-bold uppercase tracking-[1.5px] text-violet-200">
                  Learn More
                </p>

                <h3 className="mt-2 text-sm font-bold">
                  Want to go deeper?
                </h3>

                <p className="mt-2 text-xs leading-5 text-violet-100">
                  Learn complete VPS deployment through our practical
                  video course.
                </p>

                <Link
                  href="/all-courses"
                  className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-white px-4 py-2.5 text-xs font-bold text-violet-700 transition hover:bg-violet-50"
                >
                  Explore Course
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>

              </div>

            </div>

          </aside>

        </div>

      </section>


      {/* ================= RELATED ================= */}

      <section className="border-t border-slate-100 bg-slate-50/60">

        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:px-8 md:py-16">

          <div className="mb-6">

            <p className="text-[10px] font-bold uppercase tracking-[1.5px] text-violet-600">
              Keep Reading
            </p>

            <h2 className="mt-1 text-xl font-bold tracking-tight text-slate-950 sm:text-2xl">
              Related Articles
            </h2>

          </div>


          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">

            {[
              {
                title: "How to Deploy Node.js Apps with PM2",
                category: "Node.js",
              },
              {
                title: "Nginx Reverse Proxy Explained",
                category: "DevOps",
              },
              {
                title: "HTTPS & SSL Setup with Let's Encrypt",
                category: "Security",
              },
            ].map((blog) => (
              <Link
                key={blog.title}
                href="/blogView"
                className="group rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:border-violet-100 hover:shadow-[0_12px_30px_rgba(15,23,42,0.07)]"
              >

                <span className="text-[9px] font-bold uppercase tracking-wide text-violet-600">
                  {blog.category}
                </span>

                <h3 className="mt-2 text-sm font-bold leading-5 text-slate-900 transition group-hover:text-violet-600">
                  {blog.title}
                </h3>

                <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-slate-400 transition group-hover:text-violet-600">
                  Read article
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </div>

              </Link>
            ))}

          </div>

        </div>

      </section>

    </main>
  );
}
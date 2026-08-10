"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Clock3,
  Search,
  Sparkles,
} from "lucide-react";

const featuredBlog = {
  title: "Complete Guide to Deploying a Next.js App on a VPS",
  description:
    "Learn how to deploy a production-ready Next.js application on a VPS using Node.js, PM2, Nginx, SSL and Cloudflare.",
  category: "Deployment",
  date: "Aug 10, 2026",
  readTime: "8 min read",
  image: "/blogs/vps-deployment.jpg",
  href: "/blogs/complete-guide-nextjs-vps-deployment",
};

const blogs = [
  {
    title: "How to Deploy Node.js Apps with PM2",
    description:
      "A practical guide to running Node.js applications reliably in production with PM2.",
    category: "Node.js",
    date: "Aug 8, 2026",
    readTime: "6 min read",
    image: "/vps.png",
    href: "/blogs/nodejs-pm2-deployment",
  },
  {
    title: "Nginx Reverse Proxy Explained",
    description:
      "Understand how Nginx works as a reverse proxy and how to configure it for your applications.",
    category: "DevOps",
    date: "Aug 6, 2026",
    readTime: "7 min read",
    image: "/vps.png",
    href: "/blogs/nginx-reverse-proxy",
  },
  {
    title: "HTTPS & SSL Setup with Let's Encrypt",
    description:
      "Set up HTTPS for your production application with Nginx and Let's Encrypt.",
    category: "Security",
    date: "Aug 4, 2026",
    readTime: "5 min read",
    image: "/vps.png",
    href: "/blogs/ssl-with-nginx",
  },
  {
    title: "GitHub Actions CI/CD for Beginners",
    description:
      "Build your first automated deployment pipeline using GitHub Actions.",
    category: "CI/CD",
    date: "Aug 2, 2026",
    readTime: "9 min read",
    image: "/vps.png",
    href: "/blogs/github-actions-cicd",
  },
  {
    title: "Docker vs VPS: What Should You Choose?",
    description:
      "A practical comparison of Docker and traditional VPS deployments for modern applications.",
    category: "DevOps",
    date: "Jul 30, 2026",
    readTime: "8 min read",
    image: "/vps.png",
    href: "/blogs/docker-vs-vps",
  },
  {
    title: "Essential Linux Commands for Developers",
    description:
      "The Linux commands every developer should know when working with servers.",
    category: "Linux",
    date: "Jul 28, 2026",
    readTime: "10 min read",
    image: "/vps.png",
    href: "/blogs/linux-commands-developers",
  },
];

const categories = [
  "All",
  "Deployment",
  "DevOps",
  "Node.js",
  "Security",
  "CI/CD",
  "Linux",
];

export default function BlogsPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">

      {/* ========================================================= */}
      {/* HERO */}
      {/* ========================================================= */}

      <section className="relative overflow-hidden border-b border-slate-100">

        {/* Background decoration */}
        <div className="pointer-events-none absolute -left-32 -top-32 h-72 w-72 rounded-full bg-violet-100/60 blur-3xl" />
        <div className="pointer-events-none absolute -right-32 top-20 h-80 w-80 rounded-full bg-fuchsia-100/50 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 pb-10 pt-12 sm:px-6 sm:pb-14 sm:pt-16 md:px-8 lg:px-10 lg:pb-20 lg:pt-20">

          {/* Eyebrow */}
          <div className="mb-4 flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-violet-100 text-violet-600">
              <BookOpen className="h-3.5 w-3.5" />
            </span>

            <span className="text-[10px] font-bold uppercase tracking-[1.8px] text-violet-600 sm:text-xs">
              Our Blog
            </span>
          </div>

          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">

            <div className="max-w-3xl">

              <h1 className="
                text-3xl
                font-extrabold
                tracking-tight
                text-slate-950
                sm:text-4xl
                md:text-5xl
                lg:text-6xl
              ">
                Learn. Build.
                <span className="block text-violet-600">
                  Ship Better.
                </span>
              </h1>

              <p className="
                mt-4
                max-w-2xl
                text-sm
                leading-6
                text-slate-500
                sm:text-base
                sm:leading-7
                md:text-lg
              ">
                Practical guides, engineering insights and real-world
                tutorials to help you become a better developer.
              </p>

            </div>

            {/* Search */}
            <div className="w-full md:max-w-xs">
              <div className="
                flex
                h-12
                items-center
                gap-3
                rounded-xl
                border
                border-slate-200
                bg-white
                px-4
                shadow-[0_4px_20px_rgba(15,23,42,0.04)]
                focus-within:border-violet-300
                focus-within:ring-4
                focus-within:ring-violet-50
              ">
                <Search className="h-4 w-4 shrink-0 text-slate-400" />

                <input
                  type="text"
                  placeholder="Search articles..."
                  className="
                    w-full
                    bg-transparent
                    text-sm
                    text-slate-700
                    outline-none
                    placeholder:text-slate-400
                  "
                />
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* ========================================================= */}
      {/* CONTENT */}
      {/* ========================================================= */}

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 md:px-8 lg:px-10 lg:py-14">

        {/* Categories */}
        <div className="
          mb-8
          flex
          gap-2
          overflow-x-auto
          pb-1
          scrollbar-none
          sm:mb-10
        ">
          {categories.map((category, index) => (
            <button
              key={category}
              className={`
                shrink-0
                rounded-full
                px-4
                py-2
                text-xs
                font-semibold
                transition
                ${
                  index === 0
                    ? "bg-slate-900 text-white shadow-sm"
                    : "border border-slate-200 bg-white text-slate-500 hover:border-violet-200 hover:bg-violet-50 hover:text-violet-600"
                }
              `}
            >
              {category}
            </button>
          ))}
        </div>


        {/* ========================================================= */}
        {/* FEATURED */}
        {/* ========================================================= */}

        <section className="mb-12 sm:mb-16">

          <div className="mb-4 flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-violet-500" />

            <p className="text-xs font-bold uppercase tracking-[1.5px] text-slate-400">
              Featured Article
            </p>
          </div>

          <Link
            href={"/blogView"}
            className="
              group
              grid
              overflow-hidden
              rounded-2xl
              border
              border-slate-200
              bg-white
              shadow-[0_8px_35px_rgba(15,23,42,0.06)]
              transition-all
              duration-300
              active:scale-[0.995]
              sm:rounded-3xl
              md:grid-cols-2
              md:hover:-translate-y-1
              md:hover:shadow-[0_20px_55px_rgba(15,23,42,0.10)]
            "
          >

            {/* Image */}
            <div className="
              relative
              aspect-[16/10]
              overflow-hidden
              bg-slate-100
              md:aspect-auto
              md:min-h-[360px]
            ">
              <Image
                src="/vps.png"
                alt={featuredBlog.title}
                fill
                className="
                  object-cover
                  transition-transform
                  duration-500
                  group-hover:scale-105
                "
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent" />

              <span className="
                absolute
                left-4
                top-4
                rounded-full
                bg-white/95
                px-3
                py-1.5
                text-[10px]
                font-bold
                uppercase
                tracking-wide
                text-violet-600
                shadow-sm
                backdrop-blur
                sm:left-5
                sm:top-5
              ">
                {featuredBlog.category}
              </span>
            </div>


            {/* Content */}
            <div className="flex flex-col justify-center p-5 sm:p-7 md:p-9 lg:p-12">

              <div className="mb-4 flex items-center gap-3 text-[11px] font-medium text-slate-400">
                <span>{featuredBlog.date}</span>
                <span className="h-1 w-1 rounded-full bg-slate-300" />
                <span>{featuredBlog.readTime}</span>
              </div>

              <h2 className="
                text-2xl
                font-bold
                leading-tight
                tracking-tight
                text-slate-950
                sm:text-3xl
                lg:text-4xl
              ">
                {featuredBlog.title}
              </h2>

              <p className="
                mt-4
                text-sm
                leading-6
                text-slate-500
                sm:text-base
                sm:leading-7
              ">
                {featuredBlog.description}
              </p>

              <div className="
                mt-6
                flex
                items-center
                gap-2
                text-sm
                font-bold
                text-violet-600
              ">
                Read article

                <span className="
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-full
                  bg-violet-50
                  transition-transform
                  group-hover:translate-x-1
                ">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>

            </div>

          </Link>

        </section>


        {/* ========================================================= */}
        {/* ALL ARTICLES */}
        {/* ========================================================= */}

        <section>

          <div className="mb-6 flex items-end justify-between sm:mb-8">

            <div>
              <h2 className="text-xl font-bold tracking-tight text-slate-950 sm:text-2xl">
                Latest Articles
              </h2>

              <p className="mt-1 text-xs text-slate-400 sm:text-sm">
                Fresh guides and engineering insights.
              </p>
            </div>

            <span className="hidden text-xs font-medium text-slate-400 sm:block">
              {blogs.length} Articles
            </span>

          </div>


          {/* Blog Grid */}
          <div className="
            grid
            grid-cols-1
            gap-5
            sm:grid-cols-2
            sm:gap-6
            lg:grid-cols-3
          ">

            {blogs.map((blog) => (
              <Link
                key={blog.title}
                href={blog.href}
                className="
                  group
                  overflow-hidden
                  rounded-2xl
                  border
                  border-slate-200
                  bg-white
                  shadow-[0_3px_15px_rgba(15,23,42,0.035)]
                  transition-all
                  duration-300
                  active:scale-[0.99]
                  sm:rounded-3xl
                  sm:hover:-translate-y-1
                  sm:hover:border-violet-100
                  sm:hover:shadow-[0_15px_35px_rgba(15,23,42,0.08)]
                "
              >

                {/* Image */}
                <div className="
                  relative
                  aspect-[16/9]
                  overflow-hidden
                  bg-slate-100
                ">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="
                      object-cover
                      transition-transform
                      duration-500
                      group-hover:scale-105
                    "
                  />

                  <div className="
                    absolute
                    inset-x-0
                    bottom-0
                    h-20
                    bg-gradient-to-t
                    from-slate-950/20
                    to-transparent
                  " />

                  <span className="
                    absolute
                    left-3
                    top-3
                    rounded-full
                    bg-white/95
                    px-2.5
                    py-1
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-wide
                    text-violet-600
                    shadow-sm
                    backdrop-blur
                    sm:left-4
                    sm:top-4
                  ">
                    {blog.category}
                  </span>
                </div>


                {/* Card Content */}
                <div className="p-4 sm:p-5">

                  <div className="
                    mb-2.5
                    flex
                    items-center
                    gap-2
                    text-[10px]
                    font-medium
                    text-slate-400
                  ">
                    <span>{blog.date}</span>

                    <span className="h-1 w-1 rounded-full bg-slate-300" />

                    <span className="flex items-center gap-1">
                      <Clock3 className="h-3 w-3" />
                      {blog.readTime}
                    </span>
                  </div>

                  <h3 className="
                    line-clamp-2
                    text-base
                    font-bold
                    leading-snug
                    text-slate-900
                    transition-colors
                    group-hover:text-violet-600
                    sm:text-lg
                  ">
                    {blog.title}
                  </h3>

                  <p className="
                    mt-2
                    line-clamp-2
                    text-xs
                    leading-5
                    text-slate-400
                    sm:text-sm
                    sm:leading-6
                  ">
                    {blog.description}
                  </p>

                  <div className="
                    mt-4
                    flex
                    items-center
                    justify-between
                    border-t
                    border-slate-100
                    pt-4
                  ">
                    <span className="text-xs font-semibold text-slate-500">
                      Read article
                    </span>

                    <span className="
                      flex
                      h-7
                      w-7
                      items-center
                      justify-center
                      rounded-full
                      bg-slate-50
                      text-slate-400
                      transition-all
                      group-hover:bg-violet-50
                      group-hover:text-violet-600
                    ">
                      <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>

                </div>

              </Link>
            ))}

          </div>

        </section>


        {/* ========================================================= */}
        {/* BOTTOM CTA */}
        {/* ========================================================= */}

        <section className="
          relative
          mt-14
          overflow-hidden
          rounded-2xl
          bg-slate-950
          px-5
          py-8
          sm:mt-20
          sm:rounded-3xl
          sm:px-8
          sm:py-10
          md:px-12
        ">

          <div className="
            pointer-events-none
            absolute
            -right-20
            -top-20
            h-52
            w-52
            rounded-full
            bg-violet-600/30
            blur-3xl"
          />

          <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

            <div>
              <p className="text-xs font-bold uppercase tracking-[1.5px] text-violet-400">
                Keep Learning
              </p>

              <h2 className="mt-2 text-xl font-bold text-white sm:text-2xl">
                Want to learn by building?
              </h2>

              <p className="mt-1.5 max-w-xl text-xs leading-5 text-slate-400 sm:text-sm">
                Explore our practical courses and build real-world
                development skills.
              </p>
            </div>

            <Link
              href="/all-courses"
              className="
                inline-flex
                shrink-0
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-white
                px-5
                py-3
                text-xs
                font-bold
                text-slate-900
                transition
                hover:bg-violet-50
                sm:text-sm
              "
            >
              Explore Courses
              <ArrowRight className="h-4 w-4" />
            </Link>

          </div>

        </section>

      </div>
    </main>
  );
}
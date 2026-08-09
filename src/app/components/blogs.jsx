"use client";

import {
  ArrowRight,
  Clock3,
  BookOpen,
  Server,
  GitBranch,
  ShieldCheck,
  Cloud,
  Code2,
} from "lucide-react";
import Link from "next/link";

const blogs = [
  {
    title: "How to Deploy a Next.js Application on a VPS",
    description:
      "A practical guide to deploying a production-ready Next.js application with Node.js, PM2 and Nginx.",
    category: "VPS",
    readTime: "8 min read",
    icon: Server,
    iconBg: "bg-orange-100",
    iconColor: "text-orange-500",
  },
  {
    title: "GitHub Actions CI/CD: A Practical Guide",
    description:
      "Understand how to automate your application builds and deployments using GitHub Actions.",
    category: "CI/CD",
    readTime: "7 min read",
    icon: GitBranch,
    iconBg: "bg-violet-100",
    iconColor: "text-violet-600",
  },
  {
    title: "Essential VPS Security Practices",
    description:
      "Learn the essential steps to secure a Linux VPS before putting your application into production.",
    category: "Security",
    readTime: "6 min read",
    icon: ShieldCheck,
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
  },
  {
    title: "AWS EC2 Deployment for Beginners",
    description:
      "Learn how to launch an EC2 instance and deploy your first Node.js application on AWS.",
    category: "AWS",
    readTime: "9 min read",
    icon: Cloud,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    title: "PM2: Running Node.js Apps in Production",
    description:
      "Understand process management, automatic restarts, logs and production workflows with PM2.",
    category: "Node.js",
    readTime: "5 min read",
    icon: Code2,
    iconBg: "bg-sky-100",
    iconColor: "text-sky-600",
  },
  {
    title: "Nginx Reverse Proxy Explained",
    description:
      "Understand how Nginx sits between your users and application and why it matters in production.",
    category: "DevOps",
    readTime: "6 min read",
    icon: BookOpen,
    iconBg: "bg-fuchsia-100",
    iconColor: "text-fuchsia-600",
  },
];

export default function BlogPreview() {
  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24">

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ================= HEADER ================= */}

        <div className="mb-8 flex items-end justify-between gap-5 sm:mb-10">

          <div>

            <p className="text-[10px] font-bold uppercase tracking-[1.6px] text-violet-600 sm:text-xs">
              Knowledge Hub
            </p>

            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
              Read Our Blogs
            </h2>

            <p className="mt-2 max-w-xl text-xs leading-5 text-slate-400 sm:text-sm sm:leading-6">
              Practical guides, engineering insights and tutorials
              to help you build better software.
            </p>

          </div>


          {/* View All */}

          <Link
            href="/blogs"
            className="
              hidden
              shrink-0
              items-center
              gap-1
              rounded-xl
              px-3
              py-2
              text-sm
              font-semibold
              text-violet-600
              transition
              hover:bg-violet-50
              sm:flex
            "
          >
            View All
            <ArrowRight className="h-4 w-4" />
          </Link>

        </div>


        {/* ================= BLOG GRID ================= */}

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">

          {blogs.map(
            ({
              title,
              description,
              category,
              readTime,
              icon: Icon,
              iconBg,
              iconColor,
            }) => (

              <Link
                href="/blogs"
                key={title}
                className="
                  group
                  flex
                  min-h-[250px]
                  flex-col
                  rounded-2xl
                  border
                  border-slate-100
                  bg-white
                  p-5
                  shadow-[0_3px_15px_rgba(15,23,42,0.04)]
                  transition-all
                  duration-200
                  hover:-translate-y-1
                  hover:border-violet-100
                  hover:shadow-[0_14px_35px_rgba(15,23,42,0.08)]
                  sm:p-6
                "
              >

                {/* Top */}

                <div className="flex items-center justify-between">

                  <div
                    className={`
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-xl
                      ${iconBg}
                    `}
                  >
                    <Icon
                      className={`h-5 w-5 ${iconColor}`}
                      strokeWidth={2}
                    />
                  </div>


                  <span className="rounded-full bg-slate-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-slate-500">
                    {category}
                  </span>

                </div>


                {/* Content */}

                <div className="mt-5 flex-1">

                  <h3 className="text-base font-bold leading-6 text-slate-900 transition-colors group-hover:text-violet-600 sm:text-lg">
                    {title}
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-slate-500 sm:text-sm sm:leading-6">
                    {description}
                  </p>

                </div>


                {/* Bottom */}

                <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">

                  <div className="flex items-center gap-1.5 text-[11px] text-slate-400">

                    <Clock3 className="h-3.5 w-3.5" />

                    {readTime}

                  </div>


                  <span className="flex items-center gap-1 text-xs font-semibold text-violet-600 transition-all group-hover:gap-2">

                    Read Article

                    <ArrowRight className="h-3.5 w-3.5" />

                  </span>

                </div>

              </Link>

            )
          )}

        </div>


        {/* ================= MOBILE VIEW ALL ================= */}

        <div className="mt-6 flex justify-center sm:hidden">

          <Link
            href="/blogs"
            className="
              flex
              items-center
              gap-2
              rounded-xl
              bg-violet-50
              px-5
              py-3
              text-sm
              font-semibold
              text-violet-600
            "
          >
            View All Blogs
            <ArrowRight className="h-4 w-4" />
          </Link>

        </div>

      </div>

    </section>
  );
}
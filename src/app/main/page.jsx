

import BottomNav from "../components/bottomNav";
import ExploreCategories from "../components/catalog";
import Link from "next/link";
import LearningFeatures from "../components/features";
import VideoCourseCTA from "../components/videoCourses";
import DeploymentLabs from "../components/labs";
import MobileAppCTA from "../components/mobileApp";
import BlogPreview from "../components/blogs";
import Footer from "../components/footer";
export default function Main() {
  return (
    <main className="min-h-screen bg-white">

      {/* =====================================================
          MOBILE APP
      ===================================================== */}

      <section className="md:hidden h-[100vh] overflow-hidden bg-white">

        <div className="h-full flex flex-col">

          {/* MOBILE HERO */}

          <div className="relative h-[38vh] min-h-[270px] shrink-0 overflow-hidden rounded-b-[32px] bg-gradient-to-br from-violet-700 via-violet-600 to-purple-500 px-6 pt-8">

            {/* Glow */}
            <div className="absolute -right-12 -top-12 h-44 w-44 rounded-full bg-white/10 blur-3xl" />

            <div className="absolute left-40 top-8 h-28 w-28 rounded-full border border-white/10" />

            <div className="absolute right-8 bottom-4 h-20 w-20 rounded-full border border-white/10" />

            {/* Dots */}
            <div className="absolute left-8 top-10 h-2 w-2 rounded-full bg-white/40" />

            <div className="absolute right-20 top-16 h-3 w-3 rounded-full bg-white/30" />

            {/* Notification */}
            <button className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-xl">
              🔔
            </button>

            {/* Content */}
            <div className="relative z-10 pt-12">

              <p className="text-lg font-medium text-white/75">
                Hello 👋
              </p>

              <h1 className="mt-2 text-[40px] font-extrabold leading-none text-white">
                Welcome to
              </h1>

              <h2 className="mt-1 text-[22px] font-semibold tracking-wide text-white/90">
                Quarlabs.ai
              </h2>

            </div>

          </div>


          {/* MOBILE CATEGORY AREA */}

          <div className="min-h-0 flex-1 overflow-scroll overflow-x-hidden bg-white">

            <ExploreCategories />

          </div>


          {/* MOBILE NAV */}

          <div className="h-[10vh] min-h-[64px] shrink-0 bg-white">

            <BottomNav />

          </div>

        </div>

      </section>


      

    </main>
  );
}
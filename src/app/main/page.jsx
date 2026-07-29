import BottomNav from "../components/bottomNav"
import ExploreCategories from "../components/catalog"
export default function Main(){
    return(
        <div className="h-[100vh]">
            <div className="relative h-[25vh] overflow-hidden  bg-gradient-to-br from-[#7C3AED] via-[#6C3EF4] to-[#5A2DE3] px-6 pt-8">

                {/* Background Glow */}
                <div className="absolute -right-10 -top-10 h-44 w-44 rounded-full bg-white/10 blur-3xl" />
                <div className="absolute left-44 top-6 h-32 w-32 rounded-full border border-white/10" />
                <div className="absolute right-8 bottom-2 h-20 w-20 rounded-full border border-white/10" />

                {/* Floating Dots */}
                <div className="absolute left-8 top-8 h-2 w-2 rounded-full bg-white/40" />
                <div className="absolute right-20 top-14 h-3 w-3 rounded-full bg-white/30" />
                <div className="absolute bottom-10 left-24 h-2 w-2 rounded-full bg-white/20" />

                {/* Notification */}
                <div className="absolute right-6 top-6 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-xl">
                    🔔
                </div>

                {/* Content */}
                <div className="relative z-10">

                    <p className="text-lg font-medium text-white/80">
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
            <div className="h-[61vh] bg-white">
                <ExploreCategories/>
            </div>
            <div className="h-[10vh] bg-white"><BottomNav/></div>
        </div>
    )
}
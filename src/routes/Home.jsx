import { Copyright } from "../components/Copyright";
import { Profile } from "../components/Profile";
import { Stories } from "../components/Stories";
import "animate.css/animate.min.css";

const Home = () => {
  return (
    <>
      <div className={`grid min-h-screen grid-cols-1 lg:grid-cols-2 bg-gray-900 font-sans text-gray-100 js-show-on-scroll`}>
        {/* Left */}
        <div className="animate-entering duration-700 py-8 relative flex flex-col items-start justify-between overflow-hidden border-r border-white/10 bg-[url(/public/background-stars.svg)] bg-cover">
          {/* Blur */}
          <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-700 opacity-50 blur-full" />
          {/* Stripes */}
          <div className="hidden lg:block absolute bottom-0 right-2 top-0 w-2 bg-stripes" />
          <div className="flex flex-col justify-center items-center h-full mx-auto">
            <div className="flex flex-col items-center justify-center flex-grow">
              <Profile />
              <Copyright />
            </div>
          </div>
          <div className="absolute lg:hidden left-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 rounded-full bg-purple-700 opacity-50 blur-full" />
        </div>

        {/* Right */}
        <div className="animate-entering duration-700 flex max-h-screen flex-col overflow-y-scroll bg-[url(/public/background-stars.svg)] bg-cover">
          <Stories />
        </div>
      </div>
    </>
  );
};

export default Home;


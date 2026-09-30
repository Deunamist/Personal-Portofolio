import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="grid min-h-[85vh] items-center gap-12 lg:grid-cols-2">
      {/* Left Content */}
      <div>
        <span className="rounded-full border border-[#464646] bg-[#222222] px-4 py-2 text-sm text-neutral-300">
          Information Technology Fresh Graduate
        </span>

        <h1 className="mt-6 text-5xl font-bold leading-tight md:text-7xl">
          Pande Made
          <br />
          Agung Dananjaya
        </h1>

        <p className="mt-6 text-xl text-neutral-400">
          Frontend Developer • UI/UX Designer • IoT Enthusiast
        </p>

        <p className="mt-8 max-w-2xl leading-8 text-neutral-500">
          Passionate about building user-centered digital solutions and 
          continuously exploring new technologies to solve real-world problems through innovation and collaboration.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="#projects"
            className="flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-medium text-black transition hover:opacity-90"
          >
            View Projects
            <ArrowRight size={18} />
          </Link>

          <Link
            href="#contact"
            className="rounded-xl border border-[#464646] bg-[#222222] px-6 py-3 transition hover:bg-[#323232]"
          >
            Contact Me
          </Link>
        </div>
      </div>

      {/* Right Content */}
      <div className="flex justify-center">
        <div className="rounded-3xl border border-[#323232] bg-[#222222] p-6">
          <Image
            src="/images/profile.png"
            alt="Profile"
            width={380}
            height={380}
            className="rounded-2xl object-cover"
          />
        </div>
      </div>
    </section>
  );
}
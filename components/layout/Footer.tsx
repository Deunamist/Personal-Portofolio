import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-[#323232] bg-[#090909]">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 py-10 md:flex-row">
        {/* Left */}
        <div>
          <h2 className="text-xl font-semibold">
            Pande Made Agung Dananjaya
          </h2>

          <p className="mt-2 max-w-md text-sm text-neutral-400">
            Building modern web applications with Next.js, React, and
            user-focused design.
          </p>
        </div>

        {/* Right */}
        <div className="flex items-center gap-5">
          <Link
            href="https://github.com/Deunamist"
            target="_blank"
            className="rounded-lg p-2 transition hover:bg-[#222222]"
            aria-label="GitHub"
          >
            <FaGithub size={20} />
          </Link>

          <Link
            href="https://linkedin.com/in/pande-made-agung-dananjaya-krisna-cakra"
            target="_blank"
            className="rounded-lg p-2 transition hover:bg-[#222222]"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={20} />
          </Link>

          <Link
            href="mailto:pande.agungdanan@gmail.com"
            className="rounded-lg p-2 transition hover:bg-[#222222]"
            aria-label="Email"
          >
            <Mail size={20} />
          </Link>
        </div>
      </div>

      <div className="border-t border-[#323232] py-6 text-center text-sm text-neutral-500">
        © {new Date().getFullYear()} Pande Made Agung Dananjaya Krisna Cakra.
        Built with Next.js & Tailwind CSS.
      </div>
    </footer>
  );
}
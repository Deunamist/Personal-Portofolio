import Link from "next/link";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="rounded-3xl border border-[#323232] bg-[#222222] p-10"
    >
      <div className="max-w-3xl">
        <h2 className="text-4xl font-bold">
          Let's Connect Together
        </h2>

        <p className="mt-4 leading-8 text-neutral-400">
          I’m always open to discussing internships, freelance work,
          collaborations, or exciting technology projects.
        </p>
      </div>

      <div className="mt-10 flex flex-wrap gap-4">
        <Link
          href="mailto:pande.agungdanan@gmail.com"
          className="flex items-center gap-2 rounded-xl border border-[#464646] px-5 py-3 transition hover:bg-[#323232]"
        >
          <Mail size={18} />
          Email
        </Link>

        <Link
          href="https://github.com/Deunamist"
          target="_blank"
          className="flex items-center gap-2 rounded-xl border border-[#464646] px-5 py-3 transition hover:bg-[#323232]"
        >
          <FaGithub size={18} />
          GitHub
        </Link>

        <Link
          href="https://linkedin.com/in/pande-made-agung-dananjaya-krisna-cakra"
          target="_blank"
          className="flex items-center gap-2 rounded-xl border border-[#464646] px-5 py-3 transition hover:bg-[#323232]"
        >
          <FaLinkedin size={18} />
          LinkedIn
        </Link>
      </div>
    </section>
  );
}
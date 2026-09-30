export default function About() {
  return (
    <section id="about" className="space-y-8">
      <div>
        <h2 className="text-4xl font-bold">About Me</h2>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="rounded-3xl border border-[#323232] bg-[#222222] p-8 lg:col-span-2">
          <p className="leading-8 text-neutral-400">
            Fresh graduate of Telkom University's Information Technology Study Program with a strong interest in Web Development, UI/UX Design, and
            Internet of Things (IoT). Experienced in building web applications using ReactJS, NextJS, Laravel, and
            ExpressJS through academic and internship projects. Passionate about building user-centered digital
            solutions and continuously exploring new technologies to solve real-world problems through innovation and collaboration.
          </p>
        </div>

        <div className="rounded-3xl border border-[#323232] bg-[#222222] p-8">
          <div className="space-y-5">
            <div>
              <p className="text-sm text-neutral-500">Location</p>
              <p>Bandung, Indonesia</p>
            </div>

            <div>
              <p className="text-sm text-neutral-500">Age</p>
              <p>22 Years Old</p>
            </div>

            <div>
              <p className="text-sm text-neutral-500">Focus</p>
              <p>Website Development • UI/UX • IoT</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
import Container from "@/components/layout/container";
import { aboutPageData } from "@/data/aboutPage";

export default function AboutTeam() {
  const { team } = aboutPageData;

  return (
    <section className="bg-[#07172E] py-16 text-white md:py-20">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-[#378ADD]/20 bg-white/5 px-4 py-2 text-sm font-medium text-[#85B7EB]">
            Our Team
          </span>

          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            A Team Built Around Strategy, Design & Growth
          </h2>

          <p className="mt-5 text-base leading-8 text-[#B5D4F4] md:text-lg">
            GrowPep works with a focused team structure that combines strategic
            thinking, clean design, and modern development execution.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {team.map((member) => (
            <div
              key={member.name}
              className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm transition hover:-translate-y-1 hover:border-[#378ADD]/30 hover:bg-white/10 hover:shadow-xl"
            >
              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#185FA5] via-[#378ADD] to-[#D4A017] text-lg font-bold text-white">
                {member.name
                  .split(" ")
                  .map((part) => part[0])
                  .join("")
                  .slice(0, 2)}
              </div>

              <h3 className="text-xl font-semibold text-white">{member.name}</h3>
              <p className="mt-2 text-sm font-medium text-[#85B7EB]">
                {member.role}
              </p>
              <p className="mt-4 text-sm leading-7 text-[#B5D4F4]">
                {member.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
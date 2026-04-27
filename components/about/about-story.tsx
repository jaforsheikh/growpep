import Container from "@/components/layout/container";
import { aboutPageData } from "@/data/aboutPage";

export default function AboutStory() {
  const { story } = aboutPageData;

  return (
    <section className="bg-[#F5F7FA] py-16 md:py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="inline-flex rounded-full border border-[#378ADD]/20 bg-[#E6F1FB] px-4 py-2 text-sm font-medium text-[#185FA5]">
              Our Story
            </span>

            <h2 className="mt-4 text-3xl font-bold text-[#0F172A] sm:text-4xl">
              Why GrowPep Exists
            </h2>

            <p className="mt-6 text-base leading-8 text-[#64748B] md:text-lg">
              {story.description}
            </p>

            <p className="mt-5 text-base leading-8 text-[#64748B] md:text-lg">
              {story.descriptionTwo}
            </p>
          </div>

          <div className="rounded-[32px] border border-[#E2E8F0] bg-white p-8 shadow-sm">
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-3xl bg-[#F8FAFC] p-6">
                <p className="text-3xl font-bold text-[#185FA5]">Premium</p>
                <p className="mt-2 text-sm text-[#64748B]">
                  Design quality that builds trust at first glance.
                </p>
              </div>

              <div className="rounded-3xl bg-[#F8FAFC] p-6">
                <p className="text-3xl font-bold text-[#1D9E75]">Scalable</p>
                <p className="mt-2 text-sm text-[#64748B]">
                  Flexible systems that are easier to update and improve later.
                </p>
              </div>

              <div className="rounded-3xl bg-[#F8FAFC] p-6">
                <p className="text-3xl font-bold text-[#D4A017]">Strategic</p>
                <p className="mt-2 text-sm text-[#64748B]">
                  Every design and content choice is guided by purpose.
                </p>
              </div>

              <div className="rounded-3xl bg-[#F8FAFC] p-6">
                <p className="text-3xl font-bold text-[#378ADD]">Focused</p>
                <p className="mt-2 text-sm text-[#64748B]">
                  Built for stronger conversion, clarity, and brand growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
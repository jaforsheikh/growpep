import Container from "@/components/layout/container";
import { contactPageData } from "@/data/contactPage";

export default function ContactForm() {
  const { form } = contactPageData;

  return (
    <section className="bg-white py-16 md:py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <div>
            <span className="inline-flex rounded-full border border-[#378ADD]/20 bg-[#E6F1FB] px-4 py-2 text-sm font-medium text-[#185FA5]">
              Contact Form
            </span>

            <h2 className="mt-4 text-3xl font-bold text-[#0F172A] sm:text-4xl">
              {form.title}
            </h2>

            <p className="mt-5 text-base leading-8 text-[#64748B] md:text-lg">
              {form.description}
            </p>
          </div>

          <div className="rounded-[32px] border border-[#E2E8F0] bg-[#F8FAFC] p-6 shadow-sm sm:p-8">
            <form className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-[#0F172A]">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full rounded-2xl border border-[#E2E8F0] bg-white px-4 py-3 text-sm text-[#0F172A] outline-none transition focus:border-[#378ADD]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-[#0F172A]">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full rounded-2xl border border-[#E2E8F0] bg-white px-4 py-3 text-sm text-[#0F172A] outline-none transition focus:border-[#378ADD]"
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-[#0F172A]">
                    Phone / WhatsApp
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your phone number"
                    className="w-full rounded-2xl border border-[#E2E8F0] bg-white px-4 py-3 text-sm text-[#0F172A] outline-none transition focus:border-[#378ADD]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-[#0F172A]">
                    Service Needed
                  </label>
                  <select className="w-full rounded-2xl border border-[#E2E8F0] bg-white px-4 py-3 text-sm text-[#0F172A] outline-none transition focus:border-[#378ADD]">
                    <option>Choose a service</option>
                    <option>Social Media Management</option>
                    <option>WordPress Website Design</option>
                    <option>Full Stack Development</option>
                    <option>Reputation Management</option>
                    <option>Media Buying</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-[#0F172A]">
                  Project Details
                </label>
                <textarea
                  rows={6}
                  placeholder="Tell us about your project, goals, and what you need help with..."
                  className="w-full rounded-2xl border border-[#E2E8F0] bg-white px-4 py-3 text-sm text-[#0F172A] outline-none transition focus:border-[#378ADD]"
                />
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-full bg-[#185FA5] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#0C447C]"
              >
                Send Project Inquiry
              </button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}
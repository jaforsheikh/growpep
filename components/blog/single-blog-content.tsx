import Container from "@/components/layout/container";
import type { BlogPost } from "@/data/blogPage";

type Props = {
  post: BlogPost;
};

export default function SingleBlogContent({ post }: Props) {
  return (
    <section className="bg-white py-16 md:py-20">
      <Container>
        <div className="mx-auto max-w-3xl">
          <div className="rounded-[32px] border border-[#E2E8F0] bg-[#F8FAFC] p-7 shadow-sm sm:p-10">
            <p className="text-base leading-8 text-[#475569] md:text-lg">
              {post.content.intro}
            </p>
          </div>

          <div className="mt-10 space-y-10">
            {post.content.sections.map((section) => (
              <article key={section.heading}>
                <h2 className="text-2xl font-bold text-[#0F172A] sm:text-3xl">
                  {section.heading}
                </h2>

                <div className="mt-5 space-y-5">
                  {section.paragraphs.map((paragraph, index) => (
                    <p
                      key={index}
                      className="text-base leading-8 text-[#475569] md:text-lg"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                {section.points && (
                  <ul className="mt-6 space-y-4">
                    {section.points.map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[#185FA5]" />
                        <span className="text-base leading-7 text-[#475569]">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
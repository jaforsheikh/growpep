type SectionHeadingProps = {
  badge?: string;
  title: string;
  gradientText?: string;
  description?: string;
  center?: boolean;
  theme?: "light" | "dark";
};

export default function SectionHeading({
  badge,
  title,
  gradientText,
  description,
  center = true,
  theme = "light",
}: SectionHeadingProps) {
  const isDark = theme === "dark";

  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {badge && (
        <span
          className={`inline-flex rounded-full px-4 py-2 text-sm font-medium ${
            isDark
              ? "border border-[#378ADD]/20 bg-white/5 text-[#85B7EB]"
              : "border border-[#378ADD]/20 bg-[#E6F1FB] text-[#185FA5]"
          }`}
        >
          {badge}
        </span>
      )}

      <h2
        className={`mt-4 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl ${
          isDark ? "text-white" : "text-[#0F172A]"
        }`}
      >
        {title}{" "}
        {gradientText && (
          <span className="bg-gradient-to-r from-[#85B7EB] via-[#378ADD] to-[#D4A017] bg-clip-text text-transparent">
            {gradientText}
          </span>
        )}
      </h2>

      {description && (
        <p
          className={`mt-5 text-base leading-8 md:text-lg ${
            isDark ? "text-[#B5D4F4]" : "text-[#64748B]"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
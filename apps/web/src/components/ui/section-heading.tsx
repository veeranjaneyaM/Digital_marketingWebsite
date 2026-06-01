import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left"
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl space-y-4", align === "center" && "mx-auto text-center")}>
      <p className="font-ui text-[11px] uppercase tracking-[0.42em] text-[#2563eb]">
        {eyebrow}
      </p>
      <h2 className={cn("font-display text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl lg:text-[3.15rem]", align === "center" ? "mx-auto max-w-3xl" : "max-w-2xl")}>
        {title}
      </h2>
      <p className={cn("text-[15px] leading-7 text-slate-600 md:text-lg md:leading-8", align === "center" ? "mx-auto max-w-2xl" : "max-w-2xl")}>
        {description}
      </p>
    </div>
  );
}

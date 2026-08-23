export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section
      style={{
        backgroundImage:
          "repeating-linear-gradient(0deg, var(--neutral-color), var(--neutral-color) 33px, var(--neutral-border) 2px, var(--neutral-color) 34px)",
      }}
      className="flex flex-col justify-center gap-4 px-32 max-md:px-18 max-xl:py-12 min-xl:py-16">
      <div className="inline-block justify-center">{children}</div>
    </section>
  );
}

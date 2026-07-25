import { title } from "@/components/primitives";

export default function AboutPage() {
  return (
    <div className="flex flex-row gap-6 items-center">
      <img
        src="/goosie_1.png"
        alt="goose picture"
        className="h-14 w-18 overflow-hidden rounded-full ring-2 ring-white object-cover object-left"
      />
      <h1 className={title()}>About</h1>
    </div>
  );
}

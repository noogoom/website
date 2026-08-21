import { title } from "@/components/primitives";

export default function AboutPage() {
  return (
    <div className="flex flex-row gap-6 items-center">
      <img
        src="/mepic.png"
        alt="avatar"
        className="h-full w-16 object-cover object-left"
      />
      <h1 className={title()}>About</h1>
    </div>
  );
}

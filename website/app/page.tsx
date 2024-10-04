
import {Chip} from "@nextui-org/chip";
// import Image from "next/image";

const chipContents = ['emojis', 'sustainability', 'art', 'figma']

//className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"
export default function Home() {
  return (
    <div>
      <main>
         <span>Sarah Alaghbari</span>
         this.chipContents.map((chipContent) => return(<Chip>chipContent</Chip>))
         </main>
    </div>
  );
}

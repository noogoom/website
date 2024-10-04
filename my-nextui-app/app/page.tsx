import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { Chip } from "@nextui-org/chip";
import { Card, CardBody, CardHeader } from "@nextui-org/card";

import { Image } from "@nextui-org/image";
import { Divider } from "@nextui-org/divider";
import { useTheme } from "next-themes";




const chipContents = ['emojis ✨', 'sustainability 🌱', 'art', 'figma', 'يمن']
const cardContents = [
  {title: 'work', content: 'Software Engineer / UX Engineer', icon: 'keyboard'},
  {title: 'studies', content: 'Masters in Media Computer Science', icon: 'school'},
  {title: 'private stuff', contentChips: ['Drawing', 'Choir', 'Languages'], icon: 'stock_media'}]


  // export const ThemeSwitcher = () => {
  //   const { theme, setTheme } = useTheme()
  
  //   return (
  //     <div>
  //       The current theme is: {theme}
  //       <button onClick={() => setTheme('light')}>Light Mode</button>
  //       <button onClick={() => setTheme('dark')}>Dark Mode</button>
  //     </div>
  //   )
  // };

  
export default function Home() {
  // const { theme, setTheme } = useTheme(); 

  return (
    <div className="flex flex-col h-full gap-6">
      <main>
        <div className="flex flex-row gap-10">
        <Image
      width={150}
      alt="Moon Picture"
      src="/image.png"
    />
        <div className="flex flex-col w-full gap-10">
         <span>Sarah Alaghbari</span>
         <div className="flex gap-4">
        { chipContents.map(chipContent => <Chip variant="shadow" 
      className="pretty-chips"><b>#{chipContent}</b></Chip>)}
      </div>
      </div>
      </div>
         </main>
         <Divider orientation="horizontal" />
         <Divider orientation="horizontal" />

<div className="gap-3 grid grid-cols-3 lg:grid-cols-3 w-full">
{cardContents.map((item, index) => (
  <Card shadow="sm" key={index} className="p-4 skillCard flex justify-center" isPressable>
    <CardHeader className="flex flex-col justify-center gap-4">
      <span className="material-symbols-outlined item-icon">{item.icon}</span>
      <h2 className="text-2xl font-['Gupter'] tracking-widest text-indigo-400">{item.title}</h2>
      </CardHeader>
    <CardBody className="overflow-visible">
      <div className="flex gap-4 justify-center">
    {item.content}
    {item.contentChips?.map((chip) => (
      <Chip variant="shadow" 
      className="pretty-chips">{chip}</Chip>
    ))}</div>
    </CardBody>
  </Card>
))}
</div>
</div>
  );
}

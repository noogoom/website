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
const chipContents = ['emojis', 'sustainability', 'art', 'figma', 'يمن']
const cardContents = [
  {title: 'Work', content: 'Software Engineer / UX Engineer', icon: 'keyboard'},
  {title: 'Studies', content: 'Masters in Media Computer Science', icon: 'school'},
  {title: 'Private Stuff', contentChips: ['Drawing', 'Choir', 'Languages'], icon: 'stock_media'}]

  // function IconDisplay({ iconName }){
  //   const icons = {
  //   BeakerIcon,
  // HomeIcon,
  //  UserIcon,
  // };}

export default function Home() {
  return (
    <div className="flex flex-col h-full gap-6">
      <main>
        <div className="flex flex-row gap-10">
        <Image
      width={150}
      alt="NextUI hero Image"
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
  <Card shadow="sm" key={index} className="p-4" isPressable>
    <CardHeader className="justify-center"><h2>{item.title}</h2></CardHeader>
    <CardBody className="overflow-visible">
      <div className="flex gap-4">
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

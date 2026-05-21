import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Chip } from "@nextui-org/chip";

import { Divider } from "@nextui-org/divider";
import { Image } from "@nextui-org/image";
import { Navbar } from "@/components/navbar";

const chipContents = ["emojis ✨", "sustainability 🌱", "art", "figma", "يمن"];
const cardContents = [
  {
    title: "work",
    content: "Software Engineer / UX Engineer",
    icon: "keyboard",
  },
  {
    title: "studies",
    content: "Masters in Media Computer Science",
    icon: "school",
  },
  {
    title: "private stuff",
    contentChips: ["Drawing", "Choir", "Languages"],
    icon: "stock_media",
  },
];

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
    <div className="flex flex-row gap-2 ">
      <Navbar />
      <div className="flex flex-col gap-6 h-full">
        <Image width={150} alt="Moon Picture" src="/sun.png" />
        <span className="text-4xl font-bold">Hi, I'm Sarah</span>
        <span className="text-2xl text-gray-500">
          I'm a software engineer with a passion for user experience and design.
        </span>
        <div className="flex gap-4">
          {chipContents.map((chipContent) => (
            <Chip variant="shadow" className="pretty-chips">
              <b>#{chipContent}</b>
            </Chip>
          ))}
        </div>
        <Divider orientation="horizontal" />
        <div className="gap-3 grid grid-cols-3 lg:grid-cols-3 w-full">
          {cardContents.map((item, index) => (
            <Card
              shadow="sm"
              key={index}
              className="p-4 skillCard flex justify-center"
              isPressable>
              <CardHeader className="flex flex-col justify-center gap-4">
                <span className="material-symbols-outlined item-icon">
                  {item.icon}
                </span>
                <h2 className="text-2xl font-['Gupter'] tracking-widest text-indigo-400">
                  {item.title}
                </h2>
              </CardHeader>
              <CardBody className="overflow-visible">
                <div className="flex gap-4 justify-center">
                  {item.content}
                  {item.contentChips?.map((chip) => (
                    <Chip variant="shadow" className="pretty-chips">
                      {chip}
                    </Chip>
                  ))}
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

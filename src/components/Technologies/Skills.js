import { DiAndroid, DiTerminal } from "react-icons/di";
import { SiRubyonrails, SiFirebase, SiGit } from "react-icons/si";
import { FaReact } from "react-icons/fa";

export const Skills = [
  {
    slug: "android",
    Component: DiAndroid,
    title: "Android",
    Description: () => <>I build native android apps using kotlin and java.</>,
  },
  {
    slug: "react native",
    Component: FaReact,
    title: "React Native",
    Description: () => <>I create fluent and efficient cross platform apps with react native. </>,
  },
  {
    slug: "Back-End",
    Component: SiRubyonrails,
    title: "Python/Ruby On Rails",
    Description: () => <>I build backend micro service applications with ruby on rails, djano, flask and node.js</>,
  },
  {
    slug: "firebase",
    Component: SiFirebase,
    title: "Firebase",
    Description: () => <>I have used Firebase for auth, database & analytics in my apps.</>,
  },
  {
    slug: "git",
    Component: SiGit,
    title: "Git",
    Description: () => <>Git is a tool that I use every day. I use GitHub for pushing my code.</>,
  },
];

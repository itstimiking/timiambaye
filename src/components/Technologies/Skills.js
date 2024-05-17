
import { SiDjango, SiRedux, SiNodedotjs, SiNextdotjs, SiVuedotjs, SiNuxtdotjs, SiTypescript, SiGraphql } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { FaReact } from "react-icons/fa";

export const Skills = [
  {
    slug: "react",
    Component: FaReact,
    title: "React",
    Description: () => <>Crafting efficient UI using React Library.</>,
  },
  {
    slug: "next",
    Component: SiNextdotjs,
    title: "Next.js",
    Description: () => <>Fast and secure SSR applications with Next.js.</>,
  },
  {
    slug: "react_native",
    Component: TbBrandReactNative,
    title: "React Native",
    Description: () => <>I build cross platform mobile apps with react native. </>,
  },
  {
    slug: "vue",
    Component: SiVuedotjs,
    title: "Vue.js",
    Description: () => <>Crafting efficient, simple and elegant UI using Vue framework.</>,
  },
  {
    slug: "nuxt",
    Component: SiNuxtdotjs,
    title: "Nuxt.js",
    Description: () => <>Efficient and secure SSR UI built with Nuxt.js.</>,
  },
  {
    slug: "django",
    Component: SiDjango,
    title: "Django",
    Description: () => <>Proficient in Python Frameworks like Django and Flask.</>,
  },
  {
    slug: "node",
    Component: SiNodedotjs,
    title: "Node.js",
    Description: () => <>Robust API backends with Node and express.js.</>,
  },
  {
    slug: "Redux",
    Component: SiRedux,
    title: "Redux",
    Description: () => <>Secure client side state management with Redux.</>,
  },
  {
    slug: "GraphQL",
    Component: SiGraphql,
    title: "GraphQL",
    Description: () => <>Complete mastery of graphql data fetching and management.</>,
  },
  {
    slug: "TypeScript",
    Component: SiTypescript,
    title: "TypeScript",
    Description: () => <>Type safe development with TypeScript.</>,
  },
];

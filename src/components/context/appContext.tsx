import { createContext, useState } from "react";
import Project from "../Project";

const isDev = process.env.NODE_ENV === "development";
const basePath = isDev ? "" : "https://noomdalv.github.io/";

export type AppContextType = {
  projects: Project[];
};

const projects: Project[] = [
  {
    id: 2024050601,
    title: "Done With It(Expo)",
    description: `Mobile app that helps you sell all your used stuff, it emulates a "garage sale" in the virtual world.`,
    sourceImg: `${basePath}/src/assets/dwi-collage.png`,
    repoUrl: "https://github.com/noomdalv/DoneWithIt-FrontEnd",
    usedTools: ["React Native", "Expo", "NodeJS", "Express"],
  },
  {
    id: 2024050602,
    title: "Game-Hub(Next.js)",
    description:
      "With GameHub, you can search for new and interesting games by platform, genre, and more.",
    sourceImg: `${basePath}/src/assets/gamehub.jpg`,
    repoUrl: "https://github.com/noomdalv/next13_game_hub",
    usedTools: ["React", "Next.js", "RAWG API"],
  },
  {
    id: 2024050603,
    title: "Issue Tracker",
    description:
      "Web app implemented with Next Auth, allow users to create and assign issues(tickets) to others.",
    sourceImg: `${basePath}/src/assets/issue-tracker-collage.png`,
    repoUrl: "https://github.com/noomdalv/issue-tracker",
    usedTools: ["React", "Next.js", "Prisma"],
  },
  {
    id: 2024050604,
    title: "Note Storage App",
    description:
      "Note storage system built with React and TypeScript. Uses local storage to persist notes between sessions and search functionality to filter notes",
    sourceImg: `${basePath}/src/assets/notes-adv-ts-collage.png`,
    repoUrl: "https://github.com/noomdalv/react_ts_adv_notes",
    usedTools: ["React", "TypeScript"],
  },
  {
    id: 2024050605,
    title: "Expense Tracker",
    description:
      "MERN stack application for tracking expenses. It connects to a local backend and uses MongoDB Atlas for data storage.",
    sourceImg: `${basePath}/src/assets/expense-tracker1.png`,
    repoUrl: "https://github.com/noomdalv/mern_expense_tracker",
    usedTools: ["MongoDB", "Express", "React", "NodeJS"],
  },
  {
    id: 2024050606,
    title: "GraphQL Library",
    description:
      "Bookstore CMS app connected to Mongo Atlas that allows users to add and remove books from a list.",
    sourceImg: `${basePath}/src/assets/graphql-books.png`,
    repoUrl: "https://github.com/noomdalv/graphql_books",
    usedTools: ["React", "Apollo", "GraphQL"],
  },
  {
    id: 2024050607,
    title: "Activity Tracker",
    description:
      "App designed to track statistics of basic daily activities (sleep, work, exercise, leisure).",
    sourceImg: `${basePath}/src/assets/activity-tracker.png`,
    repoUrl: "https://github.com/noomdalv/react_activity_tracker",
    usedTools: ["Rails", "Javascript", "React", "Redux"],
  },
  {
    id: 2024050608,
    title: "COVID-19 Stats Tracker",
    description:
      "Covid-19 global stats app created using Redux store, with a country/location search filter.",
    sourceImg: `${basePath}/src/assets/covid-tracker.png`,
    repoUrl: "https://github.com/noomdalv/react_covid19_stats",
    usedTools: ["Javascript", "React", "CSS"],
  },
  {
    id: 2024050609,
    title: "Battleships",
    description:
      "Battleship game simulator made with JavaScript, implementing Factory Functions.",
    sourceImg: `${basePath}/src/assets/battleships.jpeg`,
    repoUrl: "https://github.com/noomdalv/battleship",
    usedTools: ["Javascript", "HTML", "CSS"],
  },
  {
    id: 2024050610,
    title: "Weather App",
    description:
      "App created to allow users to search for the forecast in cities worldwide.",
    sourceImg: `${basePath}/src/assets/js_weatherApp.jpeg`,
    repoUrl: "https://github.com/noomdalv/js_weatherApp",
    usedTools: ["Javascript", "HTML", "CSS"],
  },
  {
    id: 2024050611,
    title: "JS Restaurant",
    description:
      "DOM manipulation project, rendering a static pages restaurant website with JavaScript and basic Webpack configuration.",
    sourceImg: `${basePath}/src/assets/js_restaurant.png`,
    repoUrl: "https://github.com/noomdalv/js_restaurant_page",
    usedTools: ["Javascript", "HTML", "CSS"],
  },
  {
    id: 2024050612,
    title: "Mini Fb Clone",
    description:
      "Facebook clone with user authentication, implementing friendships, posts, comments, and likes functionalities.",
    sourceImg: `${basePath}/src/assets/fb_clone.png`,
    repoUrl: "https://github.com/noomdalv/rails_mini_fb",
    usedTools: ["Rails", "Bootstrap"],
  },
  {
    id: 2024050613,
    title: "Using Bootstrap (Newsweek Clone)",
    description:
      "Aimed to recreate the newsweek.com main page using Bootstrap's front-end component library.",
    sourceImg: `${basePath}/src/assets/newsweek_clone.png`,
    repoUrl: "https://github.com/noomdalv/Using-Bootstrap",
    usedTools: ["Bootstrap", "HTML", "CSS"],
  },
  {
    id: 2024050614,
    title: "Responsive Design (TNW Clone)",
    description:
      "CSS Gridbox adaptation to recreate thenextweb.com main pagestructure applying media query breakpoints.",
    sourceImg: `${basePath}/src/assets/tnw_clone.png`,
    repoUrl: "https://github.com/noomdalv/Building-with-Responsive-Design",
    usedTools: ["HTML", "CSS"],
  },
];

export const AppContext = createContext<AppContextType>({ projects: [] });

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [projectList] = useState<Project[]>(projects);

  return (
    <AppContext.Provider value={{ projects: projectList }}>
      {children}
    </AppContext.Provider>
  );
};

import { createContext, useState } from "react";
import Project from "../Project";

export type AppContextType = {
  projects: Project[];
};

const projects: Project[] = [
  {
    id: 1,
    title: "Activity Tracker",
    description:
      "App designed to track statistics of basic daily activities (sleep, work, exercise, leisure).",
    sourceImg: "/src/assets/activity-tracker.png",
    repoUrl: "https://github.com/noomdalv/react_activity_tracker",
    usedTools: ["Rails", "Javascript", "React", "Redux"],
  },
  {
    id: 2,
    title: "COVID-19 Stats Tracker",
    description:
      "Covid-19 global stats app created using Redux store, with a country/location search filter.",
    sourceImg: "/src/assets/covid-tracker.png",
    repoUrl: "https://github.com/noomdalv/react_covid19_stats",
    usedTools: ["Javascript", "React", "CSS"],
  },
  {
    id: 3,
    title: "Battleships",
    description:
      "Battleship game simulator made with JavaScript, implementing Factory Functions, and a basic bootstrap design.",
    sourceImg: "/src/assets/battleships.jpeg",
    repoUrl: "https://github.com/noomdalv/battleship",
    usedTools: ["Javascript, HTML, CSS"],
  },
  {
    id: 4,
    title: "Weather App",
    description:
      "App created to allow users to search for the forecast in cities worldwide.",
    sourceImg: "/src/assets/js_weatherApp.jpeg",
    repoUrl: "https://github.com/noomdalv/js_weatherApp",
    usedTools: ["Javascript", "HTML", "CSS"],
  },
  {
    id: 5,
    title: "JS Restaurant",
    description:
      "HTML DOM manipulation project, the goal was to render a static pages restaurant website with JavaScript and basic Webpack configuration.",
    sourceImg: "/src/assets/js_restaurant.png",
    repoUrl: "https://github.com/noomdalv/js_restaurant_page",
    usedTools: ["Javascript", "HTML", "CSS"],
  },
  {
    id: 6,
    title: "Mini Fb Clone",
    description:
      "Facebook clone with user authentication, implementing friendships, posts, comments, and likes functionalities.",
    sourceImg: "/src/assets/fb_clone.png",
    repoUrl: "https://github.com/noomdalv/rails_mini_fb",
    usedTools: ["Rails", "Bootstrap"],
  },
  {
    id: 7,
    title: "Using Bootstrap (Newsweek Clone)",
    description:
      "Aimed to recreate the newsweek.com main page using Bootstrap's front-end component library.",
    sourceImg: "/src/assets/newsweek_clone.png",
    repoUrl: "https://github.com/noomdalv/Using-Bootstrap",
    usedTools: ["Bootstrap", "HTML", "CSS"],
  },
  {
    id: 8,
    title: "Responsive Design (TNW Clone)",
    description:
      "CSS Gridbox adaptation to recreate thenextweb.com main pagestructure applying media query breakpoints.",
    sourceImg: "/src/assets/tnw_clone.png",
    repoUrl: "https://github.com/noomdalv/Building-with-Responsive-Design",
    usedTools: ["HTML", "CSS"],
  },
];

export const AppContext = createContext<AppContextType>({ projects: [] });

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [projectList, setProjectList] = useState<Project[]>(projects);

  return (
    <AppContext.Provider value={{ projects: projectList }}>
      {children}
    </AppContext.Provider>
  );
};

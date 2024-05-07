import { createContext, useState } from "react";
import Project from "../Project";
import { projects } from "./projects";

export type AppContextType = {
  projects: Project[];
};

export const AppContext = createContext<AppContextType>({ projects: [] });

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [projectList] = useState<Project[]>(projects);

  return (
    <AppContext.Provider value={{ projects: projectList }}>
      {children}
    </AppContext.Provider>
  );
};

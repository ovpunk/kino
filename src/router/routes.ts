import { ComponentType } from "react";
import { Films } from "../pages/Films/Films";
import { CurrentFilm } from "../pages/CurrentFilm/CurrentFilm";

interface IRoutes {
  path: string;
  component: ComponentType<any>; // eslint-disable-line @typescript-eslint/no-explicit-any
}

export const routes: IRoutes[] = [
  { path: "/films", component: Films },
  { path: "/films/:id", component: CurrentFilm },
  { path: "*", component: Films },
];

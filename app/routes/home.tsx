import type { Route } from "./+types/home";
import { Welcome } from "../components/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "CharmedScout" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <Welcome />;
}

import type { Route } from "./+types/home";
import { Welcome } from "./welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "CharmedScout" },
    { name: "description", content: "Welcome to Charmed Scout App!" },
  ];
}

export default function Home() {
  return <Welcome />;
}

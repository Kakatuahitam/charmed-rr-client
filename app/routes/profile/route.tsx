import type { Route } from "./+types/profile";
import { Content } from "./content";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "CharmedScout | Profile" },
    { name: "description", content: "Profile" },
  ];
}

export default function ProfilePage() {
  return <Content />;
}

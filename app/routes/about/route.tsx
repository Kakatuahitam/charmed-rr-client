import type { Route } from "./+types/about";
import { Content } from "./content";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "CharmedScout | About" },
    { name: "description", content: "About Us" },
  ];
}

export async function loader({ params }: Route.LoaderArgs){
  const result = {
    body: {
        success: true,
        message: "Mail sent successfully. messageID: 0",
        token: "v4.local.0LWJlIHwgdjAuMC4x"
    }
}

  return result;
}

export default function AboutPage({ loaderData }: Route.ComponentProps) {
  return <Content
    message={loaderData.body.message}
    success={loaderData.body.success}
    token={loaderData.body.token}
  />;
}

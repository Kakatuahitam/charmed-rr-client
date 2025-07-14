import type { Route } from "./+types/sign-in";
import { Content } from "./content";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "CharmedScout | About" },
    { name: "description", content: "About Us" },
  ];
}

export async function action({ request }: Route.ActionArgs){
  const formData = await request.formData();

  const email = formData.get('email');
  const password = formData.get('password');

  console.log(email, password);

}

export default function SignInPage() {
  return <Content />;
}

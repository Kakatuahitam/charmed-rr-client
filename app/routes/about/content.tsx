import logoDark from "../../images/logo-dark.svg";
import logoLight from "../../images/logo-light.svg";
import { Drawer } from "../../components/drawer";

export function Content({ message, success, token }) {
  return (
    <div>
      <header>
        <Drawer title="About Us"/>
      </header>

      <main className="flex flex-col items-start w-screen justify-center p-8">
        <div>
          <h1 className="text-2xl font-bold">Welcome to CharmedScout App!</h1>
          <p className="text-base">A place to gather, inform, and learn together!</p>
          <p className="text-base">{message}</p>
          <p className="text-base">{success}</p>
          <p className="text-base">{token}</p>
        </div>
      </main>
    </div>
  );
}

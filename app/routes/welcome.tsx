import logoDark from "../images/logo-dark.svg";
import logoLight from "../images/logo-light.svg";
import { Drawer } from "../components/drawer";

export function Welcome() {
  return (
    <div>
      <header>
        <Drawer title="Home"/>
      </header>

      <main className="flex flex-col items-center justify-center pt-16 pb-4">
        <div>
          <h1 className="text-2xl font-bold">Welcome to CharmedScout App!</h1>
          <p className="text-base">A place to gather, inform, and learn together!</p>
        </div>
      </main>
    </div>
  );
}

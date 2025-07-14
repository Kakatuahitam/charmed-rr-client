import logoDark from "../../images/logo-dark.svg";
import logoLight from "../../images/logo-light.svg";
import { Drawer } from "../../components/drawer";

export function Content() {
  return (
    <div>
      <header>
        <Drawer title="My Profile"/>
      </header>

      <main className="flex flex-col w-screen justify-center m-4">
        <div>
          <p>Profile</p>
        </div>
      </main>
    </div>
  );
}

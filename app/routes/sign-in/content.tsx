import logoDark from "../../images/logo-dark.svg";
import logoLight from "../../images/logo-light.svg";
import { Form } from "react-router";
import { Drawer } from "../../components/drawer";

export function Content() {
  return (
    <div>
      <header>
        <Drawer title="Sign In"/>
      </header>

      <main className="flex flex-col items-start w-screen justify-center p-8">
        <div className="mb-4">
          <h1 className="text-2xl font-bold">Sign In First!</h1>
        </div>
        <fieldset method="POST" className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
          <Form method="POST">
            <label className="label">Email</label>
            <input type="email" name="email" className="input" placeholder="Email" />

            <label className="label">Password</label>
            <input type="password" name="password" className="input" placeholder="Password" />

            <button type="submit" className="btn btn-neutral mt-4">Login</button>
          </Form>
        </fieldset>
      </main>
    </div>
  );
}

import logoDark from "./logo-dark.svg";
import logoLight from "./logo-light.svg";

export function Welcome() {
  return (
    <div>
      <header className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          <div className="w-full navbar bg-base-100 shadow-sm">
            <div className="flex-none lg:hidden">
              <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </label>
            </div>
            <div className="avatar">
              <div className="w-12 rounded-full">
                <img src="/public/favicon.ico" />
              </div>
            </div>
            <div className="flex-1 px-2 mx-2">
              <a className="text-xl font-bold">Home</a>
            </div>
          </div>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>

          <div className="w-80 min-h-full bg-base-200 text-base-content">
            <div
              className="relative w-full h-48 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
              }}
            >
              <div className="absolute inset-0 hero-overlay bg-opacity-60"></div>
              <div className="absolute bottom-2 left-2 text-neutral-content text-xl font-bold">
                Charmed Scout
              </div>
            </div>

            <ul className="menu p-0 w-full">
              <li className="w-full border-b-1 border-stone-300">
                <button className="w-full btn-ghost min-h-16 flex items-center gap-4 px-4 rounded-none">

                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 aspect-1/1 w-8 rounded-full shadow-2xl">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>

                  <b>Profile</b>
                </button>
              </li>
            </ul>

          </div>
        </div>

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

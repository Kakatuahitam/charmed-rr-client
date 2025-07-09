import { Icons } from "./icons";

export function Drawer(){
  return (<div className="drawer">
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

        {drawerButtons.map((button) => {
          if (button.type === "divider") {
            return <div className="divider divider m-0 h-0" />;
          }

          const { text, icon } = button;

          return (
            <ul className="menu p-0 w-full border-b border-stone-300">
              <li className="w-full">
                <button className="w-full btn-ghost min-h-16 flex items-center gap-4 px-4 rounded-none">
                  <div className="w-6 h-auto">{icon}</div>
                  <b>{text}</b>
                </button>
              </li>
            </ul>
          );
        })}
      </div>
    </div>
  </div>);
}

const drawerButtons = [
  { text: "Profile", icon: Icons.Profile },
  { text: "Group Profile", icon: Icons.Group },
  { text: "Achievement", icon: Icons.Star },
  { type: "divider" },
  { text: "Settings", icon: Icons.Settings },
  { text: "Sign Out", icon: Icons.Exit },
]

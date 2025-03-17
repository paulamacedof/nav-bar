import Hamburger from "hamburger-react";
import { Sidebar } from "./components";

interface AppProps {
  state: {
    user: string;
    toggleSidebar: boolean;
    pathname: string;
  };
  setOpen: (isOpen: boolean) => void;
}

function App({ state, setOpen }: AppProps | any) {
  return (
    <div className="bg-[#004D61] w-full p-8">
      <section className="flex justify-between max-w-7xl m-auto">
        <img src="/logo.png" alt="Bytebank" className="hidden md:block" />
        <span className="md:hidden">
          <Hamburger
            toggled={state.toggleSidebar as boolean}
            toggle={setOpen}
            color="#f97316"
            size={24}
          />
        </span>
        <span className="md:hidden">
          <Sidebar
            isMobile
            pathname={state?.pathname}
            isOpen={state.toggleSidebar as boolean}
            onClose={() => setOpen(false)}
          />
        </span>
        <div className="flex items-center gap-4 md:gap-10 text-white">
          <span>{state?.user && state?.user}</span>
          <img src="/avatar.svg" alt="Avatar do Usuário" />
        </div>
      </section>
    </div>
  );
}

export default App;

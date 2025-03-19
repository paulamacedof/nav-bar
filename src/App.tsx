import Hamburger from "hamburger-react";

interface AppProps {
  toggleSidebar: boolean;
  pathname: string;
  setOpen: (isOpen: boolean) => void;
}

function App({ toggleSidebar, pathname, setOpen }: AppProps | any) {
  const user = localStorage.getItem("user");
  const username = JSON.parse(user as string).username;
  return (
    <div className="bg-[#004D61] w-full p-8">
      <section className="flex justify-between max-w-7xl m-auto">
        <img src="/logo.png" alt="Bytebank" className="hidden md:block" />
        <span className="md:hidden">
          <Hamburger
            toggled={toggleSidebar as boolean}
            toggle={setOpen}
            color="#f97316"
            size={24}
          />
        </span>

        <div className="flex items-center gap-4 md:gap-10 text-white">
          <span>{username && username}</span>
          <img src="/avatar.svg" alt="Avatar do Usuário" />
        </div>
      </section>
    </div>
  );
}

export default App;

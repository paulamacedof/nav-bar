interface AppProps {
  state: {
    home: string;
    statement: string;
    navbar: string;
  };
  actions: {
    setState: (newState: { home: string; statement: string }) => void;
  };
}

function App({ state, actions }: AppProps | any) {
  return (
    <div className="bg-black text-white ">
      <p>nav bar: {state?.home}</p>
    </div>
  );
}

export default App;

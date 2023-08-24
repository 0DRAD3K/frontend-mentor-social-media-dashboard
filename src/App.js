import Header from "./components/Header";
import Followers from "./components/Followers";
import Overview from "./components/Overview";


function App() {
  return (
    < >
      <section className="p-6 2xl:h-screen xl:h-full dark:bg-very-dark-blue">
        <Header/>
        <Followers/>
        <Overview/>
      </section>
    </>
  );
}

export default App;

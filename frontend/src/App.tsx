import Header from "./components/Header";
import SalesCard from "./components/SalesCard";

function App() {
  return (
    <> {/* inicializador de leitura das tags*/}
      <Header />
      <main>
        <section id="sales">
          <div className="dsmeta-container"></div>
            <SalesCard />
        </section>
      </main>
    </>
  );
}

export default App;

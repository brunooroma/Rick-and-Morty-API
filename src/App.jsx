import "./App.css";
import PersonajesList from "./components/PersonajesList";
import { ContextProvider } from "./context/GlobalContext";

function App() {
  return (
    <ContextProvider>
      <div className="principal text-white min-vh-100">
        <h1 className="titulo text-center display-1 py-4">Rick and Morty</h1>
        <PersonajesList />
      </div>
    </ContextProvider>
  );
}

export default App;

import "./App.css";
import PersonajesList from "./components/PersonajesList";
import { ContextProvider } from "./context/GlobalContext";

function App() {
  return (
    <ContextProvider>
      <div className="bg-dark text-white">
        <h1 className="text-center display-1 py-4">Rick and Morty</h1>
        <PersonajesList />
      </div>
    </ContextProvider>
  );
}

export default App;

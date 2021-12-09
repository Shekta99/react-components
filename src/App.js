import FormComponent from "./components/FormComponent";
import TitleComponent from "./components/TitleComponent";

function App() {
  const titulo = "Este es un titulo";
  return (
    <div className="App">
      <TitleComponent title={titulo} />
      <FormComponent />
    </div>
  );
}

export default App;

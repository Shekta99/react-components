import TitleComponent from "./components/MyComponent";

function App() {
  const titulo = "Este es un titulo";
  return (
    <div className="App">
      <TitleComponent title={titulo} />
    </div>
  );
}

export default App;

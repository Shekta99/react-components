import MyComponent from "./components/MyComponent";

function App() {
  const titulo = "Este es un titulo";
  return (
    <div className="App">
      <MyComponent title={titulo} />
    </div>
  );
}

export default App;

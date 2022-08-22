import SimpleInput from "./components/SimpleInput";

function App() {
  return (
    <div className="app">
      <SimpleInput
        onSubmit={(name, email) => {
          console.log(name, email);
        }}
      />
    </div>
  );
}

export default App;

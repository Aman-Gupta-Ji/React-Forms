import SimpleInput from "./components/SimpleInput";
import BasicForm from "./components/BasicForm";

function App() {
  return (
    <>
      <div className="app">
        <SimpleInput
          onSubmit={(name, email) => {
            console.log(name, email);
          }}
        />
      </div>
      <div className="app">
        <BasicForm
          onSubmit={(firstName, lastName, email) => {
            console.log(firstName, lastName, email);
          }}
        />
      </div>
    </>
  );
}

export default App;

import Form from './Form'; // Assumindo que Form está em um arquivo separado

function App() {
  return (
    <div>
      <Form
        label1="Label 1"
        placeholder1="Enter something"
        label2="Label 2"
        placeholder2="Enter something else"
        hasButton={true}
        textButton="Submit"
      />
    </div>
  );
}

export default App;

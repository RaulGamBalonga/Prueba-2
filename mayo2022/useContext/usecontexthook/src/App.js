import { useState} from "react";
import Parent from "./components/Parent";

function App() {
  const [gift] = useState ("teddy bear")
  return (
    <div className="App">
      <Parent gift = {gift} />
    </div>
  );
}

export default App;

import UserContext from './context/userContext';
import MoreInfo from './components/MoreInfo';
import './App.css';

function App() {
  const userData = {
    //HTTP
    name: "Agustin",
    year: 27
  }
  return (
    <UserContext.Provider value={userData}>
        <div className="App">
            <h1>useContext</h1>
            <MoreInfo/>
        </div>
    </UserContext.Provider>
  );
}

export default App;

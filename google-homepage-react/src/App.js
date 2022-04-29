
import './App.css';
import { NavigationBar } from "./components/navigation-bar/NavigationBar";
import { HeaderTitle } from "./components/navigation-bar/header-title/HeaderTitle";
import { Buttons } from "./components/navigation-bar/header-title/Buttons";
import { InputForm} from "./components/navigation-bar/input-form/InputForm";


function App() {
  return (
    <div className="App">
      <NavigationBar />
      <HeaderTitle />
      <InputForm />
      <Buttons />
    </div>
    
  );
}

export default App;

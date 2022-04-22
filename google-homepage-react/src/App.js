
import './App.css';
import { NavigationBar } from "./components/navigation-bar/NavigationBar";
import { HeaderTitle } from "./components/navigation-bar/header-title/HeaderTitle";
import { HeaderButton } from "./components/navigation-bar/header-title/HeaderButton";
import { InputForm} from "./components/navigation-bar/input-form/InputForm";


function App() {
  return (
    <div className="App">
      <NavigationBar />
      <HeaderTitle />
      <HeaderButton />
      <InputForm />
    </div>
    
  );
}

export default App;

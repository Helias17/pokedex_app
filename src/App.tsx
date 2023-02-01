import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { MainMenu } from "./components/MainMenu";
import { HomePage } from "./components/HomePage";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { PokemonPage } from "./components/PokemonPage";
import { Wishlist } from "./components/Wishlist/Wishlist";
import { UserAccount } from "./components/UserAccount";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/pokemon/:id/:tab?" element={<PokemonPage />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/account" element={<UserAccount />} />
          </Routes>
          <MainMenu />
        </Router>
      </Provider>
    </div>
  );
}

export default App;

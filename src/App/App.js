import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignInPage from "../AutorizationForm/SignInPage";
import SignOutPage from "../AutorizationForm/SignOutPage";
import Header from "../Header/Header";
// import AsidePanel from "../AsidePanel/AsidePanel";
// import Main from "../Main/Main";
import s from "./App.module.css";

const HomePage = () => {
  return (
    <>
      <Header />
      {/* <AsidePanel />
      <Main /> */}
    </>
  );
};
function App() {
  return (
    <div className={s.main}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signout" element={<SignOutPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import "./App.sass";
import Form from "./components/Form";
import AuthPage from "./components/AuthPage";
import MyDeals from "./components/MyDeals";
import BusinesCrd from "./components/BusinesCard";

const App = () => {
  window.Telegram.WebApp;

  return (
    <Routes>
      <Route path="/web-app-providers/" element={<Form />} />
      <Route path="/web-app-providers/doneAuth" element={<AuthPage />} />
      <Route path="/web-app-providers/deals" element={<MyDeals />} />
      <Route path="/web-app-providers/businesCard" element={<BusinesCrd />} />
      <Route
        path="/bc"
        component={() => {
          window.location.href = "https://www.facebook.com/";
        }}
      />
    </Routes>
  );
};

export default App;

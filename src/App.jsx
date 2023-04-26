import { Route, Routes } from "react-router-dom";
import "./App.sass";
import Form from "./components/Form";
import AuthPage from "./components/AuthPage";
import MyDeals from "./components/MyDeals";
import BusinesCrd from "./components/BusinesCard";
import Info from "./components/MyDeals/info";

const App = () => {
  window.Telegram.WebApp;

  return (
    <Routes>
      <Route path="/web-app-providers/" element={<Form />} />
      <Route path="/web-app-providers/doneAuth" element={<AuthPage />} />
      <Route path="/web-app-providers/businesCard" element={<BusinesCrd />} />
      <Route path="/web-app-providers/deals">
        <Route index element={<MyDeals />} />
        <Route path=":id" element={<Info />} />
      </Route>
    </Routes>
  );
};

export default App;

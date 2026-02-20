import { BrowserRouter } from "react-router-dom";
import RoutesConfig from "./routes";
import Header from "./components/Header";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <RoutesConfig />
    </BrowserRouter>
  );
}
import { Layout } from "./components/Layout";
import { BrowserRouter } from "react-router";
import { AutoProvider } from "./context/AutoProvider"; //para envolver la aplicacion
function App() {
  return (
    <>
      <AutoProvider>
        <BrowserRouter>
          <Layout></Layout>
        </BrowserRouter>
      </AutoProvider>
    </>
  );
}

export default App;

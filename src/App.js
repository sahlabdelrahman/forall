import { Route, Routes } from "react-router-dom";

import Layout from "./layout";

import Home from "./pages/home";
import Provider from "./pages/provider";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:provider" element={<Provider />} />
      </Routes>
    </Layout>
  );
}

export default App;

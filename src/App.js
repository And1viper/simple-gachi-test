import Header from "./components/Header"
import Footer from "./components/Footer"
import Gachi from "./gachimuchi.jpg"
import { Route, Routes } from "react-router-dom"

/* Pages */
import List from "./Pages/List";
import Test from "./Pages/Test";

function App() {
  return (
    <div className="container">
      <img alt="gachi" src={Gachi} style={{ maxWidth: '100%', maxHeight: '400px'}}/>
      <Header title = '"You are Slave or Master" test'/>
      <Routes>
        <Route path="/" element={<List />}></Route>
        <Route path="/test" element={<Test />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

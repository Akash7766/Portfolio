import { Link, Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";
import About from "./Pages/Home/About/About";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <div className="App">
      <div class="navbar bg-[#17181B] lg:hidden">
        <div className="container mx-auto">
          <div class="flex-1">
            <Link to="/" className="btn btn-ghost normal-case text-xl">
              Akash Rahman
            </Link>
          </div>
          <div class="flex-none">
            <button class="btn btn-square btn-ghost">
              <label
                for="my-drawer-2"
                class="btn bg-transparent outline-none border-none hover:bg-transparent drawer-button lg:hidden"
              >
                <i class="fa-solid fa-bars text-xl"></i>
              </label>
            </button>
          </div>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Dashboard></Dashboard>}>
          <Route index element={<Home></Home>}></Route>
          <Route path="home" element={<Home></Home>}></Route>
          <Route path="about" element={<About></About>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;

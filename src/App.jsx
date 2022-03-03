import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import ErrorPage from "./pages/ErrorPage";
import HomePageWithRedirect from "./pages/HomePageWithRedirect";
import projectsData from "./projects-data.json";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route
          exact
          path="/protected"
          element={<HomePageWithRedirect isLoggedIn={true} />}
        />
        <Route exact path="/about" element={<AboutPage />} />
        <Route
          exact
          path="/projects"
          element={<ProjectsPage projects={projectsData} />}
        />

        <Route path="*" element={<ErrorPage />} />
      </Routes>

      <div id="footer">Footer</div>
    </div>
  );
}

export default App;

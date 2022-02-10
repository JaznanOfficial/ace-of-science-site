import "./App.css";
import Navigation from "./Components/Navigation/Navigation";


import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./View/HomePage/HomePage";
import AcdmClass from "./View/AcademicClass/AcdmClass";
import ClassSubject from "./View/ClassSubjects/ClassSubject";
import Lesson from "./View/Lesson";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation></Navigation>
        <Routes>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="magazine" element={<HomePage></HomePage>}></Route>
          <Route path="blog" element={<HomePage></HomePage>}></Route>
          <Route path="about" element={<HomePage></HomePage>}></Route>
          <Route path="contact" element={<HomePage></HomePage>}></Route>
          <Route path="/academicclass" element={<AcdmClass />} />
          <Route
            path="/academicclass/:classnumber"
            element={<ClassSubject />}
          />
          <Route path="/lesson" element={<Lesson />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;

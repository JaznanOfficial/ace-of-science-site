import "./App.css";
import Navigation from "./Components/Navigation/Navigation";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./Components/HomePage/HomePage";
import AcdmClass from "./Components/AcademicClass/AcdmClass";
import ClassSubject from "./Components/ClassSubjects/ClassSubject";
import Lesson from "./Components/Lesson";
import Footer from "./Components/Footer/Footer";
import Contact from "./Components/Contact/Contact";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Navigation></Navigation>
                <Routes>
                    <Route path="/" element={<HomePage></HomePage>}></Route>
                    <Route path="magazine" element={<HomePage></HomePage>}></Route>
                    <Route path="blog" element={<HomePage></HomePage>}></Route>
                    <Route path="contact" element={<Contact></Contact>}></Route>
                    <Route path="/academicclass" element={<AcdmClass />} />
                    <Route path="/academicclass/:classnumber" element={<ClassSubject />} />
                    <Route path="/lesson" element={<Lesson />} />
                </Routes>
                <Footer></Footer>
            </BrowserRouter>
        </div>
    );
}

export default App;

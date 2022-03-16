import "./App.css";
import Navigation from "./Components/Navigation/Navigation";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./Components/HomePage/HomePage";
import AcdmClass from "./Components/AcademicClass/AcdmClass";
import ClassSubject from "./Components/ClassSubjects/ClassSubject";
import Lesson from "./Components/Lesson";
import Footer from "./Components/Footer/Footer";
import Contact from "./Components/Contact/Contact";
import Review from "./Components/Review/Review";
import Blogs from "./Components/Blog/Blogs";
import Signin from "./Components/Signin/Signin";
import Profile from "./Components/Profile/Profile";
import Skills from "./Components/Skills/Skills";
import AuthProvider from "./Contexts/AuthProvider";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";

function App() {
    return (
        <div className="App">
            <AuthProvider>
                <BrowserRouter>
                    <Navigation></Navigation>
                    <Routes>
                        <Route path="/" element={<HomePage></HomePage>}></Route>
                        <Route path="home" element={<HomePage></HomePage>}></Route>
                        <Route path="blog" element={<Blogs></Blogs>}></Route>
                        <Route path="contact" element={<Contact></Contact>}></Route>
                        <Route path="skills" element={<Skills />}></Route>
                        <Route path="others" element={<Skills />}></Route>

                        <Route
                            path="/academic-class"
                            element={
                                <PrivateRoute>
                                    <AcdmClass />
                                </PrivateRoute>
                            }
                        />
                        <Route
                            path="/academicclass/:classnumber"
                            element={
                                <PrivateRoute>
                                    <ClassSubject />
                                </PrivateRoute>
                            }
                        />
                        <Route
                            path="/lesson"
                            element={
                                <PrivateRoute>
                                    <Lesson />
                                </PrivateRoute>
                            }
                        />
                        <Route
                            path="/profile"
                            element={
                                <PrivateRoute>
                                    <Profile />
                                </PrivateRoute>
                            }
                        />

                        <Route path="/sign-in" element={<Signin />} />
                        <Route
                            path="/review"
                            element={
                                <PrivateRoute>
                                    <Review />
                                </PrivateRoute>
                            }
                        />
                    </Routes>
                    <Footer></Footer>
                </BrowserRouter>
            </AuthProvider>
        </div>
    );
}

export default App;

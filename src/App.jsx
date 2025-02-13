import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import MedicalFormResponse from "./Pages/MedicalFormResponse";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/form-response" element={<MedicalFormResponse />} />
            </Routes>
        </Router>
    );
};

export default App;

import "./App.css";
import CharacterSheet from "./routes/CharacterSheet/CharacterSheet";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className="app">
                <div className="header">
                    <p> hello world </p>
                </div>

                <Routes>
                    <Route path="/" element={<>test</>} />
                    <Route path="/character/:id" element={<CharacterSheet />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;

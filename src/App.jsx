import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import SearchResult from "./components/SearchResult";
import { AppContext } from "./utils/ContextApi";

function App() {
    return (
        <AppContext>
            <BrowserRouter>
                <Routes>
                    <Route path="/" exact element={<Home />} />
                    <Route path="/:query/:startIndex" element={<SearchResult />} />
                </Routes>
            </BrowserRouter>
        </AppContext>
    );
}

export default App;

// AIzaSyBa5M9KP99-_TkWdWXElbHzdjubLcetHCA


// 043596d4f5a874d1e
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";

const ElectronicsApp = React.lazy(() => import("electronics/App"));
const GroceriesApp = React.lazy(() => import("groceries/App"));

const Home = () => <h2>Home Page</h2>;

const App = () => (
    <BrowserRouter>
        <h1>Host App</h1>

        <Header />

        <React.Suspense fallback="Loading...">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/electronics" element={<ElectronicsApp />} />
                <Route path="/groceries" element={<GroceriesApp />} />
            </Routes>
        </React.Suspense>
    </BrowserRouter>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
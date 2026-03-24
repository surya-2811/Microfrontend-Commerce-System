import React from "react";
import ReactDOM from "react-dom/client";

const ElectronicsApp = React.lazy(() => import("electronics/App"));

const App = () => (
    <div>
        <h1>Host App</h1>
        <React.Suspense fallback="Loading...">
            <ElectronicsApp />
        </React.Suspense>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import ElectronicsPage from "./pages/ElectronicsPage";

const App = () => {
    return (
        <Provider store={store}>
            <ElectronicsPage />
        </Provider>
    );
};

export default App;
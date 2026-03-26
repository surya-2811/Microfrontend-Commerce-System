import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import GroceriesPage from "./pages/GroceriesPage";

const App = () => {
    return (
        <Provider store={store}>
            <GroceriesPage />
        </Provider>
    );
};

export default App;
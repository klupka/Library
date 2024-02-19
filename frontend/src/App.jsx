import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

// Page imports
import Home from "./pages/Home";
import CreateBook from "./pages/CreateBook";
import ShowBook from "./pages/ShowBook";
import EditBook from "./pages/EditBook";
import DeleteBook from "./pages/DeleteBook";

const App = () => {
    const [cardsView, setCardsView] = useState(false);
    return (
        // Define routes for each CRUD operation created in backend
        <Routes>
            <Route
                path="/"
                element={
                    <Home setCardsView={setCardsView} cardsView={cardsView} />
                }
            />
            <Route path="/books/create" element={<CreateBook />} />
            <Route path="/books/details/:id" element={<ShowBook />} />
            <Route path="/books/edit/:id" element={<EditBook />} />
            <Route path="/books/delete/:id" element={<DeleteBook />} />
        </Routes>
    );
};

export default App;

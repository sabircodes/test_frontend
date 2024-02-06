// searchContext.js
import { createContext, useState } from "react";

export const SearchContext = createContext();

export function SearchContextProvider({ children }) {
    const [values, setValues] = useState({
        keyword: "",
        results: [],
    });

    return (
        <SearchContext.Provider value={{ values, setValues }}>
            {children}
        </SearchContext.Provider>
    );
}

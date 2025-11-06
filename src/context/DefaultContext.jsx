import { createContext, useContext, useState } from "react";

const DefaultContext = createContext();

function DefaultProvider({ children }) {
    const [isLoading, setIsLoading] = useState(false);

    return (
        <DefaultProvider.Provider
            value={{
                isLoading,
                setIsLoading
            }}
        >
            {children}
        </DefaultProvider.Provider>
    );
}

function useGlobal() {
    const context = useContext(GlobalContext);
    return context;
}

export { DefaultProvider, useGlobal }
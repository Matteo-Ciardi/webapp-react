import { createContext, useContext, useState } from "react";

const DefaultContext = createContext();

function DefaultProvider({ children }) {
    const [isLoading, setIsLoading] = useState(false);

    return (
        <DefaultContext.Provider
            value={{
                isLoading,
                setIsLoading
            }}
        >
            {children}
        </DefaultContext.Provider>
    );
}

function useGlobal() {
    const context = useContext(DefaultContext);
    return context;
}

export { DefaultProvider, useGlobal }
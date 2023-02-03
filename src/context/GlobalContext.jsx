import {createContext, useState, useEffect} from 'react'

const pagina = 1;

export const GlobalContext = createContext(pagina)

export const ContextProvider = ({children}) => {
    const [personajes, setPersonajes] = useState([]);
    const [pagina, setPagina] = useState(1)
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://rickandmortyapi.com/api/character?page=${pagina}`);
            const data = await response.json();
            setPersonajes(data.results);
            setLoading(false);
          };
          fetchData();
    
    }, [pagina])
    


    return (
        <GlobalContext.Provider value={{pagina, setPagina, loading, personajes}}>
            {children}
        </GlobalContext.Provider>
    )
}
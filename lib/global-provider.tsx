import { createContext, ReactNode, useContext } from "react";
import { useAppwrite } from "./useAppwrite";
import { getCurrentUser } from "./appwrite";



interface GlobalContextType {
    isLoggedIn : boolean,
    user : User | null,
    loading: boolean,
    refetch: (newParams: Record<string, string | number>) => Promise<void>
}

interface User{
    $id : string,
    email: string,
    name: string,
    avatar: string
}

interface GlobalProviderProps {
    children: ReactNode;
  }

const GlobalContext  = createContext<GlobalContextType | undefined>(undefined);


export const GlobalProvider = ({children}: GlobalProviderProps) =>{
  
    const {
        data: user,
        loading,
        refetch
    } = useAppwrite({
        fn: getCurrentUser,
    });
    
    const isLoggedIn = !!user;

    // console.log(JSON.stringify(user,null,2));
    
    
    return(
        <GlobalContext.Provider 
        value={{
            isLoggedIn,
            user: user || null,
            loading,
            refetch
            }}>
            {children}
        </GlobalContext.Provider>
    )
}

 export const useGlobalContext  = (): GlobalContextType =>{
    const context = useContext(GlobalContext);

    if(!context){
        throw new Error("useGlobalContext must be used withing GlobalProvider");
    }

    return context;
 }

 export default GlobalProvider;
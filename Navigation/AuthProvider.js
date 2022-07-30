import React , {createContext , useState} from "react";
import auth from '@react-native-firebase/auth';

export const AuthContext = createContext();

export const AuthProvider =({children}) => {
    const [user , setUser] = useState()
    return(
        <AuthContext.Provider value={{
            user,
            setUser,
            login : async(email, password) => {
                try{
                    await auth().signInWithEmailAndPassword(email , password)
                }catch(e){
                    console.log(`Sign up error ${e}`)
                }
            },
            register : async (email,password) => {
                try{
                    await auth().createUserWithEmailAndPassword(email , password)
                }catch(e){
                    console.log(`Register error ${e}`)
                }
            },
            logout : async()=>{
                try{
                    await auth().signOut()
                }catch(e){
                    console.log(`Log out error ${e}`)
                }
            }
        }}>
            {children}
        </AuthContext.Provider>
    )
}
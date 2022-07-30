import React from "react";
import { AuthProvider } from "../Navigation/AuthProvider";
import AppWrap from "./AppWrap";

export default AuthWrap = () =>{
    return(
        <AuthProvider>
            <AppWrap/>
        </AuthProvider>
    )
}
import { createContext, useState } from "react";
import axios from "axios";
import api from "../script/axios";


export const AppContext = createContext();


export const AppProvider = ({ children }) => {

    const [user, setUser] = useState(null);

  const register = async (data) => {
    try {
      await api.get("/sanctum/csrf-cookie");

      const res = await api.post('/api/register',data);

      console.log("Inscription réussie :", res.data);
      return true;
    } catch (err) {
      console.log("Erreur register :", err.response?.data || err);
      return false;
    }
  };

  const login = async (data) => {
    try {
      await api.get("/sanctum/csrf-cookie");

      const res = await api.post('/api/login',data);
      
      setUser(res.data.user);
      console.log("Connexion réussie :", res.data.user);
      return true;
    } catch (err) {
      console.log("Erreur login :", err.response?.data || err);
      return false;
    }
  };

  const logout = async () => {
  try {
     
    await api.post("/api/logout");
     setUser(null);
    console.log("Déconnexion réussie");
   return true;
  } catch (err) {
    console.log("Erreur logout :", err.response?.data || err);
    return false;
  }
};

const getUser = async () => {
  try {
    await api.get("/sanctum/csrf-cookie");
    const res = await api.get("/api/user");
    console.log("Utilisateur actuel :", res.data);
    return res.data;
  } catch (err) {
    console.log("Erreur getUser :", err.response?.data || err);
    return null;
    
  }
};

const getApp = async () => {
  try {
    const res = await api.get("/api/appointment");
    console.log("Utilisateur actuel :", res.data.appointment);
    return res.data.appointment;
  } catch (err) {
    console.log("Erreur getUser :", err.response?.data || err);
    
  }
};


  const addAppointment= async(app)=>{
    try{
        const res = await api.post('/api/appointment',app);
        console.log(res.data);
        return true;
    }catch (err) {
      console.log("Erreur login :", err.response?.data || err);
      return false;
    }
  }

  return (
    <AppContext.Provider value={{ register, login, logout, addAppointment, getApp, getUser, user}}>
      {children}
    </AppContext.Provider>
  );
};

import { createContext } from "react";
import axios from "axios";
import api from "../script/axios";


export const AppContext = createContext();


export const AppProvider = ({ children }) => {


  const register = async (data) => {
    try {
      await api.get("/sanctum/csrf-cookie");

      const res = await api.post('/api/register',data);

      console.log("Inscription réussie :", res.data);

    } catch (err) {
      console.log("Erreur register :", err.response?.data || err);
    }
  };

  const login = async (data) => {
    try {
      await api.get("/sanctum/csrf-cookie");

      const res = await api.post('/api/login',data);

      console.log("Connexion réussie :", res.data);

    } catch (err) {
      console.log("Erreur login :", err.response?.data || err);
    }
  };

  const logout = async () => {
  try {
    await api.post("/api/logout");

    console.log("Déconnexion réussie");

  } catch (err) {
    console.log("Erreur logout :", err.response?.data || err);
  }
};

const getUser = async () => {
  try {
    const res = await api.get("/api/user");
    console.log("Utilisateur actuel :", res.data);
    return res.data;
  } catch (err) {
    console.log("Erreur getUser :", err.response?.data || err);
    
  }
};

const getApp = async () => {
  try {
    const res = await api.get("/api/appointment/get");
    console.log("Utilisateur actuel :", res.data);
    return res.data;
  } catch (err) {
    console.log("Erreur getUser :", err.response?.data || err);
    
  }
};


  const addAppointment= async(app)=>{
    try{
        const res = await axios.post('/api/appointment/add',app);
        console.log(res.data);
    }catch (err) {
      console.log("Erreur login :", err.response?.data || err);
    }
  }

  return (
    <AppContext.Provider value={{ register, login, logout, addAppointment, getApp, getUser}}>
      {children}
    </AppContext.Provider>
  );
};

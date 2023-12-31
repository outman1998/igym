import React, {useContext, createContext, useState, useEffect} from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';

const ctx = createContext();

export default function Context({children}) {

    const [exercises, setExercises] = useState([]);
    const [bodyPart, setBodyPart] = useState('all');  
    const [user, setUser] = useState(null);
    const [alert, setAlert] = useState({
      open: false,
      message: "",
      type: "success"
    });
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(true);


    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        if(user) {
          setUser(user);
        } 
        else {
          setUser(null)
        } 
        console.log(user?.email || "email eksisterer ikke nu");
      })
    }, []);

  return (
    <ctx.Provider value={{
      alert, 
      setAlert, 
      user,
      setUser,
      open,
      setOpen,
      handleOpen,
      exercises,
      setExercises,
      bodyPart,
      setBodyPart
    }}>
      {children}
    </ctx.Provider>
  )
}

export const useCtx = () => {
    return useContext(ctx);
  }
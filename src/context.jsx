import React, { useContext, useReducer, useEffect } from "react";
import reducer from "./reducer";

const AppContext = React.createContext();

const API = "https://thapareactapi.up.railway.app";

const intialState = {
  name: "",
  image: "",
  services: [],
};

// Dono fn updateHomePage and updateAboutPage AppProvider ke andar define krna 

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, intialState);

  const updateHomePage = () => {
    return dispatch({
      type: "HOME_UPDATE",
      payload: {
        name: "InstantHire",
        image: "./images/hero.svg",
      },
    });
  };

  const udpateAboutPage = () => {
    return dispatch({
      type: "ABOUT_UPDATE",
      payload: {
        name: "Suvam Agrawal",
        image: "./images/about1.svg",
      },
    });
  };

  //  to get the api data
  const getServices = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
    // Aisa nhi hota hai ki services = data likhke store krle objects ko services array me
      dispatch({ type: "GET_SERVICES", payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  // to call the api
  useEffect(() => {
    getServices(API);
  }, []);

  return (
    <AppContext.Provider value={{ ...state, updateHomePage, udpateAboutPage }}>
      {children}
    </AppContext.Provider>
  );
};

// gloabal custom hook
const useGlobalContext = () => {
  return useContext(AppContext);
};


// data ke saath kaam krna means state management and for state management we require a hook and we generally use a use-state hook. My api is an array of objects, so initially we define services as an empty array and we want services array ke andar saare objects add ho fetch hoke, fir usko services.jsx me display krenge using .map. Fn isliye banaye taki kahi bhi kisi bhi page me call kar ske services ko
//So as data variable me data aagya fetch hoke, ab services me add krne ke liye 

export { AppProvider, useGlobalContext };

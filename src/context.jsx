import React, { useContext, useReducer, useEffect } from "react";
import reducer from "./reducer";

const AppContext = React.createContext();

const initialState = {
  name: "",
  image: "",
  services: [],
};

const techImages = [
  {
    id: 1,
    title: "Cloud Computing",
    url: "https://media.istockphoto.com/id/2153255067/photo/cloud-computing-security-service-big-data-technology-concept.webp?b=1&s=170667a&w=0&k=20&c=Tk_qPyw0R-bDVVkpXR6BTuZpwWxoph1ci0iDZR5-WnE=",
    description: "Scalable and flexible cloud computing solutions.",
  },
  {
    id: 2,
    title: "Artificial Intelligence",
    url: "https://media.istockphoto.com/id/1976099664/photo/artificial-intelligence-processor-concept-ai-big-data-array.webp?b=1&s=170667a&w=0&k=20&c=plkphYEn6k9B6lHcQmPnSXv82NE7eIv7Yv8F_0ESEc4=",
    description: "Innovative AI and machine learning services.",
  },
  {
    id: 3,
    title: "Cybersecurity",
    url: "https://media.istockphoto.com/id/1918338945/photo/ai-artificial-intelligence-security-sentinel-password-cyber-security-ransomware-email.webp?b=1&s=170667a&w=0&k=20&c=qMn2MvNEFiPlL-8BCS_7XatuU7xGNRWLJm8PgtqEi9c=",
    description: "Comprehensive cybersecurity services.",
  },
  {
    id: 4,
    title: "Blockchain",
    url: "https://media.istockphoto.com/id/689271900/photo/chosing-blockchain.webp?b=1&s=170667a&w=0&k=20&c=S5yotmzS4740UaymyALxJMFVtCk3Y4eSt8YnOrglZaI=",
    description: "Secure and transparent blockchain solutions.",
  },
  {
    id: 5,
    title: "Internet of Things",
    url: "https://media.istockphoto.com/id/1317720447/photo/smart-home-mobile-phone-control.webp?b=1&s=170667a&w=0&k=20&c=lNtHCZMqN7OhA_RoE-bUItOVwxkoqE2isl2srnBPwM4=",
    description: "IoT solutions for smart devices and connectivity.",
  },
  {
    id: 6,
    title: "Big Data",
    url: "https://media.istockphoto.com/id/1500820004/photo/predictive-analytics-business-forecasting-data-visualization-concept-data-analysis-machine.webp?b=1&s=170667a&w=0&k=20&c=A2sDRaq51k1mSW1EnluIgEiGwRWHYc2a4UqpaClQMxg=",
    description: "Advanced big data analytics and services.",
  },
];

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const updateHomePage = () => {
    return dispatch({
      type: "HOME_UPDATE",
      payload: {
        name: "Techfusion",
        image: "./images/hero.svg",
      },
    });
  };

  const udpateAboutPage = () => {
    return dispatch({
      type: "ABOUT_UPDATE",
      payload: {
        name: "Techfusion",
        image: "./images/about1.svg",
      },
    });
  };

  useEffect(() => {
    dispatch({ type: "GET_SERVICES", payload: techImages });
  }, []);

  return (
    <AppContext.Provider value={{ ...state, updateHomePage, udpateAboutPage }}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };

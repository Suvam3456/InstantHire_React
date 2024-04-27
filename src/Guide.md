Steps:
npm create vite@latest
npm install (To install dependencies in package.json)
npm run dev
Create Components inside src such as Home.jsx, About.jsx, Services.jsx, Contact.jsx

App.jsx -: Create a wrap (empty tag) inside return, import above components
npm install react-router-dom (for routing)

create BrowserRouter tag  inside return and Router in the Wrap and
import {BrowserRouter as Router, Route} from 'react-router-dom' as present in file

To make header and footer permanent sticky in all pages 

In header.jsx, import Navbar component and create a Navbar component and use Navlink similiar to how u use anchor tag.

Don't forget to Define your routes to different components in App.jsx

npm i style-components
GlobalStyle.css is same as my index.css but why we need this  over index.css

... is my spread operator and data is object so pura data bhejre iska matlab hai

about page me kuch nhi likhe code bas data pass kardiye herosection component ko as props
aur isse about page same replicate hua hero section jaisa  with image and text changed

// import mat krna google font family link use kro
// with the help of & I can target parent container, also nesting is allowed in css
//agar look and feel same hai har ek button ka then usko component banao na 
// global means reusable code everywhere
// button baar baar use hoga isliye uska style component banaye 
// code tho aap ek baar likhoke but same piece of code me data/images ko change krke mulitple jagah pe use krenge as what we did in home and about page for this website using props(destructuring is using of {} instead of props word while accessing)

// To overcome problem of propdrilling we use  context api or redux

// In React if you want to share

// compA ka data kewal compC me hi bhejna , but without context api we need to prop down the tree and pass it to compB as well as compA ke andar compB hai aur compB me ham compc ko call krre. suppose compA aur compc ke bich 10 components hai so it arises problem of prop drilling.

// Provider - To deliever data to  any child
// Consumer - To access that data anywhere

// If we don’t want to send data through many levels of nested components, (props down the tree), We can use Context API

// Context + Provider + consumer = Context-API, 
// Context API and use-Context are different, Since Consumer part in Context-API is too lengthy and complicated , we use use-Context Hook, (provider, context same rhega)

// Jo context create kiye usko export krna jaruri (as an object export) (similiarly how we export a component), and Beaware her ek component me default export ek hi rehta so ab paranthesis ke andar pass krenge

// Jis file me chaiye wha import kralo (context jo create kiye sender's comp me and usecontext hook)

// global custom hook
const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };

// To manage multiple states in big projects , we use use-reducer hook instead of use-state
as bas ek baar use-reducer likhna to perform multiple actions

// UseReducer hook is same like UseState but it takes two argument
// First argument is reducer function which can be defined in any file outside as well or directly inside the component , and second argument is initial state

// reducer fn takes two parameter which are currentstate and action method (ki kya kya actions krwana ,ex: counter app me 2 actions inc and dec krana) and you always need to return something in this function , (It is a pure fn)

The main use of dispatch is to trigger the action method
// Use-Reducer me initial state ko define krna hota top pe
// Action method ko define krna hota bottom pe
// Reducer function ko call krna
// Actions are basically objects which contain type
// Dispatch is a function which gets called when an action occurs
// It sends this action object to reducer

// Means ab koi bhi component mera

// Jab bhi ham home page pe aayenge, useEffect run hoga ek baar aur updateHomepage fn call hoga, uss fn me dispatch ke hone se action trigger hoga , action pe dekhega ye kon sa disptach hai  iska type kya hai, so HOME_UPDATE hai tho ab reducer.jsx me jayenge aur name and image update ho jayega


// ham context api pe api ko call krenge , uska ek global scope bana denge
// we can use either fetch or axios

// dispatch work is like ek kaam aagya hai , vo bas inform krta hai, kon sa kaam aaya hai vo type se batayega vo and payload means complete reason dere
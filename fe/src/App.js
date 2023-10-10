import React from "react"
import Header from "./Components/Header/Header"
import Slide from "./Components/Slider/Slider";

const App = () => {
  return (
    <div className="bg-black h-screen">
      <div className="mx-auto">
        <h1 className="text-white text-center text-lg pt-10">
          My Todos  
        </h1>
      </div>
      <Header/>
      <Slide/>
    </div>
    );
}
 
export default App;
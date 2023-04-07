//use state hook to manage style of heading and slogan

import { useState } from "react"




const Header = (props) => {
    
    const [theme, setTheme] = useState({name: 'light',style: {backgroundColor: 'white'} });
    function themeHandler(){
        //if theme dark, switch to light
        if(theme.name === 'dark'){
            setTheme({name: 'light',styl: {backgroundColor: 'white'} });
        }
        else if (theme.name === 'light'){
            setTheme({name: 'dark',style: {backgroundColor: 'grey'} });
        }


    }

    return(
        <div style={theme.style}>
           <p>Welcome to Baham, an in-campus ride sharing service</p>
           <button id ="themeButton" onClick={themeHandler}>Switch Theme</button>
        </div>
    );


}

const Exercise4 = () => {
    return(
        <Header heading="Welcome to Baham!" slogan = "Reducing your carbon footprint." />
    );

}
export default Exercise4;
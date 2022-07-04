/*First exercise
*/
import React from 'react';

const WelcomeTitle=(props)=>{
    if((props.user==null)&&(props.primary===false)){
        return(
            <div>
                <h2>Welcome!</h2>
                {console.log("Se escribe en h2")}
            </div>
        )
        
    }else if((props.user==null)&&(props.primary===true)){
        return(
            <div>
                <h1>Welcome!</h1>
                {console.log("Se escribe en h1")}
            </div>
        )
    }else if((props.user!=null)&&(props.primary===false)){
        return(
            <div>
                <h2>Welcome {props.user}!</h2>
                {console.log("Se escribe en h2 con nombre de usuario")}
            </div>
        )
    }else if((props.user!=null)&&(props.primary===true)){
        return(
            <div>
                <h1>Welcome {props.user}!</h1>
                {console.log("Se escribe en h1 con nombre de usuario")}
            </div>
        )
    }
}
export default WelcomeTitle;
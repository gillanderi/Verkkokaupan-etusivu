import { useState } from "react";

function Nappiostoskori (props){

    
    return (

        <button style={{
                    
            borderColor : "black",
            borderWidth : "1px",
           borderRadius : "4px",
           cursor : "pointer",
           boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px",
           background: "#c16060",   
           fontSize : "0.8em",
           padding : "0.35em",  
           

           }} 
           onClick ={ () => {
            
            props.lisaaOstoskoriin();
            props.lisaaSummayhteissummaan (props.hinta);
            
           }}
           >Lisää koriin</button>
           
    );
}
export default Nappiostoskori;
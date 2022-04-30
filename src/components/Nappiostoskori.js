import { useState } from "react";

function Nappiostoskori (props){

    const [ostokset, setOstokset] =useState (0);
    console.log (ostokset);
    return (

        <button style={{
                    
            borderColor : "black",
            borderWidth : "1px",
           borderRadius : "4px",
           cursor : "pointer",
           boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px",
           background: "#c16060",   
           margin :"auto",
           fontSize : "0.8em",
           padding : "0.35em",  
           

           }} 
           onClick ={ () => {
            setOstokset (ostokset + 1);
            props.lisaaYhteissummaan();

           }}
           >Lisää koriin</button>
           
    );
}
export default Nappiostoskori;
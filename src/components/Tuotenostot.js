import { useState } from "react";
import Nappiostoskori from "./Nappiostoskori";
import Pikaostoskori from "./Pikaostoskori";
import Kirjautuminen from "./Kirjautuminen";
import Tuotteet from "./Tuotteet"; 
import Tuote from "./Tuote";


function Tuotenostot (){

    const [ostoskori, setOstoskori] = useState (0);
    const [summaYhteensa, setSummayhteensa] = useState (0);

    const lisaaOstoskoriin = () => {

        setOstoskori (ostoskori +1);
        
    }

    function teetuoteKortti (tuoteKortti){


        return ( <div style ={{
            
            flex: "0 0 33.333333%",
        }} ><Tuote 
        key ={tuoteKortti.id}
        nimi={tuoteKortti.nimi}
        img={tuoteKortti.kuva}
        hinta={tuoteKortti.hinta}
        />
        <Nappiostoskori 
             lisaaOstoskoriin ={lisaaOstoskoriin}
             lisaaSummayhteissummaan={lisaaSummayhteissummaan}
             hinta={tuoteKortti.hinta}
             />

             </div>
        );
    }

  
    const lisaaSummayhteissummaan = (hinta) => {

        setSummayhteensa (summaYhteensa + hinta );
   
    
    }
    return (
        <div style={{

            display : "flex",
            flexWrap : "wrap",
            width : "100%"
        }}>
        
        
        <div style={{
            display : "flex",
            alignItems :"center",
            textAlign :"center",
            flexWrap :"wrap",
            paddingTop : "1em",
            width : "70%",
        }}>
            
            
            {Tuotteet.map(teetuoteKortti)}
            
            
        </div>
        <div style={{
            display : "flex",
            flexDirection : "column",
            flexWrap : "wrap",
            

        }}>
            <Kirjautuminen></Kirjautuminen>
            <p></p>
            <Pikaostoskori  ostoskori={ostoskori} summaYhteensa={summaYhteensa}/>
        </div>

    
        </div>
    );
}
export default Tuotenostot;
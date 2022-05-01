import { useState } from "react";

function Kirjautuminen () {

    const [kayttajatunnus, setKayttajatunnus] = useState ();
    const [salasana, setSalasana] = useState ();

    

    

    const testaaKayttaja = (kayttajatunnus, salasana) => {

        {(kayttajatunnus == "testi" && salasana == "testi") ?

        <p> Olet kirjautunut sisään</p> 
        :
        <p> syötä "testi" + "testi"</p>
    }
        
    }

    return (

        <div style={{


            display : "flex",
            flexDirection : "column",
            margin : "2%",
            marginTop : "10em",
            paddingLeft: "0.5em",
            alignItems :"center",
            paddingBottom : "8em",
            
        }}>

            <input style = {{
                padding: "1em",
                margin: "0.5em",
                height : "1em",
                width : "12em",
                fontSize : "1em",
                border :"unset",
                borderRadius : "4px",
                boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px",
                background: "#fff",
              }}

              type="text"
              name="Kayttajatunnus"
              required="required"
              placeholder="Käyttäjätunnus"
              onChange={ (e) => { setKayttajatunnus (e.target.value);
             
              
              } }
          />
            <input style = {{
                padding: "1em",
                margin: "0.5em",
                height : "1em",
                width : "12em",
                fontSize : "1em",
                border :"unset",
                borderRadius : "4px",
                boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px",
                background: "#fff",
              }}


              type="text"
              name="nimi"
              required="required"
              placeholder="Salasana"
              onChange={ (e) => { setSalasana (e.target.value);
             
              
              } }
          />

            <button style = {{
                padding: "1em",
                margin: "0.5em",
                height : "3em",
                width : "12em",
                fontSize : "1em",
                borderColor : "black",
                borderWidth : "1px",
                borderRadius : "4px",
                cursor : "pointer",
                boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px",
                background: "#c16060",
              }}

             onClick={() =>{
                    testaaKayttaja (kayttajatunnus,salasana);
            }}>
                Kirjaudu</button>
        </div>
    );
}
export default Kirjautuminen;
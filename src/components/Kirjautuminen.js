import { useState } from "react";

function Kirjautuminen (props) {

    
    const [onlahetetty, setOnlahetetty] = useState (false);

    const testiKayttaja =[ {
        kayttajatunnus : "testi",
        salasana : "testi"
    }]
    
    
    const handleSubmit = (event) => {

        event.preventDefault();
    
        var {kayttaja,sana} = document.forms[0];
    
        const kayttajaData = testiKayttaja.find((user) => user.kayttajatunnus===kayttaja.value);
    
        if (kayttajaData){
        if (kayttajaData.salasana!==sana.value){
          alert("Syötä testi + testi");
        }else{
          setOnlahetetty(true);
          props.onkoKirjautunut(true);
          
        }
        } else {
          alert("Syötä testi + testi");
        }
      };
      
      const tietoLomake =(

        <div className='form'>
  
          <form onSubmit={handleSubmit}>
  
            <div className='inputti'
            style = {{
            display : "flex",
            flexDirection : "column",
            margin : "3%",
            marginTop : "5em",
            paddingLeft: "0.5em",
            alignItems :"center",
            
            
            
        }}
            >
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
                  alignItems: "center",
                }}
  
                type="text"
                name="kayttaja"
                required="required"
                placeholder="Käyttäjätunnus"
                />
                  
            </div>
            <div className='inputti'>
            <input style = {{
                  padding: "1em",
                  margin: "0.5em",
                  marginLeft: "0.9em",
                  height : "1em",
                  width : "12em",
                  fontSize : "1em",
                  border :"unset",
                  borderRadius : "4px",
                  boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px",
                  background: "#fff",
                  
                }}
  
                type="text"
                name="sana"
                required="required"
                placeholder="Salasana"
                />
                  
            </div>
            <div>
                <button
                style = {{
                    padding: "1em",
                    margin: "0.5em",
                    marginLeft: "2em",
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
                >Kirjaudu</button>
            </div>
          </form>
        </div>
      );
    return (

        <div>
            {onlahetetty ?
            <div>
        <p
        style={{
            display: "flex",
            textAlign :"center",
            alignItems : "center",
            margin: "3em",
            marginTop : "6em",
        }}
        >Kirjautuminen hyväksytty </p>  
        <button
        style = {{
            padding: "1em",
            margin: "0.5em",
            marginLeft: "2em",
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
          onClick = {()=>window.location.reload(false)}
        >Kirjaudu ulos</button>
                </div>
        :
        tietoLomake}

        </div>
    );
    }
export default Kirjautuminen;
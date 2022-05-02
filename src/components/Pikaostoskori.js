import { useState } from "react";



function Pikaostoskori (props) {

    

    return(

        <div style ={{

            display : "flex",
            flexDirection : "column",
            margin : "10%",
            marginTop : "3%",
            alignItems :"center",
            paddingBottom : "8em",
            boxShadow : "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
        }}>


            <h3 style= {{

                color :"#633434",
                fontSize: "1.4em",
                fontFamily :"fantasy",
            }}>Pikaostoskori</h3>

            {(props.ostoskori > 0) ?
            <div style={{
                textAlign : "center",
            }}>
            <p> Ostoskorissa on {props.ostoskori} tuotetta</p>
            <br/>
            

            {(props.kirjautunut===true)?

            <p>summa on yhteensä <br/><br/>{props.aleSumma} &euro;</p>
            :
            <p>Summa on yhteensä <br/><br/> 
            {props.summaYhteensa} &euro;</p>
        }
            <button 
            style={{
                borderColor : "black",
                borderWidth : "1px",
                borderRadius : "4px",
                cursor : "pointer",
                boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px",
                background: "#c16060",   
                fontSize : "0.8em",
                padding : "0.35em",
            }}
            onClick={()=>{ alert ("jatketaan tilaukseen...");}} 
            >Tilaa</button>
            </div>
            :
            <p>ostoskorissa ei ole tuotteita</p>
        }
        </div>
    );
}
export default Pikaostoskori;
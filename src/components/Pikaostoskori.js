


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

            {(props.yhteensa > 0) ?
 
            <p> Ostoskorissa on {props.yhteensa} tuotetta</p>
            :
            <p>ostoskorissa ei ole tuotteita</p>
        }
        </div>
    );
}
export default Pikaostoskori;
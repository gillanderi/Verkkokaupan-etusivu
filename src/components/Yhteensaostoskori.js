import { useState } from "react";
import Pikaostoskori from "./Pikaostoskori";
function Yhteensaostoskori (props){

    /*const [ostoskorissa, setOstoskorissa] = useState (0);

    const lisaaKoriin = () => {

        setOstoskorissa (props.yhteensa + 1);
    }
*/
    return(

        <div>

            <p style= {{
            fontFamily :"fantasy",
            color :"#633434",
            }}>ostoksia on {props.yhteensa}</p>

        </div>
    );
}
export default Yhteensaostoskori;
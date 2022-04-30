import { useState } from "react";
import Nappiostoskori from "./Nappiostoskori";
import Yhteensaostoskori from "./Yhteensaostoskori";


function Tuotenostot (){

    const [yhteensa, setYhteensa] = useState (0);

    const lisaaYhteissummaan = () => {

        setYhteensa (yhteensa +1);
    }

    return (
        <div style={{
            display : "flex",
            flexDirection : "column",
            flexWrap : "wrap",
            width : "70%",
            height : "auto",
            textAlign : "center",
            
        }}>
        
        <div style={{
            display : "flex",
            flexDirection : "row",
            paddingTop : "1em"
        
        }}>
            <div style ={{
                padding :"0.5em",
                width:"100%",
            }}> 
            <img src="/images/image1.jpg" alt="" style={{
            width : "auto",
            height : "13em",
            objectFit :"scale-down",
            }}/>
            <p>Musta t-paita </p>
            <p>25 &euro; </p>
            <Nappiostoskori lisaaYhteissummaan ={lisaaYhteissummaan}></Nappiostoskori>
            </div>

            <div style ={{
            padding :"0.5em",
            width:"100%",
            }}>
            <img src="/images/image2.jpg" alt="" style={{
            
            width : "auto",
            height : "13em",
            objectFit :"scale-down",
            
            }}/>
            <p>Japski kissa t-paita </p>
            <p>29 &euro; </p>
            <Nappiostoskori lisaaYhteissummaan ={lisaaYhteissummaan}></Nappiostoskori>
            </div>

            <div style ={{
            padding :"0.5em",
            width:"100%",
            }}>
            <img src="/images/image3.jpg" alt="" style={{
            
            width : "auto",
            height : "13em",
            objectFit :"scale-down",
            
            }}/>
            <p>Musta logo t-paita </p>
            <p>25 &euro; </p>
            <Nappiostoskori lisaaYhteissummaan ={lisaaYhteissummaan}></Nappiostoskori>
            </div>

        </div>

        <div style={{
            display : "flex",
            flexDirection : "row",
            
        }}>
            <div style ={{
            padding :"0.5em",
            width:"100%",
            }}> 
            <img src="/images/image4.jpg" alt="" style={{
            
            width : "auto",
            height : "13em",
            objectFit :"scale-down",
            }}/>

            <p>Printti t-paita </p>
            <p>25 &euro; </p>
            <Nappiostoskori lisaaYhteissummaan ={lisaaYhteissummaan}></Nappiostoskori>
            </div>

            <div style ={{
            padding :"0.5em",
            width:"100%",
            }}>
            <img src="/images/image5.jpg" alt="" style={{
            
            width : "auto",
            height : "13em",
            objectFit :"scale-down",
            
            
            }}/>
            <p>Blankko t-paita </p>
            <p>15 &euro; </p>
            <Nappiostoskori lisaaYhteissummaan ={lisaaYhteissummaan}></Nappiostoskori>
            </div>

            <div style ={{
            padding :"0.5em",
            width:"100%",
            }}>
            <img src="/images/image6.jpg" alt="" style={{
            
            width : "auto",
            height : "13em",
            objectFit :"scale-down",
            
            }}/>
            <p>Awesome t-paita </p>
            <p>25 &euro; </p>
            <Nappiostoskori lisaaYhteissummaan ={lisaaYhteissummaan}></Nappiostoskori>
            </div>

        </div>
            <Yhteensaostoskori yhteensa = {yhteensa}/>
        </div>
    );
}
export default Tuotenostot;
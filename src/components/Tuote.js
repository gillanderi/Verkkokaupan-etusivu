
function Tuote ({img,nimi,hinta}){


    return (

        <div >
         <img 

         src={img}

         style = {{
            width : "auto",
            height : "13em",
            objectFit :"scale-down"
        }}  />

        <p>{nimi}</p>
        <p>{hinta} &euro;</p>
        
        </div>
    );
}
export default Tuote;
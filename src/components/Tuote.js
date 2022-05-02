
function Tuote ({id,img,nimi,hinta,alehinta,kirjautunut}){


    return (

        <div key={id}>
         <img 

         src={img}
        alt="pic"
         style = {{
            width : "auto",
            height : "13em",
            objectFit :"scale-down"
        }}  />

        <p>{nimi}</p>
        
        {(kirjautunut===true) 
        ?
        <p>Alessa! <br/>
        {alehinta} &euro;
        <br/>
        Norm. <br/> {hinta} &euro;</p>
        :
        <p>{hinta} &euro;</p>
        }
        </div>
    );
}
export default Tuote;
function VerkkokauppaFooter (){


    return(
        <div style={{
            marginTop : "20px",
            display: "flex",
            justifyContent: "space-between",
            
            background: "linear-gradient(56deg, rgba(0,0,0,1) 0%, rgba(143,85,85,1) 83%)",
            color :"#e3d8d8",
            boxShadow: " 0px 5px 7px 3px rgba(99,99,99,1)",
            fontSize: "1em",
            lineHeight: "0.8em",
        }}>
            <div style={{
                marginLeft: "6vw",
                marginTop: "1vw",
            
            }}>
                <p>Verkkokauppa Oy</p>
                <p>Kaupankatu 1</p>
                <p>83100 Kauppala</p>
                <p>puh. 0432456676</p>
            </div>
            <div style={{

                marginTop: "8vw",
                marginRight: "6vw",
                

            }}>
                <p>Copyright &copy; R.A 2022</p>
            </div>
        </div>
    );

}
export default VerkkokauppaFooter;
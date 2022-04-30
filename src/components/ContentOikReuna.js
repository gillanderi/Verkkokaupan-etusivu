function ContentOikReuna (props){




    return (

        <div style={{
            display : "flex",
            flexDirection : "column",
            flexWrap : "wrap",
            width :"25%",

        }}>
            {props.children}
        </div>
    );
}
export default ContentOikReuna;
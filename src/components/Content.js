function Content (props){




    return(

        <div style={{

            display : "flex",
            flexDirection : "row",
            width : "100%",
            height : "100%",
            alignItems : "center",
        }}>{props.children}</div>
    );

}
export default Content;
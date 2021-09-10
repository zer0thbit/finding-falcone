const styles = () => ({
  root: {
    background: "#3D3D3D",
    height: "100%",
    width:"100%",
    display:"flex",
    flexDirection:"column"
  },
  mainContainer: {
    marginTop:"50px",
    alignSelf:"center",
    borderRadius:"20px",
    boxShadow:"2px 2px 10px 1px #262525",
    backgroundColor:"rgb(88 88 88)",
    width:"60%"
  },
  headerColor: {
    color: "white",
    textDecoration: 'none',
  },
  start: {
    backgroundColor: "#303f9f",
    padding: "15px 30px",
    borderRadius: "20px",
    border: "1px solid transparent",
    fontSize: "22px",
     boxShadow:"0 2px 1px 0px black",
     "&:hover":{
      backgroundColor:"#3746a6"
     }
  }

});

export default styles;

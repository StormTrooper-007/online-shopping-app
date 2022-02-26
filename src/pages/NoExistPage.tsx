import {useNavigate} from "react-router-dom";

export function NoExistPage() {
      const navigate = useNavigate();
  return (
   <div style={{ padding: "1rem" }}>
      <p>This page does not exist!</p>
      <button style={{height:"50px",
       backgroundColor:"#696969",
        border:"none",
        borderRadius:"15px",
         color:"white"}}
         onClick={()=> navigate("/")}
         >{`<<== back to home ==`}
      </button>
    </div>
  )
}
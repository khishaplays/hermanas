import{useState,useEffect} from "react";
import axios from "axios";

function UserCard (props) {
    const {user} = props;
    const [Followers,setFollowers] =useState([0])
    const {login, repos_url,followers_url,avatar_url,html_url}=User;
    const getFollowers =async () => {
        try{
        }
    }
useEffect(()=>{
    getFollowers();

},[]);
    return(
        <div
        style={{ 
            display:"flex",
            justifyContent:"space-between",
            marginTop:"20px",
            border:"2px solid rgba(0,0,0,0,1)",
            padding:"10px",
            borderRadius:"10px",
        }}
        >
            <img src={avatar_url}style={{height:"80px"}}/>
            <div 
            style={{
                display:"flex",
                flexDirection:"column",
                justifyContent:"space-evenly",
            }}
            >
                <div>

                    <b style={{fontSize:"20px"}}> </b>

                </div>
                <div>Followers:{Followers}</div>
                <button> GitHub Profile</button>
                <button> View Repositories </button>
            </div>
        </div>
    )
};
export default UserCard;
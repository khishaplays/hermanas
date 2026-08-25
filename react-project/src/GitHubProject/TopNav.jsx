import {useState} from "react"

function TopNav(){
    const [search,setsearch] =useState("")
    return(
        <div className="" style={{ display: "flex",alignItems:"center"}}>
            <img
            style={{width:"50px"}}
            src="react-project/src/GitHubProject/git logo.png"
            />
            <input
            style={{width:"50vw", marginLeft: "lem"}}
            search={search}
            setsearch={setsearch}
            />
            <button>search</button>

        </div>
    )
}
export default TopNav;

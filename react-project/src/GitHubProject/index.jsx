import axios from "axios";
import { useEffect, useState } from "react";
import TopNav from "./TopNav";
import InfoSection from "./InfoSection";
import UserCard from "./UserCard";
function GitHubProject() {

const [people,setPeople]=useState([]);
   


    }
console.log(people);

useEffect(() => {
    getUserData();
},[])
return( 
    <div>
        <TopNav />
           < InfoSection people={people}/>
           {people.map((user) =>(
            <UserCard key={user.id} user={user}/>
           )
        )}
    
    </div>
);






export default GitHubProject;
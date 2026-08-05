import filterList from "./FilterList";
function SideBar() {

return(
    <div
    style={{
        display: "flex",
        width: "200px",
        flexDirection: "column",
    }}
    > 
    <filterList />
    <filterList />
    <filterList />
    </div>
);
}   



export default SideBar;
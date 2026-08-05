import filterList from "./FilterList";
function SideBar() {

return(
    <div
    style={{
        display: "flex",
        width: "auto",
        flexDirection: "column",
    }}
    > 
    <filterList title={"conditions"} options={["new", "used", "renewed"]} />
    <filterList title={"material"} options={["plastic", "metal", "rubber"]} />

    <filterList title={"uses"} options={["exercise", "bodybuilding", "martial arts"]} />
    <filterList title={"brand"} options={["nike", "adidas", "puma", "venum"]} />
    </div>
);
}   



export default SideBar;
import logo from"./assets/amazon.jpg";

function Navigation() {
return(
    <div className="nav">
        <img src={logo} width="100" alt="Logo" />   
        <h2>Navigation Section</h2>
        <input type="text" placeholder="Search..." />   
    </div>
);
}
export default Navigation;
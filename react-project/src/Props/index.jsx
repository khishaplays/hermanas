function parent () {
const string="Hello khisha";
const amount=1000;
const isOk=true;
const notSet=null;

const car={
    name:"porsche",
    model:"911",
    year:2024
};
const color=["red", "blue", "green"];
    return(
        <div>
            <h1>Parent Component</h1>
            <child string={string} amount={amount} isOk={isOk} notSet={notSet} />
            <child2 string={string} amount={amount} isOk={isOk} notSet={notSet} car={car} color={color}/>
            
            <child3 string={string} amount={amount} isOk={isOk} notSet={notSet}  />  

    
        <child string={string} amount={amount} isOk={isOk} notSet={notSet} />
        </div>  
    );

}
  
function child (props){
    console.log("props", props);
    return(
    <div>
        <h1>Child Component</h1>
        <ul>
            <li>favourite string <B> {props.string}</B></li>    
            <li>amount<b> {props.amount}</b></li>
            <li>isOk<b> {props.isOk.toString()}</b></li>
            <li>notSet<b> {props.notSet}</b></li>
        </ul>
    </div>

);
}function child2 (props){
    console.log("props", props);
    const {string, amount, isOk, notSet ,car, color}=props;
    return(
    <div>
        <h1>Child Component 2</h1>
        <ul>
            <li>favourite string <B> {props.string}</B></li>    
            <li>amount<b> {props.amount}</b></li>
            <li>isOk<b> {props.isOk.toString()}</b></li>
            <li>notSet<b> {props.notSet}</b></li>
            <li>car name<b> {props.car.name}</b></li>
            <li>car model<b> {props.car.model}</b></li>
            <li>car year<b> {props.car.year}</b></li>
            <li>color<b> {props.color.join(", ")}</b></li>
        </ul>   
    </div>
    );
}   
function child3 (props){
    console.log("props", props);
    const {string, amount, isOk, notSet}=props;
    return(
    <div>
        <h1>Child Component 3</h1>
    </div>
    );
}       
    export default parent;
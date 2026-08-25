import { useState } from "react";

function ColorsAndCircles() {
    const [color, setColor] = useState("");
    const [colors, setColors] = useState([]);
    const addColor =(color) =>{
    setColor((currentcolors) => [...currentColors,color])

    };
    const removeColor =(indexToRemove)=> {
        setColors((currentColors)=>
            currentColors.filter((_,  index) => index !==indexToRemove)
    );
    }

    const onSubmit = () => {
    
        const clonedColors = [...colors];
        clonedColors.push(color);

        setColors(clonedColors);
        setColor("");
    };

    return (
        <div>
            <ColorForm
                color={color}
                setColor={setColor}
                onSubmit={onSubmit}
            />

            <ColorList colors={colors} />
        </div>
    );
}

function ColorForm(props) {
    const { color, setColor, onSubmit } = props;

    return (
        <div>
            <label>Enter Color: </label>

            <input
                value={color}
                onChange={(event) => setColor(event.target.value)}
            />

            <button onClick={onSubmit}>
                Save
            </button>
        </div>
    );
}

function ColorList(props) {
    const { colors } = props;

    return (
        <div style={{ marginTop: "30px" }}>
            {colors.map((color, index) => (
                <div
                    key={index}
                    style={{
                        width: "100px",
                        height: "100px",
                        backgroundColor: color,
                        color: "white",
                        padding: "10px",
                        marginBottom: "10px",
                    }}
                >
                    {color}
                </div>
            ))}
        </div>
    );
}

export default ColorsAndCircles;
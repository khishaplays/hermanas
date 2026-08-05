function Mapping() {
  const colors = ["red", "green", "blue", "yellow", "purple"];

  // Reference function
  function singleColor(c, i) {
    return (
      <div
        key={i}
        style={{
          backgroundColor: c,
          padding: "10px",
          margin: "5px",
          color: "white",
        }}
      >
        {c}
      </div>
    );
  }

  return (
    <div>
      <h1>Mapping Colors</h1>

      <h4>Using arrow function</h4>
      {colors.map((color, index) => {
        return (
          <div
            key={index}
            style={{
              backgroundColor: color,
              padding: "10px",
              margin: "5px",
              color: "white",
            }}
          >
            {color}
          </div>
        );
      })}

      <h4>Using direct arrow function</h4>
      {colors.map((color, index) => (
        <div
          key={index}
          style={{
            backgroundColor: color,
            padding: "10px",
            margin: "5px",
            color: "white",
          }}
        >
          {color}
        </div>
      ))}

      <h4>Using anonymous function</h4>
      {colors.map(function (color, index) {
        return (
          <div
            key={index}
            style={{
              backgroundColor: color,
              padding: "10px",
              margin: "5px",
              color: "white",
            }}
          >
            {color}
          </div>
        );
      })}

      <h4>Using reference function</h4>
      {colors.map(singleColor)}

      <h4>Using a component</h4>
      {colors.map((c, i) => (
        <SingleColorComponent key={i} c={c} i={i} />
      ))}
    </div>
  );
}

function SingleColorComponent({ c, i }) {
  return (
    <div
      style={{
        backgroundColor: c,
        padding: "10px",
        margin: "5px",
        color: "white",
      }}
    >
      For index <b>{i}</b>, color is <b>{c}</b>
    </div>
  );
}

export default Mapping;
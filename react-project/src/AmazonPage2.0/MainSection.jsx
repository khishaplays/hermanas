import ItemCard from "./ItemCard";

const data = [
  {
    description:
      "Adjustable Speed Jump Rope with Ball Bearings for Smooth Cardio and Fitness Training.",
    price: "KES 1,500",
    imageUrl: "https://via.placeholder.com/200",
  },
  {
    description:
      "Weighted Jump Rope for Strength Training, Fat Burning, and Full Body Workouts.",
    price: "KES 1,800",
    imageUrl: "https://via.placeholder.com/200",
  },
  {
    description:
      "Beaded Jump Rope for Kids and Adults, Ideal for School, Fitness, and Outdoor Activities.",
    price: "KES 2,000",
    imageUrl: "https://via.placeholder.com/200",
  },
  {
    description:
      "Cordless Skipping Rope with Digital Counter for Home, Gym, and Weight Loss Exercises.",
    price: "KES 2,500",
    imageUrl: "https://via.placeholder.com/200",
  },
];

function MainSection() {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        gap: "20px",
      }}
    >
      {data.map((item, index) => (
        <ItemCard
          key={index}
          description={item.description}
          price={item.price}
          imageUrl={item.imageUrl}
        />
      ))}
    </div>
  );
}

export default MainSection;
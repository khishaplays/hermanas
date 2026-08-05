function ItemCard() {
  const description =
    "Jump Ropes for Adults & Kids, Segmented Skipping Rope, Bulk Soft Beaded Jumping";

  const price = "KES 1,500";

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "100px",
        border: "1px solid #ccc",
        padding: "2px 4px",
        borderRadius: "5px",
        margin: "10px",
      }}
    >
      <div>
        <img
          src="https://i5.walmartimages.com/seo/Jump-Ropes-for-Adults-Kids-Segmented-Skipping-Rope-Bulk-Soft-Beaded-Jumping-Ropes-for-Women-Men-Exercise-Training-Workout-Weight-Loss_fb481da1-8cc3-4e48-a82f-da052298e063.8188cbf35758007e53f66fa2c9e59b0c.jpeg"
          alt="Item Image"
          width="200"
        />
      </div>

      <div>{description}</div>

      <div>{price}</div>

      <div>
        <button>Add to Cart</button>
      </div>
    </div>
  );
}

export default ItemCard;
function FilterList(props) {
  const{title,options}=props;
  return (
    <div>
      <b>{title}</b>

      <div>
        <input type="checkbox" />
        <span>New Arrivals</span>
      </div>

      <div>
        <input type="checkbox" />
        <span>Best Sellers</span>
      </div>

      <div>
        <input type="checkbox" />
        <span>Most Popular</span>
      </div>
    </div>
  );
}

export default FilterList;
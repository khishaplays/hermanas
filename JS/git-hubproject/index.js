const requestOptions = {
  method: "GET",
  redirect: "follow",
};

fetch("https://api.github.com/users", requestOptions)
  .then((response) => response.json())
  .then((result) => {
    console.log("type of result", typeof result);
    console.log(result);
  })
  .catch((error) => console.error(error));
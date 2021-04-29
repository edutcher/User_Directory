import axios from "axios";

async function getUsers() {
  let result;
  await axios
    .get("https://randomuser.me/api/?results=10")
    .then((res) => {
      result = res.data.results;
    })
    .catch((err) => console.log(err));

  return result;
}

export default getUsers;

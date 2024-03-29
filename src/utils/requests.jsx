const getData = async (url, method = "GET") => {
  let data = await fetch(url, {
    method: method,
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
  return data;
};

export { getData };

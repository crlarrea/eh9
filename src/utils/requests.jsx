const getData = async () => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append(
    "Authorization",
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJiYWFzX2RldmljZV9pZCI6IjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMCIsImJhYXNfZG9tYWluX2lkIjoiNjY1OGVlYWRlNjk5OWUwMDBkNDFmNzM2IiwiZXhwIjoxNzE3MTUyNjU5LCJpYXQiOjE3MTcxNTA4NTksImlzcyI6IjY2NTlhNDhiZTY5OTllMDAwZDMzZGFiYyIsImp0aSI6IjY2NTlhNDhiZTY5OTllMDAwZDMzZGFkOCIsInN0aXRjaF9kZXZJZCI6IjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMCIsInN0aXRjaF9kb21haW5JZCI6IjY2NThlZWFkZTY5OTllMDAwZDQxZjczNiIsInN1YiI6IjY2NTlhNDNlYjcyNjA2YjA1YjY3ZGM4YyIsInR5cCI6ImFjY2VzcyJ9.X5EADaxSFTCFW2pGwcaaFEpBj4lc52eEa5yiUiwJwlw"
  );

  const raw = JSON.stringify({
    collection: "articles",
    database: "eh9",
    dataSource: "crlarrea",
    projection: {
      _id: 1,
      title: 1,
      shortDescription: 1,
      authors: 1,
      createdAt: 1,
    },
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch(
    "https://eu-central-1.aws.data.mongodb-api.com/app/data-eoqcbhs/endpoint/data/v1/action/find",
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => result)
    .catch((error) => console.error(error));
};

export { getData };

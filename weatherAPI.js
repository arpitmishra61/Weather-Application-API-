apiInfo = {
  key: "73a9399be3db97ac3ce7325379b5732b"
};

async function get(url) {
  const response = await fetch(url);
  return response.json();
}

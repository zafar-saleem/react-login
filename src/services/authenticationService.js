export const registerUserService = (request) => {
  const REGISTER_API_ENDPOINT = 'http://localhost:4000/api/v1/register';
  console.log(request);
  
  const parameters = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(request.user)
  };

  return fetch(REGISTER_API_ENDPOINT, parameters)
    .then(response => {
      return response.json();
    })
    .then(json => {
      return json;
    });
}
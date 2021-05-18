export const loginS = async (username, password) => {
  const response = await fetch('http://10.0.2.2:8000', {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ username, password }),
  });

  if (response.ok) {
    return true;
  }

  const errMessage = await response.text(); //else
  throw new Error(errMessage);
};
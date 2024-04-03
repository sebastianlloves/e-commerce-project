export const fetchData = (url) => {
  return fetch(url).then((response) => {
    if (!response.ok) throw new Error("Error en la conexión");
    return response.json();
  });
};

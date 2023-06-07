export const sendGetRequest = (url: string) => {
  return fetch(url).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject({ message: 'Произошла ошибка' });
    }
  });
};

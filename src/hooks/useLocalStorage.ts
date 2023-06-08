export const useLocalStorgae = () => {
  function setLocalStorage(key: string, data: any) {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (err: any) {
      console.error('Ошибка при записи данных в локальное хранилище.');
      console.error({ key, data });
      console.error({ errorMessage: err.message });
    }
  }

  function getLocalStorage(key: string) {
    return JSON.parse(localStorage.getItem(key)!);
  }

  return { setLocalStorage, getLocalStorage };
};

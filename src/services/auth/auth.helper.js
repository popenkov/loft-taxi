export const saveToStorage = (data) => {
  localStorage.setItem('userToken', JSON.stringify(data));
};

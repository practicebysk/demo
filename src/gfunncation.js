export const funget = () => {
  const storeData = localStorage.getItem("setData");
  return JSON.parse(storeData)
};
export const funset = (data) => {
  localStorage.setItem("setData", JSON.stringify(data));
};

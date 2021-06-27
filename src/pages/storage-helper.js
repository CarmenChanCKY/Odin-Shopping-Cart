import Cookies from 'universal-cookie';
const cookies = new Cookies();

function setStorageItem(key, obj) {
  cookies.set(key, obj);
}

function checkStorageItemExist(key) {
  return cookies.get(key) != undefined;
}

function getStorageItem(key) {
  return cookies.get(key);
}

function removeStorageItem(key) {
  cookies.remove(key);
}

function getStorageListLength() {
  let keyList = getStrorageList();
  return keyList.length;
}

function getStrorageList() {
 return Object.values(cookies.getAll());
}

export {
  setStorageItem,
  checkStorageItemExist,
  getStorageItem,
  removeStorageItem,
  getStorageListLength,
  getStrorageList,
};

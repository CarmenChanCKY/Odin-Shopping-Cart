import Cookies from 'universal-cookie';
const cookies = new Cookies();
/*
function setStorageItem(key, obj) {
  sessionStorage.setItem(key, JSON.stringify(obj));
}

function checkStorageItemExist(key) {
  return sessionStorage.getItem(key) != null;
}

function getStorageItem(key) {
  return JSON.parse(sessionStorage.getItem(key));
}

function removeStorageItem(key) {
  sessionStorage.removeItem(key);
}

function checkStorageListIsEmpty() {
  let keyList = Object.keys(sessionStorage);
  if (keyList.length == 0) {
    return true;
  }
  return false;
}

function getStorageListLength() {
  let keyList = Object.keys(sessionStorage);
  return keyList.length;
}

function getStrorageList() {
  let keyList = Object.keys(sessionStorage);
  let storageList = [];
  for (let i = 0; i < keyList.length; i++) {
    storageList.push(getStorageItem(keyList[i]));
  }

  return storageList;
}

export {
  setStorageItem,
  checkStorageItemExist,
  getStorageItem,
  removeStorageItem,
  checkStorageListIsEmpty,
  getStorageListLength,
  getStrorageList,
};
*/

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
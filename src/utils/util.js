export function setLocalStorage(key, value) {
  // Chuyển đổi thành chuổi json
  const stringJson = JSON.stringify(value);
  localStorage.setItem(key, stringJson);
}
export function getLocalStorage(key) {
  // Lấy dữ liệu từ local lên
  const dataLocal = localStorage.getItem(key);
  // Kiểm tra nếu dữ liệu khác null thì parse nó ra object
  return dataLocal ? JSON.parse(dataLocal) : null;
}

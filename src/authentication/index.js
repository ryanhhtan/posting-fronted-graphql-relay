import 'dotenv/config';

const userDataKey= process.env.REACT_APP_USER_DATA;
// console.log(userDataKey);

const getUserData = () => {
  const storedUserData = localStorage.getItem(userDataKey);
  if (!storedUserData)
    return null;
  return JSON.parse(storedUserData);
};

export const saveUserData = (data) => {
  localStorage.setItem(userDataKey, JSON.stringify(data));
};

export const removeUserData = () => {
  localStorage.removeItem(userDataKey);
};

export const getUser = () => {
  const userData = getUserData();
  if (!userData)
    return null;
  return userData.user;
}; 

export const getToken = () => {
  const userData = getUserData();
  if (!userData)
    return null;
  return userData.token;
}

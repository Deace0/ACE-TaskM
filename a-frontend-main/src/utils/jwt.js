import jwtDecode from "jwt-decode";

export const isValidToken = accessToken => {
  if (!accessToken) {
    return false;
  }
  const decoded = jwtDecode(accessToken);
  const currentTime = Date.now() / 1000;

  return decoded.exp > currentTime;
};

/**
 * @description Decode the token
 * @param {string} accessToken
 * @returns {object} The decoded token
 */
export const decodeToken = accessToken => {
  if (!accessToken) {
    return null;
  }
  const decoded = jwtDecode(accessToken);
  return decoded;
};

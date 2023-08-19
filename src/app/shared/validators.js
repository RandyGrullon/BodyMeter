/* eslint-disable */

export const validateEmail = (email) => {
  const emailRegex = new RegExp(
    /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/,
    "gm"
  );
  return emailRegex.test(email);
};

export const validateHRMUsername = (username) => {
  const usernameRegex = new RegExp(/^[a-z]{2,}\.[a-z]{2,}$/);
  return usernameRegex.test(username);
};

export const validatePhoneNumber = (phoneNumber) => {
  const phoneNumberRegex = new RegExp(
    /^\d{1,3}\s?\-?\d{1,3}\s?\-?\d{1,4}|\+\d{1,3}\s\d{1,3}\s?\-?\d{1,3}\s?\-?\d{1,4}$/
  );
  return phoneNumberRegex.test(phoneNumber);
};

export const validateDocumentId = (id) => {
  const documentIdRegex = new RegExp(/[\d\w]{8,11}/, "gi");
  return documentIdRegex.test(id);
};

export const validateFlightCard = (id) => {
  const flightCardRegex = new RegExp(/[\w]{2}[\d]{4}/, "gi");
  return flightCardRegex.test(id);
};

export const validateNumber = (str) => {
  const numbersRegex = new RegExp(/^\d+$/, "gi");
  return numbersRegex.test(str);
};

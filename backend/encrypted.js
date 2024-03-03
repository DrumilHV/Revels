import crypto from "crypto-js";

class DecryptionService {
  decrypt(encryptedText, secretKey) {
    var encryptedData = encryptedText.data;
    if (encryptedData) {
      const bytes = crypto.AES.decrypt(encryptedData, secretKey);
      const decryptedText = bytes.toString(crypto.enc.Utf8);
      return JSON.parse(decryptedText);
    }
  }
}

// Usage example
const encryptedText = {
  data: "U2FsdGVkX18JP2RQmgLbjB7s2h0mS9E5iWmyWMiAxqVs1A67v+kTbXH0GVQMnyCddfmQ4dfmDpBwUQosnpf5MOli7hUEK35iQ8sOXi5oOZ6Uv2/dh9lQiaGQcin0of4409+8CBmgjuwVSzVHatab4wQBm6c8n3htsLLbZK19V1n0k4IOi8BWw10rZht42vEiDPfbeYlAz+oOtko3gvnnhyenUm1bv3KFZQr5RJvw+I4TNI3ACpgRpZUItCc25D1nvFoSaKCCVeYz+Vao6Yr0N6vOiNdQagtfcXlK/Mfacbr/OS+tbKefoDX3P8idnDd2VOygtCHZQHyB9cid20gvf72gYLlAkvEZajquKlClJ9FiFOgViIqdqKDUJ/uOoMUUYxwDkGvvG+nBlAkI8DwVGtvF0wPNCjnj3dE3E8hLxsU=",
};

const secretKey = "mysecretkeysecretrevels";

const decryptionService = new DecryptionService();
const decryptedData = decryptionService.decrypt(encryptedText, secretKey);
console.log(decryptedData);

const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = new emosi((resolve,reject) => {
  resolve("marah");
  reject("tidak marah");

});


module.exports = {
  promiseOutput,
};

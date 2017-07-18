// function c () {
//   b();
// };
//
// function b () {
//   a();
// };
//
// function a () {
//   setTimeout(function () {
//     throw new Error('here');
//   }, 10);
// };
//
// c();

function c () {
  b();
};

function b () {
  a();
};

function a () {
  throw new Error('here');
};

c();

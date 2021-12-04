'use strict';

const tagged = (pref, str) => `[${pref}] ${str}`;

// Define function tagDate that prepends current date to the string.
// E.g. tagDate('My String') === '[2019-11-14] My String'
// Use function tagged to implement tagDate.

const tagDate = (string) => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = String(date.getDate());
  const rightDay = day.length < 2 ? '0' + day : day;
  const fullDate = [year, month, rightDay].join('-');
  return tagged(fullDate, string);
};

module.exports = { tagDate };

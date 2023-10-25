module.exports = function check(str, bracketsConfig) {
  let bracketsConfigMap = new Map(bracketsConfig);
  let stack = [];

  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === bracketsConfigMap.get(stack[stack.length - 1])) {
      stack.pop();
    } else {
      stack.push(str[i]);
    }
  }
  return stack.length === 0;
};

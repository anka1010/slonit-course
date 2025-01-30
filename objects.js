function getObjectPropertiesSum(obj = {}) {
  let sum = 0;
  const numericalProps = [];

  for (key in obj) {
    if (typeof obj[key] === "number") {
      sum += obj[key];
      numericalProps.push(key);
    }
  }

  numericalProps.sort((a, b) => -a.localeCompare(b));

  return { sum, numericalProps };
}

const { sum, numericalProps } = getObjectPropertiesSum({
  name: "Vasya",
  friends: 5,
  likes: 19,
  projects: 7,
});
console.log(`Сумма числовых полей: ${sum}`);
console.log(`Числовые свойства: ${numericalProps}`);

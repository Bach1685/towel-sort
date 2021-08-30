module.exports = function towelSort (matrix) {
    if(!matrix) return [];

    let counter = 0;
  return matrix.reduce((mainArr, currentArr) => {
        counter++;
        return mainArr.concat( counter % 2 ? currentArr : currentArr.reverse());
    }, []);
}

module.exports = towelSort = (matrix) =>
    matrix
        ? [].concat(...matrix.map((x, idx) => (idx % 2 ? x.reverse() : x)))
        : [];

const solutionList = require('../data');

function validateColumn(array, element) {
    let isDuplicate = false;
    for (let index = 0; index < 9; index++) {
        isDuplicate = [...array.slice(0, index), ...array.slice(index + 1)].includes(array[index]);
        if (isDuplicate) {
            return isDuplicate;
        }
    }
    return isDuplicate;
}
function findSquare(row, col) {
    const rowIndices = [parseInt(((row + 3) / 3), 10) * 3 - 3, parseInt(((row + 3) / 3), 10) * 3 - 1];
    const colIndices = [parseInt(((col + 3) / 3), 10) * 3 - 3, parseInt(((col + 3) / 3), 10) * 3 - 1];
    return {rowIndices, colIndices};
}
module.exports = {
    validateSolutions: function () {
        const result = [];
        solutionList.map((solution, index) => {
            for (let row = 0; row < 9; row++) {
                let isDuplicate = false;
                const colArray = [];
                for (let col = 0; col < 9; col++) {
                    isDuplicate = [...solution[row].slice(0, col), ...solution[row].slice(col + 1)].includes(solution[row][col]);
                    if (isDuplicate) {
                        console.log('Invalid solution\n', solution, '\n\n');
                        return false;
                    }
                    const indices = findSquare(row, col);
                    const innerSquare = [
                        ...solution[indices.rowIndices[0]].slice(indices.colIndices[0], indices.colIndices[1] + 1),
                        ...solution[indices.rowIndices[0] + 1].slice(indices.colIndices[0], indices.colIndices[1] + 1),
                        ...solution[indices.rowIndices[1]].slice(indices.colIndices[0], indices.colIndices[1] + 1),
                    ];
                    const elementIndex = ((row % 3) * 3) + (col % 3);
                    isDuplicate = [...innerSquare.slice(0, elementIndex), ...innerSquare.slice(elementIndex + 1)].includes(solution[row][col]);
                    if (isDuplicate) {
                        console.log('Invalid solution\n', solution, '\n\n');
                        return false;
                    }
                    colArray.push(solution[col][row]);
                    if (colArray.length === 9) {
                        isDuplicate = validateColumn(colArray);
                        if (isDuplicate) {
                            console.log('Invald solution\n', solution, '\n\n');
                            return false;
                        }
                    }
                }
            }
            console.log('Valid solution\n', solution, '\n\n');
            return true;
        });
    },
};

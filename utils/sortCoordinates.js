module.exports.sortCoordinates = (imageMeta) => {
    let assignedRow = 0;
    let currentUB = -1;
    let currentLB = -1;
    const sortedImageMeta = imageMeta.sort((a, b) => {
        return a.rowFrom - b.rowFrom;
    });
    for (let element of sortedImageMeta) {
        if (element.rowFrom > currentUB || element.rowFrom < currentLB) {
        assignedRow += 1;
        midpoint = (element.rowTo - element.rowFrom) / 2;
        currentUB = element.rowFrom + midpoint;
        currentLB = element.rowFrom - midpoint;
        }
        element.rowGiven = assignedRow;
    }
    sortedImageMeta.sort((a, b) => {
        return a.rowGiven - b.rowGiven || a.colFrom - b.colFrom;
    });

    return sortedImageMeta;
};
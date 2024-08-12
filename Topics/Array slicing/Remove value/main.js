function newRemove(array, index, n) {
    const start = array.slice(0, index);
    const end = array.slice(index + n);
    return start.concat(end); // Enter your code in place of ... and use slice and concat
}
export let moveElement = (array: any[], oldI: number, newI: number) => {
    let prototype = array;
    if (newI >= array.length) {
        var k = newI - array.length + 1;
        while (k--) {
            prototype.push(undefined);
        }
    }
    prototype.splice(newI, 0, array.splice(oldI, 1)[0]);
    return prototype;
};

export let deleteElement = (array: any[], i: number) => {
    let prototype = array.filter(element => {
        if (array.indexOf(element) === i) return false;
        return true;
    });
    return prototype;
};

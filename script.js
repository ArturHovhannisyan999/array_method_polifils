Array.prototype.myMap = function (callback, acc = []) {
     for (let i = 0; i < this.length; i++) {
         acc.push(callback(this[i], i, this))
     }
     return acc;
};

Array.prototype.myFilter = function (callback, acc = []) {
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            acc.push(this[i])
        }
    }
    return acc;
};

Array.prototype.myReduce = function (callback, acc = 0) {
    for (let i = 0; i < this.length; i++) {
        acc = callback(acc, this[i], i, this)
    }
    return acc;
};

Array.prototype.mySort = function (callback) {
    for (let i = 0; i < this.length; i++) {
        for (let j = 0; j < this.length; j++) {
            if (callback(this[j], this[i]) > 0) {
                [this[i], this[j]] = [this[j], this[i]];
            }
        }
    }
    return this;
};

Array.prototype.mySome = function (callback) {
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            return true;
        }
    }
    return false;
};

Array.prototype.myEvery = function (callback) {
    for (let i = 0; i < this.length; i++) {
        if (!callback(this[i], i, this)) {
            return false;
        }
    }
    return true;
};


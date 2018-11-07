var sha1 = require("sha1");
var congressmenName = ["Alcee Hastings",
    "Alfred Lawson",
    "Bill Posey",
    "Brian Mast",
    "Carlos Curbelo",
    "Charlie Crist",
    "Daniel Webster",
    "Darren Soto",
    "Debbie Wasserman Schultz",
    "Dennis Ross",
    "Francis Rooney",
    "Frederica Wilson",
    "Gus Bilirakis",
    "Ileana Ros-Lehtinen",
    "John Rutherford",
    "Kathy Castor",
    "Lois Frankel",
    "Mario Diaz-Balart",
    "Matt Gaetz",
    "Neal Dunn",
    "Stephanie Murphy",
    "Ted Deutch",
    "Ted Yoho",
    "Thomas Rooney",
    "Val Demings",
    "Vern Buchanan"];

var congressmenNameSecret = new Array();

for (var i = 0; i < congressmenName.length; i++) {
    congressmenNameSecret.push(sha1(congressmenName[i]));
    console.log("The secret code for " + congressmenName[i] + " is " + congressmenNameSecret[i]);
}

function BinarySearchTree(val) {
    this.value = val;
    this.left = null;
    this.right = null;
}
BinarySearchTree.prototype.insert = function (passedValue) {
    let subtree = passedValue < this.value ? 'left' : 'right';
    if (this[subtree]) {
        this[subtree].insert(passedValue);
    } else {
        this[subtree] = new BinarySearchTree(passedValue);
    }
};

var newTree = new BinarySearchTree(congressmenNameSecret.shift());
for(k=0;k<congressmenNameSecret.length; k++){
    newTree.insert(congressmenNameSecret.shift());
}

console.log(newTree);

BinarySearchTree.prototype.getMin = function () {
    if (this.left) {
        return this.left.getMin();
    } else {
        return this.value;
    }
};

console.log("The minimum hash nowCongressmen is : " + newTree.getMin());


var getName = new Array();
for (var i = 0; i < congressmenName.length; i++) {
getName.push(sha1(congressmenName[i]));
}

var minConName = [];
minConName = getName.indexOf(newTree.getMin());

console.log('The CongresmenName, who has a min hash nowCongressmen is : '+ congressmenName[minConName]);


BinarySearchTree.prototype.contains = function (value) {
    if (value === this.value) {
      return true;
    }
    let subtree = value < this.value ? 'left' : 'right';
    if (this[subtree]) {
      return this[subtree].contains(value);
    } else {
      return false;
    }
};
var nowCongressmen = new BinarySearchTree("Debbie Wasserman Schultz");
console.log('Searching for name starts with "D": ' + nowCongressmen.contains("Debbie Wasserman Schultz"));


// splice means first value is index 2nd is the number of items we hae to delete and the rest is the items we have to add.
// for examle: [1,2,45,26] first is index second is the items to be deleted and third is the numbers of items to add

let kep = [12.45,45,85];
kep.splice(2,0,12);
console.log(kep);


let zep = [1,2,99,5,6];
zep.splice(1,2,10,20);  // 1,10,20,5,6
console.log(zep);

let browser = ['chrome','firefox','safari','opera','edge'];
console.log(browser);
console.log(browser.length);

browser.pop();
browser.unshift('edge');
console.log(browser);
browser.shift();
console.log(browser);
browser.push('edge');
console.log(browser);

for (let i = 0; i <= browser.length;i++){
    console.log(browser[i]);
    if(browser[i] === "opera"){
        console.log("Opera doesn't support Automation Now!");
    }
}
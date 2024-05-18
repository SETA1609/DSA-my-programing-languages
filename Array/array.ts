const numArray: Array<number> = [1,2,3,4,5];
                                                                                                               
const numArrayRdm: Array<number> = [5,1,2,3,4];
                                                                                
const strArray: Array<string> = ["a","b","c","d","e"];
        
const strArrayRdm: Array<string> = ["z","b","a","e","d"];

interface MyinterfaceObj{
	"key":string
}

const myObj: MyinterfaceObj = { 
        "key":"value"
}

const objArrayRdm:Array<MyinterfaceObj > [myObj, myObj, myObj];

// push O(1)                                                                        
// pop O(1)                                                               
// shift O(n)
// unshift O(n)
// concat O(n)
// slice O(n)
// splice O(n)
// sort O(n*log n)


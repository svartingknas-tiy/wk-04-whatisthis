/*******************************/
/*   Setting up the examples   */
/*******************************/
var whatIsThis = function(a, b) {
	console.log('This is...', this);
	console.log('a = ', a);
	console.log('b = ', b);
};

var inAnObject = {
	name: 'inAnObject',
	test1: whatIsThis,
	anotherObject: {
		name: 'anotherObject',
		test2: whatIsThis
	}
};

var inAFunction = function(a, b) {
	this.name = 'Sally';
	console.log('This inside inAFunction is...', this);
	this.test4 = whatIsThis;
	whatIsThis(a, b);
};

inAFunction.prototype.test3 = whatIsThis;

var trickyTricky = {
	name: 'trickyTricky',
	why: 'does this work?',
	what: 'is going on here?'
};

var confusing = {
	name: 'confusing',
	state: 'Alaska',
	city: 'Anchorage'
};


/*******************************/
/*     Running the examples    */
/*******************************/

/* Instructions:
   You are a scientist who has just discovered a *mysterious* new element in your lab. Since creativity isn't your strong suit, you name the element `this`. Your job is to figure out the properties of this new element as well as how it interacts with its environment. Run through each of the examples in whatIsThis.js, one by one (commenting out the previous example and uncomment the current example as necessary). In the comments section below each example fill in what `this` is referencing inside of the whatIsThis function. Why? If it throws an error, why is it throwing an error?
   Create an index.html and link this file.  Open index.html in your browser and view your console to get started.
*/

// * Problem 1
 // whatIsThis('hello', 'world');

// - "this" is ... the default location (window object) (function IS NOT an object, because there are no values or properties.)
// - because ... whatIsThis is not an object, it is defined as a function. There are no objects for 'this' to refer to. so it goes to the default location.





// * Problem 2
 // window.whatIsThis('hello', 'world');
/*
- "this" is ... the window object, referring to the object occuping the space, the window.
- because ... This is not under a specific object, but under the entire window object.
*/




// * Problem 3
// inAnObject.test1('face', 'book');
/*
- "this" is ...inAnObject

- because ... implicity bound to inAnObject through the call site.
*/




// * Problem 4
// inAnObject.anotherObject.test1('twitter', 'book');
/*
- "this" is ... referring to test 2 as there is no test 1 under anotherObject.

- because ... this refers to the object in which is being utilized. this, in this case, is beig utilized to refer to anotherObject. anotherObject does not contain a test1 .
*/




// * Problem 5
// inAnObject.anotherObject.test2('twitter', 'book');
/*
- "this" is ... referring to anotherObject
- because ... anotherObject is the reining object under which this is being used.
"implicitely bound to 'inAnObject' through the call site"
*/




// * Problem 6
// whatIsThis.call();
/*
- "this" is ... the window object
- because ... name is not one of the parameters of the function.
'because it isnt otherwise specified., therefore, uses the default binding, in this case window; since no 'a' or 'b' parameter, they're undefined. */





// * Problem 7
// whatIsThis.call(trickyTricky);
/*
- "this" is ...
- because ...
*/




// * Problem 8
// whatIsThis.call(trickyTricky, 'nice', 'job');
/*
- "this" is ... 'trickyTricky' with an a or b defined throigh .call parameters
- because ... trickyTricky and parameters are pase through .call and therefore hard bound.
*/




// * Problem 9
// whatIsThis.call(confusing);
/*
- "this" is ...confusing without an a or b defined
- because ... confusing is passed through .call and therefore hard bound. since no a or b parameters, theypre undefined
*/




// * Problem 10
// whatIsThis.call(confusing, 'hello');
/*
- "this" is ...  confusing with a defined and b undefined
- because ... confusing and one parameter are pased throgh .call and therefore undefined.
*/




// * Problem 11
// whatIsThis.apply(trickyTricky);
/*
- "this" is ... trickyTricky  without a or b defined
- because ... trickyTricky
*/




// * Problem 12
// whatIsThis.apply(confusing, ['nice', 'job']);
/*
- "this" is ...confusing with a a and b definedn through .apply parameters
- because ... because confusing and parameters are passed through .apply and therefore hardbound --even though they are passed as an array(the array is necessary to pass additional parameters through the .apply)
*/




// * Problem 13
// whatIsThis.apply(confusing, 'nice', 'job');
/*
- "this" is ...  confusing throws an error
- because ... .apply requires to have an array of strings, even if it is only one object .
".apply requires an array for additional parameters.(ie everything but the object being bound.)"
*/




// * Problem 14
// inAFunction('what will', 'happen?');
/*
- "this" is ... referring to the window object. There are no objects under this function
- because ... this.sally is not an object, so this refers to the window.
*/




// * Problem 15
// inAFunction.test3('A', 'B');
/*
- "this" is ... an error
- because ... 'test3' is not an option
*/




// * Problem 16
// var newObject = new inAFunction('what will', 'happen?');
/*
- "this" is ... window or global
- because ... it was defaultbound to window through its call site. New doesnt apply because the function is simply called from within the new function.
*/


// * Problem 17
// var newObject = new inAFunction('what will', 'happen?');
// newObject.test4('now', 'what');
// newObject.test3('C', 'D');
/*
- "this" is ... initially window or global, then it's 'inAFunction'
- because ... line 212 initiall did a new bind -- the call to whatIsThison line 23  reset the bind to the default windowe
*/




// * Problem 18
// inAnObject.test1.call(trickyTricky, 'face', 'book');
/*
- "this" is ...
- because ... trickyTricky and parameters are passed through .call and tehrefore hard bound.
*/




// * Problem 19
inAnObject.anotherObject.test2.apply(confusing, ['foo', 'bar']);
/*
- "this" is ...
- because ...
*/

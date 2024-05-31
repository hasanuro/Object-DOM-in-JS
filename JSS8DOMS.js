//----------------------------------------------DOM TARGETTING METHODS-----------------------------------------------------------

let ele; //declare

//1) Document
//ele = document;
//console.log(ele);

//2) Document.all
// ele = document.all; //It will print out all the HTML tags which you used in HTML file
// ele = document.all[20]; // redirect to 2nd image query
//console.log(ele);

//3) Document.images
// ele = document.images; // Redirect to images tag
// ele = document.images[2]; // redirect to 3rd image because index start from 0
// console.log(ele);

//4) Document.Doctype
// ele = document.doctype; //Tell the doctype of file, menas extension, right now our file extension is HTML
// console.log(ele);

//5) Document.body
// ele = document.body; //redirect tot he body tag of HTML
// console.log(ele);

//----------------------------------------------DOM GET METHODS-----------------------------------------------------------

//1-inner text (text get)
// ele = document.getElementById("k").innerText; //jiski id "k" hay HTML file may uska text utha k le aya
// console.log(ele);

//2-innerhtml(tag )
// ele = document.getElementById("k").innerHTML; // jiski id "k" us k andar jo HTML tags use horahay hain wo return krega console pe
// console.log(ele);

//3-get attribute
// ele = document.getElementById("k").getAttribute("class"); //jiski id "k" hay uske anadr jitne attribute use horahay hay jese k "style class" xyz, us attribute ka name dege, wo uski value return krega
// console.log(ele);

//4-get attribute node
// ele = document.getElementById("k").getAttributeNode("style");//jiski id "k" hay uske anadr jitne attribute use horahay hay jese k "style class" xyz, us attribute ka name dege, wo uski key & value dono return krega
// console.log(ele);

//5-attribute 
// ele = document.getElementById("k").attributes; // Return all attribute of "k"
// ele = document.getElementById("k").attributes[2]; // Return index[2] attribute of "k", with it's key & value
// ele = document.getElementById("k").attributes[2].value; // Return index[2] attribute of "k", only it's value
// console.log(ele);
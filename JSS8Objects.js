let employee ={
    fname:"rayan",
    lname:"naeem",
    age:20,
    email:"rayan@gmail.com",
    salary:564564,

    //Variable "s" k sath function banaya hay & return karwai hay salary
    // s:function(){ 
    //     return this.salary;
    // },

    //Nested variable "info" with multiple values
    // info:{
    // city:"karachi",
    // country:"pakistan" 
    // },
    
    //Array declare ki hay
    // hobbies: [1,"rayanbaji",5356456]
}

// It will print the key & value both
for(var key in employee){
    document.write(`${key}:${employee[key]} ` ,"<br>")
}

// document.write(employee.fname);//rayan
// document.write(employee.lname);//rayan
// document.write(employee.age);//rayan
// document.write(employee.email);//rayan

// document.write(employee); //[Object Object]
// document.write(Object.keys(employee)); // It willl print all keys "fname lname age email salary"
// document.write(Object.values(employee)); // It willl print all values "Rayan Naeem 20 rayan@gmail.com 564564"

// document.write(employee.fname, employee.lname , employee.age , employee.email) // Print multiple values by calling each var key
// document.write(employee.fname, " ", employee.lname , employee.age , employee.email) // inverted commna will give a space btw fname & lname

// document.write(employee.s()); //Return Salary value

// document.write(employee.info.city); //Return only city value

// document.write(employee.hobbies[1]); //Return the Array Value, which is on index no 1, right now it's "rayanbaji"



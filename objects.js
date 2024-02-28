const person1 = {
    firstname : "Lionel",
    lastname : "Messi" ,
    age : 34,
    club : "Inter Miami",
    hello : () => console.log("Hello " + person1.firstname + " " +person1.lastname)

}

const person2 = {
    firstname : "Kevin",
    lastname : "Debryne" ,
    age : 32,
    club : "Manchester City",
    hello : function () {console.log("Hello " + this.firstname + " " + this.lastname)}
}

person1.hello()
person2.hello()

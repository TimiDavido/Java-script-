const person = [{name : "Timi", age : 19, school :"covenant"},
                {name : "Temilade", age : 19, school :"babcock"},
                {name : "Anjola", age : 17, school :"Abuad"},
                {name : "Brenda", age : 28, school :"babcock"},
                {name : "Steph", age : 18, school :"oxford"}
]

person.sort((a,b) => a.name.localeCompare(b.name))

console.log(person)

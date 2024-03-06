function func1(callback){
    console.log("Task 1")
    setTimeout(func1, 3000)
}

function func2(){
    console.log("Task 2")
    console.log("Task 3")
    console.log("Task 4")
    console.log("Task 5")

}

func1(func2)
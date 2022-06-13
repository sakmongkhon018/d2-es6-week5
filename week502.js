let rainbow = ["Violet", "indigo", "Blue", "Green", "Yello", "Orange", "red"] //Global variable
let  message = "Hello"
function show(rainbow) {
    for (let i = 0; i < rainbow.length; i++) {
        console.log(`Rainbow ${i}: ${rainbow[i]}`)
    }

    rainbow.forEach((item,index)=>{
        //console.log(`${message} Rainbow ${index}:${item}`)
    })

    let i = 0;
    for (const j of rainbow) { //For of
        // console.log(` ${i} : ${j}`)
        i++
    }

    let a = 0;
    for (const k in rainbow) { //For in
        //console.log(`Rainbow ${a} : ${k}`)
        a++
    }
}
show(rainbow)
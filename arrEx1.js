

const arr = [`닥터스트레인지`, `아이언맨`, `블랙위도우`]

console.log(arr.length)

console.log(arr[0])
console.log(arr[1])
console.log(arr[2])
const changedLength = arr.push("블랙팬서")

console.log(changedLength)

//console.log(arr.indexOf("캡틴 아메리카"))

console.log(arr)

arr.splice(1,1)

console.log(arr)

for (let i = 0; i < arr.length; i++) {
    if(arr[i] == `블랙위도우`){
        continue
    }
    console.log(i)
    console.log(arr[i])

    /*if(arr[i] == `블랙위도우`){
        break
    }*/
}

console.log("------------------------------")

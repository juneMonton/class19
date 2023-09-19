//Create an array of movie titles. Loop through the array and each element to the h2.
let movieTitles=[" Harry Potter"," Spiderman"," Superman"]
for(let i=0;i<movieTitles.length;i++){
    document.querySelector('h2').innerText+=movieTitles[i]
}
//Create an array of numbers. Loop through the array and three to each number and replace the old number.
let numbers=[10,20,30]

numbers.forEach((item,idx)=>{
   numbers[item]=item+3
})
//Find the average of all the numbers from question two
let sum=0;

for(let i=0; i<numbers.length; i++){
    sum=sum+numbers[i] // sum +=numbers[i] 
}
console.log(sum / numbers.length)
// numbers.forEach((num)=>sum+=num)
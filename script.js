async function getArray(){
	let array = [1,2,3,4]
	return array
	
} 


getArray().then((array)=>{
	let evens = array.filter((i)=>i%2===0)
    
    setTimeout(()=>{
      let el = document.getElementById('output');
      el.innerHTML = evens.join(',')
    },1000)
    
	return evens
}).then((evens)=>{
  let twos = evens.map((i)=>i*2)
  setTimeout(()=>{
    let el = document.getElementById('output');
      el.innerHTML = twos.join(',')
  },2000)
})
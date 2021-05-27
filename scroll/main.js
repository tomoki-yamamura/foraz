// const child = document.querySelector(".child")
const cb = function(entries, obserever) {
  entries.forEach(entry=> {
    console.log(entry)
    if(entry.isIntersecting) {
      console.log('inview');
    }else {
      console.log("out view");
    }
  })
}



const io = new IntersectionObserver(cb)
console.log(IntersectionObserver)
io.obsereve()
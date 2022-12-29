var cl = console.log;

// 1 single selection methods
// document.getelementById() and document.querySelector()

// 2 multiple selection methods
// documnet.getElementByClassName
// documnet.getElementByTagName
// documnet.qurySelectorAll
// It will return collection of document objects
// 1 document.getelementById
//It is single selection method
//this method returns document objects

// 1 document.getElementById

const info = document.getElementById("info");
cl(typeof info)

info.style.backgroundColor = "#007bff";
info.style.color = "#fff";
info.style.padding = "20px";
info.style.fontsize = "20px";
cl(info.innerHTML);

// 2 document.querrySelector();
//It is a single selector method
//It is also returns Document Object
//it will select 1st occurance of the selector
// let li = document.querySelector('li');

let li = document.querySelector(' .list-group-item');
cl(li);

 li.classList.add('active');
 li.classList.add('demo');

 li.classList.remove('demo');


 let secondLi = document.querySelector("li:nth-child(2)");
 cl(secondLi);
 let lastLi = document.querySelector(" li:last-child");
 cl(lastLi);

//diff between nth-child and nth-of-child

//3 document.getElementByIdClassname
//It is a multiple selection method 
// it returns collection of document object >> HTMLCollection
//HTMLcollection is array like object, but it is not a array
let allLis = document.getElementsByClassName('list-group-item');
cl(allLis);

//allLis.pop()
cl(allLis.length) // 5
for (let i = 0; i < allLis.length; i++) {
    cl(allLis[i])
}

// allLis.forEach(ele => {
//     cl(el)
// });

//convert HTMLCollection into Array
let allLisArray = Array.from(allLis);
cl(allLisArray);

// allLisArray.forEach(function(ele){
//     cl(ele)
// });

allLisArray.forEach(ele => cl(ele));

// diff between html tag and html element
//<li></li>
//4 document.getElementByTagaName
//It selects multiple elements
//It returns HTMLCollection 
//HTMLCollection is a array like objects, it is not a array
let allLiTags = document.getElementsByTagName('li');

cl(allLiTags) // HTMLCollection of 5 document object
// allLiTags.forEach(ele => cl(ele))
let allLiTagsArray = Array.from(allLiTags);
cl(allLiTagsArray);

// inner is a property of document object
// style, innerText ,textContent, classList is also a property of document object
// cl(allLiTagsArray.innerHTML);

//allLiTagsArray.style.backgroundColor = 'orange';
//style is also a property of Document Object
//allLiTagsArray.forEach(ele => cl(ele.innerHTML));
//allLiTagsArray.forEach(ele => cl(ele.innerText));
//allLiTagsArray.forEach(ele => cl(ele.textContent));


// allLiTagsArray.forEach(ele => cl(ele.innerHTML))
// allLiTagsArray.forEach(ele => cl(ele.innerText))
// allLiTagsArray.forEach(ele => cl(ele.textContent))


   for(let i = 0; i < allLiTagsArray.length; i++){
       allLiTagsArray[i].innerHTML = `I love${allLiTagsArray[i].innerHTML}`
   }
  allLiTagsArray.forEach(ele => ele.innerText = `I love ${ele.innerText}`)

  // 5 document.querySelectorAll
  //It multiple selection method
  //It returns collection of document objects  //It returns Nodelist
  //Nodelist is also a array like object,but not a array

  //let allLiNodes = document.querySelectorAll('li');
  let allLiNodes = document.querySelectorAll('  li');

  cl(allLiNodes);

 allLiNodes.forEach(ele => cl(ele.textContent));

//  let backEndLi = Array.from(document.querySelectorAll('#skillset2 .list-group.item'));
//  cl(backEndLi);

  // let evenBack = Array.from (document.querySelectorAll('#skillset2 li:nth-child(even)'))
 // let evenBack = Array.from(document.querySelectorAll('#skilset2 li:nth-child(2n)'))

//  cl(evenBack)

//  evenBack.forEach(ele => ele.classList.add('bg-warning'))
  let oddLi = document.querySelectorAll('#skillset2 li:nth-child(odd)')

  //  oddLi = document.querySelectorAll('#skillset2 li:nth-child-child(2n +1)')

  oddLi.forEach(li => li.classList.add('bg-success'))






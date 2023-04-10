 
let body = document.querySelector('body')

 let container = document.createElement("div");
 container.classList.add("container");

 body.append(container)



 let pagination = document.createElement('div');

 pagination.classList.add('pagination');

 container.append(pagination);



 let btn = document.createElement('button')

 btn.classList.add('btn1')

 btn.setAttribute('onclick','backbtn()')
 btn.innerText="prev"


 let img = document.createElement('img')
 img.setAttribute('src','./image/left-arrow.png')
 btn.append(img)
 pagination.append(btn)

 let ulTag = document.createElement('ul')
 pagination.append(ulTag)

 let liTag1 = document.createElement('li')
 liTag1.classList.add('link')
 liTag1.classList.add('active')
 liTag1.innerText="1"
 liTag1.setAttribute('value','1')
 liTag1.setAttribute('onclick','activeLink()')

 ulTag.append(liTag1)

 let liTag2 = document.createElement('li')
 liTag2.classList.add('link')
 liTag2.innerText="2"
 liTag2.setAttribute('value','2')
 liTag2.setAttribute('onclick','activeLink()')


ulTag.append(liTag2)



 let liTag3 = document.createElement('li')
 liTag3.classList.add('link');
 liTag3.innerText="3";
 liTag3.setAttribute('value','3')
 liTag3.setAttribute('onclick','activeLink()')


ulTag.append(liTag3)




 let liTag4 = document.createElement('li')
 liTag4.classList.add('link')
 liTag4.innerText="4"
 liTag4.setAttribute('value','4')
 liTag4.setAttribute('onclick','activeLink()')


ulTag.append(liTag4)

 let liTag5 = document.createElement('li')
 liTag5.classList.add('link')
 liTag5.innerText="5"
 liTag5.setAttribute('value','5')
 liTag5.setAttribute('onclick','activeLink()')


ulTag.append(liTag5)

let liTag6 = document.createElement('li')
liTag6.classList.add('link')
liTag6.innerText="6"
liTag6.setAttribute('value','6')
liTag6.setAttribute('onclick','activeLink()')


ulTag.append(liTag6)



 let btn1 = document.createElement('button')

 btn1.classList.add('btn2')

 btn1.setAttribute('onclick','nextbtn()')
 btn1.innerText="Next"

 let img1 = document.createElement('img')
 img1.setAttribute('src','./image/left-arrow.png')
 btn1.append(img1)
 pagination.append(btn1)

 
// ************************************************************************
 
 
let link = document.getElementsByClassName("link")

let currentValue = 1;

function activeLink(){
 
   for(l of link){
      l.classList.remove("active")
   }
   event.target.classList.add("active")
   currentValue = event.target.value;
}


function backbtn(){

  if(currentValue>1){
    for(l of link){
      l.classList.remove("active");
     }
     currentValue--;
     link[currentValue-1].classList.add("active");
  }

}

function nextbtn(){

  if(currentValue<6){
    for(l of link){
      l.classList.remove("active");
     }
     currentValue++;
     link[currentValue-1].classList.add("active");
  }

}

// ************************************************************************


 
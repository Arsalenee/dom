let addButton = document.getElementById('btn')
//console.log(btn)
addButton.addEventListener('click', function(){
    //console.log(addButton)
    let imageInput = document.getElementById('bimg')
    let titleInput = document.getElementById('btitre')
    //console.log(imageInput, titleInput)
    if (!imageInput.value){
return alert('Input field is empty')
    }
    if (!titleInput.value){
        return alert('Input field is empty')  
    }
    var section=document.createElement('section')
    // section.innerHTML='hhiiiii'
    let main = document.querySelector('main')
    //console.log(main)
    main.appendChild(section)
    section.setAttribute('class', 'blog' )
    var divOfCard=document.createElement('div')
    var imageOfDiv=document.createElement('img')
    var h1=document.createElement('h1')
    section.appendChild(divOfCard)
    divOfCard.appendChild(imageOfDiv)
    divOfCard.appendChild(h1)
    imageOfDiv.src=imageInput.value
    h1.innerText=titleInput.value
    //2nd Div
    var Div2=document.createElement('div')
    section.appendChild(Div2)
    Div2.setAttribute('class', 'commentaire' )
    var commentInput=document.createElement('input')
    Div2.appendChild(commentInput)
    var buttonComment=document.createElement('button')
    buttonComment.setAttribute('class', 'comment' )
    buttonComment.innerHTML='add comment'
    Div2.appendChild(buttonComment)
    //third div
    var Div3=document.createElement('div')
    section.appendChild(Div3)
    Div3.setAttribute('class', 'reaction' )
    var likeButton=document.createElement('button')
    likeButton.setAttribute('class', 'like' )
    likeButton.innerHTML='<i class="fa-regular fa-thumbs-up"></i>'
    Div3.appendChild(likeButton)
    var deleteButton=document.createElement('button')
    deleteButton.setAttribute('class', 'delete' )
    deleteButton.innerHTML='delete'
    Div3.appendChild(deleteButton)
    //reset values
    imageInput.value=''
    titleInput.value=''
   //add commentaire 1

   var btncomment= document.getElementsByClassName('comment')
   
   for (let i = 0; i < btncomment.length; i++) {
   btncomment[i].addEventListener('click',addcomment)
    
   }
 
   var btndelete =document.getElementsByClassName("delete")
   for (let j = 0; j < btndelete.length; j++) {
    btndelete[j].addEventListener('click',deleteblog)
   }

   var btnlike =document.getElementsByTagName("i")
   for (let index = 0; index < btnlike.length; index++) {
    btnlike[index].addEventListener('click',like)
    
   }


})
function addcomment(event){
 let btn2 = event.target

 var input2= btn2.previousElementSibling
 console.log(input2)
 if (!input2.value){
    return alert('Input field is empty')
}
var para =document.createElement("p")
para.innerHTML = input2.value
 var pos=btn2.parentElement
 pos.appendChild(para)
 
 //console.log(pos)
input2.value=""

}
 function deleteblog(event) {

    let section =event.target.parentElement.parentElement
   // console.log(section)
    section.remove() 
 }

 function like(event) {

    let likep=event.target.parentElement
    console.log(likep.style.color)
    if (likep.style.color) {
        likep.setAttribute("class",NaN)
    }else {
        likep.setAttribute("class","blue")

    }
    console.log(likep)
    
 }


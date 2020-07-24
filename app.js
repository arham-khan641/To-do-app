var list = document.getElementById("list");

function addtodo() {

 var todo_item  = document.getElementById("todo_item");
        
  
    var li= document.createElement('li');
    var liText = document.createTextNode(todo_item.value)
     li.appendChild(liText)
      li.setAttribute("class","text")
      li.setAttribute("display","textbox")
     //create delete button
     var delbtn= document.createElement("button")
     var  delText= document.createTextNode("DELETE")
     delbtn.setAttribute("class","btn")
     
     delbtn.setAttribute("onclick","deleteItem(this)")
     delbtn.appendChild(delText)

     //create edit button
     var editbtn = document.createElement("button")
     var editText = document.createTextNode("EDIT")
     editbtn.setAttribute("class","edi")
     editbtn.setAttribute("onclick","editItem(this)")
     
      editbtn.appendChild(editText) 
      li.appendChild(delbtn)
      li.appendChild(editbtn)

      list.appendChild(li)
      
    todo_item.value =""
    
    //  var liText = document.createTextNode("ghous")
    
    // console.log(li)

}
function  deleteItem(e){
   e.parentNode.remove()
}
 function deleteAll(){
   list.innerHTML=""
 }


 function editItem(e){
  
  var val= e.parentNode.firstChild.nodeValue
   var editvalue =prompt("Enter updated value",val)
   e.parentNode.firstChild.nodeValue=editvalue
 }









 
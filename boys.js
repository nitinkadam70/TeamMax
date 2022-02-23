var item = 1;
function prev(){
    var items = document.querySelectorAll("#items>div");
    if(item ==1){
        item = items.length;
    }
    else{
        item--;
    }
    showItem();

}

function next(){
    var items = document.querySelectorAll("#items>div");
    if(item == items.length){
        item = 1;
    }
    else{
        item++;
    }
    showItem();
}
     function showItem(){
         var items = document.querySelectorAll("#items>div");
         for(let i =0;i<items.length;i++){
             if(i+1 == item){
                 items[i].style.display = "block";
                 items[i].addEventListener("click",function(){
                     window.location.href = "extra.html";
                 })
             }
             else{
                 items[i].style.display= "none";
             }
         }
     }

     showItem();
     let offers_div_img = document.querySelector("#offers_div>img");
     offers_div_img.addEventListener("click",function(){
         window.location.href = "extra.html";
     })


     // below must haves heading
     document.querySelector("#must_haves >div:nth-child(1)")
     .addEventListener("click",function(){
               
             window.location.href = "extra.html";
     })
       

     document.querySelector("#must_haves >div:nth-child(2)")
     .addEventListener("click",function(){
               
             window.location.href = "extra.html";
     })
     
      //to map all category to their page
     let categories = ["extra.html","extra.html","extra.html","extra.html","extra.html","extra.html"];
     let categories_div = document.querySelectorAll("#circle_images>div");
     console.log();
        for(let i=0;i<categories.length;i++){
            categories_div[i].addEventListener("click",function(){
                window.location.href = categories[i];
            })


        }

        document.querySelector("#theme_edits >div:nth-child(1)")
     .addEventListener("click",function(){
               
             window.location.href = "extra.html";
     })
       

     document.querySelector("#theme_edits>div:nth-child(2)")
     .addEventListener("click",function(){
               
             window.location.href = "extra.html";
     })

      ///popular category
     document.querySelector("#popular_now > img")
     .addEventListener("click",function(){
         window.location.href = "extra.html";
     })
    

     // gifting zone category
     document.querySelector("#gifting_zone > img")
     .addEventListener("click",function(){
         window.location.href = "extra.html";
     })
     // connect us 
     document.querySelector("#connect_us> img")
     .addEventListener("click",function(){
         window.location.href = "extra.html";
     })

     document.querySelector("#form").addEventListener("submit",formsubmit);

     function formsubmit(e){
         e.preventDefault();
         let input = document.querySelector("#email").value ;
         let text = document.querySelector("#text");
        // console.log(input);
         text.style.display = "block";
         text.style.color = "red";
     }


     
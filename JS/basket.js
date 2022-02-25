var cart = JSON.parse(localStorage.getItem("basket"));
console.log(cart);

displayData(cart);



function displayData(cart){

    document.querySelector("#container").innerHTML="";

    cart.map(function(elem,index,array){

        var div = document.createElement("div");
       
        var innerdiv = document.createElement("div");
        var img = document.createElement("img")
        img.setAttribute("src",elem.image_url);

        var name = document.createElement("p");
        name.innerText = elem.name;

        var price = document.createElement("p");
        price.innerText = elem.price;

        var qty = document.createElement("p");
        qty.innerText="Qty-" + elem.qty;
     


        var btn = document.createElement("button");
        btn.innerHTML="Remove";
        btn.setAttribute("id","dec_btn");
       // btn.style.background="red"

        btn.addEventListener("click", function(){
            decreaseQty(elem,index);
        })

        var btn2 = document.createElement("button");
        btn2.innerHTML="Add +1";
        btn2.setAttribute("id","inc_btn");
       // btn2.style.background="green";
       // btn2.style.borderBlockColor="black";
        //btn2.style.color="white";

        btn2.addEventListener("click", function(){
            increaseQty(index);
        })
  
        innerdiv.append(price,qty,btn,btn2);
        div.append(img,name,innerdiv);
        document.querySelector("#container").append(div);
    })

}

function showTotal(){
    var total = cart.reduce(function(acc,elem){
        return acc + (elem.price*elem.qty);
    },0) 
    document.querySelector("h2+h2").innerText="₹ "+total;
    discountedPrice(total);
}

showTotal();

function increaseQty(index){
    console.log(index)
    cart[index].qty++;
    console.log(cart)
    localStorage.setItem("basket",JSON.stringify(cart));
    displayData(cart);
    showTotal();
}

function decreaseQty(elem,index){
    console.log(index)
    if(elem.qty>0){ cart[index].qty--;}
    //if(elem.qty==0){var x =JSON.parse(localStorage.removeItem(cart)); x.splice(elem)}
    if(elem.qty == 0){
       // console.log("hii",cart);
        for(let i =0 ;i<cart.length;i++){
            if(i == index){
                console.log(elem);
                cart.splice(i,1);
               
                break;
            }
        }
        var totalItems = document.getElementById("totalItems");
        totalItems.innerText="Total Items👉" + cart.length;
    }
    console.log(cart)

    localStorage.setItem("basket",JSON.stringify(cart));

    displayData(cart);
    showTotal();
}

var totalItems = document.getElementById("totalItems");
totalItems.innerText="Total Items👉" + cart.length;


function discountedPrice(total){

    document.getElementById("apply").addEventListener("click", function(){
    
        var promoCode = document.getElementById("code").value;

        if(Number(total)>=1999 && promoCode=="MAX500"){
            document.querySelector("h2+h2+h2").innerText="Discounted Price ₹ "+Number(total-500);
            alert("Congratulations you are elidible for 500 discount");
  
        }
        else if(Number(total)>=999 && promoCode=="NEW200"){
            document.querySelector("h2+h2+h2").innerText="Discounted Price ₹ "+Number(total-200);
            alert("Congratulations you are elidible for 200 discount");
        }
    })
    displayData(cart);
}



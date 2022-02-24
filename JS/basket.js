var cart = JSON.parse(localStorage.getItem("Cart"));
//console.log(cart);

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

        var strikedoffprice = document.createElement("p");
        strikedoffprice.innerText = elem.strikedoffprice;

        var qty = document.createElement("p");
        qty.innerText="Qty-" + elem.qty;
     
        

        var btn = document.createElement("button");
        btn.innerHTML="Remove";
        btn.style.background="red"

        btn.addEventListener("click", function(){
            decreaseQty(elem,index);
        })

        var btn2 = document.createElement("button");
        btn2.innerHTML="Add +1";
        btn2.style.background="green";
        btn2.style.borderBlockColor="black";
        btn2.style.color="white";

        btn2.addEventListener("click", function(){
            increaseQty(index);
        })


        innerdiv.append(price,strikedoffprice,btn,btn2);
        div.append(qty,img,name,innerdiv);
        document.querySelector("#container").append(div);

    })

}

function showTotal(){
    var total = cart.reduce(function(acc,elem){
        return acc + (elem.price*elem.qty);
    },0) 
    
    document.querySelector("h2+h2").innerText="₹ "+total;
}

showTotal();

function increaseQty(index){
    console.log(index)
    cart[index].qty++;
    console.log(cart)
    localStorage.setItem("cartItem",JSON.stringify(cart));
    displayData(cart);
    showTotal();
}

function decreaseQty(elem,index){
    console.log(index)
    if(elem.qty>0){ cart[index].qty--;}
    if(elem.qty==0){var x =JSON.parse(localStorage.removeItem(cart)); x.splice(elem)}
    console.log(cart)
    localStorage.setItem("cartItem",JSON.stringify(cart));
    displayData(cart);
    showTotal();
}

var totalItems = document.getElementById("totalItems");
totalItems.innerText="Total Items👉" + cart.length;






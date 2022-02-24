let boysData_arr = JSON.parse(localStorage.getItem("boysData"))||[];


console.log(boysData_arr)
boysData_arr.map(function(elem,index){
    let main_div = document.createElement("div");
    let img = document.createElement("img");
    img.setAttribute("src",elem.image_url)
    let price = document.createElement("h4");
    price.innerText = "$"+ elem.price
    let name = document.createElement("p");
    name.innerText = elem.name;

    main_div.append(img,price,name);
    document.querySelector("#product_box").append(main_div);
})
function loadProduct(){
    var http = new XMLHttpRequest();
    var url = "http://localhost:3000/products/get/";
    var productID = localStorage.getItem("productID");
    http.open("GET", url + productID, true);
    http.send();
    http.onload = function(){
        var data = JSON.parse(this.responseText);

        document.getElementById("name").value = data.product[0].name;
        document.getElementById("detail").value = data.product[0].detail;
        document.getElementById("price").value = data.product[0].price;
    }
}

function save(){
    var http = new XMLHttpRequest();
    var url = "http://localhost:3000/products/update/";
    var productID = localStorage.getItem("productID");
    http.open("PUT", url + productID, true);
    http.setRequestHeader('Content-type','application/json; charset=utf-8');

    var product = {
        name: document.getElementById("name").value,
        detail: document.getElementById("detail").value,
        price: document.getElementById("price").value
    };

    http.onload = function(){
        if(http.readyState == 4 && http.status == 200){
            alert("Update successfully");
            window.location.href = "../../../FE/html/managementProduct.html";
        }else{
            alert("Update failed");
            window.location.href = "../../../FE/html/managementProduct.html";
        }
    }

    http.send(JSON.stringify(product));
}

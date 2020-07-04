function add(){
    var http = new XMLHttpRequest();
    var url = "http://localhost:3000/products/create";
    http.open("POST", url, true);
    http.setRequestHeader('Content-type','application/json; charset=utf-8');

    var product = {
        name: document.getElementById("name").value,
        detail: document.getElementById("detail").value,
        price: document.getElementById("price").value
    };

    http.onload = function(){
        if(this.readyState == 4 && this.status == 200){
            alert("Add successfully");
            window.location.href = "../../../FE/html/managementProduct.html";
        }else{
            alert("Add failed");
            window.location.href = "../../html/addProduct.html";
        }
    }

    http.send(JSON.stringify(product));
}

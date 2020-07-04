function tableProduct(){
    var http = new XMLHttpRequest();
    var url = "http://localhost:3000/products/get";
    http.open("GET", url, true);
    http.send();
    http.onload = function(){
        var data = JSON.parse(this.responseText);

        var products = "";
        var no = 1;
        for(var i = 0; i < data.product.length; i++){
            
            products += 
            '<tr>' + 
                '<th scope="row">' + no + '</th>' +
                '<td>' + data.product[i].name + '</td>' +
                '<td>' + data.product[i].price + '</td>' +
                '<td>' + data.product[i].detail + '</td>' +
                '<td> <button type="submit" class="btn btn-primary" id="' + data.product[i]._id + '" onclick="editProduct(this.id)"> Edit </button>' +
                '<button type="submit" class="btn btn-primary" id="' + data.product[i]._id + '" onclick="deleteProduct(this.id)"> Delete </button>' + 
                '</td>' +
            '</tr>';

            no++;
        }

        $(document).ready(function () {
            $(products).appendTo('#tableProduct');
        });
    }
}

function deleteProduct(id){
    var http = new XMLHttpRequest();
    var url = "http://localhost:3000/products/delete/";

    http.open("DELETE", url + id, true);
    
    http.onload = function(){
        if(http.readyState = 4 && http.status == "200"){
            alert("Deleted successfully");
            window.location.href = "../html/managementProduct.html";
        }else{
            alert("Delete failed");
        }
    }

    http.send();
}


function editProduct(id){
    localStorage.setItem("productID", id);
    window.location = "../../../FE/html/updateProduct.html";
    return false;
}

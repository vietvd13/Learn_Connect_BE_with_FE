function send(){
    var http = new XMLHttpRequest();
    var url = "http://localhost:3000/products/get";
    http.open("GET", url, true);
    http.send();
    http.onload = function(){
        var data = JSON.parse(this.responseText);

        var product = "";
        
        for(var i = 0; i < data.product.length; i++){
            product += 
            '<div class="col-md-4 Product">' +
            '<div class="card mb">' +
            '<img class="card-img-top" src="../images/imgProduct.jpg" alt="Card image cap">' +
            '<div class="card-body mb">' +
            '<h5 class="card-title">' + data.product[i].name + '</h5>' +
            '<p class="card-text">' + data.product[i].detail + '</p>' +
            '<h5 class="card-title" id="price">' + data.product[i].price + '</h5>' +
            '<button type="button" class="btn btn-primary mb">Show Detail</button>' +
            '</div>' +
            '</div>' + 
            '</div>';
        }

        $(document).ready(function() {
            $(product).appendTo('#productList');
        });
    }
}

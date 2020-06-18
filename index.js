//STICKY HEADER

window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

//QUANTITY SPINNER
    $(document).on('click', '.number-spinner button', function () {    
  var btn = $(this),
    oldValue = btn.closest('.number-spinner').find('input').val().trim(),
    newVal = 0;
  
  if (btn.attr('data-dir') == 'up') {
    newVal = parseInt(oldValue) + 1;
  } else {
    if (oldValue > 1) {
      newVal = parseInt(oldValue) - 1;
    } else {
      newVal = 1;
    }
  }
  btn.closest('.number-spinner').find('input').val(newVal);
});

//OPENNING MODAL
 function openModal(){
  document.getElementById("myModal").style.display="block";
}
//pushing to cart
var bulkorder = {items: []};
var cartitems = '';
  var count = 0;

function addtoCart(){
   var itemid = $(".modal-body h2#title").text(); 
    var itemlikes = $(".modal-body p#likes").text();     
    var itemprice = $(".modal-body h1#price").text(); 
    var itemdiscount = $(".modal-body p#disc").text();
    var itemcount = $(".modal-body input#quantity").val();     
    var itemimg = $(".modal-body img#prodImage").attr("src"); 
    
    bulkorder.items.push(
      {imgsrc:itemimg ,id: itemid, likes: itemlikes, price: itemprice, discount: itemdiscount,count:itemcount});     
      cartitems = '';     
      for (var i = 0; i < Object.keys( bulkorder.items ).length; i++ ) {
        cartitems +='<div class="row">' + '<div class="col-md-4">'+'<img style="width:100px;" src='+bulkorder.items[i].imgsrc+'>'+'</div>'+'<div class="col-md-8">'+
        '<div>'+'<h5>'+bulkorder.items[i].id+'</h5>'+ 
        '<p style="font-weight: bold;"">'+bulkorder.items[i].price+'</p>'+ '</div>'+'</div>'+'</div>'+'<hr>';}
        console.log(cartitems);  
        count++;
        document.getElementById('temp').style.display = "none";

        document.getElementById('badge').innerHTML += '<p>'+count+'</p>';

        sessionStorage.setItem("bulkorder", bulkorder);
        sessionStorage.setItem("cartitems", cartitems);
}



$(document).ready(function() {

//putting items inside cart popover 
$('[data-toggle="popover"]').popover({
  placement : 'top',         
  html : true,         
  title : 'Shopping Cart <a href="#" class="close" data-dismiss="alert">&times;</a>',         
  content : function() { var result = $();           
  result = result.add('<div class="media"><a href="#" class="pull-left"></a><div class="media-body">'+sessionStorage.getItem("cartitems")+'</div></div>'+
   '<div class="row">'+ '<div class="col-md-6">'+ '<a id="viewcart" href="cart.html" class="btn btn-primary viewCart">VIEW CART</a>'+ '</div>'+ 
  '<div class="col-md-6">'+ '<a href="checkout.html" class="btn btn-primary" style="color: white;">CHECKOUT</a>'+ '</div>'+ '</div>');

          //redirect                    
          return result;}
});

var checkboxes = document.getElementsByTagName('input');

for (var i=0; i<checkboxes.length; i++)  {
  if (checkboxes[i].type == 'checkbox')   {
    checkboxes[i].checked = false;
  }
}
});

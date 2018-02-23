var arrDataProductsSpecial = [LL01, LL02, LL03, LL04, LL05, LL06, LL07, LL08,LL09, LL10, LL11, LL12, LL13, LL14, LL15, LL16,LL17,LL18,LL19,LL20,LL21];
var lengthDataSpecial=arrDataProductsSpecial.length;

$(document).ready(function () {
    //products special    
    $('#content-products').append(getElementProduct(arrDataProductsSpecial));
    //handle click shopping cart
    $('div.shopping-cart-div').click(function(){
        var _this =this;
          var lengthArrProductInCart = arrProductsInCart.length;
          // console.log(lengthArrProductInCart);
          var idProduct= $(this).attr('data-id-product');
          // console.log(idProduct);
          for (var i=0;i<lengthDataSpecial;i++){
              if(arrDataProductsSpecial[i].id == idProduct){
                  arrProductsInCart.push(arrDataProductsSpecial[i]);
              }
          }
          $(_this).css('pointer-events', 'none');
          $(_this).html("Đã thêm vào giỏ hàng");
          numberCart++;
          console.log(arrProductsInCart);
          $('sub.menu-cart').html(numberCart);
          $('sub.menu-cart').attr('data-number-product',numberCart);
          $('span.notification-number').html(numberCart+" sản phẩm");
          $('a.cart-scrolled').addClass('show-cart-bottom');
         })           
    
    $(window).scroll(function () {
        var viewportWidth = $("body").innerWidth();
        var viewportHeight = $("body").innerHeight();
        var c = document.body.clientHeight;
        var b = $(window).scrollTop();
        var a = $("html").scrollTop();

        // $('.test').html(a);
        showCartBottom();

    })

    
//  handle when click preview

$('span.img-product-quick-view').click(function(){
    var idProduct = $(this).attr('data-id-product');
    var product;  
    loadDataToQuickView(idProduct,product,arrDataProductsSpecial);
})

// handle close prevew
$('i.preview-product,div.wrap-preview-product').click(function(){
    $('div#preview-product').removeClass('preview-product-show');
    
})

// handle click button buy-now
$('a.buy-now').click(function(){
    var idProductBuyNow =  $(this).attr('data-id-product');
    var isValid = true;
    // var lengthArrProductInCart=arrProductsInCart.length;
    for(var i = 0; i<lengthDataSpecial;i++){
        if(arrProductsInCart[i].id == idProductBuyNow){
            isValid=false;
        }
    }
    if (isValid){
        for(var i =0;i<lengthArrDataProductsSpecial;i++){
            if(arrDataBestSell[i].id == idProductBuyNow){
                arrProductsInCart.push(arrDataBestSell[i]);
                numberCart++;
                addCart();
            }
            if(arrDataProductsSpecial[i].id ==idProductBuyNow){
                arrProductsInCart.push(arrDataProductsSpecial[i]);
                numberCart++;
                addCart();
            }
            
        }
    }    
    
})


    $(window).on('beforeunload', function () {
        $(window).scrollTop(0);
    });
})
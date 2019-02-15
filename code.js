<script>
$(function() {
	var productId = "1802352"; //TODO: Highlighted your product ID goes here
	var shippingId = "1806579"; // Shipping Wali Product ki ID
  var somethingIsSelected =0;
  $('select.qty_select').on("change", function () {
    if($(this).val()>0){
      toggleOnPid($(this).attr("data-product-id"));
	somethingIsSelected =1;
    }
	});
  $('select[data-product-id="'+shippingId+'"]').val('1'); 
  $('[data-de-type="orpo"] select[data-product-id="'+shippingId+'"]').parents('[data-cf-product-template="true"]').hide();
	var head = "Best Seller!"; //TODO: change this text to whatever you like
	$('.elOrderProductOptinProductName select[data-product-id="'+productId+'"]').siblings('label').html('<span class="best-seller-head">'+head+'</span><br />'+$('.elOrderProductOptinProductName select[data-product-id="'+productId+'"]').siblings('label').html());
	$('.elOrderProductOptinProductName select[data-product-id="'+productId+'"]').closest('.elOrderProductOptinProducts').addClass('best-seller');
var currPid = $('input[type="radio"][name="purchase[product_id]"]:checked').first().val();
toggleOnPid(productId); //Add Product Picture to show first
$('.elOrderProductOptions .elOrderProductOptinProducts').mouseover(function () {
var pid = $(this).children('.elOrderProductOptinProductName').children('select').attr("data-product-id");
  if(somethingIsSelected ==0){
  toggleOnPid(pid);
  }
});
  
function toggleOnPid(pid) {
$('[data-title*="cf-product-toggle-"]').toggle(false);
$('[data-title*="cf-product-toggle-'+pid+'"]').toggle(true);
}
});
</script>

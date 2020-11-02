

$(document).ready(function () {

    function calculateCost() {
        // get input
        var qtyOne = $("#qty-product-one").val() || 0;
        var qtyTwo = $("#qty-product-two").val() || 0;

        var priceOne = qtyOne * 39.99;
        var priceTwo = qtyTwo * 14.99;

        var grandTotal = priceOne + priceTwo;

        // output values;

        $("#product-one-total").text(`$${priceOne.toFixed(2)}`);
        $("#product-two-total").text(`$${priceTwo.toFixed(2)}`);
        $("#grand-total").text(`$${grandTotal.toFixed(2)}`);
    }

    $('#qty-product-one').change(function () {
        calculateCost();
    });

    $('#qty-product-two').change(function () {
        calculateCost();
    });
})

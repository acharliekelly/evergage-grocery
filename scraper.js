


$(document).ready(function() {
    $('input[value="Favorite"]').on('click', function(ev){
        // change button color, just to show something happened
        $(ev.target).css('background-color','#090') 

        // get price
        const price = $('.product-price').text()

        // find calories
        const calories = $('td:contains("calories")').siblings('td[data-val]').text();

        console.log('Price: ' + price + ', Calories: ' + calories);
    });
});

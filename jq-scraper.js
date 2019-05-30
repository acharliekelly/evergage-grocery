
/* Does not meet requirements in that it does not use GraphQL.
 * However, it otherwise does the things that Part 2 was supposed to do.
 *
 */
$(function() {
    $('input[value="Favorite"]').on('click', function(ev){
        // change button color, just to show something happened
        $(ev.target).css('background-color','#090')

        // get price
        const price = $('.product-price').text()

        // find calories
        const calories = $('td:contains("calories")').siblings('td[data-val]').text();

        // find unit
        const unit = $('td:contains("unit")').siblings('td').text();

        console.log(`Price: ${price}, Calories: ${calories}` +
          (unit === 'oz' || unit === 'lbs' || unit === 'g') ? `, Unit: ${unit}` : '');
    });
});

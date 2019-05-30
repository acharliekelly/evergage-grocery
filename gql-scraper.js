require('isomorphic-fetch');

/* OK, this doesn't actually work, but at
 * least it uses GraphQL. Just dumps all the
 * data when you hit the Favorite button.
 */

const getProducts = () => {
  const gqry = 'allProductsJson { nodes { id price attributes { calories unit }}}';
  fetch('/graphql', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query: gqry })
  })
  .then(res => res.json())
  .then(res => console.log(res.data));
}

$(function() {
  $('input[value="Favorite"]').on('click', getProducts);
});

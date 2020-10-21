const $form = document.getElementById('form')
const $output = document.getElementById('output')

const $form = document.getElementById('form')
const $output = document.getElementById('output')

$form.addEventListener('submit', function (e) {
  e.preventDefault()

  const values = []

  // getting text boxes, textarea and select box
  for (const $element of $form.elements) {
    if ($element.name) {
      if ($element.name !== 'customer' && $element.name !== 'products') {
        values.push(`${$element.name}: ${$element.value}`)
      }
    }
  }

  // getting radio buttons
  values.push(`customer: ${$form.elements.customer.value}`)

  const products = []
  // getting checkboxes
  for (const $element of $form.elements.products) {
    if ($element.checked) {
      products.push($element.value)
    }
  }

  values.push(`products: ${products.join(', ')}`)

  $output.innerHTML = values.join('<br>')
})

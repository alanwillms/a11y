$('#screen-modal .modal-close').click(function () {
  $('#screen-modal').toggleClass('is-active')
})

$('#screen-modal .modal-background').click(function () {
  $('#screen-modal').toggleClass('is-active')
})

$('#screen-modal .modal-box').click(function (event) {
  event.stopPropagation()
})

$('#screens a').each(function (index, element) {
  var $anchor = $(element)
  var $image = $anchor.find('img')
  $anchor.click(function (event) {
    // Open in a new window
    if ($(window).width() <= 767) {
      return window.open($image.attr('src'), '_blank')
    }

    // Open within modal
    event.preventDefault()
    $('#screen-modal').toggleClass('is-active')
    $('#screen-modal .box').html($image.clone())
  })
});

window.onload = function() {

  let zoom = () => {
    let f = window.innerWidth > 600 ? 0.000638 : 0.000594;
    let scl = f * window.innerWidth;
    $('iframe').css({
      '-o-transform': `scale(${scl}`,
      '-webkit-transform': `scale(${scl}`,
      '-moz-transform': `scale(${scl}`,
      '-ms-zoom': scl,
      'margin-bottom': `-${(1-scl) * 900}px`
    });
  }
  zoom();
  $( window ).resize(zoom);

  let monthBtns = $('.month-btn');
  monthBtns.each( function(index) {
    $(this).on('click', (e) => {
      e.preventDefault();
      $('body').removeClass('info-active');
      $('.work-active').removeClass('work-active');
      $(`#${e.target.innerText}`).addClass('work-active');
      let elem = document.getElementById(`${e.target.innerText}`);
      if($('#theiframe').attr('src') !== elem.dataset.src) $('#theiframe').attr('src', elem.dataset.src);
    });
  });

  $('.info-btn').on('click', (e) => {
    e.preventDefault();
    $('body').addClass('info-active');
    $('#theiframe').attr('src', '');
  });


}

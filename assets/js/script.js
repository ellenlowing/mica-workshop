window.onload = function() {

  let zoom = () => {
    if(window.innerWidth < 1440) {
      let f = window.innerWidth > 600 ? 0.000638 : 0.000594;
      let scl = f * window.innerWidth;
      $('iframe').css({
        '-o-transform': `scale(${scl}`,
        '-webkit-transform': `scale(${scl}`,
        '-moz-transform': `scale(${scl}`,
        '-ms-zoom': `${scl}`,
        'margin-bottom': `-${(1-scl) * 900}px`
      });
    } else {
      let f = window.innerWidth / 1440 * 0.92;
      $('iframe').css({
        '-o-transform': `scale(${f})`,
        '-webkit-transform': `scale(${f})`,
        '-moz-transform': `scale(${f})`,
        '-ms-zoom': `${f}`,
        'margin-bottom': `${(f-1) * 900}px`
      });
    }
  }
  zoom();
  $( window ).resize(zoom);

  let monthBtns = $('.month-btn');
  monthBtns.each( function(index) {
    $(this).on('click', (e) => {
      e.preventDefault();
      $('body').removeClass('info-active');
      $('.work-active').removeClass('work-active');
      $('.btn-active').removeClass('btn-active');
      $(`#${e.target.innerText}`).addClass('work-active');
      $(this).addClass('btn-active');
      let elem = document.getElementById(`${e.target.innerText}`);
      if($('#theiframe').attr('src') !== elem.dataset.src) $('#theiframe').attr('src', elem.dataset.src);
    });
  });

  $('.info-btn').on('click', (e) => {
    e.preventDefault();
    $('.btn-active').removeClass('btn-active');
    $('body').addClass('info-active');
    $('#theiframe').attr('src', '');
  });


}

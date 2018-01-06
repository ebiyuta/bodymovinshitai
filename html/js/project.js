
$(function () {

  $('html').on('click',function (e) {

    var areaOffset = $('#bodyMovin').offset();
    var cName = Math.floor( Math.random() * 10 );
    var mg = Math.floor( Math.random() * 4 );
    var tn = ((e.pageY)-(areaOffset.top));
    var ln = ((e.pageX)-(areaOffset.left));

    //jsonファイル指定
    var path = new Array();
    path[0] = "./json/data_triangle.json"
    path[1] = "./json/data_eye.json"
    path[2] = "./json/data_square.json"
    path[3] = "./json/data_circle.json"



    //div生成
    var d = document.createElement('div')
    $('#bodyMovin').append(d);


    var animData = {
      wrapper: d,
      animType: 'svg',
      loop: false,
      prerender: true,
      autoplay: false,
      path: path[mg]
    };

    var anim = bodymovin.loadAnimation(animData);

    $(d).addClass('num' + cName).css({
      top: tn,
      left: ln
    });

    anim.play();
    anim.addEventListener('complete',function () {
      $(d).remove();
    })

  });


});
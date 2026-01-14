$(function(){
  // 페이지 구성
  // 초기 설정
  $('#container section:not('+$('.submenu li a.connect.selected').attr('href')+')').hide();
  $('.submenu li a.connect').click(function(){
    // 메뉴 => 1. 모든 메뉴 클래스 제거 + 2. 클릭한 메뉴에만 클래스 적용
    $('.submenu li a.connect').removeClass('selected');
    $(this).addClass('selectes');
    // 연결된 서브 메뉴를 클릭시 menu_wrpa 닫기
    $('#menu_wrap').css({right:'-60%'});

    // 내용 => 모든 내용 숨김 +  클릭한 메뉴의 내용만 보임
    $('#container section').hide();
    $($(this).attr('href')).show();
  });

  // 메뉴 표시
  $('.menu_icon').click(function(){
    $('#menu_wrap').animate({right:0},400);
  });

  // 메뉴 숨김
  $('#menu_wrap').mouseleave(function(){
    $('#menu_wrap').animate({right:'-60%'},400);
  });
  $('.menu_close').click(function(){
    $('#menu_wrap').animate({right:'-60%'},400);
  });

    // 메뉴 동작
    $('#gnb > ul > li').click(function(){
      // 1단 메뉴(on 클래스)
      $('#gnb > ul > li > a').removeClass('on');
      $(this).children('a').addClass('on');
      // 2단 메뉴 등장 (아코디언)
      if( $(this).children('ul').css('display') == 'none' ){
        $('#gnb > ul > li > ul').slideUp();
      }
      $(this).children('ul').slideDown();
    });

    //top_btn
    // 초기설정
    $('.top_btn').hide();
    // 세로 스크롤바 숨김
    //이벤트 = > scroll 이벤트 대상 변경(body)
    $('body').scroll(function(){
      // 스크롤 높이 + 화면 높이
      let sc_num = $(this).scrollTop();
      let h_num =$(this).height();
      /* console.log(sc_num, h_num); */
      if(sc_num > h_num/2){
        $('.top_btn').fadeIn();
      }else{
        $('.top_btn').fadeOut();
      }
    });
});
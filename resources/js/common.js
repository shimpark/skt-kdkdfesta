$(document).ready(function () {
  layerPopupHandler();
  popupSlider();
  popupToggleMenu();
  shareHandler();
});

// 팝업 핸들러
function layerPopupHandler() {
  var layerPopup = $('.layer-popup');
  var popupContainer = layerPopup.find('.popup-container');
  var closeBtn = layerPopup.find('.btn-close');
  var $body = $('body');

  // 팝업닫기
  closeBtn.on('click', function () {
    layerPopup.removeClass('open');
    $body.removeClass('scroll-disable');
    popupToastBannerClear();
  });

  // dim 클릭시 팝업닫기
  layerPopup.on('click', function (e) {
    if (!$(e.target).closest(popupContainer).length) {
      layerPopup.removeClass('open');
      $body.removeClass('scroll-disable');
      popupToastBannerClear();
    }
  });
}

// 팝업 열기
function openLayerPopup(popupId, popupNumber) {
  var $body = $('body');
  var popupEl = $('#' + popupId);
  $('.layer-popup').removeClass('open');
  popupEl.addClass('open');
  popupToastBanner();
  $body.addClass('scroll-disable');
  resizeSlider();
  if (popupNumber !== undefined) {
    $('.popup-slider-container').slick('slickGoTo', popupNumber);
  }
}

// 모든 팝업닫기
function closeAllLayerPopup() {
  var $body = $('body');
  $('.layer-popup').removeClass('open');
  $body.removeClass('scroll-disable');
}

// 특정 팝업 닫기함수
function closeLayerPopup(popupId, contentId) {
  var $body = $('body');
  var popupEl = $('#' + popupId);
  popupEl.removeClass('open');
  $body.removeClass('scroll-disable');
  scorllMoveTo(contentId);
  popupToastBannerClear();
}

// 스크롤 이동 함수
function scorllMoveTo(id) {
  if (id) {
    var offset = $('#' + id).offset().top;
    $('html, body').animate({ scrollTop: offset }, 300);
  }
}

// 팝업 슬라이드
function popupSlider() {
  var slider = $('.popup-slider-container');

  slider.slick({
    infinite: true,
    slidesToShow: 1,
    dots: false,
    arrows: false,
    adaptiveHeight: true,
  });
}

// 슬라이드 리사이즈
function resizeSlider() {
  $('.popup-slider-container').slick('setPosition');
}

// 팝업 토글메뉴
function popupToggleMenu() {
  var btn = $('.layer-popup .btn-toggle');
  btn.on('click', function () {
    var $this = $(this);
    $this.parents('.check-list').toggleClass('active').siblings('.check-list').removeClass('active');
    resizeSlider();
  });
}
var timeHandler;
// 팝업 토스트배너 닫기
function popupToastBanner() {
  var banner = $('.notification-text');
  timeHandler = setTimeout(function () {
    banner.addClass('hide');
    clearTimeout(timeHandler);
  }, 3000);
}

// 팝업 토스트배너 열기
function popupToastBannerClear() {
  var banner = $('.notification-text');
  clearTimeout(timeHandler);
  banner.removeClass('hide');
}

// 신청하기 버튼 핸들러
function applyHandler(contentId) {
 // 2021-03-29 수정 (문구수정)
  alert('관심 있는 혜택을 선택해 주세요');
  scorllMoveTo(contentId);
}

// 공유하기 버튼 핸들러
function shareHandler() {
  var shareBtn = $('.bottom-fix-menu .menu-list.share');
  var shareMenu = $('.floating-share-menu');
  shareBtn.on('click', function () {
    shareMenu.toggle().toggleClass('show');
  });
  // $('body').on('click', function (e) {
  //   if (!$(e.target).closest(shareMenu).length && shareMenu.hasClass('show') && !$(e.target).closest(shareBtn).length) {
  //     shareMenu.hide().removeClass('show');
  //   }
  // });
}

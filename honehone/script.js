$(function(){

  $('.ajaxzip3').on('click', function(){
    AjaxZip3.zip2addr('zip','','pref','addr1','addr2', 'addr3');

    //成功時に実行する処理
    AjaxZip3.onSuccess = function() {
        $('.addr3').focus();
    };
    
    //失敗時に実行する処理
    AjaxZip3.onFailure = function() {
        alert('郵便番号に該当する住所が見つかりません');
    };
    
    return false;
  });
  
  
  ////////資料請求ボタン///////
  var btn = $('.billing-btn');
  var $arrival = $('.arrival').offset().top; 
  
  btn.click(function(){
  
  $('body,html').animate({scrollTop:$arrival},700);
  
  });




});
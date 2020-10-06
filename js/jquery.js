$(document).ready(function(){
    $('.next').on('click', function(){
      var currentImg = $('.active');
      var nextImg = currentImg.next();
  
      if(nextImg.length){
        currentImg.removeClass('active').css('z-index', -10);
        nextImg.addClass('active fad').css('z-index', 10)
      }
    });
  
    $('.prev').on('click', function(){
      var currentImg = $('.active');
      var prevImg = currentImg.prev();
  
      if(prevImg.length){
        currentImg.removeClass('active ').css('z-index', -10);
        prevImg.addClass('active').css('z-index', 10);
      }
    });
  });
  
   
    // var currentImg=$('.active')
    // $(currentImg).show();
    // var nextImg=currentImg.next();
    // if(nextImg.length){
    //     currentImg.removeClass('active').css("z-index",-10)
    //     nextImg=currentImg.addClass('active img-fluid').css('z-index',10);
    // var currentImg=$('.active')
    // var prevImg=currentImg.prev();
    // if(prevImg.length){
    //     currentImg.removeClass('active').css("z-index",-10)
    //     prevImg=currentImg.addClass('active img-fluid').css('z-index',10);
    // //
    

    
    
         

        
    




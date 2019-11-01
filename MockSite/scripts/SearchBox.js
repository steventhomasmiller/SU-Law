
  var toggleState = true;

  $('body').on('click', '#searchToggle', function(e) {
  //alert();

    var bs1 = "8.33333333%"
    var bs4 = "35%"
    var bs5 = "41.6666667%"
    var bs6 = "50%"
    var bs7 = "58.3333333%"
    var bs11 = "91.6666667%"

  if($(window).width() >= 8){
    var selector = $(this).data('selector');
    $(selector).toggleClass('show').find('.search-input').focus();
    //$(".search-box").slideToggle(400);
    
    $(".search-box").animate({
      opacity: 1,
      //width: "+=50",
      width: "toggle",
      direction: 'right'
    }, 1000); //speed of search bar load
    
    
    
    if (toggleState){
      //console.log("if" + toggleState);
      $("#searchIcon").addClass('fa-times').removeClass('fa-search-plus');
      //$("#globalHeaderResourcesLinksWrapper").removeClass("col-lg-11 col-lg-pull-1");
      //$("#globalHeaderResourcesLinksWrapper").addClass("col-lg-7 col-lg-pull-5");
      $("#globalHeaderResourcesLinksWrapper").animate({ right: bs5 }, 500).animate({width: bs7 }, 600);

      //$("#googleSearchBox").removeClass("col-lg-1 col-lg-push-11");
      //$("#googleSearchBox").addClass("col-lg-5 col-lg-push-7");
      $("#googleSearchBox").delay(1500).animate({ width: bs5 }, 100).animate({left: bs7 }, 1000);
      toggleState=false;
    }
    else if(!toggleState){
      //console.log("else" + toggleState);
      $("#googleSearchBox").hide();
      $("#searchIcon").addClass('fa-search-plus').removeClass('fa-times'); 
      //$("#globalHeaderResourcesLinksWrapper").addClass("col-lg-11 col-lg-pull-1");
      //$("#globalHeaderResourcesLinksWrapper").removeClass("col-lg-7 col-lg-pull-5");
      $("#globalHeaderResourcesLinksWrapper").delay(0).animate({ width: bs7 }, 300).animate({ right: bs1 }, 100);      
      //$("#googleSearchBox").addClass("col-lg-1 col-lg-push-11");
      //$("#googleSearchBox").removeClass("col-lg-5 col-lg-push-7");
      $("#googleSearchBox").delay(0).animate({ width: bs1 }, 100).animate({ left: bs11 }, 100);
      $("#googleSearchBox").show();
      toggleState=true;
    }
    

    $(this).toggleClass('active');

    e.preventDefault();
  }

});












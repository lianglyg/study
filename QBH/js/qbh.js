$(document).ready(function() {
  var flag=false;
  var flag1=false;
  var flag2=false;
  $('#fullpage').fullpage({
    sectionsColor: ['#fadd67', '#84a2d4', '#ef674d', '#ffeedd', '#d04759', '#84d9ed', '#4fdded', '#fff'],
    navigation: true,
    afterLoad: function (anchorLink, index){
      // 第一屏
      if(index == 1) {
        $(".down").fadeIn();
      }
      // 第二屏
      if(index==2 && flag==false){
        $(".qbh-list-computer .qbh-list-search").show().animate({
          "right":370
        },1000,function(){
          $(".qbh-list-search .qbh-list-search-font").animate({
            "opacity":1
          },1000,function(){
            $(".qbh-list-computer .qbh-list-search").hide();
            $(".qbh-list-computer .qbh-list-search-finish").show().animate({
              "bottom": 449,
              "right": 250,
              "height": 30
            },1000,function(){
              flag=true;
            });
            $(".qbh-list-computer .qbh-list-sofas").show().animate({
              "height":218
            },1000);
            $(".qbh-list .qbh-list-wordb").animate({
              "opacity": 1
            },function(){   
                $(".down").fadeIn();
            })
          })
        })
      }
      if(index==8){
        $(".down").fadeOut();
        $(document).mousemove(function(event){
          var mX=event.pageX-40;
          var mY=event.pageY+10;
          if(mY<=230){
            mY=230
          }
          $(".qbh-shopping  .qbh-shopping-hands").css({
            left:mX,
            top:mY 
          })
          $(".qbh-shopping  .qbh-shopping-start-shopping").mouseenter(function(){
            $(".qbh-shopping .qhb-shopping-dong").show();
          })
          $(".qbh-shopping .qhb-shopping-dong").mouseleave(function(){
            $(".qbh-shopping .qhb-shopping-dong").hide();
          })
        })
      }
    },
    onLeave: function(index,nextIndex,direction){
      $(".down").fadeOut();
      var wHeight=$(window).height();
      // 第二屏滚动到第三屏
      if(index==2 && nextIndex==3 && flag==true){
        $(".qbh-list-computer .qbh-list-sofa-pic").show().animate({
          "bottom": -(wHeight - 250),
          "right": 518,
          "width": 204
        },2000,function(){
          $(".qbh-buy .qbh-buy-choose-end").animate({
            "opacity": 1
          })
          $(".qbh-buy .qbh-buy-add-cart-end").animate({
            "opacity": 1
          },function(){
            $(".down").fadeIn();
          })
        })
      }
      // 第三屏到第四屏
      if(index==3 && nextIndex==4 && flag1==false){
        $(".qbh-list-computer .qbh-list-sofa-pic").hide();
        $(".qbh-buy .qbh-buy-rotate-sofa").show().animate({
          "bottom":-((wHeight - 250)+50),
          "right":260
        },1000,function(){
          flag1=true;
          $(".qbh-buy .qbh-buy-rotate-sofa").hide();
          $(".qbh-list-computer .qbh-list-sofa-pic").show();
          $(".qbh-info .qbh-info-cart-box").animate({
            "left":2000
          },2000,function(){
            $(".qbh-info .qbh-info-address").animate({
              "opacity":1
            },1000,function(){
              $(".qbh-info .qbh-info-wordb").animate({
                "opacity": 1
              })
              $(".qbh-info .qbh-info-address-font").animate({
                "opacity": 1
              },function(){
                $(".down").fadeIn();
              })
            })
          })
        });
      }
      // 第四屏到第五屏
      if(index==4 && nextIndex==5){
        $(".qbh-payment .qbh-payment-hands").show().animate({
          "bottom" : 0
        },1000,function(){
          $(".qbh-payment .qbh-payment-mouse-end").animate({
            "opacity" : 1
          },1000,function(){
            $(".qbh-payment .qbh-payment-rotate-sofa-start").show().animate({
              "bottom" : 245
            },500,function(){
              $(".qbh-payment .qbh-payment-rotate-sofa-end").animate({
                "bottom": 70
              },800)
              $(".qbh-payment .qbh-payment-bill").animate({
                "bottom": 380
              },800,function(){
                $(".down").fadeIn();
              })
            })
          })
        })
      }
      // 第五屏到第六屏
      if(index==5 && nextIndex==6 && flag2==false){
        $(".qbh-payment .qbh-payment-rotate-sofa-continue").show().animate({
          "bottom":-243,
          "width" :80
        },900)
        $(".qbh-delivery .qbh-delivery-box").show().animate({
          "left": 363,
          "bottom": 526
        },800,function(){
          flag2=true;
          $(".qbh-payment .qbh-payment-rotate-sofa-continue").hide();
          $(".qbh-delivery .qbh-delivery-box").animate({           
            "left": 460,
            "bottom": 60,
            "width": 40
          },1000,function(){
            $(".qbh-delivery .qbh-delivery-box").hide();
            $(".qbh-delivery").animate({
              "backgroundPositionX": '100%'
            },3000,function(){
              $(".qbh-delivery .qbh-delivery-font-end").animate({
                "opacity": 1
              },200);
              $(".qbh-delivery .qbh-delivery-deliveryman").animate({
                 "right": 815,
                "bottom": 120,
                "width": 252
              },1000,function(){
                $(".qbh-delivery .qbh-delivery-deliveryman").animate({
                "right":600
                },1000,function(){
                  $(".qbh-delivery .qbh-delivery-shouhuo").show();
                  $(".qbh-delivery .qbh-delivery-door").show();
                  $(".qbh-delivery .qbh-delivery-buyer").animate({
                    "width": 87
                  },1000,function(){
                     $(".down").fadeIn();
                  })
                })
              })
            })
            $(".qbh-delivery .qbh-delivery-shangjia").animate({
              "opacity": 1
            }, 1000)
            $(".qbh-delivery .qbh-delivery-truck-font").animate({
              "opacity": 1
            }, 2000)
          })
        })
      }
      // 第六屏到第七屏
      if(index==6 && nextIndex==7){
        $(".qbh-appraise .qbh-appraise-star").animate({
          width:100
        },1500,function(){
          $(".qbh-appraise .qbh-appraise-haoping").show().animate({
            left:490
          },1000,function(){
            $(".qbh-appraise .qbh-appraise-haoping").animate({
              width:72
            },function(){
              $(".down").fadeIn();
            })
          })
        })
      }

    }


  });
});

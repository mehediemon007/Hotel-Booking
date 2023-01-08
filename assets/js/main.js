;(function($){

    // WOW Animation
    
    $(document).ready(function () {
        new WOW().init();
    });

    // Offer Slider

    
    $(".offers-slider").owlCarousel({
        items:2.5,
        loop:true,
        autoplay:false,
        slideBy: 2,
        nav:true,
        navText: ["<i class='icofont-thin-left'></i>","<i class='icofont-thin-right'></i>"],
        dots:false,
        responsive:{
            // 0:{
            //     items: 2,
            //     center:false
            // },
            // 575:{
            //     items: 5,
            //     center:true,
            // },
        }
    })

    // Trip Slider

    
    $(".trips-slider").owlCarousel({
        items:5.5,
        loop:true,
        autoplay:false,
        slideBy: 1,
        nav:true,
        navText: ["<i class='icofont-thin-left'></i>","<i class='icofont-thin-right'></i>"],
        dots:false,
        margin: 16,
        responsive:{
            // 0:{
            //     items: 2,
            //     center:false
            // },
            // 575:{
            //     items: 5,
            //     center:true,
            // },
        }
    })

    $(".quick-links-slider").owlCarousel({
        items:3,
        loop:true,
        autoplay:false,
        slideBy: 1,
        nav:true,
        navText: ["<i class='icofont-thin-left'></i>","<i class='icofont-thin-right'></i>"],
        dots:false,
        margin: 16,
        responsive:{
            // 0:{
            //     items: 2,
            //     center:false
            // },
            // 575:{
            //     items: 5,
            //     center:true,
            // },
        }
    })
    
    // Services Slider

    $(".services-wpr").owlCarousel({
        items:5,
        loop:true,
        autoplay:true,
        margin: 12,
        stagePadding:8,
        nav:true,
        navText: ["<i class='icofont-thin-left'></i>","<i class='icofont-thin-right'></i>"],
        dots:false,
        responsive:{
            0:{
                items: 2,
                center:false
            },
            575:{
                items: 5,
                center:true,
            },
        }
    })

    // Client Review

    $(".client-reviews").owlCarousel({
        loop:true,
        autoplay:true,
        margin:16,
        nav:false,
        smartSpeed:500,
        responsive:{
            0:{
                items: 1.25
            },
            575:{
                items: 2.35
            },
        }
    })

    $('.owl-dots button').attr('aria-label', 'owl-btn');
    $('.owl-nav button').attr('aria-label', 'owl-nav');

    // Counter

    if($('.counter').length){

        $('.counter').counterUp({
            delay: 10,
            time: 1000
        });
    
    }

    // Mobile Menu

    $(".nav-toggle").on("click",function(){
        $(".nav-list").addClass("open")
    })

    $(".nav-close").on("click",function(){
        $(".nav-list").removeClass("open")
    })

    $(".nav-list li a").on("click",function(){
        if($(".nav-list").hasClass("open")){
            $(".nav-list").removeClass("open")
        }
    })

    // Ticket Options

    $(".option-select-btn").on("click",function(){
        $(this).next(".travel-options").addClass("show")
        // $(".travel-options").addClass("show");
    })

    $(".travel-options .opts-apply").on("click",function(){
        $(".travel-options").removeClass("show");
    })
      

})(jQuery);

(function(){

    // Sticky Nav

    const headerContainer = document.querySelector(".header-wpr");

    if(headerContainer != null){
        window.onscroll = ()=>{
            this.scrollY > 100 ? headerContainer.classList.add("sticky") : headerContainer.classList.remove("sticky");
        }
    }

})()
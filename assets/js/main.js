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

    // Quick Links Slider

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

    $('.owl-nav button').attr('aria-label', 'owl-navigation');

    // Range Date Picker

    $(function() {
        $('input[name="datetimes"]').daterangepicker({
          timePicker: false,
          startDate: moment().startOf('hour'),
          endDate: moment().startOf('hour').add(32, 'hour'),
          locale: {
            format: 'DD/M'
          }
        });
    });

    // Ticket Options

    $(".option-select-btn").on("click",function(){
        $(this).next(".travel-options").addClass("show")
        // $(".travel-options").addClass("show");
    })

    $(".travel-options .opts-apply").on("click",function(){
        $(".travel-options").removeClass("show");
    })

    // Room Options
    
    $(".option-select-btn").on("click",function(){
        $(this).next(".room-options").addClass("show")
        // $(".travel-options").addClass("show");
    })

    $(".room-options .opts-apply").on("click",function(){
        $(".room-options").removeClass("show");
    })

    // Nice Select

    $("select").niceSelect();

    // Toggle Price Range

    $(".flight-category .nav-link").on("click",function(){
        if($("#short-tab").hasClass("active")){
            $(".price-filter").css("display", "none")
        }else{
            $(".price-filter").css("display", "block");
        }
    })

    // toggle Flight Info

    $(".info-toggle").on("click",function(){
        if($(this).text() == 'Show Flight Details'){
            $(this).text("Hide Flight Details")
        }else{
            $(this).text("Show Flight Details")
        }
        $(this).parent().siblings('.flight-info-details').slideToggle('fast')
    })

    // Card Content Toggle

    $(".content-toggle").on("click",function(){
        $("i", this).toggleClass("icofont-circled-up icofont-circled-down");
        $(this).siblings(".card-body").slideToggle("300")
    })

    // Date Picker

    if($(".datePicker").length){
        $(".datePicker").datepicker({
            format:'dd/mm/yyyy',
            autoclose:true,
        });
    }

    // Toggle Traveler Data

    $(".continue-btn").on("click",function(){
        $(".traveler-details-card").toggleClass("hide");
        $(this).css("display","none");
        $(".traveler-data-wpr").css("display","block")
    })

    // Confirm Message

    $(".booking-btn").on("click",function(){
        $(this).parent().css("display","none");
        $(this).parent().siblings(".terms").css("display","none")
        $(".booking-confirm-msg").css("display","block")
    })

    // Sign Modal

    $(".login-btn").on("click",function(){
        $(".sign-modal-wpr").addClass("show")
    })

    $(".modal-close").on("click",function(){
        $(".sign-modal-wpr").removeClass("show")
    })

    // Sign Form Toggle

    $(".sign-up-link").on("click",function(){
        $(".sign-in-content").css("display","none");
        $(".sign-up-content").css("display","block")
    })

    $(".sign-in-link").on("click",function(){
        $(".sign-up-content").css("display","none");
        $(".sign-in-content").css("display","block")
    })

    // Password Type Toggle

    $(".pass-input > i").click(function(){
        $(this).toggleClass("icofont-eye-blocked icofont-eye-alt");
        if($(this).parents().siblings("input").attr("type") == "text"){
           $(this).parents().siblings("input").attr("type","password")
        }
        else{
         $(this).parents().siblings("input").attr("type","text")
        }
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

    // Countdown Timer

    const startMinutes = 10;
    let time = startMinutes * 60;

    const CountdownEl = document.getElementById("countdown");

    if(CountdownEl != null){

        setInterval(updateCountdown,1000)

        function updateCountdown(){
            const min = Math.floor(time / 60);
            let sec = time % 60;

            sec = sec < 10 ? '0' + sec : sec ;

            CountdownEl.innerHTML = `<span>${min}</span> : <span>${sec}</span>`;
            time--;
        }
    }

    // Range Slider

   const slideValue = document.querySelector(".range-value .right");
   const inputSlider = document.querySelector(".range-field input");
   const rangeBg = document.querySelector(".range-bg");

   if(slideValue != null || inputSlider != null || rangeBg !=null){
        let minValue = 3000;
        let currentValue = inputSlider.value - minValue;
        let maxValue = 10000;
        let rangeValue = (maxValue - minValue);
 
        rangeBg.style.width = ((currentValue * 100 ) / rangeValue) + '%';
 
        inputSlider.oninput = (()=>{
            currentValue = inputSlider.value - minValue;
            console.log(currentValue);
            slideValue.innerHTML = inputSlider.value + ' tk';
            rangeBg.style.width = ((currentValue * 100 ) / rangeValue) + '%';
        });
    }

    // IntelPhoneInput

    var phoneInput = document.querySelectorAll(".phone");

    if(phoneInput != null){

        phoneInput.forEach(each => {

            window.intlTelInput(each, {
                separateDialCode: true,
                preferredCountries: ["bd", "sa"]
            });
        })
    }

})()
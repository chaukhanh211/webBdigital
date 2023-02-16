$(document).ready(
    function(){
                var owl = $('#thumbnail_slider');
                owl.owlCarousel({
                    loop:true,
                    nav:true,
                    center:true,
                    navigation : true,
                    navigationText: ["◀ Left <strong>arrow</strong>","Right <strong>arrow</strong> ▶"],
                    margin:10,
                    responsive:{
                        0:{
                            items:1
                        },
                        600:{
                            items:3
                        },            
                        960:{
                            items:5
                        },
                        1200:{
                            items:6
                        }
                    }
                });
                owl.on('mousewheel', '.owl-stage', function (e) {
                    if (e.deltaY>0) {
                        owl.trigger('next.owl');
                    } else {
                        owl.trigger('prev.owl');
                    }
                    e.preventDefault();
                });

                $('.owl-carousel').owlCarousel({
                    items:1,
                    lazyLoad:true,
                    loop:true,
                    margin:10
                });
        }
);




const app = {
    videos : [
       
        {
          name: "Show reel 2019",
          path: '<iframe src="https://www.youtube.com/embed/2aU6aOVzz18" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
          image: "assets/images/b_showreel_2019_2020.png"
        },
        {
          name: "Show reel 2019",
          path: '<iframe src="https://www.youtube.com/embed/fExd3YhgWbQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
          image: "assets/images/show_ree_2021_2022.png"
        }
    ],
    // effect: [
    //   "fade-left",
    //   "fade-right",
    //   "fade-up",
    //   "fade-down",
    //   "flip-left",
    //   "flip-right",
    //   "flip-up",
    //   "flip-down",
    //   "zoom-in",
    //   "zoom-in-up",
    //   "zoom-out-up",
    //   "zoom-in-left",
    // ],
    render: function() {
        const htmls = this.videos.map(video => {
            return `
            <div class="item-video" data-merge="3"> <img class ="h-100" alt='${video.path}'  
            src="${video.image}">
            <div class="play-button"></div>
            </div>
            `
        })
       

        // var videoColumn = [];
        // var count = 0;
        // this.videos.push(this.videos[0]);
        // for (i = 0; i < this.videos.length/2; i++)
        // {
        //       videoColumn.push( `<div class="d-flex justify-content-around">
        //       <div data-aos="${this.effect[count]}" class="col-md-6 p-2 z-2 " >
        //           <img alt='${this.videos[count].path}' src='${this.videos[count].image}' class="w-100 border-5">
        //           <div class="play-button"></div>
        //       </div>
        //       <div data-aos="${this.effect[count + 1]}" class="col-md-6 p-2 z-2 " >
        //           <img alt='${this.videos[count + 1].path}' src='${this.videos[count + 1].image}' class="w-100 border-5">
        //           <div class="play-button"></div>
        //       </div>
        //     </div>`)
        //     count = count + 2;
        // }
       
        $('#thumbnail_slider').html(htmls)
        // $('#video-column').html(videoColumn)
    },
    handleEvents: function() {
        $('.item-video').click(function() {
            var value = $(this).find('img').attr('alt');
            $('#popup').css('display','block'); 
            $('.popup').html(value); 
            }
        );
        $('#popup').click(function() {
            $('#popup iframe').attr('src', $('iframe').attr('src'));
            $('#popup').css('display','none');
        });

        $('img.w-100').click(function() {
          var value = $(this).attr('alt');
          $('#popup').css('display','block'); 
          $('.popup').html(value); 
        })

        $('.play-button').click(function() {
          var value = $(this).parent().find('img').attr('alt');
          $('#popup').css('display','block'); 
          $('.popup').html(value); 
        })
    },

    start: function() {
        //Render playlist
        this.render()
        //Xử lý sự kiện
        this.handleEvents()
    } 

}
app.start()
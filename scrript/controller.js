$(document).ready(
    function(){
        $('#thumbnail_slider').owlCarousel({
            items:1,
            merge:true,
            loop:true,
            margin:10,
            video:true,
            lazyLoad:true,
            center:true,
            responsive:{
                480:{
                    items:2
                },
                600:{
                    items:4
                }
            }
        })
    }
);



const app = {
    videos : [
       
        {
          name: "Show reel 2019",
          path: '<iframe src="https://www.youtube.com/embed/2aU6aOVzz18" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
          image: "assets/imgThumb/b_showreel_2019_2020.jpg"
        },
        {
          name: "Show reel 2019",
          path: '<iframe src="https://www.youtube.com/embed/fExd3YhgWbQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
          image: "assets/imgThumb/show_ree_2021_2022l.jpg"
        },
        // {
        //   name: "Huyền Thoại RUNETERRA",
        //   path: '<iframe  src="https://www.youtube.com/embed/EsLCWt0A8ww" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        //   image: "imgThumb/Huyen-thoai-RUNETERRA.jpg"
        // },
        // {
        //   name: "NƯỚC TĂNG LỰC NUMBER1 CHANH & DÂU",
        //   path: '<iframe  src="https://www.youtube.com/embed/qQi_zn_zOJE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        //   image: "imgThumb/number1.jpg"
        // },
        // {
        //   name: "Tuyết Ưng VNG",
        //   path: '<iframe  src="https://www.youtube.com/embed/iAz5VOqRfNw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        //   image: "imgThumb/tuyetung.jpg"
        // },
        // {
        //   name: "TVC KR",
        //   path: '<iframe  src="https://www.youtube.com/embed/YGcgghFRpoI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        //   image: "imgThumb/tvc-kr.jpg"
        // },
        // {
        //   name: "showreel 2019 - 2020",
        //   path: '<iframe  src="https://www.youtube.com/embed/4iM9tVGSyrU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        //   image: "imgThumb/showreel.jpg"
        // },
        // {
        //   name: "Rigging Training",
        //   path: '<iframe  src="https://www.youtube.com/embed/sK81mj_tFLs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        //   image: "imgThumb/Riggingtraining.jpg"
        // },
        // {
        //   name: "Animation Training",
        //   path: '<iframe  src="https://www.youtube.com/embed/ZZntlpXbLvc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        //   image: "imgThumb/animationtraining.jpg"
        // },
        // {
        //   name: "Showreel VFX 2018",
        //   path: '<iframe  src="https://www.youtube.com/embed/cUQW2Kl6DrY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        //   image: "imgThumb/showreel2018.jpg"
        // },
        // {
        //   name: "[한화그룹 디지털 광고] 지속가능한 친환경기술-탄소 줄이는 기술",
        //   path: '<iframe  src="https://www.youtube.com/embed/sYlwC4OHymU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        //   image: "imgThumb/mq1.jpg"
        // },
        
        
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
            <div class="item-video" data-merge="3"> <img alt='${video.path}'  
            src="${video.image}"></div>
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
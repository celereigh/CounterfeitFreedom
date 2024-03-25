let width, height;
let sections = [];

window.onload=function(){
    width = window.innerWidth;
    height = window.innerHeight;
    
 // Pre-loader Animation----------------------------
    function revealSite() {
        gsap.to(".pre-loader", 0.3, {
            opacity: 0,
            display: "none",
            ease: "power2.inOut",
        }); 
    }
    gsap.from(".pre-loader-text" , 0.3, {
        opacity: 0,
        delay: 0.5,
        stagger: 2,
    })
    gsap.to(".pre-loader-btn", 0.3, {
        opacity: 1,
        delay: 6,
        // delay: 1,
    })
    $('.pre-loader-btn').click(revealSite);

// show hovered images----------------------------
    function openPoem(){
        //create string which corresponds to poemID
        let poemClass = '.poem' + $(this).attr('data-name');
        $(poemClass).toggleClass('hidden'); 
        //toggleClass: basically what it's doing is turning the class "hidden" on and off on click
        //therefore, when we  toggleClass('hidden')  we're revealing the image on click
    }
    $('#Group1').hover(openPoem);
    $('#Group2').hover(openPoem);

 //show hovered blue connections--------------------------------
    function showBlueConnection(){
        let lineID = '#Line' + $(this).attr('data-name');
        $(lineID).css('opacity', '100');
    }
    function hideBlueConnection(){
        let lineID = '#Line' + $(this).attr('data-name');
        $(lineID).css('opacity', '0');
    }
    $('#Group1').hover(showBlueConnection,hideBlueConnection);
    $('#Group1-2').hover(showBlueConnection,hideBlueConnection);
    $('#Group2').hover(showBlueConnection,hideBlueConnection);
    $('#Group3').hover(showBlueConnection,hideBlueConnection);
    $('#Group3-2').hover(showBlueConnection,hideBlueConnection);
    $('#Group4').hover(showBlueConnection,hideBlueConnection);
    $('#Group5').hover(showBlueConnection,hideBlueConnection);
    $('#Group5-2').hover(showBlueConnection,hideBlueConnection);


 //Navbar click to show description box ----------------------------
    // function showBox(){
    //     $('.info-window').toggleClass('hidden');
    // }
    // $('.topTitle').click(showBox);
    // $('.info-window').click(showBox);

 //QuestionMark click to show Legend ----------------------------
    function showLegend(){
        $('.legend').toggleClass('hidden');
    }
    $('.legend-button').click(showLegend);

 //Poem Credits ----------------------------
    function playCredits(){
        gsap.to(".yetAnotherContainerIDK", 0.3 ,{
            opacity: 1,
            display: "block",
            ease: "power2.inOut",
        });
        gsap.from(".poemCredits" , 1, {
            opacity: 0,
            delay: 0.5,
            stagger: 1.5,
        })
        gsap.to(".leave-page-btn", 0.3, {
            opacity: 1,
            delay: 3,
        })
    }
    function hideCredits(){
        gsap.to(".yetAnotherContainerIDK", 1, {
            opacity: 0,
            display: "none",
            ease: "power2.inOut",
        })
    }
    $('.topTitle').click(playCredits);
    $('.leave-page-btn').click(hideCredits);
 // POEM 1-------------------------------------------------
    function playPoem(){
        gsap.to(".playOne", 0.3 ,{
            opacity: 1,
            display: "block",
            ease: "power2.inOut",
        });
   
        gsap.to("#Circle1", {
            opacity: 1,
            delay: 0,
        })
    }
    function hidePoem(){
        gsap.to(".playOne", 0.3, {
            opacity: 0,
            display: "none",
            ease: "power2.inOut",
        })
    }
    $('#Group1').click(playPoem);
    $('#Circle1').click(hidePoem);


 // POEM 1.2----------------------------
    function playPoemOnePointTwo(){
        gsap.to(".playOne-2", 0.3 ,{
            opacity: 1,
            display: "block",
            ease: "power2.inOut",
        });
        gsap.to("#Circle1-2", {
            opacity: 1,
            delay: 0,
        })
    }
    function hidePoemOnePointTwo(){
        gsap.to(".playOne-2", 0.3, {
            opacity: 0,
            display: "none",
            ease: "power2.inOut",
        })
    }
    $('#Group1-2').click(playPoemOnePointTwo);
    $('#Circle1-2').click(hidePoemOnePointTwo);
    $('.to1-2').click(playPoemOnePointTwo);
 // POEM 2------------------------------
    function poemTwo(){
    $('.blah2').css('opacity', '100');
    }
    $('#Group2').hover(poemTwo);

    function playPoemTwo(){
        gsap.to(".playTwo", 0.3 ,{
            opacity: 1,
            display: "block",
            ease: "power2.inOut",
        });
        gsap.to("#Circle2", {
            opacity: 1,
            delay: 0,
        })
    }
    function hidePoemTwo(){
        gsap.to(".playTwo", 0.3, {
            opacity: 0,
            display: "none",
            ease: "power2.inOut",
        })
    }
    $('#Group2').click(playPoemTwo);
    $('#Circle2').click(hidePoemTwo);
    $('.to2').click(playPoemTwo);

    // function turnBlue2(){
    //     $('.blah2').css('color','blue')
    // }
    // // addEventListener("mouseout", (turnBlue2) => {});
    // // onmouseout = (turnBlue2) => {};

    // $('#Group2').hover(turnBlue2);


 // POEM 3------------------------------
    function playPoemThree(){
        gsap.to(".playThree", 0.3 ,{
            opacity: 1,
            display: "block",
            ease: "power2.inOut",
        });
        gsap.to("#Circle3", {
            opacity: 1,
            delay: 0,
        })
    }
    function hidePoemThree(){
        gsap.to(".playThree", 0.3, {
            opacity: 0,
            display: "none",
            ease: "power2.inOut",
        })
    }
    $('#Group3').click(playPoemThree);
    $('#Circle3').click(hidePoemThree);
 // POEM 3.2----------------------------
    function playPoemThreePointTwo(){
        gsap.to(".playThree-2", 0.3 ,{
            opacity: 1,
            display: "block",
            ease: "power2.inOut",
        });
        gsap.to("#Circle3-2", {
            opacity: 1,
            delay: 0,
        })
    }
    function hidePoemThreePointTwo(){
        gsap.to(".playThree-2", 0.3, {
            opacity: 0,
            display: "none",
            ease: "power2.inOut",
        })
    }
    $('#Group3-2').click(playPoemThreePointTwo);
    $('#Circle3-2').click(hidePoemThreePointTwo);
    $('.to3-2').click(playPoemThreePointTwo);
 // POEM 4------------------------------
    function poemFour(){
        $('.blah4').css('opacity', '100');
    }
    $('#Group4').hover(poemFour);

    function playPoemFour(){
        gsap.to(".playFour", 0.3 ,{
            opacity: 1,
            display: "block",
            ease: "power2.inOut",
        });
        gsap.to("#Circle4", {
            opacity: 1,
            delay: 0,
        })
    }
    function hidePoemFour(){
        gsap.to(".playFour", 0.3, {
            opacity: 0,
            display: "none",
            ease: "power2.inOut",
        })
    }
    $('#Group4').click(playPoemFour);
    $('#Circle4').click(hidePoemFour);
    $('.to4').click(playPoemFour);

    // function turnBlue(){
    //     $('.blah4').css('color','blue')
    // }
    // $('#Group4').hover(turnBlue);

 // POEM 5------------------------------
    function playPoemFive(){
        gsap.to(".playFive", 0.3 ,{
            opacity: 1,
            display: "block",
            ease: "power2.inOut",
        });
        gsap.to("#Circle5", {
            opacity: 1,
            delay: 0,
        })
    }
    function hidePoemFive(){
        gsap.to(".playFive", 0.3, {
            opacity: 0,
            display: "none",
            ease: "power2.inOut",
        })
    }
    $('#Group5').click(playPoemFive);
    $('#Circle5').click(hidePoemFive);
 // POEM 5.2----------------------------
    function playPoemFivePointTwo(){
        gsap.to(".playFive-2", 0.3 ,{
            opacity: 1,
            display: "block",
            ease: "power2.inOut",
        });
        gsap.to("#Circle5-2", {
            opacity: 1,
            delay: 0,
        })
    }
    function hidePoemFivePointTwo(){
        gsap.to(".playFive-2", 0.3, {
            opacity: 0,
            display: "none",
            ease: "power2.inOut",
        })
    }
    $('#Group5-2').click(playPoemFivePointTwo);
    $('#Circle5-2').click(hidePoemFivePointTwo);
 // POEM 5.3----------------------------
    function playPoemFivePointThree(){
        gsap.to(".playFive-3", 0.3 ,{
            opacity: 1,
            display: "block",
            ease: "power2.inOut",
        });
        gsap.to("#Circle5-3", {
            opacity: 1,
            delay: 0,
        })
    }
    function hidePoemFivePointThree(){
        gsap.to(".playFive-3", 0.3, {
            opacity: 0,
            display: "none",
            ease: "power2.inOut",
        })
    }
    $('#Group5-3').click(playPoemFivePointThree);
    $('#Circle5-3').click(hidePoemFivePointThree);
 // POEM 6------------------------------
    function playPoemSix(){
        gsap.to(".anotherContainerIDK", 0.3 ,{
            opacity: 1,
            display: "block",
            ease: "power2.inOut",
        });
        gsap.from(".poemSix" , 1, {
            opacity: 0,
            delay: 0.5,
            stagger: 1.5,
        })
        gsap.to(".reload-page-btn", 0.3, {
            opacity: 1,
            delay: 3,
        })
    }
    function hidePoemSix(){
        gsap.to(".anotherContainerIDK", 1, {
            opacity: 0,
            display: "none",
            ease: "power2.inOut",
        })
    }
    function reloadPage(){
        window.location.reload();
    }
    $('#Group6').click(playPoemSix);
    $('#Circle6').click(hidePoemSix);
    $('.reload-page-btn').click(reloadPage);

 //Random Images ----------------------------
 //Poem 1 ----------------------------
    function showImage(){
        $('.image1').toggleClass('hidden'); 
    }
    function moveRandom(){
        var bottomPos = Math.random() * height;
        var leftPos = Math.random() * width;
        $('.image1').css('bottom', bottomPos);
        $('.image1').css('left', leftPos);
    }
    $('#Group1').hover(moveRandom);
    $('#Group1').hover(showImage);
    
    function showImage2(){
        $('.image2').toggleClass('hidden'); 
    }
    function moveRandom2(){
        var bottomPos = Math.random() * height;
        var leftPos = Math.random() * width;
        $('.image2').css('bottom', bottomPos);
        $('.image2').css('left', leftPos);
    }
    $('#Group1').hover(moveRandom2);
    $('#Group1').hover(showImage2);

    function showImage3(){
        $('.image3').toggleClass('hidden'); 
    }
    function moveRandom3(){
        var bottomPos = Math.random() * height;
        var leftPos = Math.random() * width;
        $('.image3').css('bottom', bottomPos);
        $('.image3').css('left', leftPos);
    }
    $('#Group1').hover(moveRandom3);
    $('#Group1').hover(showImage3);
    
    function showImage4(){
        $('.image4').toggleClass('hidden'); 
    }
    function moveRandom4(){
        var bottomPos = Math.random() * height;
        var leftPos = Math.random() * width;
        $('.image4').css('bottom', bottomPos);
        $('.image4').css('left', leftPos);
    }
    $('#Group1').hover(moveRandom4);
    $('#Group1').hover(showImage4);
 // Poem 1.2----------------------------
    function showImage5(){
        $('.image5').toggleClass('hidden'); 
    }
    function moveRandom5(){
        var bottomPos = Math.random() * height;
        var leftPos = Math.random() * width;
        $('.image5').css('bottom', bottomPos);
        $('.image5').css('left', leftPos);
    }
    $('#Group1-2').hover(moveRandom5);
    $('#Group1-2').hover(showImage5);

    function showImage6(){
        $('.image6').toggleClass('hidden'); 
    }
    function moveRandom6(){
        var bottomPos = Math.random() * height;
        var leftPos = Math.random() * width;
        $('.image6').css('bottom', bottomPos);
        $('.image6').css('left', leftPos);
    }
    $('#Group1-2').hover(moveRandom6);
    $('#Group1-2').hover(showImage6);

    function showImage7(){
        $('.image7').toggleClass('hidden'); 
    }
    function moveRandom7(){
        var bottomPos = Math.random() * height;
        var leftPos = Math.random() * width;
        $('.image7').css('bottom', bottomPos);
        $('.image7').css('left', leftPos);
    }
    $('#Group1-2').hover(moveRandom7);
    $('#Group1-2').hover(showImage7);

    function showImage8(){
        $('.image8').toggleClass('hidden'); 
    }
    function moveRandom8(){
        var bottomPos = Math.random() * height;
        var leftPos = Math.random() * width;
        $('.image8').css('bottom', bottomPos);
        $('.image8').css('left', leftPos);
    }
    $('#Group1-2').hover(moveRandom8);
    $('#Group1-2').hover(showImage8);
 // Poem 3----------------------------
    function showImage9(){
        $('.image9').toggleClass('hidden'); 
    }
    function moveRandom9(){
        var bottomPos = Math.random() * height;
        var leftPos = Math.random() * width;
        $('.image9').css('bottom', bottomPos);
        $('.image9').css('left', leftPos);
    }
    $('#Group3').hover(moveRandom9);
    $('#Group3').hover(showImage9);

    function showImage10(){
        $('.image10').toggleClass('hidden'); 
    }
    function moveRandom10(){
        var bottomPos = Math.random() * height;
        var leftPos = Math.random() * width;
        $('.image10').css('bottom', bottomPos);
        $('.image10').css('left', leftPos);
    }
    $('#Group3').hover(moveRandom10);
    $('#Group3').hover(showImage10);

    function showImage11(){
        $('.image11').toggleClass('hidden'); 
    }
    function moveRandom11(){
        var bottomPos = Math.random() * height;
        var leftPos = Math.random() * width;
        $('.image11').css('bottom', bottomPos);
        $('.image11').css('left', leftPos);
    }
    $('#Group3').hover(moveRandom11);
    $('#Group3').hover(showImage11);

    function showImage12(){
        $('.image12').toggleClass('hidden'); 
    }
    function moveRandom12(){
        var bottomPos = Math.random() * height;
        var leftPos = Math.random() * width;
        $('.image12').css('bottom', bottomPos);
        $('.image12').css('left', leftPos);
    }
    $('#Group3').hover(moveRandom12);
    $('#Group3').hover(showImage12);
    
 // Poem 3.2----------------------------
    function showImage13(){
        $('.image13').toggleClass('hidden'); 
    }
    function moveRandom13(){
        var bottomPos = Math.random() * height;
        var leftPos = Math.random() * width;
        $('.image13').css('bottom', bottomPos);
        $('.image13').css('left', leftPos);
    }
    $('#Group3-2').hover(moveRandom13);
    $('#Group3-2').hover(showImage13);

    function showImage14(){
        $('.image14').toggleClass('hidden'); 
    }
    function moveRandom14(){
        var bottomPos = Math.random() * height;
        var leftPos = Math.random() * width;
        $('.image14').css('bottom', bottomPos);
        $('.image14').css('left', leftPos);
    }
    $('#Group3-2').hover(moveRandom14);
    $('#Group3-2').hover(showImage14);

    function showImage15(){
        $('.image15').toggleClass('hidden'); 
    }
    function moveRandom15(){
        var bottomPos = Math.random() * height;
        var leftPos = Math.random() * width;
        $('.image15').css('bottom', bottomPos);
        $('.image15').css('left', leftPos);
    }
    $('#Group3-2').hover(moveRandom15);
    $('#Group3-2').hover(showImage15);
 // Poem 5------------------------------
    function showImage16(){
        $('.image16').toggleClass('hidden'); 
    }
    function moveRandom16(){
        var bottomPos = Math.random() * height;
        var leftPos = Math.random() * width;
        $('.image16').css('bottom', bottomPos);
        $('.image16').css('left', leftPos);
    }
    $('#Group5').hover(moveRandom16);
    $('#Group5').hover(showImage16);

    function showImage17(){
        $('.image17').toggleClass('hidden'); 
    }
    function moveRandom17(){
        var bottomPos = Math.random() * height;
        var leftPos = Math.random() * width;
        $('.image17').css('bottom', bottomPos);
        $('.image17').css('left', leftPos);
    }
    $('#Group5').hover(moveRandom17);
    $('#Group5').hover(showImage17);

    function showImage18(){
        $('.image18').toggleClass('hidden'); 
    }
    function moveRandom18(){
        var bottomPos = Math.random() * height;
        var leftPos = Math.random() * width;
        $('.image18').css('bottom', bottomPos);
        $('.image18').css('left', leftPos);
    }
    $('#Group5').hover(moveRandom18);
    $('#Group5').hover(showImage18);
 // Poem 5.2------------------------------
    function showImage19(){
        $('.image19').toggleClass('hidden'); 
    }
    function moveRandom19(){
        var bottomPos = Math.random() * height;
        var leftPos = Math.random() * width;
        $('.image19').css('bottom', bottomPos);
        $('.image19').css('left', leftPos);
    }
    $('#Group5-2').hover(moveRandom19);
    $('#Group5-2').hover(showImage19);

    function showImage20(){
        $('.image20').toggleClass('hidden'); 
    }
    function moveRandom20(){
        var bottomPos = Math.random() * height;
        var leftPos = Math.random() * width;
        $('.image20').css('bottom', bottomPos);
        $('.image20').css('left', leftPos);
    }
    $('#Group5-2').hover(moveRandom20);
    $('#Group5-2').hover(showImage20);

    function showImage21(){
        $('.image21').toggleClass('hidden'); 
    }
    function moveRandom21(){
        var bottomPos = Math.random() * height;
        var leftPos = Math.random() * width;
        $('.image21').css('bottom', bottomPos);
        $('.image21').css('left', leftPos);
    }
    $('#Group5-2').hover(moveRandom21);
    $('#Group5-2').hover(showImage21);
 // Poem 5.3------------------------------
    function showImage22(){
        $('.image22').toggleClass('hidden'); 
    }
    function moveRandom22(){
        var bottomPos = Math.random() * height;
        var leftPos = Math.random() * width;
        $('.image22').css('bottom', bottomPos);
        $('.image22').css('left', leftPos);
    }
    $('#Group5-3').hover(moveRandom22);
    $('#Group5-3').hover(showImage22);

    function showImage23(){
        $('.image23').toggleClass('hidden'); 
    }
    function moveRandom23(){
        var bottomPos = Math.random() * height;
        var leftPos = Math.random() * width;
        $('.image23').css('bottom', bottomPos);
        $('.image23').css('left', leftPos);
    }
    $('#Group5-3').hover(moveRandom23);
    $('#Group5-3').hover(showImage23);

    function showImage24(){
        $('.image24').toggleClass('hidden'); 
    }
    function moveRandom24(){
        var bottomPos = Math.random() * height;
        var leftPos = Math.random() * width;
        $('.image24').css('bottom', bottomPos);
        $('.image24').css('left', leftPos);
    }
    $('#Group5-3').hover(moveRandom24);
    $('#Group5-3').hover(showImage24);

    function showImage25(){
        $('.image25').toggleClass('hidden'); 
    }
    function moveRandom25(){
        var bottomPos = Math.random() * height;
        var leftPos = Math.random() * width;
        $('.image25').css('bottom', bottomPos);
        $('.image25').css('left', leftPos);
    }
    $('#Group5-3').hover(moveRandom25);
    $('#Group5-3').hover(showImage25);
 // Poem 6------------------------------
    function showImage26(){
        $('.image26').toggleClass('hidden'); 
    }
    function moveRandom26(){
        var bottomPos = Math.random() * height;
        var leftPos = Math.random() * width;
        $('.image26').css('bottom', bottomPos);
        $('.image26').css('left', leftPos);
    }
    $('#Group6').hover(moveRandom26);
    $('#Group6').hover(showImage26);


    //This is where you should figure out how to hide the other lines. 
    //HINT: Look at the ID or class of the line in the HTML using Inspector.
    //Then you only have to hide the line based on its id or class
}
document.addEventListener('DOMContentLoaded', function(){
        var homebtns = document.querySelectorAll(".home-btn");
        var guestbtns = document.querySelectorAll(".guest-btn");
        var homescore = document.getElementById('number1');
        var guestscore = document.getElementById('number2'); 
        var resetbtn = document.getElementById('reset-btn');
        homebtns.forEach(function(button){
                button.addEventListener('click' , function(){
                        var increament1 = parseInt(button.getAttribute('data-score'));
                        console.log(increament1);
                        homescore.textContent = parseInt(homescore.textContent) + increament1 ;
                        animateFontSize(homescore);
                        updateScoreColors();
                })
        })
        guestbtns.forEach(function(button){
                button.addEventListener('click' , function(){
                        var increament2 = parseInt(button.getAttribute('data-score'));
                        guestscore.textContent = parseInt(guestscore.textContent) + increament2 ;
                        animateFontSize(guestscore);
                        updateScoreColors();                        
                })
        })
        function updateScoreColors(){
                var homescorevalue = parseInt(homescore.textContent);
                var guestcorevalue = parseInt(guestscore.textContent);
                if(homescorevalue > guestcorevalue){
                        homescore.style.color = 'yellow'
                        guestscore.style.color = 'red' ;

                }
                else if(homescorevalue < guestcorevalue){
                        guestscore.style.color = 'yellow' ;
                        homescore.style.color = 'red' ;
                }
                else if(homescorevalue = guestcorevalue){
                        guestscore.style.color = 'red';
                        homescore.style.color = 'red' ;
                }
        }
        function animateFontSize(element) {
                element.style.fontSize = '180px'; 
                setTimeout(function() {
                    element.style.fontSize = '150px';
                },100);
            }
            function animateRotate(element) {
                element.classList.add('rotating');
                setTimeout(function() {
                    element.classList.remove('rotating');
                }, 500);
            }
        resetbtn.addEventListener('click',function(){

                console.log('welocomr');
                animateRotate(homescore);
                animateRotate(guestscore);
                guestscore.style.color = 'red';
                homescore.style.color = 'red' ;
                homescore.style.color = 'red' ;
                homescore.textContent = 0 ;
                guestscore.textContent = 0 ;
        })
})


        
 function gaming() {
            let myToggle  = document.querySelector('.js-toggle-Button');
            myToggle.classList.toggle('is-toggled');

            if(myToggle.classList.contains('is-toggled')) {
                myToggle.classList.add('is-toggled');
                  console.log('Class "is-is-toggled" is Turned-ON');
                  document.querySelector('.js-myToggle-result').innerHTML = `GAMING TURNED-ON`;
            }
            else {
                 myToggle.classList.remove('is-toggled');
                 console.log('Class "is-toggled" is Turn-OFF for GAMING');
                 
                 document.querySelector('.js-myToggle-result').innerHTML = `GAMING TURNED-OFF`;
            }
}


 function music() {
            let musicToggleButton  = document.querySelector('.js-music-toggle-button');
            musicToggleButton.classList.toggle('is-toggled');

            if(musicToggleButton.classList.contains('is-toggled')) {
                musicToggleButton.classList.add('is-toggled');
                  console.log('Class "is-toggled" is Turned-ON for MUSIC');
                  document.querySelector('.js-myToggle-result').innerHTML = `MUSIC TURNED-ON`;
            }
            else {
                 musicToggleButton.classList.remove('is-toggled');
                 console.log('Class "is-toggled" is Turn-OFF for MUSIC');
                 
                 document.querySelector('.js-myToggle-result').innerHTML = `MUSIC TURNED-OFF`;
            }
}


function tech() {
            let techToggleButton  = document.querySelector('.js-tech-toggle-button');
            techToggleButton.classList.toggle('is-toggled');

            if(techToggleButton.classList.contains('is-toggled')) {
                techToggleButton.classList.add('is-toggled');
                  console.log('Class "is-toggled" is Turned-ON for TECH');
                  document.querySelector('.js-myToggle-result').innerHTML = `TECH TURNED-ON`;
            }
            else {
                 techToggleButton.classList.remove('is-toggled');
                 console.log('Class "is-toggled" is Turn-OFF for TECH');
                 
                 document.querySelector('.js-myToggle-result').innerHTML = `TECH TURNED-OFF`;
            }
}

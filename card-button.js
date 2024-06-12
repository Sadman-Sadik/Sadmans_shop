document.addEventListener('DOMContentLoaded',function(){
    const totoggleButton=
    document.getElementById('toggle-btn');
    const hiddenCards= 
    document.querySelectorAll('.pop-card.hidden');

    totoggleButton.addEventListener('click',function(){
        hiddenCards.forEach(card =>{ card.classList.toggle('hidden')});
        if(totoggleButton.textContent == 'See More Products'){
            totoggleButton.textContent= 'See Less'
        }else{
            totoggleButton.textContent == 'See More Products'
        }
    });
});
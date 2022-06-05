document.addEventListener('DOMContentLoaded', ()=> {
    //lista dostępnych kart
    const cardsList = [
      {
        name: 'bear',
        img: 'assets/images/bear.png',
      },
      {
        name: 'bear',
        img: 'assets/images/bear.png',
      },
      {
        name: 'chicken',
        img: 'assets/images/chicken.png',
      },
      {
        name: 'chicken',
        img: 'assets/images/chicken.png',
      },
      {
        name: 'crab',
        img: 'assets/images/crab.png',
      },
      {
        name: 'crab',
        img: 'assets/images/crab.png',
      },
      {
        name: 'giraffe',
        img: 'assets/images/giraffe.png',
      },
      {
        name: 'giraffe',
        img: 'assets/images/giraffe.png',
      },
      {
        name: 'kangaroo',
        img: 'assets/images/kangaroo.png',
      },
      {
        name: 'kangaroo',
        img: 'assets/images/kangaroo.png',
      },
      {
        name: 'mouse',
        img: 'assets/images/mouse.png',
      },
      {
        name: 'mouse',
        img: 'assets/images/mouse.png',
      }
    ];
    //Tutaj losowanie karty, aby była różna kolejność co każdą grę
    cardsList.sort( () => 0.5 - Math.random());
    //łapiemy z htmla elementy 
    const play_place = document.querySelector('.play_place');
    const resultDisplay = document.querySelector('#result_place');
    const textInfo = document.querySelector('.textInfo');
    //zmienne do porównywania itp.
    var selected_cards = [];
    var selected_cards_id = [];
    var founded_cards = [];
    var trials = 1;
  
    //funkcja do wygenerowania gry
    function create_play_board(){
      for(let i = 0; i < cardsList.length; i++) {
        var card = document.createElement('img');
        card.setAttribute('src', 'assets/images/blank.png');
        card.setAttribute('class', 'card');
        card.setAttribute('data-id', i);
        card.addEventListener('click', turn_over_good_card);
        play_place.appendChild(card);
      }
    }
  
    //tutaj sprawdzamy dobór kart - czy jest para
    function check_if_match(){
      var cards = document.querySelectorAll('img');
      //zmienne do porównywania
      const card_number_1_id = selected_cards_id[0];
      const card_number_2_id = selected_cards_id[1];

      if(selected_cards[0] === selected_cards[1]) {
        textInfo.textContent = 'Znalazłeś parę!';
        textInfo.setAttribute('class', 'textInfo correct');
        cards[card_number_1_id].setAttribute('src', 'assets/images/white.png');
        cards[card_number_2_id].setAttribute('src', 'assets/images/white.png');
        cards[card_number_1_id].setAttribute('class', 'card found');
        cards[card_number_2_id].setAttribute('class', 'card found');
        founded_cards.push(selected_cards);
      } else {
        cards[card_number_1_id].setAttribute('src', 'assets/images/blank.png');
        cards[card_number_2_id].setAttribute('src', 'assets/images/blank.png');
        textInfo.textContent = 'Nie ma pary, spróbuj ponownie';
        textInfo.setAttribute('class', 'textInfo wrong');
      }

      selected_cards = [];
      selected_cards_id = [];
      resultDisplay.textContent = trials;
      trials++;
      
      //sprawdzenie czy znaleźliśmy wszystkie pary
      if (founded_cards.length === cardsList.length/2) {
        textInfo.textContent = 'Brawo! Znalazłeś wszystkie pary!';
        textInfo.setAttribute('class', 'textInfo correct')
      }
    }
  
    //odwracanie kart 
    function turn_over_good_card() {
      var cardId = this.getAttribute('data-id');
      selected_cards.push(cardsList[cardId].name);
      selected_cards_id.push(cardId);
      this.setAttribute('src', cardsList[cardId].img);
      if (selected_cards_id.length === 2) {
        setTimeout(check_if_match, 500);
      }
    }
  
    create_play_board();
  })
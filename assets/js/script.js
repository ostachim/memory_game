document.addEventListener('DOMContentLoaded', ()=> {
  var level = 1;

    //lista dostępnych kart
    const cardsList_level_1 = [
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

    const cardsList_level_2 = [
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
      },
      {
        name: 'crocodile',
        img: 'assets/images/crocodile.png',
      },
      {
        name: 'crocodile',
        img: 'assets/images/crocodile.png',
      },
      {
        name: 'dog',
        img: 'assets/images/dog.png',
      },
      {
        name: 'dog',
        img: 'assets/images/dog.png',
      },
      {
        name: 'elephant',
        img: 'assets/images/elephant.png',
      },
      {
        name: 'elephant',
        img: 'assets/images/elephant.png',
      }
    ];

    const cardsList_level_3 = [
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
      },
      {
        name: 'crocodile',
        img: 'assets/images/crocodile.png',
      },
      {
        name: 'crocodile',
        img: 'assets/images/crocodile.png',
      },
      {
        name: 'dog',
        img: 'assets/images/dog.png',
      },
      {
        name: 'dog',
        img: 'assets/images/dog.png',
      },
      {
        name: 'elephant',
        img: 'assets/images/elephant.png',
      },
      {
        name: 'elephant',
        img: 'assets/images/elephant.png',
      },
      {
        name: 'goose',
        img: 'assets/images/goose.png',
      },
      {
        name: 'goose',
        img: 'assets/images/goose.png',
      },
      {
        name: 'camel',
        img: 'assets/images/camel.png',
      },
      {
        name: 'camel',
        img: 'assets/images/camel.png',
      },
      {
        name: 'cow',
        img: 'assets/images/cow.png',
      },
      {
        name: 'cow',
        img: 'assets/images/cow.png',
      }
    ];







    //Tutaj losowanie karty, aby była różna kolejność co każdą grę
    if(level==1){
      cardsList_level_1.sort( () => 0.5 - Math.random());
    }else if(level==2){
      cardsList_level_2.sort( () => 0.5 - Math.random());
    }else if(level==3){
      
    }

    //łapiemy z htmla elementy 
    const play_place = document.querySelector('.play_place');
    const resultDisplay = document.querySelector('#result_place');
    const levelDisplay = document.querySelector('#level_place');
    const textInfo = document.querySelector('.textInfo');
    const nextLevel = document.querySelector('.nextLevel button');
    const container = document.querySelector('.container')
    //zmienne do porównywania itp.
    var selected_cards = [];
    var selected_cards_id = [];
    var founded_cards = [];
    var trials = 1;
    
  
    //funkcja do wygenerowania gry
    function create_play_board(){
      cardsList_level_1.sort( () => 0.5 - Math.random());

      for(let i = 0; i < cardsList_level_1.length; i++) {
        var card = document.createElement('img');
        card.setAttribute('src', 'assets/images/blank.png');
        card.setAttribute('class', 'card');
        card.setAttribute('data-id', i);
        card.addEventListener('click', turn_over_good_card);
        play_place.appendChild(card);
        levelDisplay.textContent = level;
      }
      nextLevel.addEventListener('click', change_Level);
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
      if (founded_cards.length === cardsList_level_1.length/2) {
        textInfo.textContent = 'Brawo! Znalazłeś wszystkie pary!';
        textInfo.setAttribute('class', 'textInfo correct');
        nextLevel.style.visibility="visible";
          }
    }
  
    //odwracanie kart 
    function turn_over_good_card() {
      var cardId = this.getAttribute('data-id');
      selected_cards.push(cardsList_level_1[cardId].name);
      selected_cards_id.push(cardId);
      this.setAttribute('src', cardsList_level_1[cardId].img);
      if (selected_cards_id.length === 2) {
        setTimeout(check_if_match, 500);
      }
    }

    //LEVEL 2

    function create_play_board_level_2(){
      cardsList_level_2.sort( () => 0.5 - Math.random());
      trials = 1;
      var play_place = document.createElement('div');
      play_place.setAttribute('class', 'play_place');
      container.appendChild(play_place);
      play_place.style.maxWidth= '1000px';


      for(let i = 0; i < cardsList_level_2.length; i++) {
        var card = document.createElement('img');
        card.setAttribute('src', 'assets/images/blank.png');
        card.setAttribute('class', 'card');
        card.setAttribute('data-id', i);
        card.addEventListener('click', turn_over_good_card_level_2);
        play_place.appendChild(card);
        levelDisplay.textContent = level;
      }
      nextLevel.addEventListener('click', ()=>{
        play_place.remove();
      });

    }

  
    //tutaj sprawdzamy dobór kart - czy jest para
    function check_if_match_level_2(){
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
      if (founded_cards.length === cardsList_level_2.length/2) {
        textInfo.textContent = 'Brawo! Znalazłeś wszystkie pary!';
        textInfo.setAttribute('class', 'textInfo correct');
        nextLevel.style.visibility="visible";
          }
    }
  
    //odwracanie kart 
    function turn_over_good_card_level_2() {
      var cardId = this.getAttribute('data-id');
      selected_cards.push(cardsList_level_2[cardId].name);
      selected_cards_id.push(cardId);
      this.setAttribute('src', cardsList_level_2[cardId].img);
      if (selected_cards_id.length === 2) {
        setTimeout(check_if_match_level_2, 500);
      }
    }

    //LEVEL 3
  
    function create_play_board_level_3(){
      trials = 1;
      cardsList_level_3.sort( () => 0.5 - Math.random());
      var play_place = document.createElement('div');
      play_place.setAttribute('class', 'play_place');
      container.appendChild(play_place);
      play_place.style.maxWidth= '1200px';



      for(let i = 0; i < cardsList_level_3.length; i++) {
        var card = document.createElement('img');
        card.setAttribute('src', 'assets/images/blank.png');
        card.setAttribute('class', 'card');
        card.setAttribute('data-id', i);
        card.addEventListener('click', turn_over_good_card_level_3);
        play_place.appendChild(card);
        levelDisplay.textContent = level;
      }
      
    }

  
    //tutaj sprawdzamy dobór kart - czy jest para
    function check_if_match_level_3(){
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
      if (founded_cards.length === cardsList_level_3.length/2) {
        textInfo.textContent = 'Brawo! Znalazłeś wszystkie pary!';
        textInfo.setAttribute('class', 'textInfo correct');
        nextLevel.style.visibility="visible";
          }
    }
  
    //odwracanie kart 
    function turn_over_good_card_level_3() {
      var cardId = this.getAttribute('data-id');
      selected_cards.push(cardsList_level_3[cardId].name);
      selected_cards_id.push(cardId);
      this.setAttribute('src', cardsList_level_3[cardId].img);
      if (selected_cards_id.length === 2) {
        setTimeout(check_if_match_level_3, 500);
      }
    }



    //funkcja do testowania
    function console_Log_function(){
      console.log("elo")

    }

    function change_Level(){
      selected_cards = [];
      selected_cards_id = [];
      founded_cards=[];
      play_place.remove();
      level++;
      

      if(level==2){
        create_play_board_level_2();

      }else if(level==3){
        create_play_board_level_3();
      }


    }
  
    create_play_board();
  })
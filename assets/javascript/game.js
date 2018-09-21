    var targetNumber = Math.floor(Math.random()*102) + 19;
  
    document.querySelector("#target_number").innerHTML = targetNumber;
  
    var crystal_game = {

    random_values : [],
    crystal_value = Math.floor(Math.random()*12) + 1,

  
    // The setupGame method is called when the page first loads.
    setupGame: function() {
      // Here we pick a random word.
      for (var i = 0, i < 4; i++){
          this.crystal_value.push(random_values);
      }
      console.log(random_values);
   
    },

  }
  
  






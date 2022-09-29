
var searchComp = document.getElementById('only')
// MAKE THE #ONLY ID FOCUSABLE USING TAB INDEX = 0

searchComp.addEventListener('focusin', () => {
  $('.dropdown-suggestions').css("display","block")
}, true);

searchComp.addEventListener('focusout', () => {
    $('.dropdown-suggestions').css("display","none")
}, true);


  var searchFirst = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a";
  var random = 'https://www.thecocktaildb.com/api/json/v1/1/random.php'
  var byId = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007"

const selectDrink = (id) =>{
    $(".anchor").attr("href","#display")
    $('.rightPanel').css("display","flex")

    console.log("i am here ohhhhh");
    try{
        $.ajax({
          url: `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`,
          type: "GET",
          dataType: "json",
          data: JSON.stringify({}),
          success: function(data){
              stateData = data
              console.log("BY ID=",data);
              var ing = []
              var ingList = []
              
              $(".dropdown-suggestions").html("")
                $('.dropdown-suggestions').css("display","none")
                $('#searchBar input').val("")
                $('.leftPanel h4').html(data.drinks[0].strDrink)
                $('.wineImg img').attr("src",data.drinks[0].strDrinkThumb)
                $('.instructions').html(data.drinks[0].strInstructions)
                $('.alcoholic').html(data.drinks[0].strAlcoholic)
                $('.category').html(data.drinks[0].strCategory)

                ing.push(data.drinks[0].strIngredient1 +" "+ (data.drinks[0].strMeasure1?data.drinks[0].strMeasure1:""))
                ing.push(data.drinks[0].strIngredient2 +" "+ (data.drinks[0].strMeasure2?data.drinks[0].strMeasure2:""))
                ing.push(data.drinks[0].strIngredient3 +" "+ (data.drinks[0].strMeasure3?data.drinks[0].strMeasure3:""))
                ing.push(data.drinks[0].strIngredient4 +" "+  (data.drinks[0].strMeasure4?data.drinks[0].strMeasure4:""))
                ing.push(data.drinks[0].strIngredient5 +" "+ (data.drinks[0].strMeasure5?data.drinks[0].strMeasure5:""))
                ing.push(data.drinks[0].strIngredient6 +" "+ (data.drinks[0].strMeasure6?data.drinks[0].strMeasure6:""))
                ing.push(data.drinks[0].strIngredient7 +" "+ (data.drinks[0].strMeasure7?data.drinks[0].strMeasure7:""))
                ing.push(data.drinks[0].strIngredient8 +" "+  (data.drinks[0].strMeasure8?data.drinks[0].strMeasure8:""))
                ing.push(data.drinks[0].strIngredient9 +" "+ (data.drinks[0].strMeasure9?data.drinks[0].strMeasure9:""))
                ing.push(data.drinks[0].strIngredient10 +" "+ (data.drinks[0].strMeasure10?data.drinks[0].strMeasure10:""))
                ing.push(data.drinks[0].strIngredient11  +" "+ (data.drinks[0].strMeasure11?data.drinks[0].strMeasure11:""))
                ing.push(data.drinks[0].strIngredient12  +" "+ (data.drinks[0].strMeasure12?data.drinks[0].strMeasure12:""))
                ing.push(data.drinks[0].strIngredient13  +" "+ (data.drinks[0].strMeasure13?data.drinks[0].strMeasure13:""))
                ing.push(data.drinks[0].strIngredient14  +" "+ (data.drinks[0].strMeasure14?data.drinks[0].strMeasure14:""))
                ing.push(data.drinks[0].strIngredient15  +" "+ (data.drinks[0].strMeasure15?data.drinks[0].strMeasure15:""))

            // console.log(ing)
            for (var i = 0; i < 15; i++){
              if (ing[i] != 'null null' && ing[i] != 'null' && ing[i] != 'null ' && ing[i] != null && ing[i] != " "){
                ingList.push("<li class='il'>"+ ing[i]+"</li>")
              }
            }
            console.log("ing list",ingList)

            $('.ingredients').html(ingList)


            }
        })
        }catch(e){
            alert("Error!");  
            console.log(e);
        }  
}

$("#disclaimer").on("click",() =>{
  $(".disclaimer").css("display","none")
})

  function fetch(drinkName){
    try{
    $.ajax({
      url: `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkName}`,
      type: "GET",
      dataType: "json",
      data: JSON.stringify({}),
      success: function(data){
          stateData = data
          console.log(data);
          console.log(data.drinks.length);
          let searchList = []
          var length
            if (data.drinks.length > 8){
                length  = 8
            }else{
                length = data.drinks.length
            }

          for (var i = 0; i < length;i++){
            // searchList.push("<a onclick = 'selectDrink(" + data.drinks[i].idDrink + ")'> <div class='drinkName'> <h5>" +data.drinks[i].strDrink+"</h5></div><div class='drinkCategory' ><p>" +data.drinks[i].strCategory+"</p> </div></a>")
            searchList.push("<a class='anchor' onclick= 'selectDrink(" + data.drinks[i].idDrink + ")'> <div class='drinkName'> <h5>" +data.drinks[i].strDrink+"</h5></div><div class='drinkCategory' ><p>" +data.drinks[i].strCategory+"</p> </div></a>")
          }

        $(".dropdown-suggestions").html(searchList)

        }
    })
    }catch(e){
        alert("Error!");  
        console.log(e);
    }

  }


  const fetchRandom = () => {
    $.ajax({
        url: random,
        type: "GET",
        dataType: "json",
        data: JSON.stringify({}),
        success: function(data){
            stateData = data
            console.log(data);
            // console.log(data);
          $(".randomDesc img").attr("src",data.drinks[0].strDrinkThumb)
          $('.randomDesc .drink h5').html(data.drinks[0].strDrink)
          console.log("data=>", data.drinks[0].strDrink);

          }
      })
  }

  $("#searchBar input").on("input", function() {
    // alert($(this).val()); 
    var value = $(this).val();
    // console.log("types ehehehe")
    console.log("value = ",value)
    fetch(value)
 });

 const date = new Date().getFullYear();
 $("#copyright h5").html(` Copyright ©   Dimeji. ${date} `)
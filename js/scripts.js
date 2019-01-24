// var group1 = $("input:radio[name=group1]:checked").val();
// var group2 = $("input:radio[name=group2]:checked").val();
// var group3 = $("input:radio[name=group3]:checked").val();
// var group4 = $("input:radio[name=group4]:checked").val();
// var group5 = $("input:radio[name=group5]:checked").val();

// $(document).ready(function() {
//   $("form#add").submit(funtion(event) {
//     event.preventDefault();
// });

// function fQuestion1(){
//   alert("You should learn ________ first!");
// }
  // var sCorrectAnswer = document.getElementbyId("ans1");

$(document).ready(function() {
  $(".profile").submit(function(event){
    event.preventDefault();

    var group1Input = $("input:radio[name=school]:checked").val();
    var group2Input = $("input:radio[name=project]:checked").val();
    var group3Input = $("input:radio[name=exp]:checked").val();
    var group4Input = $("input:radio[name=interest]:checked").val();
    var group5Input = $("input:radio[name=city]:checked").val();
    // console.log(group1Input);
    // console.log(group2Input);
    // console.log(group3Input);
    // console.log(group4Input);
    // console.log(group5Input);

    if (group1Input === "art" && group2Input === "app" && group3Input === "little" && group4Input  === "fun" && group5Input === "pdx") {
      $(".java").show();
      
    }
  });
})

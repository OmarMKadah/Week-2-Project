$(document).ready(function() {
  $(".profile").submit(function(event){
    event.preventDefault();

    var group1Input = $("input:radio[name=school]:checked").val();
    var group2Input = $("input:radio[name=project]:checked").val();
    var group3Input = $("input:radio[name=exp]:checked").val();
    var group4Input = $("input:radio[name=interest]:checked").val();
    var group5Input = $("input:radio[name=city]:checked").val();


    if (group1Input === "art" && group2Input === "app" && group3Input === "little" && group4Input  === "fun" && group5Input === "pdx"){
      $(".java").show();

    }  else if (group1Input === "art" || group1Input === "all1" && group2Input === "app" && group3Input === "little" && group4Input  === "fun" && group5Input === "chi"){
      $(".ruby").show();

    }  else if (group1Input === "math" && group2Input === "app" || group2input === "web" && group3Input === "little" && group4Input  === "fun" && group5Input === "chi"){
      $(".ccc").show();

    }
  });
})

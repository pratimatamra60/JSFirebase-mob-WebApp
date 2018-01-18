/* document.addEventListener('DOMContentLoaded', function() {
        // // 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
        // // The Firebase SDK is initialized and available here!
        //
        // firebase.auth().onAuthStateChanged(user => { });
        // firebase.database().ref('/path/to/ref').on('value', snapshot => { });
        // firebase.messaging().requestPermission().then(() => { });
        // firebase.storage().ref('/path/to/ref').getDownloadURL().then(() => { });
        //
        // // 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥

        try {
          let app = firebase.app();
          let features = ['auth', 'database', 'messaging', 'storage'].filter(feature => typeof app[feature] === 'function');
          
        } catch (e) {
          console.error(e);
         
        }
      }); */


    $('.nav-item').on('click', function () {
        $('.hamburger').removeClass('show');
      });
           

//----------------------------------------------------------------------
  //get the json file method 1
/*  var array_of_team=[];
 var data = $.getJSON( "teams_info.json", function(response) {
    console.log( "success" );
    console.log(response);
    
   });
 */    
 
 
 //------------------------------------------------------------------------
 
 // get the json file method 2
    /* var JsonFile = $('body').data('json')
    var arry_of_team=[];


$.getJSON(JsonFile, function(data) {
    console.log("got a server response");
    arry_of_team = data.teams;
    console.log(arry_of_team);
    

});  */

//------------------------------------------------------------------------
// get the json file method 3 oop way

function DataHandler() {

  this.rawData = "";
  this.JsonFile = ""; // teams_info
  this.arry_of_team = [];

  this.init = function() {
      this.JsonFile = $("body").data("json");
      this.loadJsonFile();
      this.contact();
      this.matchList();
      this.teamlistNav();
      this.news();
      this.matchNav();
      this.star();
      this.homePage();
      this.stat();

  }

  this.loadJsonFile = function() {
    var that = this;
      $.getJSON(this.JsonFile, function(data) {
          that.arry_of_team = data.teams;
          //console.log(that.arry_of_team);
          that.buildTeamTable();
          that.statTable();

          
      })
  }

    /* this.teamsDetail = function() {
    var that = this;
      $('.team-name').on('click', function() {
          $('section').hide();
          var clickedTeam = $(this).data("value");
          console.log(clickedTeam);
          $('#teams-details').show();
          $.each(that.teamData.teams, function(i, team) {
             
          }); 
      });
  }; */
  this.buildTeamTable = function() {
    var table = $("#teamsTable tbody");
    var that = this;
    var tableRows = [];

    $.each(this.arry_of_team, function(i, team) {
            var tr = $("<tr>");
            //console.log(team_name);
            tr.append($("<td>").text(team.name));
            tr.append($("<td>").html("<img class='team-list-logo' src='"+ team.logo +"'/>"));

            tr.on('click', function() {
              $('section').hide();
              var clickedTeam = team.name;
              //console.log(team);
              $("#team-details").show();
              $.each(that.arry_of_team, function(i, team) {
                if (clickedTeam === team.name) {
                $("#detail-info").html("<img class='team-info-logo' src='"+ team.logo +"'/>"); 

               // $("#team-logo").attr("src", team.logo);
                $("#detail-info").append($("<a>").text("Name: " + team.name));
                $("#detail-info").append($("<a>").text("Coach: " + team.coach));
                $("#detail-info").append($("<a>").text("Home Stadium: " + team.home_stadium));
                $("#detail-info").append($("<a>").text("Years In League: " + team.years_in_league));
                } 
              });
          });

            tableRows.push(tr);
    })
    table.append(tableRows);
  }

   this.statTable = function() {
    var stat_table = $("#stat-Table tbody");
    var tableRows = [];

    $.each(this.arry_of_team, function(i, team) {
      var tr = $("<tr>");
            tr.append($("<td>").text(team.name));
            tr.append($("<td>").html("<img class='team-list-logo' src='"+ team.logo +"'/>"));
            tr.append($('<td>').text(team.position));
            tr.append($('<td>').text(team.games_played));	
            tr.append($('<td>').text(team.points));	  
            tableRows.push(tr);
  })
  stat_table.append(tableRows);
} 


this.stat = function() {
  $("#statistic").on('click', function(e) {
    e.preventDefault();
    $('section').hide();
    $("#statistic-table").show();
  
  });
}; 
  
 this.homePage = function() {
    $(".home-btn").on('click', function(e) {
      e.preventDefault();
        $(".hidden-page").hide();
        $(".home-page").show();
    });
}; 
  this.contact = function() {
      $("#contact").on('click', function(e) {
        e.preventDefault();
          $("section").hide();
          $("#contact-page").show();
      });
  };

  this.matchList = function() {
      $("#section-matches .carousel-inner").on('click', function(e) {
        //e.preventDefault();
          $("section").hide();
          $("#match-list").show();
      });
  };

  this.news = function() {
    $("#section-news .carousel-inner").on('click', function(e) {
      //e.preventDefault();
        $("section").hide();
        $("#match-list").show();
    });
};


this.star = function() {
  $(".fav-btn").on('click', function() {
    //e.preventDefault();
      $("section").hide();
      $("#favorite").show();
  });
};

this.matchNav = function() {
  $(".match-btn").on('click', function() {
    //e.preventDefault();
      $("section").hide();
      $("#match-list").show();
  });
};


this.teamlistNav = function() {
  $(".team-btn").on('click', function() {
    //e.preventDefault();
      $("section").hide();
      $(".team-list").show();
    });
};
}

var dataHandler = new DataHandler ();
dataHandler.init();


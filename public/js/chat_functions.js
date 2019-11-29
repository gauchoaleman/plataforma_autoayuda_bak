function load_log_admin(admin_id){
    var oldscrollHeight = $("#chatbox").attr("scrollHeight") - 20; //Scroll height before the request
    $.ajax({
        url:'chat/'+admin_id+'.start',
        type:'HEAD',
        error: function()
        {
            //file not exists
        },
        success: function()
        {
          var audio = new Audio('/sound/ding.wav');
          audio.play();
        }
    });

    $.ajax({
      url: "/chat/"+admin_id+".html",
      cache: false,
      success: function(html){
        $("#chatbox").html(html); //Insert chat log into the #chatbox div

        //Auto-scroll
        var newscrollHeight = $("#chatbox").attr("scrollHeight") - 20; //Scroll height after the request
        if(newscrollHeight > oldscrollHeight){
          $("#chatbox").animate({ scrollTop: newscrollHeight }, 'normal'); //Autoscroll to bottom of div
        }
        },
    });
  }

function load_log_user(admin_id){
      var oldscrollHeight = $("#chatbox").attr("scrollHeight") - 20; //Scroll height before the request
      $.ajax({
        url: "/chat/"+admin_id+".html",
        cache: false,
        success: function(html){
          $("#chatbox").html(html); //Insert chat log into the #chatbox div

          //Auto-scroll
          var newscrollHeight = $("#chatbox").attr("scrollHeight") - 20; //Scroll height after the request
          if(newscrollHeight > oldscrollHeight){
            $("#chatbox").animate({ scrollTop: newscrollHeight }, 'normal'); //Autoscroll to bottom of div
          }
          },
      });
    }

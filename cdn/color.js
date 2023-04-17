//https://stackoverflow.com/questions/197748/how-do-i-change-the-background-color-with-javascript
//Click เปลี่ยนสี
   function color() {      
    var colors = ["#6610f2",
                  "#dc3545",
                  "#d63384",
                  "#0d6efd",
                  "#1C8200",
                  "#950dea",
                  "#f40de6",
                  "#b0510c",
                  "#1987FC",
                  "#99081E"];
                var bodybgarrayno = Math.floor(Math.random() * colors.length);
                var selectedcolor = colors[bodybgarrayno];
                $(".color").css("background",selectedcolor);
                $("a").css("color",selectedcolor);
        }


        function bulboff()
        {
          document.getElementById('on').src="https://www.w3schools.com/js/pic_bulboff.gif"
        }
        function bulbon()
        {
            document.getElementById('on').src="https://www.w3schools.com/js/pic_bulbon.gif"
        }
        var s = false
        function bulbonoff()
        {
            if(s)
            {
                document.getElementById('img2').src="https://www.w3schools.com/js/pic_bulboff.gif" 
                s = false
            }
            else
            {
                document.getElementById('img2').src="https://www.w3schools.com/js/pic_bulbon.gif"
                s = true
            }
        }

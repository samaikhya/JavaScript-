var displayArea = document.getElementById('display')

function isOperator(ButtonPress)
{
    if(ButtonPress == '+' || ButtonPress == '-' || ButtonPress == '*' || ButtonPress == '/' || ButtonPress == '%')
    {
        return true
    }
    else
    {
        return false
    }
}
function buttonclick(ButtonPress)
{
    if(displayArea.innerText.length >= 24)
    return
    if(ButtonPress != 'CLR' && ButtonPress != 'DEL'  && ButtonPress != '='){
    if(displayArea.innerText === '0' ){
        if(ButtonPress != '0' && ButtonPress != '00'){
            if(ButtonPress == '.' || isOperator(ButtonPress))
            {
                displayArea.innerText = displayArea.innerText + ButtonPress
            }
            else{
                displayArea.innerText = ButtonPress;
            }
        }
    }
    else{
    
        if(isOperator(displayArea.innerText[displayArea.innerText.length-1]) && isOperator(ButtonPress))
        {
            displayArea.innerText = displayArea.innerText.slice(0,-1) + ButtonPress;
        }
        else {
             displayArea.innerText = displayArea.innerText + ButtonPress;
        }
    }
}
 else{
        if(ButtonPress === 'CLR')
        {
            displayArea.innerText ='0'
        }
        else if(ButtonPress === 'DEL')
        {
            displayArea.innerText = displayArea.innerText.slice(0 , -1)
        }
        else
        {
            try{
          displayArea.innerText = eval(displayArea.innerText)
            }
            catch(error)  {
               displayArea.innerText = 0
            }
        }
    }
}


//----------------------------------------------------------------------------------------------------------------------


// function buttonclick(ButtonPress)
// {
//     if(displayArea.innerText.length >= 24)
//     return

//     if(ButtonPress === 'CLR')
//         {
//             displayArea.innerText ='0'
//             return
//         }

//         if(ButtonPress === 'DEL')
//         {
//             displayArea.innerText = displayArea.innerText.slice(0 , -1)
//             return
//         }

//         if(ButtonPress === '=')
//         {
//             try{
//           displayArea.innerText = eval(displayArea.innerText)
//             }
//             catch(error)  {
//                displayArea.innerText = 0
//             }
//             return
//         }
//         if ((buttonText == "0" || buttonText == "00") && displayArea.innerText === "0")
//                 return;
            
//               if ((buttonText == "." || isOperator(buttonText)) && displayArea.innerText === "0")
//                {
//                 displayArea.innerText = "0" + buttonText;
//                 return;
//               }
            
//               if (isOperator(buttonText) && isOperator(displayArea.innerText[displayArea.innerText.length - 1]) && displayArea.innerText !== "0" ) 
//               {
//                 displayArea.innerText = displayArea.innerText.slice(0, -1) + buttonText;
//               }
            
//               if (displayArea.innerText === "0") {
//                 displayArea.innerText = buttonText;
//               } else {
//                 displayArea.innerText = displayArea.innerText + buttonText;
//               }
//             }


var LoginID;


function OnFormSubmit()
{
    event.preventDefault();
}

function OnSubmitClick()
{

    const Username = document.getElementById('username').value;
    const Password = document.getElementById('password').value;
    var ErrorText = document.getElementById('error');

    if (Username === 'Player404' && Password === "Adventure2022")
    {
        LoginID = 1;
        console.log(LoginID);
        //window.location.href = "pages/index.html";
    } 
    else if (Username == 'VIP Ziege' && Password == 'Adventure2022')
    {
        LoginID = 2;
        console.log(LoginID);
        //window.location.href = "pages/index.html";
    }
    else
    {
        ErrorText.style.opacity = 1;
        setTimeout(() => {
            ErrorText.style.opacity = 0;
        }, 4000);
        
    }
}
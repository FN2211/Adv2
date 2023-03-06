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
        window.location.href = "pages/index.html";
        localStorage.setItem("LoginID", LoginID);
    } 
    else if (Username == 'VIP Ziege' && Password == 'Adventure2022')
    {
        LoginID = 2;
        console.log(LoginID);
        window.location.href = "pages/index.html";
        localStorage.setItem("LoginID", LoginID);
    } else if (Username == 'Homstaa' && Password == 'Adventure2042')
    {
        LoginID = 3;
        console.log(LoginID);
        window.location.href = "pages/index.html";
        localStorage.setItem("LoginID", LoginID);
    }
    else
    {
        ErrorText.style.opacity = 1;
        setTimeout(() => {
            ErrorText.style.opacity = 0;
        }, 4000);
        
    }

}

window.onload = console.log(localStorage.getItem("LoginID"));
window.onload = OnLoad();

function OnLoad(){

    var AdventureCard = document.getElementById('AdventureCard');
    var Btn  = document.getElementById('Adv2Download');

    if (localStorage.getItem("LoginID") == 3)
    {
        AdventureCard.style.opacity = 0.3;
        AdventureCard.style.cursor = 'not-allowed';
        Btn.style.pointerEvents = 'none';
    }
}
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

function AdvDownload()
{
    window.open('https://drive.google.com/u/1/uc?id=1e9xGWu46Rd_mRuZ3bS1Ldk7WBzssvV3Z&export=download&confirm=t&confirm=t&uuid=ae3e7fb1-c756-4dd5-b00b-8719b5a512c2&at=ALgDtsyvUZwRDKb1XN8rOmCvYDkm:1678186377262', '_blank').focus();
}

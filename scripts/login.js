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
    } else if (Username == 'Homstaa' && Password == 'Adventure2047')
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
    window.open('https://drive.google.com/u/1/uc?id=1e9xGWu46Rd_mRuZ3bS1Ldk7WBzssvV3Z&export=download&confirm=t&confirm=t&uuid=5bd349ba-801e-43e8-a86b-65a9be086646&at=ALgDtsyCKbR0c0qHkexPVIsi18qX:1678291694498', '_blank').focus();
}

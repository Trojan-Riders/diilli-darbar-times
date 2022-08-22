var x=1;
function menu()
{
    if(x==1)
    {
        document.getElementById("mobile").style.display="block";
        x=0;
    }
    else
    {
        document.getElementById("mobile").style.display="none";
        x=1;
    }
}
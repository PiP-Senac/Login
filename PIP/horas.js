
var html = document.querySelector('html');
now = new Date;


if (now.getHours () >= 6 || now.getHours () < 18)
{
    html.classList.toggle('siteManha')
}
        if (now.getHours () >= 18 || now.getHours () < 6)
{
    html.classList.toggle('siteNoite')
}  
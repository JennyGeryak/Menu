var div1 = "<td><div class='txtmenu'>"
var lnk1 = "<a href='"
var lnk2 = "' class='lnkmenu'>"
var lnk3 = "</a>"
var div2 = "</div></td>"

titArray = new Array()
titArray [0] = "Site"
titArray [1] = "Github"
titArray [2] = "Codepen"
titArray [3] = "Linkedin"
titArray [4] = "Instagram"

urlArray = new Array()
urlArray [0] = "https://jennygeryak.github.io/"
urlArray [1] = "https://github.com/JennyGeryak"
urlArray [2] = "http://codepen.io/JennyGeryak/"
urlArray [3] = "https://www.linkedin.com/in/jane-geryak-721719a5"
urlArray [4] = "https://www.instagram.com/jenny_geryak/"

mnuArray = new Array()
mnuArray [0] = "Site"
mnuArray [1] = "Githud"
mnuArray [2] = "Codepen"
mnuArray [3] = "Linkedin"
mnuArray [4] = "Instagram"
document.write()
if (document.title == titArray[0])
{document.write(div1+mnuArray[0]+div2)}
else
{document.write(div1+lnk1+urlArray[0]+lnk2+mnuArray[0]+lnk3+div2)}
if (document.title == titArray[1])
{document.write(div1+mnuArray[1]+div2)}
else
{document.write(div1+lnk1+urlArray[1]+lnk2+mnuArray[1]+lnk3+div2)}
if (document.title == titArray[2])
{document.write(div1+mnuArray[2]+div2)}
else
{document.write(div1+lnk1+urlArray[2]+lnk2+mnuArray[2]+lnk3+div2)}
if (document.title == titArray[3])
{document.write(div1+mnuArray[3]+div2)}
else
{document.write(div1+lnk1+urlArray[3]+lnk2+mnuArray[3]+lnk3+div2)}
if (document.title == titArray[4])
{document.write(div1+mnuArray[4]+div2)}
else
{document.write(div1+lnk1+urlArray[4]+lnk2+mnuArray[4]+lnk3+div2)}
document.write("</tr></table>")

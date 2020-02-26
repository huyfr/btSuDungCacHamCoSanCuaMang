function upperLower()
{
    let str = document.getElementById("inputText").value;
    let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lower = "abcdefghijklmnopqrstuvwxy";
    let result=[];

    for (let x=0; x<str.length; x++)
    {
        if (upper.indexOf(str[x]) !== -1)
        {
            result.push(str[x].toLowerCase());
        }
        else
        {
            if (lower.indexOf(str[x]) !== -1)
            {
                result.push(str[x].toUpperCase());
            }
            else
            {
                result.push(str[x]);
            }
        }
    }
    document.getElementById("result").innerHTML="Before: "+str+"<br><br>"+"After: "+result.join("");
}
function home(){
    alert("Now this is the home page")
}
function expense(){
    var num=prompt("Enter the number of people to pay bill");
    var total=prompt("enter the total bill");
    //alert("each person shold pay"+total/num);
    var ans=total/num;
    var element=document.getElementById("answer");
    element.innerHTML="The Answer is " +ans;
}
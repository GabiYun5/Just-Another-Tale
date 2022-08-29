function playim(){
    document.getElementById("introm").play();
    document.getElementById("pauseim").style.display="inline-block";
    document.getElementById("playim").style.display="none";
}
function pauseim(){
    document.getElementById("introm").pause();
    document.getElementById("playim").style.display="inline-block";
    document.getElementById("pauseim").style.display="none";
}
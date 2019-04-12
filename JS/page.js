function showimg(y) {
	for(var i=0;i<document.getElementsByClassName("item").length;i++)
	{
		document.getElementsByClassName("item")[i].className="noitem";
	}
	document.getElementsByClassName("noitem")[y].className="item";
}
function dis(y){
	for(var i=0;i<document.getElementsByClassName("active").length;i++)
	{
		document.getElementsByClassName("active")[i].className="activedown";
	}
	document.getElementsByClassName("activedown")[y].className="active";
}
function imgshow(y){
	for(var i=0;i<document.getElementsByClassName("imgshow").length;i++)
	{
		document.getElementsByClassName("imgshow")[i].className="imgdown";
	}
	document.getElementsByClassName("imgdown")[y].className="imgshow";
}


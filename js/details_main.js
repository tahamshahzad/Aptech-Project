

var closingDiv = document.getElementById("details_1");
var innerDiv = document.getElementById("details_2");
var divForData = document.getElementById("pics_inner"); 
var table_area = document.getElementById("details_table_main");
var priceTag = document.getElementById("price");
var wordFile = document.getElementById("wordFile_btn");
 
 function showDiv(ele) {

var cDHeight = closingDiv.clientHeight;
var innerDivHeight = innerDiv.clientHeight;

var cDWidth = closingDiv.clientWidth;
var iDWidth =  innerDiv.clientWidth;

var closingAreaH = cDHeight-innerDivHeight;
var closingAreaW = cDWidth-iDWidth;

var hUpperArea = closingAreaH / 2;
var wLeftArea = closingAreaW / 2;
var hLowerArea = (hUpperArea + innerDivHeight); 
var WRightArea = (wLeftArea + iDWidth);

innerDiv.style.marginTop = hUpperArea + "px";

closingDiv.addEventListener("click", getClickPosition, false);
 
 function getClickPosition(e) {
    var xPosition = e.clientX;
    var yPosition = e.clientY;
	
	if (xPosition < wLeftArea || yPosition < hUpperArea || xPosition > WRightArea || yPosition > hLowerArea) {
		closingDiv.style.visibility = "hidden";
		closingDiv.style.opacity = 0;
	}
	
	
}

 closingDiv.style.visibility = "visible";
 
 closingDiv.style.opacity = 1;
 
 var parentCList;
 
 if (ele.innerHTML == "Details") {
	 
	 parentCList = ele.parentNode.parentNode.parentNode.parentNode.classList;
	 
	 
 }

 else {
 
  parentCList = ele.parentNode.classList;
 
 }
 
 var leftBtn = document.getElementById("left");
 
 var rightBtn = document.getElementById ("right");  

 var itemArrayD = Data[parentCList[1]].ItemDisc[parentCList[2]][parentCList[3]];

	var arr = itemArrayD[1];

 	var arrLen = arr.length;
 
	var arrayIndex = 0;
 
 rightBtn.onclick = function () {changePic("right")}
 
 leftBtn.onclick = function () {changePic("left")}  
 
 divForData.style.backgroundImage = 'url(\"'+ arr[arrayIndex] +'\")';
 
 if (parentCList[2] == "mob") {

 table_area.innerHTML = '<div class=\"properties_table all_zero margin_zero_auto"><table class=\"prop_main all_zero\"><tr><th>PROPERTY</th><th>SPEC</th></tr><tr class=\"td_main_color\" ><td>'+"Name"+'</td><td>'+itemArrayD[0]+'</td></tr><tr class=\"td_alternate_color\" ><td>'+"Operating System"+'</td><td>'+itemArrayD[2][0]+'</td></tr><tr class=\"td_main_color\" ><td>'+"CPU"+'</td><td>'+itemArrayD[2][1]+'</td></tr><tr class=\"td_alternate_color\" ><td>'+"RAM"+'</td><td>'+itemArrayD[2][2]+'</td></tr><tr class=\"td_main_color\" ><td>'+"Resolution"+'</td><td>'+itemArrayD[2][5]+'</td></tr><tr class=\"td_alternate_color\" ><td>'+"Disk Space"+'</td><td>'+itemArrayD[2][7]+'</td></tr><tr class=\"td_main_color\" ><td>'+"Camera"+'</td><td>'+itemArrayD[2][8]+'</td></tr><tr class=\"td_alternate_color\" ><td>'+"Cellular Data"+'</td><td>'+itemArrayD[2][3]+'</td></tr><tr class=\"td_main_color\" ><td>'+"Thickness"+'</td><td>'+itemArrayD[2][4]+'</td></tr></table></div>';
 priceTag.innerHTML = itemArrayD[3];
 wordFile.href = '../word_Files/' +parentCList[1] + ' ' +parentCList[2]+ ' ' + parentCList[3]+'.docx';
 
 }
 
 else if (parentCList[2] == "tab") {
	 
		table_area.innerHTML = '<div class=\"properties_table all_zero margin_zero_auto"><table class=\"prop_main all_zero\"><tr><th>PROPERTY</th><th>SPEC</th></tr><tr class=\"td_main_color\" ><td>'+"Name"+'</td><td>'+itemArrayD[0]+'</td></tr><tr class=\"td_alternate_color\" ><td>'+"Operating System"+'</td><td>'+itemArrayD[2][0]+'</td></tr><tr class=\"td_main_color\" ><td>'+"CPU"+'</td><td>'+itemArrayD[2][1]+'</td></tr><tr class=\"td_alternate_color\" ><td>'+"RAM"+'</td><td>'+itemArrayD[2][2]+'</td></tr><tr class=\"td_main_color\" ><td>'+"Cellular Data"+'</td><td>'+itemArrayD[2][3]+'</td></tr><tr class=\"td_alternate_color\" ><td>'+"Thickness"+'</td><td>'+itemArrayD[2][4]+'</td></tr><tr class=\"td_main_color\" ><td>'+"Resolution"+'</td><td>'+itemArrayD[2][5]+'</td></tr><tr class=\"td_alternate_color\" ><td>'+"Call"+'</td><td>'+itemArrayD[2][6]+'</td></tr><tr class=\"td_main_color\" ><td>'+"Disk Space"+'</td><td>'+itemArrayD[2][7]+'</td></tr></table></div>';
		priceTag.innerHTML = itemArrayD[3];
		wordFile.href = '../word_Files/' +parentCList[1] + ' ' +parentCList[2]+ ' ' + parentCList[3]+'.docx';
 }
 else if (parentCList[2] == "lap") {
	  
	 table_area.innerHTML = '<div class=\"properties_table all_zero margin_zero_auto"><table class=\"prop_main all_zero\"><tr><th>PROPERTY</th><th>SPEC</th></tr><tr class=\"td_main_color\" ><td>'+"Name"+'</td><td>'+itemArrayD[0]+'</td></tr><tr class=\"td_alternate_color\" ><td>'+"Operating System"+'</td><td>'+itemArrayD[2][0]+'</td></tr><tr class=\"td_main_color\" ><td>'+"CPU"+'</td><td>'+itemArrayD[2][1]+'</td></tr><tr class=\"td_alternate_color\" ><td>'+"RAM"+'</td><td>'+itemArrayD[2][2]+'</td></tr><tr class=\"td_main_color\" ><td>'+"Thickness"+'</td><td>'+itemArrayD[2][3]+'</td></tr><tr class=\"td_alternate_color\" ><td>'+"Resolution"+'</td><td>'+itemArrayD[2][4]+'</td></tr><tr class=\"td_main_color\" ><td>'+"Camera"+'</td><td>'+itemArrayD[2][5]+'</td></tr><tr class=\"td_alternate_color\" ><td>'+"Wifi"+'</td><td>'+itemArrayD[2][8]+'</td></tr><tr class=\"td_main_color\" ><td>'+"Disk Space"+'</td><td>'+itemArrayD[2][6]+'</td></tr></table></div>';
	priceTag.innerHTML = itemArrayD[3];
	wordFile.href = '../word_Files/' +parentCList[1] + ' ' +parentCList[2]+ ' ' + parentCList[3]+'.docx';
 }
 else if (parentCList[2] == "cam") {
	 
	 table_area.innerHTML = '<div class=\"properties_table all_zero margin_zero_auto"><table class=\"prop_main all_zero\"><tr><th>PROPERTY</th><th>SPEC</th></tr><tr class=\"td_main_color\" ><td>'+"Name"+'</td><td>'+itemArrayD[0]+'</td></tr><tr class=\"td_alternate_color\" ><td>'+"Operating System"+'</td><td>'+itemArrayD[2][0]+'</td></tr><tr class=\"td_main_color\" ><td>'+"CPU"+'</td><td>'+itemArrayD[2][1]+'</td></tr><tr class=\"td_alternate_color\" ><td>'+"RAM"+'</td><td>'+itemArrayD[2][2]+'</td></tr><tr class=\"td_main_color\" ><td>'+"Thickness"+'</td><td>'+itemArrayD[2][3]+'</td></tr><tr class=\"td_alternate_color\" ><td>'+"Resolution"+'</td><td>'+itemArrayD[2][4]+'</td></tr><tr class=\"td_main_color\" ><td>'+"Camera"+'</td><td>'+itemArrayD[2][5]+'</td></tr><tr class=\"td_alternate_color\" ><td>'+"Wifi"+'</td><td>'+itemArrayD[2][8]+'</td></tr><tr class=\"td_main_color\" ><td>'+"Disk Space"+'</td><td>'+itemArrayD[2][6]+'</td></tr></table></div>';
	priceTag.innerHTML = itemArrayD[3];
	wordFile.href = '../word_Files/' +parentCList[1] + ' ' +parentCList[2]+ ' ' + parentCList[3]+'.docx';
 }
 else {
		table_area.innerHTML = '<div class=\"properties_table all_zero margin_zero_auto" ><table class=\"prop_main all_zero\"><tr><th>PROPERTY</th><th>SPEC</th></tr><tr class=\"td_main_color\" ><td>'+"Name"+'</td><td>'+itemArrayD[0]+'</td></tr><tr class=\"td_alternate_color\" ><td>'+"Operating System"+'</td><td>'+itemArrayD[2][0]+'</td></tr><tr class=\"td_main_color\" ><td>'+"CPU"+'</td><td>'+itemArrayD[2][1]+'</td></tr><tr class=\"td_alternate_color\" ><td>'+"RAM"+'</td><td>'+itemArrayD[2][2]+'</td></tr><tr class=\"td_main_color\" ><td>'+"Thickness"+'</td><td>'+itemArrayD[2][3]+'</td></tr><tr class=\"td_alternate_color\" ><td>'+"Resolution"+'</td><td>'+itemArrayD[2][4]+'</td></tr><tr class=\"td_main_color\" ><td>'+"Camera"+'</td><td>'+itemArrayD[2][5]+'</td></tr><tr class=\"td_alternate_color\" ><td>'+"Wifi"+'</td><td>'+itemArrayD[2][8]+'</td></tr><tr class=\"td_main_color\" ><td>'+"Disk Space"+'</td><td>'+itemArrayD[2][6]+'</td></tr></table></div>';
	 priceTag.innerHTML = itemArrayD[3];
	 wordFile.href = '../word_Files/' +parentCList[1] + ' ' +parentCList[2]+ ' ' + parentCList[3]+'.docx';
	 
 }
 function changePic(btnLoc) {	
	 
	 if (btnLoc == "left") {
		 
		arrayIndex--;
		
		 
		 if (arrayIndex < 0 ) {
			 
			 arrayIndex = arrLen-1;				
		 
		 }		
		 
		divForData.style.backgroundImage = 'url(\"'+ arr[arrayIndex] +'\")';
		
		
		 
	 }
	
	else {	

	if (arrayIndex == arrLen-1) {
		
		arrayIndex = 0;
	}
	
	else {
		
		arrayIndex++;
	}
	
	divForData.style.backgroundImage = 'url(\"'+ arr[arrayIndex] +'\")';
	
	
	
	}
	 
 } 
 
 }
 

 
 function closeDiv() {
	closingDiv.style.visibility = "hidden";
	closingDiv.style.opacity = 0;	
 }
 


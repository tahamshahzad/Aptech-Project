var iframe = document.getElementById("prod_iframe");
var link = "products_iframe.html"
var values = ["Mobiles","Laptops","Cameras","Tablets","Wearable", "Top Deals"];
var valueLen = values.length;

function getValue(ele) {
	var value = ele.innerHTML;
	for (var i=0; i<valueLen; i++) {
		if	(value == values[i] ) {
		
			iframe.src = link + '#'+values[i];
			
		}
	}
	
}
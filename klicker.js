setInterval(clickNetflix, 1000);

function clickNetflix(){
	const labels = ['Nächste Folge','Intro überspringen'];
	labels.forEach(clicker);
}

function clicker(label){
	const found = getElementByXpath("//button[contains(., '"+label+"')]") ;
	if (found){
		found.click();
		console.log(new Date().toLocaleString() + " " + label);
	}
}

function getElementByXpath(path) {
  return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}


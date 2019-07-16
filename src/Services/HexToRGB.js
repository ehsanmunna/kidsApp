

const CheckLetter = (inputtxt) =>{
    var letterNumber = /^[a-zA-Z]+$/;
   return inputtxt.match(letterNumber);
}

const GetHexaValue = (number) =>{
	var stringyNumber = number + "";

	var firstValue = stringyNumber.charAt(0);
	var lastValue = stringyNumber.charAt(1);
	
	if(CheckLetter(firstValue)){
		firstValue = SetCharValue(firstValue);
	}

	if(CheckLetter(lastValue)){
		lastValue = SetCharValue(lastValue);
	}

	var firstValueParse = parseInt(firstValue);
	var lastValueParse = parseInt(lastValue);
	
	//console.log(typeof parseInt(number))
	//console.log(firstValueParse, lastValueParse);
	return lastValueParse + (firstValueParse * 16);
}


const SetCharValue = (value) =>{
	var returnValue;
	var hexArr = [{a : 10}, {b : 11}, {c : 12}, {d : 13}, {e : 14}, {f : 15}];

	for(var i = 0; i < hexArr.length; i++){
		var elem = hexArr[i];
		var elemKey = Object.keys(hexArr[i])[0];
		var elemVal = elem[elemKey];;
		//console.log(firstValue.toLowerCase())
		if(elemKey == value.toLowerCase()){
			//console.log(elemKey, elemVal);
			returnValue = elemVal;
			break;
		}
	}
	return returnValue;
}


const HexToRGB = (value)=>{
	var red = value.charAt(1) + value.charAt(2);
	var green = value.charAt(3) + value.charAt(4);
	var blue = value.charAt(5) + value.charAt(6);
	
	return {red:GetHexaValue(red), green: GetHexaValue(green), blue:GetHexaValue(blue)};
}

const HexToRGBA = (value, Alfa)=>{
    let hexToRgba = HexToRGB(value);
    hexToRgba.alfa = Alfa / 100;
	
	return hexToRgba;// {R:GetHexaValue(red), G: GetHexaValue(green), B:GetHexaValue(blue), A: Alfa / 100};
}

export { HexToRGB, HexToRGBA }
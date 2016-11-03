var setupone=function() {
	var count=0;
	return function() {
		return (count+=1);
	};
}
var next=setupone();
alert(next());
alert(next());
alert(next()); 
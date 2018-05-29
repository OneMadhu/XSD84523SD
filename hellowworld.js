function StartAction()
    {
		console.log("data: 1. StartAction Called");
        if($('.notif_window').is(':visible')) {    
            console.log("data: 2. notification details are visible");
            var obj =$("#buy");
            //Buy
            console.log("data: 3. Buy button length" + obj.length);
            if(obj.length >0)
            {
				
				obj = obj[0];
				console.log("data: 4. Found Buy button," + obj);                
                var e = document.createEvent('MouseEvents');
                e.initEvent('click', true, true );                
				obj.click(e);
				console.log("data: 4. Buy button clicked!");
            }
            else
            {
                console.log("data: 4. Buy button not found");
			}
			//Sell
			var objSELL =$("#sell");
            //alert(obj);
            console.log("data: 3. SELL button length" + objSELL.length);
            if(objSELL.length >0)
            {
				
				objSELL = objSELL[0];
				console.log("data: 4. Found SELL button," + objSELL);                
                var eSELL = document.createEvent('MouseEvents');
                eSELL.initEvent('click', true, true );                
				objSELL.click(eSELL);
				console.log("data: 4. SELL button clicked!");
            }
            else
            {
                console.log("data: 4. SELL button not found");
            }
        }
        else
        {
            console.log("data: 2. notifications are not visible");

        }
    }
$("body").on('DOMSubtreeModified', "#notifications", function() {
	console.log("data: There is change in Alert notifications");
	StartAction();
});

function StartAction()
    {
        var currentTime = new Date();
        var currentOffset = currentTime.getTimezoneOffset();
        var currentDate = '' + new Date(currentTime.getTime() + (330 + currentOffset)*60000) + '';
		console.log("%cdata: 1. StartAction Called on " + currentDate,"background: #222; color: #bada55");
		//console.log($('.notif_window')[0]);
        //if($('.notif_window')[0].is(':visible')) {    
            console.log("\tdata: 2. notification details are visible");
            var objBUY =$("#buy");
            console.log("\tdata: 3. Buy:" +  $("#buy"));
            //Buy
            console.log("\t\tdata: 3.1. Buy button length" + objBUY.length);
            if(objBUY.length >0)
            {
				
				objBUY = objBUY[0];
				console.log("\t\tdata: 3.2. Found Buy button," + objBUY);                
                var e = document.createEvent('MouseEvents');
                e.initEvent('click', true, true );                
				objBUY.click(e);
				console.log("\t\t%cdata: 3.3. Buy Button clicked!","background: #2AA206; color: #FFFFFF");
            }
            else
            {
                console.log("\t\tdata: 3.2. Buy button not found");
			}
			//Sell
			var objSELL =$("#sell");
			console.log("\tdata: 4. Sell:" +  $("#sell"));
            //alert(obj);
            console.log("\t\tdata: 4.1 SELL button length" + objSELL.length);
            if(objSELL.length >0)
            {
				
				objSELL = objSELL[0];
				console.log("\t\tdata: 4.2 Found SELL button," + objSELL);                
                var eSELL = document.createEvent('MouseEvents');
                eSELL.initEvent('click', true, true );                
				objSELL.click(eSELL);
				console.log("\t\t%cdata: 4.3 SELL button clicked!","background: #D51206; color: #FFFFFF");
            }
            else
            {
                console.log("\t\tdata: 4.2 SELL button not found");
            }
        //}
        //else
        //{
        //    console.log("data: 2. notifications are not visible");

        //}
}
$("body").on('DOMSubtreeModified', "#notifications", function() {
	console.log("data: There is change in Alert notifications");
	StartAction();
});

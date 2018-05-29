/*console.logCopy = console.log.bind(console);
console.log = function(data)
{
       if (arguments.length)
    {
        var currentTime = new Date();
        var currentOffset = currentTime.getTimezoneOffset();
        var currentDate = '[' + new Date(currentTime.getTime() + (330 + currentOffset)*60000) + '] ';
        this.logCopy(currentDate, data);
    }
};*/
function StartAction()
    {
        
		console.log("%c data: 1. StartAction Called","background: #222; color: #bada55");
		console.log($('.notif_window')[0]);
        //if($('.notif_window')[0].is(':visible')) {    
            console.log("data: 2. notification details are visible");
            var obj =$("#buy");
            console.log($("#buy"));
            //Buy
            console.log("data: 3. Buy button length" + obj.length);
            if(obj.length >0)
            {
				
				obj = obj[0];
				console.log("data: 4. Found Buy button," + obj);                
                var e = document.createEvent('MouseEvents');
                e.initEvent('click', true, true );                
				obj.click(e);
				console.log("%c data: 4. Buy button clicked!","background: #2AA206; color: #FFFFFF");
            }
            else
            {
                console.log("data: 4. Buy button not found");
			}
			//Sell
			var objSELL =$("#sell");
			console.log($("#sell"));
            //alert(obj);
            console.log("data: 3. SELL button length" + objSELL.length);
            if(objSELL.length >0)
            {
				
				objSELL = objSELL[0];
				console.log("data: 4. Found SELL button," + objSELL);                
                var eSELL = document.createEvent('MouseEvents');
                eSELL.initEvent('click', true, true );                
				objSELL.click(eSELL);
				console.log("%c data: 4. SELL button clicked!","background: #D51206; color: #FFFFFF");
            }
            else
            {
                console.log("data: 4. SELL button not found");
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

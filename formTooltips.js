
$(document).ready(function(){

	function getTooltipIDsOfElement(elem) {
		var id = $(elem).attr('id');
		if( id != undefined ) {
			var tooltipIDList = $('#'+id).data('tooltipIDList');
		
			var tooltipIDArr = tooltipIDList.split(',');
			return tooltipIDArr;	
		} else
			return null;
	}
	
	function buildTooltips(elem,message) {

		$(elem).tooltip({
			'alignmentType' : 'BOTTOM-RIGHT',
			'text' : message,
			'height' : 40,
			'fontWeight' : 'bold',
			'fontSize' : '15px',
			'borderWidth': 2,
			'opacity' : 1,
			'tooltipType' : 'warning',
			'tooltipIcon' : '',
			'displayIcon' : 'false',
			'gapBetweenElementAndTooltip' : 15,
			'fontColor' : 'grey',
			inputFocus : function(tte) { },
			inputBlur : function(tte) { },			
			inputHover : function(tte) { },
			inputMouseOut : function(tte) { },
			inputMouseOver : function(tte) { }
		});
		
		$(elem).hover(function(){
			$.each(getTooltipIDsOfElement(elem),function(index,value) {
				$('#'+value).stop().toggle();
			});
		});
	}
	
	// Find All Elements with Title Attribute and then build tooltips for those elements
	$('.fieldIcon').each(function(){
		var inputField =  $(this).parent().find('.inputField');
		var inputTitle = $(inputField).attr('title');
		var inputElement = $(this);
		
		
		if( inputTitle == undefined || inputTitle == null )
			return;
		else if( inputTitle.length == 0 )
			return;
		
		buildTooltips(inputElement,inputTitle);
		
		// To Prevent Native Tooltips by Browser, remove title attribute of this element
		$(inputField).attr('title','');
	});
	
	
	
});
var contextPath = window.location.pathname;
(function($) {
    var tooltipCounter = 1 ;
    var elementCounter = 1;
    
    var currentPath = contextPath.substring(0,contextPath.indexOf('/'));
    
	$.fn.tooltip = function(settings) {

		var	infoBackgroundColor = 'rgb(144,216,240)';
		var	infoBorderColor = 'rgb(54,164,217)';
		var	infoFontColor = 'rgb(22,96,143)';

		var	warnBackgroundColor = 'rgb(250,247,170)';
		var	warnBorderColor = 'rgb(249,232,142)';
		var	warnFontColor = 'rgb(0,0,0)';
		
		var	errorBackgroundColor = 'rgb(247,152,146)';
		var	errorBorderColor = 'rgb(206,110,111)';
		var	errorFontColor = 'rgb(195,65,65)';
		
		var	statusSuccessBackgroundColor = 'rgb(207,233,170)';
		var	statusSuccessBorderColor = 'rgb(170,219,102)';
		var	statusSuccessFontColor = 'rgb(145,180,112)';
		
		var	statusErrorBackgroundColor = 'rgb(247,152,146)';
		var	statusErrorBorderColor = 'rgb(206,110,111)';
		var	statusErrorFontColor = 'rgb(195,65,65)';
		
		var	style2BackgroundColor = 'rgb(250,247,170)';
		var	style2BorderColor = 'rgb(249,232,142)';
		var	style2FontColor = 'rgb(220,205,136)';
		
		var config = {
				 		'tooltipType' : 'info',
				 		'tooltipIcon' : currentPath+'/img/info.png',
				 		'backgroundColor' : '',
						'borderColor' : '',
						'fontColor' : '',
						'fontWeight' : 'bold',
						'fontFamily' : 'Helvetica,Arial, Verdana',
						'fontSize' : '12px',
						'alignmentType' : 'LEFT',
						'width' : 200,
						'height' : 40,
						'padding' : '0px 3px 0px 3px',

						'word-wrap' : 'break-word',
						'overflow' : 'auto',
						
						'borderWidth' : 2,
						'arrowWidth' : 10,
						'borderRadius' : 5,

						'gapBetweenElementAndTooltip' : 10,
						'text' : '',
						
						'visibility' : 'hidden',
						
						'mouseover' : 'visible',
						'mouseout' : 'hidden',
						'focus' : 'visible',
						
						'hideOnClick' : 'true',
						'opacity' : 0.8,
						
						'displayIcon' : 'true',
						
						'inputMouseOut' : function(tte){ $(tte).stop().show().hide(); },
						'inputMouseOver' : function(tte) {  $(tte).stop().hide().show();},
						'inputFocus' : function(tte) { },
						'inputBlur' : function(tte) { },
						'inputClick' : function(tte) { },
						'inputHover' : function(tte) { },
						
						'tteMouseOut' : function(tte) { },
						'tteMouseOver' : function(tte) { },
						'tteBlur' : function(tte) { },
						'tteFocus' : function(tte) { },
						'tteClick' : function(tte) { $(tte).stop().show().hide(); } ,
						'tteHover' : function(tte) { }
		 			 };

			    if (settings) {
			    	$.extend(config, settings);
			    }

			    console.log(currentPath);
			    
				this.each(function() {
					var backgroundColor = config.backgroundColor;
					var borderColor = config.borderColor;
					var fontColor = config.fontColor;
					var fontWeight = config.fontWeight;
					var fontFamily = config.fontFamily;
					var fontSize = config.fontSize;
					
					// LEFT, TOP-LEFT, TOP-CENTER, TOP-RIGHT, RIGHT, BOTTOM-LEFT, BOTTOM-CENTER, BOTTOM-RIGHT
					var alignmentType = config.alignmentType;	
					//var alignmentType = "RIGHT";
					//var alignmentType = "TOP-CENTER";
					//var alignmentType = "TOP-LEFT";
					//var alignmentType = "TOP-RIGHT";
					//var alignmentType = "BOTTOM-CENTER";
					//var alignmentType = "BOTTOM-RIGHT";
					//var alignmentType = "BOTTOM-LEFT";

					var text = config.text;

					var inputElement = $(this);
					var offset = inputElement.offset();

					var inputXPos = offset.left;
					var inputYPos = offset.top;

					var tooltipElement = $('<span>');
					var tooltipType = config.tooltipType;
					var tooltipIcon = config.tooltipIcon;

					if( tooltipIcon != null && tooltipIcon != undefined && tooltipIcon.length > 0 )
						;
					else {
						switch( tooltipType ) {
							case 'info' :
								tooltipIcon = currentPath+'img/info.png';
								config.backgroundColor = infoBackgroundColor;
								config.borderColor = infoBorderColor;
								config.fontColor = infoFontColor;
								break;
							case 'warning' :
								tooltipIcon = currentPath+'img/warning.png';
								config.backgroundColor = warnBackgroundColor;
								config.borderColor = warnBorderColor;
								config.fontColor = warnFontColor;
								console.log('warn-'+warnBackgroundColor+', Bo C : '+warnBorderColor+', FC : '+warnFontColor);
								break;
							case 'error' :
								tooltipIcon = currentPath+'img/error.png';
								config.backgroundColor = errorBackgroundColor;
								config.borderColor = errorBorderColor;
								config.fontColor = errorFontColor;								
								break;
							case 'status-success' :
								config.backgroundColor = statusSuccessBackgroundColor;
								config.borderColor = statusSuccessBorderColor;
								config.fontColor = statusSuccessFontColor;								
								tooltipIcon = currentPath+'img/status-success.png';
								break;
							case 'status-error' :
								tooltipIcon = './img/status-error.png';
								config.backgroundColor = statusErrorBackgroundColor;
								config.borderColor = statusErrorBorderColor;
								config.fontColor = statusErrorFontColor;								
								break;
							default :
								tooltipIcon = './img/info.png';
								config.backgroundColor = infoBackgroundColor;
								config.borderColor = infoBorderColor;
								config.fontColor = infoFontColor;							
						}
					}
					if( fontColor != null && fontColor != undefined && fontColor.length > 0 )
						config.fontColor = fontColor;
					if( backgroundColor != null && backgroundColor != undefined && backgroundColor.length > 0 )
						config.backgroundColor = backgroundColor;
					if( borderColor != null && borderColor != undefined && borderColor.length > 0 )
						config.borderColor = borderColor;
					var tooltipContent = "";

					if( config.displayIcon === 'false' ) 
						tooltipIcon = '';

					if( tooltipIcon === '' )
						tooltipContent = "<span></span><span>";
					else
						tooltipContent = "<span><img src='"+tooltipIcon+"' width='24' height='24' style='vertical-align:text-top;'/></span><span>";

					if( text != null && text != undefined && text.length > 0 )
						tooltipContent += text;
					else
						tooltipContent += 'This is a Tooltip ';

					tooltipContent += '</span>';

					tooltipElement.html(tooltipContent);

					var tooltipArrow = $('<span></span>');
					var tooltipArrowOuter = $('<span></span>');

					var gapBetweenElementAndTooltip = config.gapBetweenElementAndTooltip;

					var tooltipWidth = config.width;
					var tooltipHeight = config.height;
					
					 
					var visibility = config.visibility;
					var hideOnClick = config.hideOnClick;
					var opacity = config.opacity;
					
					if( alignmentType === 'TOP-LEFT' || alignmentType === 'TOP-CENTER' || alignmentType === 'TOP-RIGHT' ) {
						var heightNeeded = getHeightNeeded(text,tooltipWidth,tooltipHeight);

						if( heightNeeded >= tooltipHeight ) 
							alignmentType = "BOTTOM-LEFT";
					}	

					var tooltipElementProps = {
												tooltipWidth : config.width,
												tooltipHeight : config.height,
												elementXPos : inputXPos,
												elementYPos : inputYPos,
												elementWidth : $(this).outerWidth(),
												elementHeight : $(this).outerHeight(),
												gapBetweenElementAndTooltip : config.gapBetweenElementAndTooltip,
												alignmentType : alignmentType,
												tooltipElement : tooltipElement,
												tooltipArrow : tooltipArrow,
												tooltipArrowOuter : tooltipArrowOuter,
												backgroundColor : config.backgroundColor, 
												borderColor : config.borderColor,
												arrowAlignmentType : "LEFT",
												tooltipXPos : 0,
												tooltipYPos : 0,
												arrowWidth : config.arrowWidth,
												borderWidth : config.borderWidth
											  };

					positionTooltip(tooltipElementProps);

					tooltipElement.css({
										'background' : config.backgroundColor,
										
										'border-color' : config.borderColor,
										'border-style' : 'solid',
										'border-width' : tooltipElementProps.borderWidth+'px',
										'border-radius' : config.borderRadius,

										'color' : config.fontColor,
										'font-weight' : fontWeight,
										'font-family' : fontFamily,
										'font-size' : fontSize,

										'width' : tooltipWidth,
										'max-width' : tooltipWidth,
										'min-height' : tooltipHeight,
										'padding' : '0px 3px 0px 3px',

										'word-wrap' : 'break-word',
										'overflow' : 'auto'
									});

					var tooltipID = "tooltip-"+tooltipCounter;

					var tooltipContainerElement = $("<span id='"+tooltipID+"'></span>");

					tooltipContainerElement.append(tooltipElement);
					tooltipContainerElement.append(tooltipArrow);
					tooltipContainerElement.append(tooltipArrowOuter);
					
					tooltipContainerElement.css({
													'opacity' : opacity
												});
					
					$('body').append(tooltipContainerElement);

					if( visibility === 'hidden' )
						$('#'+tooltipID).hide();

					// Default Event Bindings
					// Bind Events to Input Element
/*					inputElement.bind("mouseout",function(){
						//hide(tooltipID);
					});
					
					inputElement.bind("mouseover",function(){
						//show(tooltipID);
					});	

					inputElement.bind("focus",function(){
					//	show(tooltipID);
					});

					inputElement.bind("blur",function(){
						//hide(tooltipID);
					});
					
					inputElement.bind("click",function(){
						//show(tooltipID);
					});
					
					inputElement.bind("hover",function(){
						//show(tooltipID);
					});
					
					// Bind Events to Tool tip Element
					$('#'+tooltipID).bind("mouseout",function(){
						hide(tooltipID);
					});
					
					$('#'+tooltipID).bind("mouseover",function(){
						show(tooltipID);
					});

					$('#'+tooltipID).bind("focus",function(){
						//show(tooltipID);
					});

					$('#'+tooltipID).bind("blur",function(){
						//hide(tooltipID);
					});
					
					$('#'+tooltipID).bind("click",function(){
						//hide(tooltipID);
					});
					
					$('#'+tooltipID).bind("hover",function(){
						//hide(tooltipID);
					});
*/
					
					// Bind Events to Input Element based on user defined functions
					inputElement.bind("mouseout",function(){
						config.inputMouseOut.call(this,$('#'+tooltipID));
					});
					
					inputElement.bind("mouseover",function(){
						config.inputMouseOver.call(this,$('#'+tooltipID));
					});	

					inputElement.bind("focus",function(){
						config.inputFocus.call(this,$('#'+tooltipID));
					});

					inputElement.bind("blur",function(){
						config.inputBlur.call(this,$('#'+tooltipID));
					});
					
					inputElement.bind("click",function(){
						config.inputClick.call(this,$('#'+tooltipID));
					});
					
					inputElement.bind("hover",function(){
						config.inputHover.call(this,$('#'+tooltipID));
					});
					
					// Bind Events to Tool tip Element based on user defined functions
					$('#'+tooltipID).bind("mouseout",function(){
						config.tteMouseOut.call(this,$('#'+tooltipID));
					});
					
					$('#'+tooltipID).bind("mouseover",function(){
						config.tteMouseOver.call(this,$('#'+tooltipID));
					});	

					$('#'+tooltipID).bind("focus",function(){
						config.tteFocus.call(this,$('#'+tooltipID));
					});

					$('#'+tooltipID).bind("blur",function(){
						config.tteBlur.call(this,$('#'+tooltipID));
					});
					
					$('#'+tooltipID).bind("click",function(){
						config.tteClick.call(this,$('#'+tooltipID));
					});
					
					$('#'+tooltipID).bind("hover",function(){
						config.tteHover.call(this,$('#'+tooltipID));
					});

/*
					$(document).click(function(e){
					    //display the x and y axis values inside the P element
					    console.log("X Axis : " + e.pageX + " | Y Axis " + e.pageY);
					});
*/
					var elementID = inputElement.attr('id');
					if( elementID == null || elementID == undefined || elementID.length == 0 ) {
						elementID = inputElement.prop('tagName')+'-'+elementCounter;
						inputElement.attr('id',elementID);
						elementCounter++;
					}
					
					var existingData = $('#'+elementID).data("tooltipIDList");
					if( existingData == null || existingData == undefined || existingData.length == 0 )					
						$('#'+elementID).data("tooltipIDList",""+tooltipID);
					else {
						var newData = existingData+','+tooltipID;
						$('#'+elementID).data("tooltipIDList",""+newData);
					}
					
					tooltipCounter++;				
				});
		
		function hide(tooltipID) {
			$('#'+tooltipID).stop().show().hide();
		}
		
		function show(tooltipID) {
			$('#'+tooltipID).stop().hide().show();
		}
		
		function toggle(tooltipID) {
			$('#'+tooltipID).stop().toggle();
		}

		function positionTooltip( tteProps ) {

			var windowWidth = $(window).width();
			var windowHeight = $(window).height();

			if( tteProps.alignmentType === 'RIGHT' ) {
				alignRight( tteProps );
			}

			else if( tteProps.alignmentType === 'LEFT' ) {
				alignLeft( tteProps );
			}

			else if( tteProps.alignmentType === 'TOP-CENTER' ) {
				alignTopCenter( tteProps );
			}

			else if( tteProps.alignmentType === 'TOP-LEFT' ) {
				alignTopLeft( tteProps );
			}

			else if( tteProps.alignmentType === 'TOP-RIGHT' ) {
				alignTopRight( tteProps );
			}

			else if( tteProps.alignmentType === 'BOTTOM-CENTER' ) {
				alignBottomCenter( tteProps );
			}

			else if( tteProps.alignmentType === 'BOTTOM-LEFT' ) {
				alignBottomLeft( tteProps );
			}

			else if( tteProps.alignmentType === 'BOTTOM-RIGHT' ) {
				alignBottomRight( tteProps );
			}
			
			tteProps.tooltipElement.css({
				'position' : 'absolute',
				'left' : tteProps.tooltipXPos,
				'top' : tteProps.tooltipYPos
			});

		if( tteProps.arrowAlignmentType === 'TOP-LEFT' )
			alignArrowTopLeft(tteProps);
		else if( tteProps.arrowAlignmentType === 'TOP-CENTER' )
			alignArrowTopCenter(tteProps);
		else if( tteProps.arrowAlignmentType === 'TOP-RIGHT' )
			alignArrowTopRight(tteProps);

		else if( tteProps.arrowAlignmentType === 'BOTTOM-LEFT' )
			alignArrowBottomLeft(tteProps);
		else if( tteProps.arrowAlignmentType === 'BOTTOM-CENTER' )
			alignArrowBottomCenter(tteProps);
		else if( tteProps.arrowAlignmentType === 'BOTTOM-RIGHT' )
			alignArrowBottomRight(tteProps);

		else if( tteProps.arrowAlignmentType === 'RIGHT' )
			alignArrowRight(tteProps);	
		else if( tteProps.arrowAlignmentType === 'LEFT' )
			alignArrowLeft(tteProps);
	}
		
		function alignRight( tteProps ) {
			tteProps.tooltipXPos = tteProps.elementXPos + tteProps.elementWidth + tteProps.gapBetweenElementAndTooltip;
			tteProps.tooltipYPos = tteProps.elementYPos ;

			tteProps.arrowAlignmentType = "LEFT";

			
			if( (tteProps.tooltipXPos + tteProps.tooltipWidth) > $(window).width() ) {
				//alignBottomCenter(tteProps);
				alignBottomRight(tteProps);
				//alignBottomLeft(tteProps);
			} 		
		}
		
		function alignLeft( tteProps ) {
			tteProps.tooltipXPos = tteProps.elementXPos - tteProps.gapBetweenElementAndTooltip - tteProps.tooltipWidth ;
			tteProps.tooltipYPos = tteProps.elementYPos ;

			tteProps.arrowAlignmentType = "RIGHT";
			
			 // If Hides from left
			if( tteProps.tooltipXPos < 0 || ( tteProps.tooltipXPos + tteProps.tooltipWidth + tteProps.gapBetweenElementAndTooltip > tteProps.elementXPos ) ) {
				//alignBottomCenter(tteProps);
				//alignBottomRight(tteProps);
				alignBottomLeft(tteProps);
				//alignRight(tteProps);
			}
		}

		function alignTopLeft( tteProps ) {
			tteProps.tooltipXPos = tteProps.elementXPos ;
			tteProps.tooltipYPos = tteProps.elementYPos - tteProps.tooltipHeight - tteProps.gapBetweenElementAndTooltip;
			
			tteProps.arrowAlignmentType = "BOTTOM-LEFT";
			if( tteProps.tooltipXPos < 0 )
				alignTopRight(tteProps);
			else if( tteProps.tooltipYPos < 0 )
				alignBottomLeft(tteProps);
		}
		
		function alignTopCenter( tteProps ) {
			tteProps.tooltipXPos = (tteProps.elementXPos + tteProps.elementWidth )/2 - (tteProps.tooltipWidth)/2;
			tteProps.tooltipYPos = tteProps.elementYPos - tteProps.tooltipHeight - tteProps.gapBetweenElementAndTooltip;

			tteProps.arrowAlignmentType = "BOTTOM-CENTER";

			if( tteProps.tooltipXPos < 0 )
				alignTopRight(tteProps);
			else if( tteProps.tooltipYPos < 0 )
				alignBottomCenter(tteProps);
		}
		
		function alignTopRight( tteProps ) {
			tteProps.tooltipXPos = tteProps.elementXPos + tteProps.elementWidth - (tteProps.tooltipWidth + (2*tteProps.borderWidth) + (2*tteProps.borderWidth) ) ;
			tteProps.tooltipYPos = tteProps.elementYPos - tteProps.tooltipHeight - tteProps.gapBetweenElementAndTooltip;

			tteProps.arrowAlignmentType = "BOTTOM-RIGHT";

			if( (tteProps.tooltipXPos <=  0 ) || ((tteProps.tooltipXPos + tteProps.tooltipWidth) <= 0 ) )
				alignTopLeft(tteProps);
			else if( tteProps.tooltipYPos < 0 )
				alignBottomRight(tteProps);
		}
		
		function alignBottomLeft( tteProps ) {
			tteProps.tooltipXPos = tteProps.elementXPos ;
			tteProps.tooltipYPos = tteProps.elementYPos +  tteProps.elementHeight + tteProps.gapBetweenElementAndTooltip;

			tteProps.arrowAlignmentType = "TOP-LEFT";

			if( tteProps.tooltipXPos < 0 )
				alignBottomRight(tteProps);
		}
		
		function alignBottomCenter( tteProps ) {
			tteProps.tooltipXPos = (tteProps.elementXPos + (tteProps.elementWidth )/2) - ((tteProps.tooltipWidth)/2) ;
			tteProps.tooltipYPos = tteProps.elementYPos +  tteProps.elementHeight + tteProps.gapBetweenElementAndTooltip;

			tteProps.arrowAlignmentType = "TOP-CENTER";		
			
			if( tteProps.tooltipXPos < 0 )
				alignBottomRight(tteProps);
		}
		
		function alignBottomRight( tteProps ) {
			tteProps.tooltipXPos = tteProps.elementXPos + tteProps.elementWidth - (tteProps.tooltipWidth + (2*tteProps.borderWidth) + (2*tteProps.borderWidth) );
			tteProps.tooltipYPos = tteProps.elementYPos + tteProps.elementHeight + tteProps.gapBetweenElementAndTooltip;

			tteProps.arrowAlignmentType = "TOP-RIGHT";

			if( (tteProps.tooltipXPos <=  0 ) || ((tteProps.tooltipXPos + tteProps.tooltipWidth) <= 0 ) )
				alignBottomLeft(tteProps);
		}
		
		function alignArrowTopLeft( tteProps ) {
			/* Arrow-Up Class */
			tteProps.tooltipArrow.css({
								'width' : '0',
								'height' : '0',

								'border-left-width' : tteProps.arrowWidth+'px',
								'border-left-style' : 'solid',
								'border-left-color' : 'transparent',
									
								'border-right-width' : tteProps.arrowWidth+'px',
								'border-right-style' : 'solid',
								'border-right-color' : 'transparent',
													
								'border-bottom-width' : tteProps.arrowWidth+'px',
								'border-bottom-style' : 'solid',
								'border-bottom-color' : tteProps.backgroundColor
							});

			tteProps.tooltipArrow.css({
								'position' : 'absolute',
								'left' : tteProps.tooltipXPos + tteProps.arrowWidth,
								'top' : tteProps.tooltipYPos - (tteProps.arrowWidth - (tteProps.borderWidth+(tteProps.borderWidth/2))),

								'z-index' : '1000'
							});

			tteProps.tooltipArrowOuter.css({
								'width' : '0',
								'height' : '0',

								'border-left-width' : tteProps.arrowWidth+'px',
								'border-left-style' : 'solid',
								'border-left-color' : 'transparent',
									
								'border-right-width' : tteProps.arrowWidth+'px',
								'border-right-style' : 'solid',
								'border-right-color' : 'transparent',
													
								'border-bottom-width' : tteProps.arrowWidth+'px',
								'border-bottom-style' : 'solid',
								'border-bottom-color' : tteProps.borderColor
								
							});

			tteProps.tooltipArrowOuter.css({
								'position' : 'absolute',
								'left' : tteProps.tooltipXPos + tteProps.arrowWidth,
								'top' : tteProps.tooltipYPos - tteProps.arrowWidth 
							});								
		}

		function alignArrowTopCenter(tteProps) {
			/* Arrow-Top-Center Class */
			tteProps.tooltipArrow.css({
								'width' : '0',
								'height' : '0',

								'border-left-width' : tteProps.arrowWidth+'px',
								'border-left-style' : 'solid',
								'border-left-color' : 'transparent',
									
								'border-right-width' : tteProps.arrowWidth+'px',
								'border-right-style' : 'solid',
								'border-right-color' : 'transparent',
													
								'border-bottom-width' : tteProps.arrowWidth+'px',
								'border-bottom-style' : 'solid',
								'border-bottom-color' : tteProps.backgroundColor
							});

			tteProps.tooltipArrow.css({
								'position' : 'absolute',
								'left' : tteProps.tooltipXPos+ (tteProps.tooltipWidth/2) - tteProps.arrowWidth ,
								'top' : tteProps.tooltipYPos - (tteProps.arrowWidth - (tteProps.borderWidth+(tteProps.borderWidth/2))) ,

								'z-index' : '1000'
							});

			tteProps.tooltipArrowOuter.css({
								'width' : '0',
								'height' : '0',

								'border-left-width' : tteProps.arrowWidth+'px',
								'border-left-style' : 'solid',
								'border-left-color' : 'transparent',
									
								'border-right-width' : tteProps.arrowWidth+'px',
								'border-right-style' : 'solid',
								'border-right-color' : 'transparent',
													
								'border-bottom-width' : tteProps.arrowWidth+'px',
								'border-bottom-style' : 'solid',
								'border-bottom-color' : tteProps.borderColor
								
							});

			tteProps.tooltipArrowOuter.css({
								'position' : 'absolute',
								'left' : tteProps.tooltipXPos+ (tteProps.tooltipWidth/2) - tteProps.arrowWidth ,
								'top' : tteProps.tooltipYPos - tteProps.arrowWidth 
							});			
		}
		
		function alignArrowTopRight(tteProps) {
			/* Arrow-Top-Right Class */
			tteProps.tooltipArrow.css({
								'width' : '0',
								'height' : '0',

								'border-left-width' : tteProps.arrowWidth+'px',
								'border-left-style' : 'solid',
								'border-left-color' : 'transparent',
									
								'border-right-width' : tteProps.arrowWidth+'px',
								'border-right-style' : 'solid',
								'border-right-color' : 'transparent',
													
								'border-bottom-width' : tteProps.arrowWidth+'px',
								'border-bottom-style' : 'solid',
								'border-bottom-color' : tteProps.backgroundColor
							});

			tteProps.tooltipArrow.css({
								'position' : 'absolute',
								'left' : tteProps.tooltipXPos+ tteProps.tooltipWidth - (2*tteProps.arrowWidth),
								'top' : tteProps.tooltipYPos - (tteProps.arrowWidth - (tteProps.borderWidth+(tteProps.borderWidth/2))),

								'z-index' : '1000'
							});

			tteProps.tooltipArrowOuter.css({
								'width' : '0',
								'height' : '0',

								'border-left-width' : tteProps.arrowWidth+'px',
								'border-left-style' : 'solid',
								'border-left-color' : 'transparent',
									
								'border-right-width' : tteProps.arrowWidth+'px',
								'border-right-style' : 'solid',
								'border-right-color' : 'transparent',
													
								'border-bottom-width' : tteProps.arrowWidth+'px',
								'border-bottom-style' : 'solid',
								'border-bottom-color' : tteProps.borderColor
								
							});

			tteProps.tooltipArrowOuter.css({
								'position' : 'absolute',
								'left' : tteProps.tooltipXPos+ tteProps.tooltipWidth - (2*tteProps.arrowWidth),
								'top' : tteProps.tooltipYPos - tteProps.arrowWidth 
							});
		}
		
		function alignArrowBottomLeft(tteProps) {
			/* Arrow-Bottom-Left Class */
			tteProps.tooltipArrow.css({
								'width' : '0',
								'height' : '0',

								'border-left-width' : tteProps.arrowWidth+'px',
								'border-left-style' : 'solid',
								'border-left-color' : 'transparent',
									
								'border-right-width' : tteProps.arrowWidth+'px',
								'border-right-style' : 'solid',
								'border-right-color' : 'transparent',
													
								'border-top-width' : tteProps.arrowWidth+'px',
								'border-top-style' : 'solid',
								'border-top-color' : tteProps.backgroundColor
							});

			tteProps.tooltipArrow.css({
								'position' : 'absolute',
								'left' : tteProps.tooltipXPos + (tteProps.arrowWidth) ,
								'top' : tteProps.tooltipYPos + tteProps.tooltipHeight - (tteProps.borderWidth+(tteProps.borderWidth/2)) ,

								'z-index' : '1000'
							});

			tteProps.tooltipArrowOuter.css({
				'width' : '0',
				'height' : '0',
				
				'border-left-width' : tteProps.arrowWidth+'px',
				'border-left-style' : 'solid',
				'border-left-color' : 'transparent',
					
				'border-right-width' : tteProps.arrowWidth+'px',
				'border-right-style' : 'solid',
				'border-right-color' : 'transparent',
									
				'border-top-width' : tteProps.arrowWidth+'px',
				'border-top-style' : 'solid',
				'border-top-color' : tteProps.borderColor
				
			});

			tteProps.tooltipArrowOuter.css({
				'position' : 'absolute',
				'left' : tteProps.tooltipXPos + (tteProps.arrowWidth) ,
				'top' : tteProps.tooltipYPos + tteProps.tooltipHeight + tteProps.borderWidth 
			});
		}

		function alignArrowBottomCenter(tteProps) {
			/* Arrow-Bottom-Center Class */
			tteProps.tooltipArrow.css({
								'width' : '0',
								'height' : '0',

								'border-left-width' : tteProps.arrowWidth+'px',
								'border-left-style' : 'solid',
								'border-left-color' : 'transparent',
									
								'border-right-width' : tteProps.arrowWidth+'px',
								'border-right-style' : 'solid',
								'border-right-color' : 'transparent',
													
								'border-top-width' : tteProps.arrowWidth+'px',
								'border-top-style' : 'solid',
								'border-top-color' : tteProps.backgroundColor
							});

			tteProps.tooltipArrow.css({
								'position' : 'absolute',
								'left' : tteProps.tooltipXPos + (tteProps.tooltipWidth/2) - (tteProps.arrowWidth) ,
								'top' : tteProps.tooltipYPos + tteProps.tooltipHeight - (tteProps.borderWidth - (tteProps.borderWidth/2) ) ,

								'z-index' : '1000'
							});

			tteProps.tooltipArrowOuter.css({
				'width' : '0',
				'height' : '0',
				
				'border-left-width' : tteProps.arrowWidth+'px',
				'border-left-style' : 'solid',
				'border-left-color' : 'transparent',
					
				'border-right-width' : tteProps.arrowWidth+'px',
				'border-right-style' : 'solid',
				'border-right-color' : 'transparent',
									
				'border-top-width' : '12px',
				'border-top-style' : 'solid',
				'border-top-color' : tteProps.borderColor
				
			});

			tteProps.tooltipArrowOuter.css({
				'position' : 'absolute',
				'left' : tteProps.tooltipXPos + (tteProps.tooltipWidth/2) - (tteProps.arrowWidth) ,
				'top' : tteProps.tooltipYPos + tteProps.tooltipHeight + tteProps.borderWidth
			});			
		}

		function alignArrowBottomRight(tteProps) {
			/* Arrow-Bottom-Right Class */
			tteProps.tooltipArrow.css({
								'width' : '0',
								'height' : '0',

								'border-left-width' : tteProps.arrowWidth+'px',
								'border-left-style' : 'solid',
								'border-left-color' : 'transparent',
									
								'border-right-width' : tteProps.arrowWidth+'px',
								'border-right-style' : 'solid',
								'border-right-color' : 'transparent',
													
								'border-top-width' : tteProps.arrowWidth+'px',
								'border-top-style' : 'solid',
								'border-top-color' : tteProps.backgroundColor
							});

			tteProps.tooltipArrow.css({
								'position' : 'absolute',
								'left' : tteProps.tooltipXPos + tteProps.tooltipWidth - (2*tteProps.arrowWidth) - (tteProps.arrowWidth/2) ,
								'top' : tteProps.tooltipYPos + (tteProps.tooltipHeight - (tteProps.borderWidth + (tteProps.borderWidth/2))) ,

								'z-index' : '1000'
							});

			tteProps.tooltipArrowOuter.css({
				'width' : '0',
				'height' : '0',
				
				'border-left-width' : tteProps.arrowWidth+'px',
				'border-left-style' : 'solid',
				'border-left-color' : 'transparent',
					
				'border-right-width' : tteProps.arrowWidth+'px',
				'border-right-style' : 'solid',
				'border-right-color' : 'transparent',
									
				'border-top-width' : tteProps.arrowWidth+'px',
				'border-top-style' : 'solid',
				'border-top-color' : tteProps.borderColor
				
			});

			tteProps.tooltipArrowOuter.css({
				'position' : 'absolute',
				'left' : tteProps.tooltipXPos+ tteProps.tooltipWidth - (2*tteProps.arrowWidth) - (tteProps.arrowWidth/2),
				'top' : tteProps.tooltipYPos + tteProps.tooltipHeight + tteProps.borderWidth 
			});			
		}

		function alignArrowRight(tteProps) {
			/* Arrow-Right Class */
			tteProps.tooltipArrow.css({
								'width' : '0',
								'height' : '0',
													
								'border-top-width' : tteProps.arrowWidth+'px',
								'border-top-style' : 'solid',
								'border-top-color' : 'transparent',

								'border-bottom-width' : tteProps.arrowWidth+'px',
								'border-bottom-style' : 'solid',
								'border-bottom-color' : 'transparent',
								
								'border-left-width' : tteProps.arrowWidth+'px',
								'border-left-style' : 'solid',
								'border-left-color' : tteProps.backgroundColor,

								'z-index' : '1000'
							});

			tteProps.tooltipArrow.css({
								'position' : 'absolute',
								'left' : tteProps.tooltipXPos + tteProps.tooltipWidth + (2*tteProps.borderWidth) + (tteProps.borderWidth/2),
								'top' : tteProps.tooltipYPos + (2*tteProps.borderWidth + (tteProps.borderWidth/2) )
							});

			tteProps.tooltipArrowOuter.css({
				'width' : '0',
				'height' : '0',
									
				'border-top-width' : tteProps.arrowWidth+'px',
				'border-top-style' : 'solid',
				'border-top-color' : 'transparent',

				'border-bottom-width' : tteProps.arrowWidth+'px',
				'border-bottom-style' : 'solid',
				'border-bottom-color' : 'transparent',
				
				'border-left-width' : tteProps.arrowWidth+'px',
				'border-left-style' : 'solid',
				'border-left-color' : tteProps.borderColor

				
			});

			tteProps.tooltipArrowOuter.css({
				'position' : 'absolute',
				'left' : tteProps.tooltipXPos + tteProps.tooltipWidth + (4*tteProps.borderWidth),
				'top' : tteProps.tooltipYPos + (2*tteProps.borderWidth + (tteProps.borderWidth/2))
			});
		}

		function alignArrowLeft(tteProps) {
			/* Arrow-Left Class */
			tteProps.tooltipArrow.css({
								'width' : '0',
								'height' : '0',

								'border-top-width' : tteProps.arrowWidth+'px',
								'border-top-style' : 'solid',
								'border-top-color' : 'transparent',
									
								'border-bottom-width' : tteProps.arrowWidth+'px',
								'border-bottom-style' : 'solid',
								'border-bottom-color' : 'transparent',
													
								'border-right-width' : tteProps.arrowWidth+'px',
								'border-right-style' : 'solid',
								'border-right-color' : tteProps.backgroundColor,

								'z-index' : '1000'								
							});

			tteProps.tooltipArrow.css({
								'position' : 'absolute',
								'left' : tteProps.tooltipXPos - (2*tteProps.borderWidth) ,
								'top' : tteProps.tooltipYPos + (3*tteProps.borderWidth)
							});

			tteProps.tooltipArrowOuter.css({
				'width' : '0',
				'height' : '0',
									
				'border-top-width' : tteProps.arrowWidth+'px',
				'border-top-style' : 'solid',
				'border-top-color' : 'transparent',
					
				'border-bottom-width' : tteProps.arrowWidth+'px',
				'border-bottom-style' : 'solid',
				'border-bottom-color' : 'transparent',
									
				'border-right-width' : tteProps.arrowWidth+'px',
				'border-right-style' : 'solid',
				'border-right-color' : tteProps.borderColor
			});

			tteProps.tooltipArrowOuter.css({
				'position' : 'absolute',
				'left' : tteProps.tooltipXPos - (4*tteProps.borderWidth),
				'top' : tteProps.tooltipYPos + (3*tteProps.borderWidth)
			});				
		}

		function getHeightNeeded(content,actualWidth,actualHeight) {
		    var text = content;
		    var div = document.createElement("span");
		    div.style.position="absolute";
		    div.style.top="111px";
		    div.style.left="111px";
		    
		    div.style.width=actualWidth+"px";
		    div.style.minHeight = "40px";
		    div.style.overflow="auto";
		    div.style.wordWrap = "break-word";
		    div.id = "wid";
		    div.innerHTML=text;
		    document.body.appendChild(div);
		    
		    var w = document.getElementById("wid").offsetHeight;
		    var w1= document.getElementById("wid").scrollHeight;

		    $('#wid').remove();

		    return w;
		}
		/* Allow jQuery chaining */
		return this;
	};
	
}(jQuery));


var TabsView = function(){
  var flag = 3;
  var self=this;
   
   // returns the name of the active tab
  // sets the current tab
  self.activeTab = function(){
   
    var bat = $(".btn1Text").val();
    var thistab = $("input:checked").next().text();
    if($(".btn1Text").val()){
      $('.radio-tabs').find('#'+bat).click();
      
    } else {
      $(".answered-line").html(thistab).css('color','black');
    }

  };
  
  // returns the name of the title
  // sets the title name  
  self.tabTitle = function(){ 
  
    var tabName = $(".btn1Text2").val();
    var title = $(".btn1Text3").val();
    if($(".btn1Text2").val() && $(".btn1Text3").val()){
      $('.radio-tabs').find('#'+tabName).next().html(title);
     
    } else if($(".btn1Text2").val() && $('.answered-line').val() == null ){
        var currentTitle = $('.radio-tabs').find('#'+tabName).next().html();
        $(".answered-line").append(currentTitle);
    };
    
  }; 
 
   
// adds a new tab with the title and content
  self.addTab = function(){ 
   
    var tabName = $(".btn1Text5").val();
    var titleName = $(".btn1Text6").val();
    var contentName = $(".btn1Text7").val(); 
    
 if (flag >= 6){ // limit the creation of tabs 
  alert ("mnogo tabov!!!");
  $(".answered-line").html('Много вкладочек создаешь парниша!!!11').css('color','#CD5C5C'); 
  return;
 }
 
  $('input').each(function() {
    if($(this).attr('id') == tabName){
      $(".answered-line").html("нельзя создавать одинаковые айдишники!").css('color','#CD5C5C');
      removetab();
   }
});
  
   
  if($(".btn1Text5").val() && $(".btn1Text6").val() || $(".btn1Text7").val() ){
    
  var div = document.createElement('div');
  $(div).addClass("tab"); 
    
  var input = document.createElement('input');
  var attrInput = {
    value:'4',
    id: tabName,
    name:'group1',
    type:'radio'
     
  };
  $(input).attr(attrInput);
    
  var label = document.createElement('label');
  $(label).attr("for", tabName);  
    
  var span = document.createElement('span');   
  span.innerHTML= titleName;  
    
  var content = document.createElement('div');     
  $(content).addClass("content");
  content.innerHTML= contentName;   
    
  $(label).append(span); 
  $(div).append(input);
  $(div).append(label);  
  $(div).append(content);    
  $('.radio-tabs').last().append(div);
   flag = flag + 1; 
     
   }
    
  }; 
      
  // remove tab
  self.removetab = function(){
    flag = flag-1;
    var tabName = $(".btn1Text8").val();
    $('#'+tabName).closest('.tab').remove();
	$(".answered-line").html("");
  };  

  return self;
  
};


var tabs = new TabsView(); 



$('.btn1').click(function () {
  tabs.activeTab(); 
  
});

$('.btn2').click(function () {
  tabs.tabTitle(); 
  
});

$('.btn3').click(function () {
  tabs.addTab(); 
  
});


$('.btn4').click(function () {
  tabs.removetab(); 
  
});
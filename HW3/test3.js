
 var init=0;
 var startDate;
 var clocktimer;
 
 function startTime() { 
  var currentDate = new Date;
  t = new Date (currentDate - initialDate);
  var ms = t.getMilliseconds();
  var s = t.getSeconds();
  var m = t.getMinutes();
  var h = t.getUTCHours();
  var result = h + m + s + ms;
  
  if (h<10) h='0'+h;
  if (m<10) m='0'+m;
  if (s<10) s='0'+s;
  if (ms<10) ms='0'+ms;
  document.clockform.clock.value = h + ':' + m + ':' + s + '.' + ms;
  clocktimer = setTimeout("startTime()",1);
 }
 

 function findTime() {
   if (document.clockform.start.value === 'Start') {
    initialDate = new Date;
    startTime();
    document.clockform.start.value = 'Pause'; 
  }
   else if (document.clockform.start.value === 'Pause') {
    document.clockform.start.value = 'Continue'; 
    clearTimeout(clocktimer);
  }
   else if (document.clockform.start.value === 'Continue') {
    clearTimeout(clocktimer);
    startTime();  
    document.clockform.start.value = 'Pause';
  }
}
   
  function clearField() {
    clearTimeout(clocktimer);
    document.clockform.clock.value='00:00:00.000';
    document.clockform.start.value = 'Start';
  }


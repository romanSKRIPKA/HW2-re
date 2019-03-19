
 var init=0; // не используется
 var startDate; // не используется
 var clocktimer;
 
 function startTime() { 
  // так сработае, но тут синтаксическа ошибка. Всегда коли пишеш new Function() то после функции нада скобки.
  var currentDate = new Date;
  // тут конструктор Дати визвав правильно - со скобками :)
  t = new Date (currentDate - initialDate);
  var ms = t.getMilliseconds();
  var s = t.getSeconds();
  var m = t.getMinutes();
  var h = t.getUTCHours();
  var result = h + m + s + ms; // переменна не используется
  
  if (h<10) h='0'+h;
  if (m<10) m='0'+m;
  if (s<10) s='0'+s;
  if (ms<10) ms='0'+ms;
  // це не ошибка, но через атрибут name елементи лучше не шукать. Используй document.getElementBy... або document.querySelector;
  document.clockform.clock.value = h + ':' + m + ':' + s + '.' + ms;

  // функцию в setTimeout передавай без кавычок ы без скобок после. типа так setTimeout(startTime, 1)
  // не знаю даже як воно ще робить через кавички - неде такого не бачив )
  clocktimer = setTimeout("startTime()",1);
 }
 

 function findTime() {
   // завязуваться на значение атрибута value тоже така собі ідейка. А если завтра там скажуть написать "Шляпа"... Лучше задать якийсь клас кнопке или уже id и через document.getElementBy... потом уже до нього добираться. 
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


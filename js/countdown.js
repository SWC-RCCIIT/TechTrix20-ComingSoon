
function getTimeRemaining(endtime) {
  
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, endtime) {


  function updateClock() {
    var t = getTimeRemaining(endtime);
  
      $("div[name='seconds']").html(t.seconds);
      $("div[name='minutes']").html(t.minutes);
      $("div[name='hours']").html(t.hours);
      $("div[name='days']").html(t.days);
   
    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}
console.log("🐽");
var deadline = new Date(Date.parse(new Date()) + 21 * 24 * 60 * 60 * 1000);
initializeClock('clockdiv', deadline);


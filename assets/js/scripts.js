//
//  COPIAR IP
//
var ip = document.querySelector('#ip');
var ipSpan = ip.querySelector('span');
var ipTextarea = ip.querySelector('textarea');
ip.addEventListener('click', function () {
  ip.classList.add('is-active');
  setTimeout(() => {
    ip.classList.remove('is-active');
  }, 1500);

  ipTextarea.classList.add('is-active');
  ipTextarea.value = ipSpan.innerHTML;
  ipTextarea.select();
  ipTextarea.setSelectionRange(0, 99999);
  document.execCommand("copy");
  ipTextarea.classList.remove('is-active');
});

//
//  STATUS DO SERVIDOR
//
$.getJSON('https://api.mcsrvstat.us/bedrock/3/' + 'brasilcraft.ninjaspmc.com.br' + ':10095', function(data) {
  if (!data.online) {
    $('#status').html('<i class="fas fa-times"></i> Servidor offline');
    $('#motd').html('-');
    $('#online').html('-');
  } else {
    $('#status').html('<i class="fas fa-check"></i> Servidor online');
    $('#motd').html(data.motd.html[0]);
    $('#online').html(data.players.online);
  }
});

//
//  MENU MOBILE
//
$('.navbar-burger').on('click', function() {
  document.querySelector('.navbar-menu').classList.toggle('is-active');
});
"use strict";
(() => {
  const modalButtons = Array.from(document.querySelectorAll('.open-modal-js'));
  modalButtons.forEach(btn => {
    btn.addEventListener('click', function(){
      const modal = btn.getAttribute('data-modal');
      document.getElementById(modal).style.display = 'block';
    });
  });

  const closeButtons = Array.from(document.querySelectorAll('.close-modal-js'));
  closeButtons.forEach(btn => {
    btn.addEventListener('click', function(){
      let modal = btn.closest('.modal');
      modal.style.display = 'none';
    });
  });

  window.addEventListener('click', function(e){
    if (e.target.classList.contains('modal')) {
      e.target.style.display = 'none';
    }
  });
})();

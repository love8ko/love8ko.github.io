const dialog=document.querySelector('.viewer');
document.querySelectorAll('.zoom').forEach(button=>button.addEventListener('click',()=>{const src=button.dataset.full;dialog.querySelector('img').src=src;dialog.querySelector('img').alt=button.querySelector('img').alt;dialog.querySelector('a').href=src;dialog.showModal()}));
dialog.querySelector('button').addEventListener('click',()=>dialog.close());dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close()});

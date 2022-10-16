const list = document.querySelectorAll('.list');
function activeLink(){
  list.forEach((item) =>
    item.classList.remove('active'));
    this.classList.add('active');
}
  list.forEach((item) =>
  item.addEventListener('click', activeLink));

  
  const chk = document.getElementById('chk');

  chk.addEventListener('change', () =>{
    document.body.classList.toggle('dark');
  })

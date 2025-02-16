// найшов бургер нажав
document.querySelector('.burger').addEventListener('click',function()
{
   // якщо ctive є удаляєм якщо не має додаємо
this.classList.toggle('active');
// находит элемент с классом .nav и переключает у него класс open.
document.querySelector('.menu_burger').classList.toggle('open')
  }
)

document.querySelector('.close').addEventListener('click',function()
{
   // якщо ctive є удаляєм якщо не має додаємо
this.classList.toggle('active');
// находит элемент с классом .nav и переключает у него класс open.
document.querySelector('.menu_burger').classList.toggle('open')
  }
)
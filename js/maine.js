const header = document.querySelector('header'),
      headerColums = document.querySelector('.block-carts__colums');

      console.log(headerColums);

  


    // Определяем функцию, которая будет вызываться при сдвиге страницы
    function handleScroll() {
      if (window.pageYOffset > 50) {
        header.classList.add('change-color');
        headerColums.style = `display: block; display: flex;  `;
      
     

      } else {
        header.classList.remove('change-color');
       


   headerColums.style = `display: none; transition-duration:1s;`;

      }
    }

    // Привязываем функцию handleScroll к событию прокрутки страницы
    window.addEventListener('scroll', handleScroll);
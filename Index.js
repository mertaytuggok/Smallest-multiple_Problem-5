//2520, 1'den 10'a kadar olan sayıların her birine kalansız bölünebilen en küçük sayıdır.

//1'den 20'ye kadar olan sayıların tamamına tam bölünebilen en küçük pozitif sayı kaçtır?
const checkSmallNumber= () => {  
    let num = 20;
    while (num) {  
      if (                          
        num % 19 === 0 && num % 17 === 0 && num % 16 === 0 && num % 13 === 0 && num % 11 === 0 && num % 9 === 0 && num % 7 === 0 && num % 5 === 0 
      ) {
        console.log(num)
        return num;  
      } 
      num += 20; 
    }
  };

  checkSmallNumber();
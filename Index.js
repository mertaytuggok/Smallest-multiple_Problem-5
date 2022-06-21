//2520, 1'den 10'a kadar olan sayıların her birine kalansız bölünebilen en küçük sayıdır.

//1'den 20'ye kadar olan sayıların tamamına tam bölünebilen en küçük pozitif sayı kaçtır?
function isDivisible(number) {
    for (a = 1; a <=20; a++) {
        if (number % a === 0) {
            continue;
        } else {
            return false;
        }
    }
    return true;
  }
  
  var number = 1;
  do {
    number++;
  } while (!isDivisible(number));
  
  console.log(number);
const header = document.querySelector('.header'),
    burgerButton = document.querySelector('.header__burger'),
    menuNav = document.querySelector('.header__nav'),
    body = document.querySelector('body');
if (header) {
    window.addEventListener('scroll', function () {
        if (window.scrollY > 0) {
            header.classList.add('scroll');
        } else {
            header.classList.remove('scroll');
        }
    });

    burgerButton.addEventListener('click', function (e) {
        burgerButton.classList.toggle('active');
        menuNav.classList.toggle('active');
        body.classList.toggle('lock');
    });
}

var x, i, j, l, ll, selElmnt, a, b, c;
x = document.getElementsByClassName("select");
l = x.length;
for (i = 0; i < l; i++) {
   selElmnt = x[i].getElementsByTagName("select")[0];
   ll = selElmnt.length;
   a = document.createElement("DIV");
   a.setAttribute("class", "select__selected");
   a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
   x[i].appendChild(a);
   b = document.createElement("DIV");
   b.setAttribute("class", "select__items hide");
   for (j = 1; j < ll; j++) {
      c = document.createElement("DIV");
      c.innerHTML = selElmnt.options[j].innerHTML;
      c.addEventListener("click", function(e) {
         var y, i, k, s, h, sl, yl;
         s = this.parentNode.parentNode.getElementsByTagName("select")[0];
         sl = s.length;
         h = this.parentNode.previousSibling;
         for (i = 0; i < sl; i++) {
            if (s.options[i].innerHTML == this.innerHTML) {
               s.selectedIndex = i;
               h.innerHTML = this.innerHTML;
               y = this.parentNode.getElementsByClassName("selected");
               yl = y.length;
               for (k = 0; k < yl; k++) {
                  y[k].removeAttribute("class");
               }
               this.setAttribute("class", "selected");
               break;
            }
         }
         h.click();
      });
      b.appendChild(c);
   }
   x[i].appendChild(b);
   a.addEventListener("click", function(e) {
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("hide");
      this.classList.toggle("active");
   });
}
function closeAllSelect(elmnt) {
   var x, y, i, xl, yl, arrNo = [];
   x = document.getElementsByClassName("select__items");
   y = document.getElementsByClassName("select__selected");
   xl = x.length;
   yl = y.length;
   for (i = 0; i < yl; i++) {
      if (elmnt == y[i]) {
         arrNo.push(i)
      } else {
         y[i].classList.remove("active");
      }
   }
   for (i = 0; i < xl; i++) {
      if (arrNo.indexOf(i)) {
         x[i].classList.add("hide");
      }
   }
}
document.addEventListener("click", closeAllSelect);


let defaultValue = 70
const inputRange = document.getElementById("inputRange")
const valueRange = document.querySelector(".input-range__value")
valueRange.innerHTML = defaultValue + "%"
inputRange.addEventListener("input", () => {
   valueRange.innerHTML = inputRange.value + "%"
})
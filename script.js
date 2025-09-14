window.addEventListener("scroll", function () {
  const topBar = document.getElementById("topBar");

  const summerDealsSection = document.getElementById("summer-deals");

  const sectionTop = summerDealsSection.offsetTop;

  if (window.scrollY >= sectionTop) {
    topBar.classList.add("active");
  } else {
    topBar.classList.remove("active");
  }
});
const topBar = document.getElementById('topBar')
const leftarrow = document.getElementById('leftarrow')
const rightarrow = document.getElementById('rightarrow')
const firstChild = topBar.children[0];
const itemWidth = firstChild ? firstChild.offsetWidth : 100; 

rightarrow.addEventListener('click', () => {
  topBar.scrollBy({
    left: itemWidth,
    behavior: 'smooth'
  });
});

leftarrow.addEventListener('click', () => {
  topBar.scrollBy({
    left: -itemWidth,
    behavior: 'smooth'
  });
});


  const input = document.getElementById('searchInput');
  const text = "Search for spicy fried chicken"; 
  let index = 13;

  function typeWriter() {
    if (index <= text.length) {
      input.placeholder = text.slice(0, index);
      index++;
      setTimeout(typeWriter, 100); 
    }
  }

  typeWriter();


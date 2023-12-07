const colors = ['#804d9e', '#f5591c', '#fafaf8', 'ee444c',  'f26549', '#f48143', '#fdbb59' ,'#ff007f'];
    let currentIndex = 0;

    function changeColor() {
      document.body.style.color = colors[currentIndex];
      currentIndex = (currentIndex + 1) % colors.length;
    }

    setInterval(changeColor, 5000);
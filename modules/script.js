document.addEventListener('DOMContentLoaded', function() {
    const footer = document.getElementById('footer');
    footer.addEventListener('click', function() {
      this.classList.toggle('raised');
    });
  });
  
function toggleRituals(eventId) {
  const ritualsContent = document.getElementById(eventId + '-rituals');
  const button = document.querySelector(`[onclick="toggleRituals('${eventId}')"]`);
  const icon = button.querySelector('.toggle-icon');
  
  if (ritualsContent.style.display === 'none' || ritualsContent.style.display === '') {
    ritualsContent.style.display = 'block';
    button.classList.add('expanded');
    button.innerHTML = '<span class="toggle-icon">×</span> Hide ritual details';
  } else {
    ritualsContent.style.display = 'none';
    button.classList.remove('expanded');
    button.innerHTML = '<span class="toggle-icon">+</span> Learn about the rituals';
  }
}
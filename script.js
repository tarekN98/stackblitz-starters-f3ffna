document.addEventListener('DOMContentLoaded', function() {
  const chatButton = document.getElementById('chatButton');
  const chatContainer = document.getElementById('chatContainer');
  const closeChatButton = document.getElementById('closeChat');

  chatButton.addEventListener('click', function() {
      if (chatContainer.style.display === 'none' || chatContainer.style.display === '') {
          chatContainer.style.display = 'block';
      } else {
          chatContainer.style.display = 'none';
      }
  });

  closeChatButton.addEventListener('click', function() {
      chatContainer.style.display = 'none';
  });
});

document.getElementById('xd').addEventListener('click', function() {
        var messageDiv = document.getElementById('message');
        if (messageDiv.style.display === 'none') {
            messageDiv.style.display = 'block';
        } else {
            messageDiv.style.display = 'none';
        }
    });
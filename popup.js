document.addEventListener('DOMContentLoaded', function () {
    var shortenBtn = document.getElementById('shortenBtn');
    shortenBtn.addEventListener('click', function () {
        var urlInput = document.getElementById('urlInput').value;
        shortenUrl(urlInput);
    });
});

function shortenUrl(longUrl) {
    var accessToken = 'ACCESS_TOKEN';
    var apiUrl = 'https://api-ssl.bitly.com/v4/shorten';

    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer ' + accessToken,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            long_url: longUrl
        })
    })
        .then(response => response.json())
        .then(data => {
            var shortenedUrl = data.link;
            document.getElementById('shortenedUrl').innerHTML = '<p>Your shortened URL:</p><a href="' + shortenedUrl + '" target="_blank">' + shortenedUrl + '</a>';
            document.getElementById('shortenedUrl').style.display = 'block';
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

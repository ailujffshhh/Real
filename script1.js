// Get the authorization code from the URL
const urlParams = new URLSearchParams(window.location.search);
const code = urlParams.get('code');

// Replace with your Spotify app details
const clientId = '2f4438a4873044d195f984a43319e804';
const clientSecret = '79b9df7213d343f4a06ef3d2800b12b2';
const redirectUri = 'https://ailujffshhh.github.io/Real/dashboard';

// Exchange the authorization code for an access token
if (code) {
    fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + btoa(`${clientId}:${clientSecret}`)
        },
        body: new URLSearchParams({
            grant_type: 'authorization_code',
            code: code,
            redirect_uri: redirectUri
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Access Token:', data.access_token);
        // You can now use the access token to make API requests
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

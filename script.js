function openSpotifyLogin() {
    const clientId = '2f4438a4873044d195f984a43319e804';
    const redirectUri = 'https://ailujffshhh.github.io/Real/dashboard'; 
    const scopes = 'user-read-private user-read-email';
    const authUrl = `https://accounts.spotify.com/authorize?response_type=code&client_id=${encodeURIComponent(clientId)}&scope=${encodeURIComponent(scopes)}&redirect_uri=${encodeURIComponent(redirectUri)}`;
    window.location.href = authUrl;
}
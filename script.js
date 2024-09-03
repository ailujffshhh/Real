
        const clientId = '2f4438a4873044d195f984a43319e804'; // Replace with your Spotify client ID
        const redirectUri = 'https://ailujffshhh.github.io/Real/dashboard'; // Must match the registered redirect URI
        const scopes = 'user-read-private user-read-email';

        function openSpotifyLogin(){
            const state = generateRandomString(16);

            const authUrl = new URL('https://accounts.spotify.com/authorize');
            authUrl.searchParams.append('response_type', 'code');
            authUrl.searchParams.append('client_id', clientId);
            authUrl.searchParams.append('scope', scopes);
            authUrl.searchParams.append('redirect_uri', redirectUri);
            authUrl.searchParams.append('state', state);

            window.location.href = authUrl.toString();
        };

        function generateRandomString(length) {
            const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            let result = '';
            for (let i = 0; i < length; i++) {
                result += charset.charAt(Math.floor(Math.random() * charset.length));
            }
            return result;
        }
  
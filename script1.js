const queryParams = new URLSearchParams(window.location.search);
const code = queryParams.get('code');

if (code) {
    document.getElementById('status').textContent = `Authorization Code: ${code}`;
} else {
    document.getElementById('status').textContent = 'No authorization code found.';
}
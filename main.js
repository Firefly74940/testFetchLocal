async function CheckUrl_Internal(url) {
    try {
        let response = await fetch(url);
        let data = await response.text();
        console.log('success:"' + url + '"', data);
    } catch (error) {
        console.error('failed:"' + url + '"', error);
    }
}
async function CheckUrl(url) {
    const pres = ['', 'http://', 'https://'];
    const posts = ['', ':80', ':8080', ':4200', ':5000', ':3000'];
    for (const pre of pres) {
        for (const post of posts) {
            CheckUrl_Internal(pre + url + post)
        }
    }

}

CheckUrl("192.168.1.1");
CheckUrl("localhost");
CheckUrl("192.168.0.1");
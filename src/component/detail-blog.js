window.onload = function () {
    // Ambil URL saat ini
    const urlParams = new URLSearchParams(window.location.search)

    // Ambil nilai parameter 'blogid'
    const blogid = urlParams.get('blogid')

    const baseURL = 'https://comptour-be.vercel.app'
    fetch(baseURL + '/api/blogs/get-by-id', {
        method: 'POST',
        body: JSON.stringify({
            blogid: blogid
        }),
        redirect: 'follow',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data)

            document.getElementById('gambar').setAttribute('src', data.data.image)
            document.getElementById('judul').innerHTML = data.data.title
            document.getElementById('text').innerHTML = data.data.description
        })
        .catch((error) => console.error("Error fetching data:", error));
}
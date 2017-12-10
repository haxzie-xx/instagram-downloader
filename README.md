# Instagram-Downloader

Crawler to fetch download links for instagram videos and images.

## How to use?
* Clone the repository to your system
* make sure you have node.js installed
* cd into the project folder and run `npm install`

## API Endpoints
`/instagram/image`

Type    : GET

Param   : url


`/instagram/video`

Type    : GET

Param   : url


ex: `localhost:8080/instagram/video?url=https://www.instagram.com/p/BcZD7fbDV_R/`
resposnse:
```json
{
    "title": "Instagram post by p l s u r • Dec 7, 2017 at 6:53am UTC",
    "url": "https://www.instagram.com/p/BcZD7fbDV_R/",
    "file": "video",
    "video_link": "https://instagram.fcok1-1.fna.fbcdn.net/vp/53043bd2781/5A2FB313/t50.2886-16/2500153488_n.mp4"
}
```

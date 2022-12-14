/*
๐ฌ Video playlist UI Design like Skillshare With Vanilla JavaScript
๐จ๐ปโโ๏ธ By: Coding Design

You can do whatever you want with the code. However if you love my content, you can subscribed my YouTube Channel
๐link: www.youtube.com/codingdesign
*/

const main_video = document.querySelector('.main-video video');
const main_video_title = document.querySelector('.main-video .title');
const video_playlist = document.querySelector('.video-playlist .videos');

let data = [
    {
        'id': 'a1',
        'title': '์๊ธฐ์๊ฐ',
        'name': '์๊ธฐ์๊ฐ.mp4',
        'duration': '1:05',
    },
    {
        'id': 'a2',
        'title': '์๋ฅ์ด ํจ๊ณผ',
        'name': '์๋ฅ์ด ํจ๊ณผ.mp4',
        'duration': '1:37',
    },
    {
        'id': 'a3',
        'title': '112 ์ ๊ณ  ๊ฒฝ์ฐฐ์ฒญ ๊ณต๋ชจ์ ',
        'name': '๊ฒฝ์ฐฐ์ฒญ ๊ณต๋ชจ์ .mp4',
        'duration': '2:00',
    },

    {
        'id': 'a4',
        'title': 'Lion ์ด๋ชจํฐ์ฝ',
        'name': 'Lion ์ด๋ชจํฐ์ฝ.mp4',
        'duration': '0:02',
    },
    {
        'id': 'a5',
        'title': 'I phone ๊ด๊ณ ',
        'name': 'I phone.mp4',
        'duration': '0:15',
    },
    {
        'id': 'a6',
        'title': '๋๋ ๊ณํ์ด ๋ค ์๊ตฌ๋ ?',
        'name': '๋๋ ๊ณํ์ด ๋ค ์๊ตฌ๋.mp4',
        'duration': '0:16',
    },
    {
        'id': 'a7',
        'title': '์ค๋์ท',
        'name': '์ค๋์ท.mp4',
        'duration': '0:16',
    },

    {
        'id': 'a8',
        'title': '์ํผ๋ง๋ฆฌ์ค ํจ๋ฌ๋',
        'name': '์ํผ๋ง๋ฆฌ์ค ํจ๋ฌ๋.mp4',
        'duration': '0:21',
    },

    {
        'id': 'a9',
        'title': '์ ํ๋ธ ํ๋ฆฌ๋ฏธ์ ํจ๋ฌ๋',
        'name': '(๊ณผ์ ) ์ ํ๋ธ ํ๋ฆฌ๋ฏธ์ ๊ด๊ณ  ํจ๋ฌ๋.mp4',
        'duration': '1:05',
    },

];

data.forEach((video, i) => {
    let video_element = `
                <div class="video" data-id="${video.id}">
                    <img src="images/play.svg" alt="">
                    <p>${i + 1 > 9 ? i + 1 : '0' + (i + 1)}. </p>
                    <h3 class="title">${video.title}</h3>
                    <p class="time">${video.duration}</p>
                </div>
    `;
    video_playlist.innerHTML += video_element;
})

let videos = document.querySelectorAll('.video');
videos[0].classList.add('active');
videos[0].querySelector('img').src = 'images/pause.svg';

videos.forEach(selected_video => {
    selected_video.onclick = () => {

        for (all_videos of videos) {
            all_videos.classList.remove('active');
            all_videos.querySelector('img').src = 'images/play.svg';

        }

        selected_video.classList.add('active');
        selected_video.querySelector('img').src = 'images/pause.svg';

        let match_video = data.find(video => video.id == selected_video.dataset.id);
        main_video.src = 'videos/' + match_video.name;
        main_video_title.innerHTML = match_video.title;
    }
});

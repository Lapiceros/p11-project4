<script>
    import Swiper from "swiper";
    import "swiper/swiper-bundle.css";
    import { onMount } from "svelte";
    const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=es-ES&with_genres=${28}`;

    const options = {
    method: "GET",
    headers: {
        accept: "application/json",
        Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ODk0ZjZkODQ0YjU2ZWU5NjBjN2JkYTExYmE2MDhjNiIsInN1YiI6IjY1MmY4NjE3MzU4ZGE3NWI1YTJmYTgyOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ICxl7NDU6uG4BLztFWbIvWmwHnpkE0NwHxpnMsHOJ3I",
        },
    };

    let movies = [];
    onMount(async() => {
        await fetch(url, options)
        .then((response) => response.json())
        .then((data) => {
            movies = data.results;
            iniciarSlider();
        })
        .catch((err) => console.error(err));
    });

    function iniciarSlider() {
        let swiper = new Swiper(".swiper", {
        slidesPerView: 5,
        direction: getDirection(),
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swipre-button-prev",
        },
        on: {
            resize: function () {
            swiper.changeDirection(getDirection());
            },
        },
        });
    }
    function getDirection() {
        const windowWith = window.innerWidth;
        return windowWith <= 760 ? "vertical" : "horizontal";
    }
</script>

<section>
    <h1 class="genre">Acción</h1>
    <div class="swiper">
        <div class="swiper-wrapper">
            {#each movies as movie}
            <img class="swiper-slide" src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="cover"/>
            {/each}
        </div>
    </div>
</section>

<style>
    section {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    h1 {
        width: 90%;
    }
    .genre {
        color: #fff;
    }

    .genre:hover {
        color: #02ffa1;
    }
    img {
        object-fit: cover;
        transition: transform 0.3s;
        height: 250px;
        width: 175px;
        border-radius: 8px;
    }
    img:hover {
        transform: scale(1.1);
        box-shadow: 1px 1px 5px 1px #02ffa1;
    }
    .swiper {
        width: 100%;
        height: 400px;
    }
    .swiper-wrapper{
        gap: 20px;
    }
    .swiper-slide {
        text-align: center;
        font-size: 18px;
        background: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 5px;
    }
</style>

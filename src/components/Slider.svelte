<script>
    import MovieList from "./MovieList.svelte";

</script>
<div class="swiper-container">
    <div class="swiper-wrapper" id="movie-list">
        <!-- Lista de películas se mostrará aquí -->
        <MovieList/>
    </div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
</div>
<style>
    .swiper-container {
        width: 80%;
        margin: auto;
    }

    .swiper-button-next,
    .swiper-button-prev {
        font-size: 18px;
        color: #fff;
        background-color: #333;
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }

    .swiper-button-next::after,
    .swiper-button-prev::after {
        content: "";
    }
</style>
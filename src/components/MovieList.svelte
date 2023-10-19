<script>
    import { onMount } from "svelte";

    const url =`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=es-ES&with_genres=${28}`;

    const options = {
        method: 'GET',
        headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ODk0ZjZkODQ0YjU2ZWU5NjBjN2JkYTExYmE2MDhjNiIsInN1YiI6IjY1MmY4NjE3MzU4ZGE3NWI1YTJmYTgyOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ICxl7NDU6uG4BLztFWbIvWmwHnpkE0NwHxpnMsHOJ3I'
    }
    };

    let movies = [];
    onMount(()=>
        fetch(url, options)
        .then(response => response.json())
        .then(data => movies = data.results)
        .then(data => console.log(data))
        .catch(err => console.error(err))
    );

    
</script>

<div>
    {#each movies as movie}
    <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="cover">
    {/each}
</div>


<style>
    div{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 15px;
    }
    img{
        width: 275px;
        height: 400px;
        object-fit: cover;
        padding: 1rem;
        border-radius: 20px;
    }
</style>
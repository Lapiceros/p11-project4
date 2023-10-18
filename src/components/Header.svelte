<script>
    import Logo from './Logo.svelte';
    import Link from './Link.svelte';
    import Lupa from '../assets/lupa.svg';
</script>

<header>
    <Logo />
    <nav>
        <Link text="Inicio"/>
        <Link text="Películas"/>
        <Link text="Series"/>
        <Link text="Colecciones"/>
        <Link text="Festivales"/>
        <Link text="Más"/>
    </nav>
    <div class="flex-grow-1"></div>
    <button id="btn-sub">SUSCRÍBETE</button>
    <button id="btn-login">INICIAR SESIÓN</button>
    <img src={Lupa} alt="Icono de buscada">

</header>

<style>
    header {
        display:flex;
        justify-content: flex-start;
        align-items: center;
        margin: 20px 40px;
        gap: 20px;
    }
    .flex-grow-1{
        flex-grow: 1 !important;
    }
    #btn-sub{
        background-color: #02ffa1;
        border: none;
    }
    #btn-login{
        color: #fff;
        background-color: transparent;
        border: 2px solid #fff;
    }
    #btn-login:hover{
        border-color: #6f6f81;
    }
    #btn-login:active{
        background-color: #6f6f81;
    }
    img{
        width: 25px;
        height: 25px;
    }
    #btn-sub:hover{
        background-color: #5effc3;
    }
    #btn-sub:active{
        background-color: #0c8f65;
        border: none;
    }
</style>

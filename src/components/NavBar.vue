<script setup>
import App from '../App.vue';

</script>

<template>
    <nav>
        <div class="nav-cnt">
            <div class="box title">
                <RouterLink to="/">Simbat</RouterLink>
            </div>
            <div class="box links">
                <RouterLink to="/about">About</RouterLink>
                <RouterLink to="/tools">Tools</RouterLink>
                <RouterLink to="/projects">Projects</RouterLink>
            </div>
        </div>
    </nav>
</template>

<style scoped>
a {
    text-decoration: none;
    color: white;
}

nav {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
}

nav .nav-cnt {
    width: 70%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;

    padding-bottom: 1rem;
    border-bottom: 1px solid #7D00FF;
    font-size: 1rem;
}

nav .title {
    font-size: 1.3rem;
}

nav .links {
    display: flex;
    gap: 1rem;
}

nav .links a {
    padding: .3rem 1rem;
    border-radius: .3rem;
    transition: all .7s ease-out;
}

nav .links a:hover {
    background-color: #7D00FF;
}
</style>

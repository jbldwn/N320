<template>
    <header>
        <nav>
            <RouterLink class="links" to="/members">Members</RouterLink>
            <RouterLink class="links" to="/teams">Teams</RouterLink>
        </nav>
    </header>
</template>

<style scoped>
nav {
    /* margin: 0 auto; */
    width: 100vw;
    height: 50px;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    font-size: 18px;

}

a {
    color: white;
    text-decoration: none;
}

a.router-link-active {
    font-style: italic;
    text-decoration: underline;
}
</style>
<template>
    <header>
        <nav>
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/members">Members</RouterLink>
            <!-- <RouterLink :to="{ name: 'props' }">Props</RouterLink> -->
        </nav>
    </header>
</template>

<style scoped>
nav {
    /* margin: 0 auto; */
    width: 30vw;
    /* background-color: red; */
    display: flex;
    align-items: center;
    justify-content: space-between;

}
</style>
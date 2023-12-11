<template>
    <nav>
        <h1>Web Dev Confrence</h1>
        <div class="links">
            <div class="btn">
                <RouterLink to="/sessions">Sessions</RouterLink>
            </div>
            <div class="btn">
                <RouterLink to="/mysessions">My Sessions</RouterLink>
            </div>
        </div>
    </nav>
</template>

<style>
nav {
    margin: 0 auto;
    width: 90vw;
    height: 75px;
    background-color: lavender;
    border-radius: 15px;
    padding: 0 50px;

    display: flex;
    align-items: center;
    justify-content: space-between;
}

h1 {
    margin: 0;
    font-size: 24px;
}

.links {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.btn {
    background-color: dodgerblue;
    height: 35px;
    border-radius: 10px;
    padding: 15px;
    display: flex;
    align-items: center;
    margin-left: 15px;
    color: white;
}

a {
    text-decoration: none;
    color: white;
    font-size: 14px;
    flex-wrap: nowrap;
}
</style>
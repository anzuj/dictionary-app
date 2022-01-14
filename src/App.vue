<template>
    <div id="app">
        <v-app>
            <v-main fluid fill-height>
              <v-slide-x-reverse-transition :hide-on-leave="true">
                <router-view></router-view>
                </v-slide-x-reverse-transition>
            </v-main>
        </v-app>
    </div>
</template>

<style>
#app {
    font-family: Montserrat, sans-serif;
    color: #25292e;
    background-color: rgb(235, 235, 235);
}
</style>

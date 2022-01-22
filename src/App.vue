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
    /* background-color: rgb(235, 235, 235); */
/*     background: rgb(181,255,207);
background: linear-gradient(133deg, rgba(181,255,207,1) 0%, rgba(166,240,255,1) 100%); */

/* background: rgb(211,255,227);
background: linear-gradient(133deg, rgba(211,255,227,1) 0%, rgba(158,236,252,1) 100%); */

background-color: #f1f1f1;
/* opacity: 0.8; */
/* background-image: radial-gradient(#444cf7 0.5px, #e5e5f7 0.5px);
background-size: 10px 10px; */


background-image: url("https://www.transparenttextures.com/patterns/concrete-wall.png"); 

}
</style>

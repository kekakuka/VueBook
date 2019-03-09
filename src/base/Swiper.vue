<template>
    <swiper  :options="swiperOption">
        <swiper-slide v-for="(slide, index) in swiperSlides" :key="index"><div class="container"><img class="my-slides" :src="slide" /></div></swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</template>

<script>
    export default {
        name: 'carousel',
        props:['swiperSlides'],
        data() {
            return {

                swiperOption: {
                    pagination: {
                        el: '.swiper-pagination'
                    },
                    autoplay: {
                        delay: 2000,
                    },

                },

            }
        },
        created(){

        },
        mounted() {
            // console.log(this.swiperSlides);
        }
    }
</script>
<style>
    .my-slides{
        max-width: 1200px;
        width: 100%;
        height: auto;
        align-items: center;
    }
</style>

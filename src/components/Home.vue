<template>
    <div>
        <Header :back="false">Home Page</Header>
        <div class="content">
            <Loading v-if="loading"></Loading>
            <div v-else>
            <Swiper :swiperSlides="swiperSlides"></Swiper>
            <h3>Hot Books</h3>
            <div class="container">
                <br>
                <div v-for="(book,index) in hotBooks" :key="index" class="mycard text-center">
                    <router-link :to="'/details/'+book.bookId">
                        {{book.bookName}}
                        <img :src="book.bookCover"/>
                    </router-link>
                    <hr :v-if="index%2===0">
                </div>
            </div>
        </div>
        </div>
    </div>

</template>

<script>
    import Header from '../base/Header';
    import Swiper from '../base/Swiper';
    import {getAll} from '../api/index';
    import Loading from '../base/Loading';

    export default {
        data() {
            return {swiperSlides: [], hotBooks: [],loading:true}
        },
        async created() {
           this.getAllItem()
        },
        methods: {
            async getAllItem(){
              let [swiperSlides,hotBooks]=await getAll();
                this.swiperSlides = swiperSlides.data;
                this.hotBooks = hotBooks.data;
                this.loading=false;
            },
        },
        computed: {},
        components: {
            Header,
            Swiper,
            Loading
        }
    }
</script>

<style scoped lang="less">
    .content {
        h3 {
            text-align: center;
            color: #999;
        }

        .container {
            display: flex;
            flex-wrap: wrap;
            margin: 0 auto;

            .mycard {
                margin: 1%;
                text-align: center;
                width: 48%;
                img {
                    width: 100%;
                    height: auto;
                }
            }
        }
    }


</style>

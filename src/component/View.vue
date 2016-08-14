<template>
    <section class="questions">
        <header class="user">
            填写用户:{{uid}}
        </header>
        <ul>
            <li v-for="qn in qns">
                <span>{{$index+1}}.</span>
                <span class="describe">{{qn[0]}}</span>
                <span class="describe">{{qn[1]}}</span>
                <input id='radio1'
                       disabled="disabled"
                       type="radio"
                       v-model="ans[$index]"
                       value="一样">
                <label for="radio1">一样</label>
                <input id='radio2'
                       type="radio"
                       disabled="disabled"
                       v-model="ans[$index]"
                       value="不一样">
                <label for="radio2">不一样</label>
                <input id='radio3'
                       type="radio"
                       disabled="disabled"
                       v-model="ans[$index]"
                       value="不确定">
                <label for="radio3">不确定</label>
            </li>
        </ul>
    </section>
</template>
<script>
    export default{
        data(){
            return{
                qns:null,
                ans:null,
                id:null,
                uid:null,
                answered:false
            }
        },
        methods: {

        },
        created(){
            this.$http.post('/', {})
                    .then((response)=> {
                        let data=JSON.parse(response.body)[0]
                        this.qns=data.qns
                        this.ans=data.ans
                        this.id=data._id
                    }, ()=> {
                        console.log('error')
                    })
        },
        ready(){
        },
        computed:{

        }
    }
</script>
<style lang="sass">
    @import "../SCSS/Question.scss";
</style>
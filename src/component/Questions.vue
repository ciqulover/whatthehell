<template>
    <section class="questions">
        <ul>
            <li v-for="qn in qns">
                <span>{{$index+1}}.</span>
                <span class="describe">{{qn[0]}}</span>
                <span class="describe">{{qn[1]}}</span>
                <input id='radio1'
                       type="radio"
                       v-model="ans[$index]"
                       value="一样">
                <label for="radio1">一样</label>
                <input id='radio2'
                       type="radio"
                       v-model="ans[$index]"
                       value="不一样">
                <label for="radio2">不一样</label>
                <input id='radio3'
                       type="radio"
                       v-model="ans[$index]"
                       value="不确定">
                <label for="radio3">不确定</label>
            </li>
        </ul>
        <button @click="save">保存</button>
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
            save(){
                this.answered=true
                this.$http.post('/save',this.$data)
                        .then((response)=>{
                            alert('保存成功')
                        },()=>{
                            console.log('save failed')
                        })
            }
        },
        created(){
//            let data={
//                qns: [
//                    ['男朋友出差', '男朋友出差去了'],
//                    ['我们家狗狗生病了', '我家狗狗生病了'],
//                ],
//                ans: [],
//                uid:'',
//                answered:false
//            }
//            this.qns=data.qns
//            this.ans=data.ans
//            this.id=data._id
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
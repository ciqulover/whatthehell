<template>
    <section class="questions">
        <ul>
            <li v-for="qn in qns">
                <span>{{$index+1}}.</span>
                <br>
                <span>{{qn[0]}}</span>
                <br>
                <span>{{qn[1]}}</span>
                <br>
                <input id='radio1' type="radio"
                       v-model="ans[$index]" value="一样">
                <label for="radio1">一样</label>
                <input id='radio2' type="radio"
                       v-model="ans[$index]" value="不一样">
                <label for="radio2">不一样</label>
                <input id='radio3' type="radio"
                       v-model="ans[$index]" value="不确定">
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
                id:null
            }

        },
        methods: {
            save(){
                this.$http.post('/save',this.$data)

                        .then((response)=>{
                            console.log(response)
                        },()=>{
                            console.log('save failed')
                        })
                console.log(this.$data, this.ans)
            }
        },
        created(){
            this.$http.post('/', {})
                    .then((response)=> {
                        let data=JSON.parse(response.body)[0]
                        this.qns=data.qns
                        this.ans=data.ans
                        console.log(data._id)
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
<style>
    section.questions {
    }

    ul li {
        list-style: none;
        font-family: "Microsoft YaHei", Arial, sans-serif;
        color: #888888;
        margin: 20px auto;
    }

    button {
        display: block;
        width: 80%;
        height: 30px;
        margin: 30px auto;
        font-size: 16px;
    }
</style>
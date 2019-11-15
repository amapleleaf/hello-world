<template>
    <div class="basic-syntax">
        <div class="one-type">
            <p>Original message: "{{ message }}"</p>
            <p>Computed reversed message: "{{ reversedMessage }}"</p>
        </div>
        <div class="one-type">
            <div v-if="loginType=='username'">
                <label>Username:</label>
                <input placeholder="Enter your username" key="username-input">
            </div>
            <div v-else>
                <label>Email:</label>
                <input placeholder="Enter your email address" key="email-input">
            </div>
            <button @click="toggleLoginType()" >Toggle login type</button>
        </div>
        <div class="one-type">
            <ul>
                <li v-for="(item, index) in items">
                    {{index}}-{{item}}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "BasicSyntax",
        props:['msg'],
        data:function () {
            return {
                message:this.msg,
                loginType:"username",
                items: [  'Foo', 'Bar']
            }
        },
        computed:{
            reversedMessage:function () {
                return this.message.split('').reverse().join('');
            }
        },
        methods:{
            toggleLoginType:function () {
                this.loginType = this.loginType=="username"?"email":"username";
            }
        }
    }
</script>

<style scoped>
    .one-type{
        margin-top: 5px;
        text-align: left;
        border-bottom-style: dashed;
    }
</style>

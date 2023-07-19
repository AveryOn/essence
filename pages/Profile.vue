<template>
    <div class="profile">
        profile

        <div class="container">
            <div class="left__block">
                <img src="" alt="" class="profile__avatar">

                <div class="bottom__block">
                    <button @click="useRouter().push('/messanger')" class="btn__navigation">messanger</button>
                    <button @click="useRouter().push('/friends')" class="btn__navigation">friends</button>
                    <button @click="useRouter().push('/posts')" class="btn__navigation">posts</button>
                    <button @click="useRouter().push('/auth')" class="btn__navigation">regis/auth</button>
                </div>
            </div>

            <div class="right__block">
                <div class="user__data">
                    <div class="username__field"><span>id user</span> : {{ user[0].id }}</div>
                    <div class="username__field"><span>name user</span> : {{ user[0].username }}</div>
                    <div class="username__field"><span>email user</span> : {{ user[0].email }}</div>
                </div>
            </div>
        </div>

    </div>
</template>
<script setup lang="ts">
import { ref, Ref } from 'vue';
const id = 1;
type User = {
    id: number,
    username: string,
    email: string
};

// const { data } = await useFetch(`/users/query?id=1`);
let user: Ref<User[]> = ref([
    { id: 0, username: 'Johny', email: 'user@example.com' },
]);
const { data, pending, error, refresh } = await useFetch('/users/get-user',{
    query: { id: id }
})

console.log('users', data.value);
// user.value = data.value?.user;

</script>
<style lang="css" scoped>
.profile {
    width: 100%;
    height: 100vh;
    box-sizing: border-box;
    margin: 0;
    padding: 100px 200px;
}

.container {
    width: 100%;
    height: 100%;
    padding: 10px;
    display: flex;
    flex-direction: row;
}

.left__block {
    width: calc(40% - 100px);
    height: 100%;
    background-color: #1d1d21;
    display: flex;
    flex-direction: column;
    padding: 10px;
    /* justify-content: center; */
    align-items: center;
}

.left__block .bottom__block {
    width: 200px;
    padding: 10px;
    height: auto;
    display: flex;
    flex-direction: column;


}

.left__block .bottom__block .btn__navigation {
    padding: 10px 30px;
    margin-top: 20px;
}


.right__block {
    width: calc(60% - 100px);
    margin-left: 20px;
    height: 100%;

}

.right__block .user__data {
    width: 100%;
    height: 200px;
    background-color: #1d1d21;
    color: white;
    padding: 20px;
    font-size: 18px;

    display: flex;
    flex-direction: column;

}

.right__block .user__data .username__field {}

.right__block .user__data .username__field span {
    opacity: .5;
}

.container .left__block .profile__avatar {
    width: 200px;
    height: 200px;
    object-fit: contain;
}
</style>
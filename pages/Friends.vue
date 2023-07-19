<script setup lang="ts">
import {Ref, ref, computed} from 'vue'; 
import { User } from "types/User.types"
// let {} = await useFriends(searchField.value);

let searchField: Ref<string> = ref('');

let friends: Ref<User[] | object[] | undefined> = ref([
    { id: 0, username: 'John', email: 'John@gmail.com', },
]);


const { data } = await useFetch('/users/get-users');
friends.value = data.value?.users;


const filteredFriends = computed(() => {
    return friends.value?.filter((el: any) => el.username.includes(searchField.value))
})

</script>

<template>
    <div class="Friends">
        <div class="Friends__goBack"><button @click="useRouter().push('/profile')">Go back</button></div>

        <div class="Friends__container">

            <div class="Friends__search-friends">
                <input v-model="searchField" type="text" placeholder="search...">
            </div>

            <div class="Friends__body">

                <div class="Friends__listOfFriends">

                    <div v-for="friend in filteredFriends" :key="friend?.id" class="Friends__item">

                        <div class="Friends__icon Friends__bodyItem"><img src="" alt=""></div>
                        <div class="Friends__userName Friends__bodyItem"><span>{{ friend.username }}</span></div>
                        <div class="Friends__userEmail Friends__bodyItem">{{ friend.email }}</div>
                        <div class="Friends__AtDate Friends__bodyItem">{{ '23/05/23:05:32 PM' }}</div>

                        <button>go to profile</button>

                    </div>

                </div>

            </div>

        </div>

    </div>
</template>
<style lang="css" scoped>
.Friends {
    width: 100%;
    height: 100%;
    display: flex;
    /* align-items: center; */
    /* justify-content: center; */
    padding: 100px 200px;
}
.Friends__goBack {
    position: absolute;
    left: 10px;
    top: 10px;
    color: white;
}

.Friends__goBack button {
    padding: 10px 20px;
}

.Friends__container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    /* justify-content: center; */
}

.Friends__search-friends {
}

.Friends__search-friends input {
    
    width: 100%;
    height: 50px;
    padding: 20px;
}

.Friends__body {
    width: 100%;
    height: 100%;
}
.Friends__listOfFriends {
    width: 100%;
    height: 100%;
    overflow: auto;
    overflow-x: hidden;
    padding: 20px;
    display: flex;
    flex-direction: column;
    /* align-items: center; */
}
.Friends__item {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    padding: 10px;
    margin-top: 10px;
    background-color: #1d1d21;
    color: white;
    font-size: 20px;
}

.Friends__item button {
    padding: 5px 20px;
    text-align: center;
    font-size: 15px;
    margin-left: auto;
}

.Friends__bodyItem {
    margin-left: 10px;
}

.Friends__icon {
}
.Friends__userName {

}
.Friends__userEmail {
}
.Friends__AtDate {
}
</style>
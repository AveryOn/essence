import { User } from "types/User.types";
export default async function useUser() {
    const id = 1;

    // const { data } = await useFetch(`/users/query?id=1`);
    let user: Ref<User[] | object | undefined | null> = ref([
        { id: 0, username: 'Johny', email: 'user@example.com' },
    ]);
    const { data, pending, error, refresh } = await useFetch('/users/get-user',{
        query: { id: id }
    })

    user.value = [data.value?.user];
    console.log(data.value, 'data')
    
    return {
        user: user
    }
}
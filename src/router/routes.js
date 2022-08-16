import MainPage from "@/components/MainPage";
import ContactMe from "@/components/ContactMe";

const routes = [
    { path: '/', component: MainPage },
    { path: '/contact', component: ContactMe }
]

// 3. Создаём экземпляр маршрутизатора и передаём маршруты в опции `routes`
// Вы можете передавать и дополнительные опции, но пока не будем усложнять.
export const router = new VueRouter({
    routes // сокращённая запись для `routes: routes`
})
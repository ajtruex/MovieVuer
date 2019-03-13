import Home from "./components/Home.vue"
import Header from "./components/Header.vue"
import Popular from "./components/Popular.vue"
import Theater from "./components/Theater.vue"
import Top from "./components/Top.vue"
import Upcoming from "./components/Upcoming.vue"
import Login from "./components/Login.vue"
import App from "./App.vue"

export const routes = [
	// { path: '/', component: Home },
	{ path: "/popular", component: Popular },
	{ path: "/", component: Theater },
	{ path: "/top", component: Top },
	{ path: "/upcoming", component: Upcoming },
	{ path: "/login", component: Login }
]

import Home from "../views/home"
import Login from "../views/login"

const role = 'public'

const publicRoutes = [
  {
    path: '/',
    component(props) {
      return <Home {...props} />
    },
    exact: true,
    role: role,
    redirect: ''
  },
  {
    path: '/login',
    component(props) {
      return <Login {...props} />
    },
    exact: false,
    role: role,
    redirect: ''
  }
]

export default publicRoutes
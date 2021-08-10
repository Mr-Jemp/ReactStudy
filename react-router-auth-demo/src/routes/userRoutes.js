import Backend from "../views/backend"

const role = 'user'

const userRoutes = [
  {
    path: '/backend',
    component(props) {
      return <Backend {...props} />
    },
    exact: false,
    role: role,
    redirect: '/login'
  }
]

export default userRoutes
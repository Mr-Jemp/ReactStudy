import Admin from "../views/admin"

const role = 'admin'

const adminRoutes = [
  {
    path: '/admin',
    component(props) {
      return <Admin {...props} />
    },
    exact: false,
    role: role,
    redirect: '/login'
  }
]

export default adminRoutes
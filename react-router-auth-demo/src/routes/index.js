import publicRoutes from './publicRoutes';
import userRoutes from './userRoutes';
import adminRoutes from './adminRoutes';

export default publicRoutes.concat(userRoutes).concat(adminRoutes);
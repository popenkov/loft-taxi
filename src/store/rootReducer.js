import { reducer as userReducer } from './user/user.slice';
import { reducer as paymentReducer } from './payment/payment.slice';
import { reducer as routeReducer } from './route/route.slice';

export const reducers = {
  user: userReducer,
  payment: paymentReducer,
  route: routeReducer,
};

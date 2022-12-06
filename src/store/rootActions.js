import * as userActions from './user/user.actions';
import * as paymentActions from './payment/payment.actions';
import * as routeActions from './route/route.actions';

export const allActions = {
  ...userActions,
  ...paymentActions,
  ...routeActions,
};

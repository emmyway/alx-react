import { MARK_AS_READ, SET_TYPE_FILTER, SET_LOADING_STATE, FETCH_NOTIFICATIONS_SUCCESS } from "./notificationActionTypes";
import 'node-fetch';

export const markAsRead = (index) => {
    return {
      type: MARK_AS_READ,
      index,
    };
};

export const boundMarkAsRead = (index) => dispatch(markAsRead(index));

export const setNotificationFilter = (filter) => {
    return {
      type: SET_TYPE_FILTER,
      filter,
    };
};

export const boundSetNotificationFilter = (filter) => dispatch(setNotificationFilter(filter));

export const setLoadingState = (loading) => ({
	    type: SET_LOADING_STATE,
	    loading,
});

export const setNotifications = (notifications) => ({
      type: FETCH_NOTIFICATIONS_SUCCESS,
      notifications,
});

export const fetchNotifications = () => {
	return (dispatch) => {
		  dispatch(setLoadingState(true));
		 return fetch('../../notifications.json')
			  .then((res) => res.json())
			  .then((data) => dispatch(setNotifications(data)))
			  .catch((error) => {})
			  .finally(dispatch(setLoadingState(false)));
	};
};

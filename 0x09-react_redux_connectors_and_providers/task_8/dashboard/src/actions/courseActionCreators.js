
import { SELECT_COURSE, UNSELECT_COURSE, FETCH_COURSE_SUCCESS } from "./courseActionTypes";
import "node-fetch";

export function selectCourse(index) {
    return {
        type: SELECT_COURSE,
        index: index,
    };
}
j
export const boundSelectCourse = (index) => dispatch(selectCourse(index));

export function unSelectCourse(index) {
    return {
        type: UNSELECT_COURSE,
        index: index,
    };
}

export const boundUnSelectCourse = (index) => dispatch(unSelectCourse(index));

export const setCourses = (data) => {
    return {
      type: FETCH_COURSE_SUCCESS,
      data,
    };
};

export const fetchCourses = () => {
    return (dispatch) => {
      return fetch("./courses.json")
        .then((res) => res.json())
        .then((data) => dispatch(setCourses(data)))
        .catch((error) => {});
    };
};

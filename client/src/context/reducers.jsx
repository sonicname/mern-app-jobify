import {
  CLEAR_ALERT,
  CLEAR_VALUES,
  CREATE_JOB_BEGIN,
  CREATE_JOB_ERROR,
  CREATE_JOB_SUCCESS,
  DISPLAY_ALERT,
  GET_JOBS_BEGIN,
  GET_JOBS_SUCCESS,
  HANDLE_CHANGE,
  LOGOUT_USER,
  SETUP_USER_BEGIN,
  SETUP_USER_ERROR,
  SETUP_USER_SUCCESS,
  TOGGLE_SIDEBAR,
  UPDATE_USER_BEGIN,
  UPDATE_USER_ERROR,
  UPDATE_USER_SUCCESS,
} from "./actions.jsx";

const reducers = (state, action) => {
  switch (action.type) {
    case DISPLAY_ALERT: {
      return {
        ...state,
        showAlert: true,
        alertType: "danger",
        alertText: "Please provide all values!",
      };
    }

    case CLEAR_ALERT: {
      return {
        ...state,
        showAlert: false,
        alertType: "",
        alertText: "",
      };
    }

    case SETUP_USER_BEGIN: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case SETUP_USER_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        token: action.payload.token,
        user: action.payload.user,
        userLocation: action.payload.location,
        jobLocation: action.payload.location,
        showAlert: true,
        alertType: "success",
        alertText: action.payload.alertText,
      };
    }

    case SETUP_USER_ERROR: {
      return {
        ...state,
        isLoading: false,
        showAlert: true,
        alertType: "danger",
        alertText: action.payload.message,
      };
    }

    case TOGGLE_SIDEBAR: {
      return {
        ...state,
        showSidebar: !state.showSidebar,
      };
    }

    case LOGOUT_USER: {
      return {
        ...state,
        user: null,
        token: null,
        userLocation: "",
        jobLocation: "",
      };
    }

    case UPDATE_USER_BEGIN: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case UPDATE_USER_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        token: action.payload.token,
        user: action.payload.user,
        userLocation: action.payload.location,
        jobLocation: action.payload.location,
        showAlert: true,
        alertType: "success",
        alertText: "User Profile Updated!",
      };
    }

    case UPDATE_USER_ERROR: {
      return {
        ...state,
        isLoading: false,
        showAlert: true,
        alertType: "danger",
        alertText: action.payload.message,
      };
    }

    case HANDLE_CHANGE: {
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    }

    case CLEAR_VALUES: {
      return {
        ...state,
        isEditing: false,
        editJobId: "",
        position: "",
        company: "",
        jobLocation: state.userLocation,
        jobType: "full-time",
        status: "pending",
      };
    }

    case CREATE_JOB_BEGIN: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case CREATE_JOB_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        showAlert: true,
        alertType: "success",
        alertText: "New Job Created!",
      };
    }

    case CREATE_JOB_ERROR: {
      return {
        ...state,
        isLoading: false,
        showAlert: true,
        alertType: "danger",
        alertText: action.payload.message,
      };
    }

    case GET_JOBS_BEGIN: {
      return {
        ...state,
        isLoading: true,
        showAlert: false,
      };
    }

    case GET_JOBS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        jobs: action.payload.jobs,
        totalJobs: action.payload.totalJobs,
        numOfPages: action.payload.numOfPages,
      };
    }
    default:
      throw new Error(`no such action: ${action.type}`);
  }
};

export default reducers;

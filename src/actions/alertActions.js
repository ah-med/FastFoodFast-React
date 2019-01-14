import { CLOSE_ALERT_TRUE, CLOSE_ALERT_FALSE } from './types';


const  closeAlert = (status) => {
    return (status) ? {type: CLOSE_ALERT_TRUE}
    : {type: CLOSE_ALERT_FALSE};
}

export default closeAlert;

import { actionTypes } from '../common/constants/actionTypes'
import { Dispatch } from 'redux'
import axios from 'axios'

let loadDashboardData = (dispatch: Dispatch) => {
    const _getDashBoardURL = 'https://api.myjson.com/bins/ksy5a'
    axios.get(_getDashBoardURL).then(({ data }) => {
        let { headers, colummns } = data
        dispatch({
            type: actionTypes.LOAD_DASHBOARD_TABLE, paylod: {
                headers,
                colummns
            }
        })
    }).catch((error) => {
        console.warn('error', error)
    })

}

export { loadDashboardData }
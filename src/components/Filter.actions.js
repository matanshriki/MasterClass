export const FILTER_LIST    = 'FILTER_LIST'
export const UPDATE_PROFILE = 'UPDATE_PROFILE'
export const HIDE_SPINNER = 'HIDE_SPINNER'


export const update_profile = (profile)=> ({
	type    :   UPDATE_PROFILE,
    payload :	profile
})
export const filter_list = (filtered_list)=> ({
	type    :   FILTER_LIST,
    payload :   filtered_list
})

//async actions
export const FETCHING_BOTS = 'FETCHING_BOTS'
export const BOTS_FETCHED  = 'BOTS_FETCHED'
export const FETCH_BOTS_ERROR  	  = 'FETCH_BOTS_ERROR'

export const fetchClasses = ()=> {

	return (dispatch )=> {

		dispatch({ type: FETCHING_BOTS })
		
        return  fetch('/public/data/MOCK_DATA.json')
				.then(res => res.json())
				.then(res => dispatch({
					type	: BOTS_FETCHED,
					payload	: res
				}))
				.catch( err => dispatch({
					type	: FETCH_BOTS_ERROR,
					payload	: err.message
				}))
	  }
}
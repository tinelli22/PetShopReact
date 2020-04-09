import Login from '../../pages/public/login/Login'

import { connect } from 'react-redux'
import { logOnSuccessAction, logOnErrorAction } from '../../store/actions/account'

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
       onLogOnSuccess: user => dispatch(logOnSuccessAction(user)),
       onLogOffSuccess: msg => dispatch(logOnErrorAction(msg))
    }
}


export default connect(null, mapDispatchToProps)(Login)
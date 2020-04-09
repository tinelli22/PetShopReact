import Login from '../../pages/public/login/Login'

import { connect } from 'react-redux'
import { logOnSuccessAction } from '../../store/actions/account'

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
       onLogOnSuccess: user => dispatch(logOnSuccessAction(user)),
    }
}


export default connect(null, mapDispatchToProps)(Login)
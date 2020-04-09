import Login from '../../pages/private/login/Login'
import { reduxForm } from 'redux-form'
import { connect } from 'react-redux'

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
       
    }
}

Login = reduxForm({ form: "login"})(Login)

export default connect(null, mapDispatchToProps)(Login)
import NavBar from '../../components/NavBar'
import { connect } from 'react-redux'
import { logOnSuccessAction } from '../../store/actions/account'

const mapStateToProps = ({ user: { user } }, ownProps) => {
    return {
        user: user
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
       onLogSuccess: user => dispatch(logOnSuccessAction(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
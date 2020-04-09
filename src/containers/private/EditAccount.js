import { connect } from 'react-redux'
import EditAccount from '../../pages/private/editAccount/EditAccount'
import { updatedUserAction, loadAccountForm } from '../../store/actions/account'

const mapStateToProps = ({ user: { user }, }, ownProps) => {
    return {
        user,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onLoadForm: user => dispatch(loadAccountForm(user)),
        onUpdatedUser: user => dispatch(updatedUserAction(user)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditAccount)
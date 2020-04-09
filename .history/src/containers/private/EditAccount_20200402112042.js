import { connect } from 'react-redux'
import EditAccount from '../../pages/private/editAccount/EditAccount'
import { updatedUserAction } from '../../store/actions/account'

const mapStateToProps = ({ user: { user }, }, ownProps) => {
    return {
        user,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onUpdatedUser: user => dispatch(updatedUserAction(user)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditAccount)
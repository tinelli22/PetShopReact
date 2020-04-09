import { connect } from 'react-redux'
import EditAccount from '../../pages/private/editAccount/EditAccount'

const mapStateToProps = ({ user: { user }, }, ownProps) => {
    return {
        user,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditAccount)
import Schedule from '../../pages/private/schedule/Schedule'
import { connect } from 'react-redux'



const mapStateToProps = ({ user: { user: { uid } }}, ownProps) => {
    return {
        uid,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Schedule)
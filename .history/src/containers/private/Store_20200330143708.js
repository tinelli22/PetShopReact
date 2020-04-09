import Store from '../../pages/private/store/Store'
import { connect } from 'react-redux'



const mapStateToProps = ({ user: { user: { uid, store } }}, ownProps) => {
    return {
        uid,
        store
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Store)
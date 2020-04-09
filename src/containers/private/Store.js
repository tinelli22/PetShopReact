import Store from '../../pages/private/store/Store'
import { connect } from 'react-redux'
import { loadFormStore } from '../../store/actions/user'



const mapStateToProps = ({ user: { user: { uid, store } }}, ownProps) => {
    return {
        uid,
        store
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onLoadFormStore: store => dispatch(loadFormStore(store))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Store)
import Store from '../../pages/private/store/Store'
import { connect } from 'react-redux'
import { loadAddressAction } from '../../store/actions/address'

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onLoadAddress: cep => dispatch(loadAddressAction(cep))
    }
}

export default connect(null, mapDispatchToProps)(Store)
import { connect } from "react-redux"
import Address from "../../components/address/Address"
import { loadAddressAction } from "../../store/actions/address"


const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onLoadForm: values => dispatch(loadAddressAction(values)),
    }
}

export default connect(null, mapDispatchToProps)(Address)
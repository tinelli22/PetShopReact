import Product from '../../pages/private/product/Product'
import { connect } from 'react-redux'
import { saveProdSuccessAction } from '../../store/actions/product'



const mapStateToProps = ({ user: { user: { uid } }}, ownProps) => {
    return {
        uid,
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
       onSaveProdSuccess: prod => dispatch(saveProdSuccessAction(prod)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product)
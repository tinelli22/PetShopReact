import Product from '../../pages/private/product/Product'
import { connect } from 'react-redux'
import { saveProdSuccessAction, loadFormProdAction } from '../../store/actions/product'



const mapStateToProps = ({ user: { user: { uid } }, prod: { product } }, ownProps) => {
    return {
        uid,
        product,
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
       onSaveProdSuccess: prod => dispatch(saveProdSuccessAction(prod)),
       onLoadProdForm: values => dispatch(loadFormProdAction(values)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product)
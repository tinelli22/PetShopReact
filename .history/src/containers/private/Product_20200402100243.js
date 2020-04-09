import Product from '../../pages/private/product/Product'
import { connect } from 'react-redux'
import {  loadFormProdAction } from '../../store/actions/product'



const mapStateToProps = ({ user: { user: { uid } }, prod: { product } }, ownProps) => {
    return {
        uid,
        product,
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
       onLoadProdForm: values => dispatch(loadFormProdAction(values)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product)
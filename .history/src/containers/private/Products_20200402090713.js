import Products from '../../pages/private/products/Products'
import { connect } from 'react-redux'
import { userProductsAction, loadProdFormAction } from '../../store/actions/product'



const mapStateToProps = ({ user: { user: { uid } }, prod: { userProducts }}, ownProps) => {
    return {
        uid,
        userProducts,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
       onLoadProdsSuccess: prods => dispatch(userProductsAction(prods)),
       onLoadProd: prod => dispatch(loadProdFormAction(prod))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products)
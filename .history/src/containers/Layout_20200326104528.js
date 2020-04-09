import Layout from '../layout/Layout'
import { connect } from 'react-redux'

const mapStateToProps = ({ user: { user }}, ownProps) => {
    return {
        user: user,
    }
}

export default connect(mapStateToProps, null)(Layout)
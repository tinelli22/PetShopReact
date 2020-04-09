import Layout from '../layout/Layout'
import { connect } from 'react-redux'

const mapStateToProps = ({ user }, ownProps) => {
    console.log(user)
    return {
        user: user.user,
    }
}

export default connect(mapStateToProps, null)(Layout)
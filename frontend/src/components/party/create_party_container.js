import { connect } from 'react-redux';
// import ChangeEmail from './change_email';
// import { updateUser } from '../../actions/user_actions';
import CreateParty from './create_party'
import { createParty } from '../../actions/party_actions';

const mapStateToProps = state => {
    let currentUser = (state.entities.users[state.session.id] != undefined) ? state.entities.users[state.session.id].data : null;
    return {
        currentUser: currentUser
    };
};

const mapDispatchToProps = dispatch => {
    return {
        createParty: (party) => dispatch(createParty(party))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateParty);
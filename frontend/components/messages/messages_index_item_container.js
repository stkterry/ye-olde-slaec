import { connect } from "react-redux";
import { updateMessage } from "../../actions/message_actions";
import MessagesIndexItem from "./messages_index_item";


const mSP = (state, ownProps) => ({

});

const mDP = dispatch => ({
  updateMessage: (channel_id, id) => dispatch(updateMessage(channel_id, id))
})

export default connect(mSP, mDP)(MessagesIndexItem);
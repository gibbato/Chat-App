import { MultiChatSocket, MultiChatWindow, useMultiChatLogic} from 'react-chat-engine-advanced';

const ChatsPage = (props) => {

    const chatProps = useMultiChatLogic(
        '8389c39f-e432-4378-9a2f-8f30567dba85',
         props.user.username, 
         props.user.secret
        );
    return <div style={{height: '100vh'}}>
        <MultiChatSocket {...chatProps} />
        <MultiChatWindow {...chatProps} style={{height: '100%'}}/>
    </div>
}

export default ChatsPage;

import { MultiChatSocket, MultiChatWindow, useMultiChatLogic} from 'react-chat-engine-advanced';

const ChatsPage = (props) => {

    const chatProps = useMultiChatLogic(
        '8389c39f-e432-4378-9a2f-8f30567dba85',
         props.user.username, 
         props.user.secret
        );
    return  <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}>
        <div style={{
          width: '80%',
          height: '80%',
          display: 'flex',
          flexDirection: 'column',
        }}>
          <MultiChatSocket {...chatProps} />
          <MultiChatWindow {...chatProps} style={{ height: '100%', flex: 1 }} />
        </div>
      </div>
}

export default ChatsPage;

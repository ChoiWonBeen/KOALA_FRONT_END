import HistoryCheckBox from "./HisoryCheckBox";
import { dummyList } from "./dummy";
const HistoryContent = () => {
    const [alertList, setList] = useState(dummyList);
    const [command, setCommand] = useState(null);
    const [mailList, setMailList] = useState([]);
    const showRead = () =>{
        if(command === 'read'){
            setCommand(null);
            setList(dummyList);
        }else{
            setCommand('read');
            setList(dummyList.filter((mail) => (mail.isRead)));
        }
    }
    const showNotRead = () => {
        if(command === 'notRead'){
            setCommand(null);
            setList(dummyList);
        }else{
            setCommand('notRead');
            setList(dummyList.filter((mail) => (!mail.isRead)));
        }
    }
    const moveToStorage = () => {
        console.log('보관함으로 이동');
    }
    const deleteMail = () => {
        console.log('메일 삭제');
    }
    const selectAllMail = (e) => {
        console.log(e.target.checked);
        if(e.target.checked){
            setMailList(alertList.map(mail => {
                return mail.id;
            }));
        }else{
            setMailList([]);
        }
    }
    const selectMail = (e, id) => {
        console.log(e.target, id);
        if(e.target.checked){
            setMailList([...mailList, id]);
        }else{
            setMailList(mailList.filter(mailId => mailId !== id));
        }
    }
    console.log(mailList);
    return (
    <S.PageWrapper>
    <S.MenuList>
        <HistoryCheckBox onClick={(e) => selectAllMail(e)} readOnly/>
        <S.SelectAll>전체선택</S.SelectAll>
        <S.Menues onClick={() => showRead()} isClicked={command==='read'?true:false}>
            <S.MenuName>
                읽은 알림
            </S.MenuName>
        </S.Menues>
        <S.Menues onClick={() => showNotRead()} isClicked={command==='notRead'?true:false}>
            <S.MenuName>
                읽지 않은 알림
            </S.MenuName>
        </S.Menues>
        <S.Menues onClick={() => moveToStorage()}> 
            <S.MenuLogo src="/asset/Storage.svg"/>
            <S.MenuName>
                보관함으로 이동
            </S.MenuName>
        </S.Menues>
        <S.Menues onClick={() => deleteMail()}>
            <S.MenuLogo src="/asset/Delete.svg"/>
            <S.MenuName>
                삭제
            </S.MenuName>
        </S.Menues>
    </S.MenuList>
    <S.KeyWordAlertList>
            {alertList.map((mail,id) => (
                <S.KeyWordAlert isRead = {mail.isRead} key ={id}>
                    <HistoryCheckBox onClick={(e) => selectMail(e, mail.id)} checked={mailList.includes(mail.id)?true:false} readOnly/>
                    <S.Sender>{siteList[mail.site - 1]}</S.Sender>
                    <S.AlertTitle href={mail.url} isRead = {mail.isRead} >{mail.title}</S.AlertTitle>
                    <S.MailBrowse>{mail.isRead?'읽음':'읽지않음'}</S.MailBrowse>
                    <S.ReceiveDate>{mail.createdAt}</S.ReceiveDate>
                </S.KeyWordAlert>
            ))}
    </S.KeyWordAlertList>
    </S.PageWrapper>
    )
}

export default HistoryContent;
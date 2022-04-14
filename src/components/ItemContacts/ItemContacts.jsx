import { ButtonDelete, BlockName} from 'components/ItemContacts/ItemContacts.styled';


export const ItemContacts = ({name, number, onClick}) => (
    <>
        <li>
            <BlockName>{ name}</BlockName>
            <span>{ number}</span>          
            <ButtonDelete type="button" onClick={onClick}>Delete</ButtonDelete>
        </li>
    </>
)
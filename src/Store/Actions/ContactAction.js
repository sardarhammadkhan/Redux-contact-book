import { CREATE_CONTACT } from './Constant'

export const createContact = (new_contact) => {
   return{
        type: CREATE_CONTACT,
        payload:new_contact
   } 
 
}

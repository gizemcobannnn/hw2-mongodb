import { ContactsCollection } from '../db/contacts.js';
//getAllContacts getContactById
export const getAllContacts = async () => {
  const contacts = await ContactsCollection.find();
  return contacts;
};

export const getContactById = async (contactId) => {
  const contact = await ContactsCollection.findById(contactId);
  return contact; 
};

export const createContact = async(payload)=>{
  const contact = await ContactsCollection.create(payload);
  return contact;
};

export const updateContact = async(contactId,payload,options)  => {
  const rawResult = await ContactsCollection.findOneAndUpdate(
    { _id: contactId },
    payload,
    {
      new: true,
      includeResultMetadata: true,
      ...options,
    },
  );
  if (!rawResult || !rawResult.value) return null;

  return {
    student: rawResult.value,
    isNew: Boolean(rawResult?.lastErrorObject?.upserted),
  };
}

export const deleteContact = async (contactId) => {
  const contact = await ContactsCollection.findByIdAndDelete({ _id: contactId });
  return contact;
};
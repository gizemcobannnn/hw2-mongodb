import { Router } from "express";
import { getContactsController, getContactController, createContactController, patchContactController,deleteContactController, notFoundController } from './controllers/contacts.js';
import ctrlWrapper from './utils/ctrlWrapper.js';

const router  = Router();
router.get('/contacts', ctrlWrapper(getContactsController));
router.get('/contacts/:contactId',ctrlWrapper(getContactController));
router.post('/contacts',ctrlWrapper(createContactController));
router.patch('/contacts/:contactId',ctrlWrapper(patchContactController));
router.delete('/contacts/:contactId',ctrlWrapper(deleteContactController));
router.get('*', ctrlWrapper(notFoundController));

export default router;
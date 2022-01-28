import { createAction } from '@reduxjs/toolkit';
import { FILTER_CONTACT } from './contact-types';

export const setFilter = createAction(FILTER_CONTACT);

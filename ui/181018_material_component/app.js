console.log('hello world');

import { MDCRipple } from '@material/ripple';
const buttonRipple = new MDCRipple(document.querySelector('.mdc-button'));

import {MDCDialog} from '@material/dialog';
const dialogAlert = new MDCDialog(document.querySelector('.alert'));

document.querySelector('.open-dl-alert').addEventListener('click', () => {
    dialogAlert.open();
});


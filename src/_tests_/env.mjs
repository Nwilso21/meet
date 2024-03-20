import { JSDOM } from 'jsdom';

const jsdom = new JSDOM();
global.EventTarget = jsdom.window.EventTarget;
global.document = jsdom.window.document;

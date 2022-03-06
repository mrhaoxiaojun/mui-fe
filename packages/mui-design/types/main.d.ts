import type { App } from 'vue';
import { Button } from './button';
import locale from './_i18n/i18n';
import './_style/style.scss';
export { locale, Button };
// declare function install(app: App): void
// declare const _default: {
//     install: typeof install;
//     version: string;
// };
declare const _default: {
    install(app: App): void;
};
export default _default;

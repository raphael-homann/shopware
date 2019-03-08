import { Module } from 'src/core/shopware';
import { NEXT516 } from 'src/flag/feature_next516';

import './extension/sw-settings-index';
import './page/sw-settings-rule-list';
import './page/sw-settings-rule-detail';
import './page/sw-settings-rule-create';
import './component/sw-condition-not-found';
import './component/sw-condition-operator-select';

import deDE from './snippet/de_DE.json';
import enGB from './snippet/en_GB.json';

Module.register('sw-settings-rule', {
    flag: NEXT516,
    type: 'core',
    name: 'Rules',
    description: 'sw-settings-rule.general.descriptionTextModule',
    color: '#9AA8B5',
    icon: 'default-action-settings',
    entity: 'rule',

    snippets: {
        'de-DE': deDE,
        'en-GB': enGB
    },

    routes: {
        index: {
            component: 'sw-settings-rule-list',
            path: 'index',
            meta: {
                parentPath: 'sw.settings.index'
            }
        },
        detail: {
            component: 'sw-settings-rule-detail',
            path: 'detail/:id',
            meta: {
                parentPath: 'sw.settings.rule.index'
            }
        },
        create: {
            component: 'sw-settings-rule-create',
            path: 'create',
            meta: {
                parentPath: 'sw.settings.rule.index'
            }
        }
    },
    navigation: [{
        label: 'sw-settings-rule.general.mainMenuItemGeneral',
        id: 'sw-settings-rule',
        color: '#9AA8B5',
        icon: 'default-action-settings',
        path: 'sw.settings.rule.index',
        parent: 'sw-settings'
    }]
});

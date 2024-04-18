const fs = require('fs');
const path = require('path');

const { handleMtButton } = require('./no-deprecated-component-usage-checks/mt-button.check');
const { handleMtIcon } = require('./no-deprecated-component-usage-checks/mt-icon.check')
const { handleMtCard } = require("./no-deprecated-component-usage-checks/mt-card.check");
const { handleMtTextField } = require("./no-deprecated-component-usage-checks/mt-text-field.check");
const { handleMtSwitch } = require("./no-deprecated-component-usage-checks/mt-switch.check");

/* eslint-disable max-len */

/**
 * @package admin
 *
 * This rule checks if converted components still use the old logic, props, etc.
 *
 * @type {import('eslint').Rule.RuleModule}
 */
module.exports = {
    meta: {
        type: 'problem',
        fixable: 'code',
        docs: {
            description: 'No usage of deprecated components',
            recommended: true,
        },
        schema: [
            {
                enum: ['disableFix', 'enableFix'],
            }
        ]
    },
    /** @param {RuleContext} context */
    create(context) {
        return context.parserServices.defineTemplateBodyVisitor(
            // Event handlers for <template> tags
            {
                VElement(node) {
                    // Handle mt-button component
                    handleMtButton(context, node);
                    // Handle mt-icon component
                    handleMtIcon(context, node);
                    // Handle mt-card component
                    handleMtCard(context, node);
                    // Handle mt-text-field component
                    handleMtTextField(context, node);
                    // Handle mt-switch-field component
                    handleMtSwitch(context, node);
                },
            }
        )
    }
};
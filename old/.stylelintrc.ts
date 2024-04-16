import configRecessOrder from 'stylelint-config-recess-order';

export default {
	'extends': ['stylelint-config-standard-scss'],
	'plugins': [].concat(configRecessOrder.plugins),
	'rules': {
		'selector-class-pattern': [
			'^[a-z]([a-zA-Z0-9]*|[a-z0-9-]*)$',
			{
				'message': 'Expected class selector "%s" to be pascal case or kebab case',
			},
		],
		'order/properties-order': configRecessOrder.rules['order/properties-order'].map((group) => (
			{
				...group,
				emptyLineBefore: 'always',
				noEmptyLineBetween: false,
			}
		)),
		'scss/at-extend-no-missing-placeholder': null,
	},
};

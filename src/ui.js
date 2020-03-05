'use strict';
const path = require('path');
const React = require('react');
const {Box, Color, Text} = require('ink');
const SelectInput = require('ink-select-input').default;
const Gradient = require('ink-gradient');
const BigText = require('ink-big-text');
const open = require('open');

const handleSelect = item => {
    if (item.url) {
        open(item.url);
    }

    if (item.action) {
        item.action();
    }
};

const createItems = items => {
    for (const item of items) {
        item.key = item.url || item.label;
    }

    return items;
};

const items = createItems([
    {
        label: 'Twitter',
		url: 'https://twitter.com/silmin_'
	}, {
        label: 'GitHub',
		url: 'https://github.com/silmin'
	}, {
        label: 'Blog',
		url: 'https://silmin.hatenablog.com'
	}, {
        label: 'Website',
		url: 'https://silmin.net'
	}, {
		label: '-----'
	}, {
		label: 'Quit',
		action() {
			process.exit();
		}
	}
]);

const colors = [
    "#00a8ff",
    "#00a8ff",
    "#00a8ff",
    "#9c88ff"
];

const itemStyle= ({ label, isSelected }) => (
  <Color hex={isSelected ? "#9c88ff" : "#c8c8c8"}>
    <Text bold={isSelected}>{label}</Text>
  </Color>
);

const indicatorStyle= ({isSelected}) => (
    <div>{isSelected ? <Color hex="#9c88ff">❯ </Color> : '  '}</div>
);

module.exports = () => (
    <Box>
        <Gradient colors={colors}><BigText text={"silmin"}/></Gradient>
        <Box paddingTop={2} paddingLeft={2}>
            <SelectInput
                items={items}
                onSelect={handleSelect}
                itemComponent={itemStyle}
                indicatorComponent={indicatorStyle}
            />
        </Box>
    </Box>
);

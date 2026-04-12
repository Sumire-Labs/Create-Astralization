// ツールチップ追加

ItemEvents.tooltip(e => {
	e.addAdvanced('kubejs:zerothium_ingot', (item, advanced, text, tooltip) => {
		text.clear()
		text.add(0, Text.of([
			{'translate': 'kubejs.zerothium_ingot.0', 'color': '#f2f9ff'},
			{'translate': 'kubejs.zerothium_ingot.1', 'color': '#e5f0ff'},
			{'translate': 'kubejs.zerothium_ingot.2', 'color': '#d1e7ff'},
			{'translate': 'kubejs.zerothium_ingot.3', 'color': '#bbd3ff'},
			{'translate': 'kubejs.zerothium_ingot.4', 'color': '#b4c7fc'},
			{'translate': 'kubejs.zerothium_ingot.5', 'color': '#a9b1f5'},
			{'translate': 'kubejs.zerothium_ingot.6', 'color': '#a49ff1'},
			{'translate': 'kubejs.zerothium_ingot.7', 'color': '#8a9af0'},
			{'translate': 'kubejs.zerothium_ingot.8', 'color': '#898be6'},
			{'translate': 'kubejs.zerothium_ingot.9', 'color': '#897fe0'},
			{'translate': 'kubejs.zerothium_ingot.10', 'color': '#8576db'},
			{'translate': 'kubejs.zerothium_ingot.11', 'color': '#836cd6'},
			{'translate': 'kubejs.zerothium_ingot.12', 'color': '#7f5dce'},
			{'translate': 'kubejs.zerothium_ingot.13', 'color': '#7b45b9'},
			{'translate': 'kubejs.zerothium_ingot.14', 'color': '#622785'},
		]))
	})
	e.addAdvanced('balancedflight:ascended_flight_ring', (item, advanced, text, tooltip) => {
		text.clear()
		text.add(0, Text.of(
			{'translate': 'item.balancedflight.ascended_flight_ring'},
		))
		text.add(1, Text.of(
			{'translate': 'tooltip.balancedflight.ascended_flight_ring', 'color': 'light_purple'},
		))
	})
	e.addAdvanced('balancedflight:flight_anchor', (item, advanced, text, tooltip) => {
		text.clear()
		text.add(0, Text.of(
			{'translate': 'block.balancedflight.flight_anchor'},
		))
		text.add(1, Text.of(
			{'translate': 'tooltip.balancedflight.flight_anchor', 'color': 'red'},
		))
	})
})
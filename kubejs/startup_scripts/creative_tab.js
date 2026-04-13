// クリエタブ

// KubeJSタブの名前変更
StartupEvents.modifyCreativeTab("kubejs:tab", (e) => {  
  e.displayName = "Create: Astralization"
})

// 色彩の化合物を使ったケーシング用のタブ
StartupEvents.registry('creative_mode_tab', event => {
	event.create('kubejs:compound_casings').icon(() => 'create:refined_radiance_casing').content(() => [
		'create:refined_radiance_casing',
		'create:shadow_steel_casing'
	])
})
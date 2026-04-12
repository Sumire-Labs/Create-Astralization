// サーバーティックイベント

ServerEvents.tick(e => {
  e.server.runCommandSilent('execute as @e at @s if block ~ ~ ~ kubejs:unstable_zerothium run function kubejs:unstable_zerothium_damage')
  e.server.runCommandSilent('execute as @e at @s if block ~ ~-0.25 ~ #kubejs:frigid_ash run function kubejs:frigid_damage')
})
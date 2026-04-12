// アイテムイベント

// 拾えないアイテム
const itemsCannotPickUp = [
  'kubejs:glacite',
  'kubejs:unfinished_exquisite_glacite',
  'kubejs:exquisite_glacite',
  'kubejs:zerothium_ingot'
]

PlayerEvents.inventoryChanged(e => {
  let server = e.server
  let player = e.player
  let inventory = player.inventory
  let itemNotFound = true

  if (player.isCuriosEquipped('kubejs:temperature_manipulation_device')) return
  if (player.inventory.find('kubejs:temperature_manipulation_device') != -1) return

  for (let i = 0; i < inventory.getSlots(); i++) {
    let item = inventory.getStackInSlot(i)
    let id = item.id
    let count = item.count

    if (itemsCannotPickUp.includes(id)) {
      itemNotFound = false

      server.runCommandSilent(`summon item ${player.x} ${player.y + 1} ${player.z} {Motion:[0.0,0.2,0.0],Item:{id:"${id}",Count:${count}},PickupDelay:40}`)
      item.count = 0

    }
  }

  if (itemNotFound) return

  player.tell({translate:'message.kubejs.item_cannot_pick_up', color:'dark_aqua'})
  server.runCommandSilent(`damage ${player.uuid} 4 freeze`)
})

// 火炎耐性
CuriosJSEvents.equip(e => {
  let player = e.entity
  let item = e.stack

  if (player.getType() != 'minecraft:player') return
  if (item.id != 'kubejs:temperature_manipulation_device') return

  player.potionEffects.add('fire_resistance', -1, 0, true, false)
})

CuriosJSEvents.unequip(e => {
  let player = e.entity
  let item = e.stack

  if (player.getType() != 'minecraft:player') return
  if (item.id != 'kubejs:temperature_manipulation_device') return

  if (player.potionEffects.isActive('fire_resistance')) 
    player.removeEffect('fire_resistance');
})
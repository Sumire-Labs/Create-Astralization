MBDMachineEvents.onRecipeWorking('mbd2:nullheat_reactor', e => {

  let event = e.getEvent()
  let machine = event.getMachine()
  let level = machine.getLevel()
  let server = level.getServer()

  // 向きを指定した相対座標を取得する関数
  function TranslateRelativeToGlobalX(direction, relLeft, relFore) {
    if (direction == "south") {
      return (machine.pos.getX() + relLeft)
    } else if (direction == "north") {
      return (machine.pos.getX() - relLeft)
    } else if (direction == "west")  {
      return (machine.pos.getX() - relFore)
    } else if (direction == "east")  {
      return (machine.pos.getX() + relFore)
    }
  }

  function TranslateRelativeToGlobalZ(direction, relLeft, relFore) {
    if (direction == "south") {
      return (machine.pos.getZ() + relFore)
    } else if (direction == "north") {
      return (machine.pos.getZ() - relFore)
    } else if (direction == "west")  {
      return (machine.pos.getZ() - relLeft)
    } else if (direction == "east")  {
      return (machine.pos.getZ() + relLeft)
    }
  }

  // コアの座標を計算
  let direction = machine.frontFacing.get()
  let coreX = TranslateRelativeToGlobalX(direction, 0, -2)
  let coreY = machine.pos.getY() + 4
  let coreZ = TranslateRelativeToGlobalZ(direction, 0, -2)

  // パーティクル
  server.runCommandSilent(`particle snowflake ${coreX} ${coreY} ${coreZ} 1 1.5 1 0.2 10 force`)
  server.runCommandSilent(`particle firework ${coreX} ${coreY} ${coreZ} 0.2 0.5 0.2 0.2 10 force`)
  server.runCommandSilent(`particle scrape ${coreX} ${coreY} ${coreZ} 1 1.5 1 0 10 force`)
  server.runCommandSilent(`particle soul_fire_flame ${coreX} ${coreY} ${coreZ} 0 0 0 0.05 10 force`)

  // 液体ハッチを取得
  let fluidHatch = level.getBlock(machine.pos.getX(), (machine.pos.getY() + 1), machine.pos.getZ())
  let fluid = fluidHatch.getEntityData().trait.fluid_tank.storages[0].p
  let hatchT = fluidHatch.getEntityData().trait.fluid_tank.storages[0].t
  let fluidAmount = fluid.Amount
  let fluidType = fluid.FluidName

  // 抑制液の消費
  if (fluidType == 'kubejs:nullheat_suppression_fluid' && fluidAmount >= 1) {
    
    if (fluidAmount <= 3) {
        fluidHatch.setEntityData({trait:{fluid_tank:{storages:[{t:hatchT, p:{Amount:0, FluidName:"minecraft:empty"}}]}}})

    } else {
        fluidAmount -= 3
        fluidHatch.setEntityData({trait:{fluid_tank:{storages:[{t:hatchT, p:{Amount:fluidAmount, FluidName:"kubejs:nullheat_suppression_fluid"}}]}}})
    }

  } else {

    // 爆発

    // クリーパー召喚
    server.runCommandSilent(`summon creeper ${coreX} ${coreY} ${coreZ} {Fuse:0s,ExplosionRadius:7,powered:1b}`)
    server.runCommandSilent(`setblock ${coreX} ${coreY + 7} ${coreZ} kubejs:unstable_zerothium`)

    // 遅れてブロックを設置
    server.scheduleInTicks(20, () => {
        server.runCommandSilent(`fill ${coreX - 1} ${coreY + 3} ${coreZ - 1} ${coreX + 1} ${coreY + 4} ${coreZ + 1} kubejs:unstable_zerothium`)
    })
  }
})

MBDMachineEvents.onRecipeWorking('mbd2:rtg_generator', e => {
  e.getEvent().getMachine().getTraitByName("forge_energy_storage_0").storage.extractEnergy(2147483647, false)
})

MBDMachineEvents.onRecipeWorking('mbd2:energy_output_hatch', e => {
  e.getEvent().getMachine().getTraitByName("forge_energy_storage_0").storage.extractEnergy(2147483647, false)
})
namespace SpriteKind {
    export const Background = SpriteKind.create()
    export const Boss = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Repeated, function () {
    projectile(nyanCat, 150, 0)
})
controller.combos.attachCombo(controller.combos.idToString(controller.combos.ID.B), function () {
    if (可用絕招 == 1) {
        絕招使用中 = 1
        for (let index = 0; index < 1; index++) {
            projectile(up, 0, 80)
            projectile(down, 0, -80)
            projectile(left, 80, 0)
            projectile(right, -80, 0)
        }
        timer.after(500, function () {
            projectile(左上, 80, 80)
            projectile(左下, 80, -80)
            projectile(右上, -80, 80)
            projectile(右下, -80, -80)
        })
        timer.after(2000, function () {
            projectile(up, -80, 80)
            projectile(up, 80, 80)
            projectile(down, -80, -80)
            projectile(down, 80, -80)
            projectile(left, 80, -80)
            projectile(left, 80, 80)
            projectile(right, -80, -80)
            projectile(right, -80, 80)
        })
        timer.after(2000, function () {
            projectile(up, 0, 80)
            projectile(down, 0, -80)
            projectile(left, 80, 0)
            projectile(right, -80, 0)
            projectile(左上, 80, 80)
            projectile(左下, 80, -80)
            projectile(右上, -80, 80)
            projectile(右下, -80, -80)
            projectile(up, 80, 80)
            projectile(down, -80, -80)
            projectile(down, 80, -80)
            projectile(left, 80, -80)
            projectile(left, 80, 80)
            projectile(right, -80, -80)
            projectile(right, -80, 80)
        })
        絕招使用中 = 0
        可用絕招 = 0
        能量計.value += -75
        能量計.setColor(7, 2)
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile(nyanCat, 150, 0)
    能量計.value += 1
})
function dialog () {
    game.setDialogFrame(img`
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        `)
    game.splash("按下A鍵來擊敗他們", "能量條滿按B使出大招")
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Boss, function (sprite, otherSprite) {
    sprite.destroy(effects.fire, 500)
    music.bigCrash.play()
    bossHealth.value += -1
    killedEnemyCount += 1
    能量計.value += 1
})
function Nyan_Cat () {
    nyanCat = sprites.create(assets.image`Nyan cat`, SpriteKind.Player)
    nyanCat.setFlag(SpriteFlag.StayInScreen, true)
    nyanCat.setPosition(10, 50)
    nyanCat.z = 1
    controller.moveSprite(nyanCat)
    info.setLife(10)
    info.setScore(0)
    能量計 = statusbars.create(20, 4, StatusBarKind.Energy)
    能量計.value = 0
    能量計.attachToSprite(nyanCat, 0, 20)
    能量計.setColor(7, 2)
}
statusbars.onZero(StatusBarKind.EnemyHealth, function (status) {
    game.over(true, effects.confetti)
})
controller.combos.attachCombo("" + controller.combos.idToString(controller.combos.ID.up) + controller.combos.idToString(controller.combos.ID.up) + controller.combos.idToString(controller.combos.ID.down) + controller.combos.idToString(controller.combos.ID.down) + controller.combos.idToString(controller.combos.ID.left) + controller.combos.idToString(controller.combos.ID.left) + controller.combos.idToString(controller.combos.ID.right) + controller.combos.idToString(controller.combos.ID.right) + controller.combos.idToString(controller.combos.ID.A) + controller.combos.idToString(controller.combos.ID.B), function () {
    if (可用絕招 == 1) {
        絕招使用中 = 1
        info.changeLifeBy(10)
        music.magicWand.play()
        絕招使用中 = 0
        可用絕招 = 0
        能量計.value += -100
        能量計.setColor(7, 2)
    }
})
function init () {
    scene.setBackgroundColor(8)
    dialog()
    Nyan_Cat()
    effects.starField.startScreenEffect()
    up = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Background)
    up.setPosition(75, 0)
    down = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Background)
    down.setPosition(75, 120)
    left = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Background)
    left.setPosition(0, 60)
    right = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Background)
    right.setPosition(160, 60)
    左上 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Background)
    左上.setPosition(0, 0)
    左下 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Background)
    左下.setPosition(0, 120)
    右上 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Background)
    右上.setPosition(160, 0)
    右下 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Background)
    右下.setPosition(160, 120)
    listEnemyStyle = [
    img`
        .............ccfff..............
        ...........ccddbcf..............
        ..........ccddbbf...............
        ..........fccbbcf...............
        .....fffffccccccff.........ccc..
        ...ffbbbbbbbcbbbbcfff....ccbbc..
        ..fbbbbbbbbcbcbbbbcccff.cdbbc...
        ffbbbbbbffbbcbcbbbcccccfcdbbf...
        fbcbbb11ff1bcbbbbbcccccffbbf....
        fbbb11111111bbbbbcccccccbbcf....
        .fb11133cc11bbbbcccccccccccf....
        ..fccc31c111bbbcccccbdbffbbcf...
        ...fc13c111cbbbfcddddcc..fbbf...
        ....fccc111fbdbbccdcc.....fbbf..
        ........ccccfcdbbcc........fff..
        .............fffff..............
        `,
    img`
        .............ccfff..............
        ............cddbbf..............
        ...........cddbbf...............
        ..........fccbbcf............ccc
        ....ffffffccccccff.........ccbbc
        ..ffbbbbbbbbbbbbbcfff.....cdbbc.
        ffbbbbbbbbbcbcbbbbcccff..cddbbf.
        fbcbbbbbffbbcbcbbbcccccfffdbbf..
        fbbb1111ff1bcbcbbbcccccccbbbcf..
        .fb11111111bbbbbbcccccccccbccf..
        ..fccc33cc11bbbbccccccccfffbbcf.
        ...fc131c111bbbcccccbdbc...fbbf.
        ....f33c111cbbbfdddddcc.....fbbf
        .....ff1111fbdbbfddcc........fff
        .......cccccfbdbbfc.............
        .............fffff..............
        `,
    img`
        ..............cfff..............
        ............ccddbf..............
        ...........cbddbff.........ccc..
        ..........fccbbcf.........cbbc..
        ...fffffffccccccff.......cdbc...
        .ffcbbbbbbbbbbbbbcfff....cdbf...
        fcbbbbbbbbbcbbbbbbcccff.cdbf....
        fbcbbbbffbbbcbcbbbcccccffdcf....
        fbb1111ffbbbcbcbbbccccccbbcf....
        .fb11111111bbcbbbccccccccbbcf...
        ..fccc33cb11bbbbcccccccfffbbf...
        ...fc131c111bbbcccccbdbc..fbbf..
        ....f33c111cbbccdddddbc....fff..
        .....ff1111fdbbccddbcc..........
        .......cccccfdbbbfcc............
        .............fffff..............
        `,
    img`
        .............ccfff..............
        ............cddbbf..............
        ...........cddbbf...............
        ..........fccbbcf............ccc
        ....ffffffccccccff.........ccbbc
        ..ffbbbbbbbbbbbbbcfff.....cdbbc.
        ffbbbbbbbbbcbcbbbbcccff..cddbbf.
        fbcbbbbbffbbcbcbbbcccccfffdbbf..
        fbbb1111ff1bcbcbbbcccccccbbbcf..
        .fb11111111bbbbbbcccccccccbccf..
        ..fccc33cc11bbbbccccccccfffbbcf.
        ...fc131c111bbbcccccbdbc...fbbf.
        ....f33c111cbbbfdddddcc.....fbbf
        .....ff1111fbdbbfddcc........fff
        .......cccccfbdbbfc.............
        .............fffff..............
        `,
    img`
        .................ccfff..............
        ................cddbbf..............
        ...............cddbbf...............
        ..............fccbbcf............ccc
        ........ffffffccccccff.........ccbbc
        ......ffbbbbbbbbbbbbbcfff.....cdbbc.
        ....ffbbbbbbbbbcbcbbbbcccff..cddbbf.
        ....fbcbbbbbffbbcbcbbbcccccfffdbbf..
        ....fbbb1111ff1bcbcbbbcccccccbbbcf..
        .....fb11111111bbbbbbcccccccccbccf..
        ......fccc33cc11bbbbccccccccfffbbcf.
        .......fc131c111bbbcccccbdbc...fbbf.
        ........f33c111cbbbfdddddcc.....fbbf
        .........ff1111fbdbbfddcc........fff
        ...........cccccfbdbbfc.............
        .................fffff..............
        `,
    img`
        .................ccfff..............
        ................cddbbf..............
        ...............cddbbf...............
        .........ffffffccbbcf...............
        ......fffbbbbbbbbcccff..............
        .....fbbbbbbbbbbbbbbbcfff......ccccc
        .....bcbbbbbffbcbcbbbbcccff...cdbbbc
        .....bbb1111ffbbcbcbbbcccccffcddbbc.
        .....fb11111111bcbcbbbcccccccbdbbf..
        ......fccc33c11bbbbbbcccccccccbbcf..
        .......fc131cc11bbbbccccccccffbccf..
        ........f33c1111bbbcccccbdbc..fbbcf.
        .........ff1111cbbbfdddddcc....fbbf.
        ...........ccc1fbdbbfddcc.......fbbf
        ..............ccfbdbbfc..........fff
        .................fffff..............
        `
    ]
    能量計.setLabel("Energy")
    能量計.setColor(7, 2)
    Boss已召喚 = 0
    killedEnemyCount = 0
    可用絕招 = 0
}
function projectile (sprite: Sprite, vx: number, vy: number) {
    star = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, sprite, vx, vy)
    star.lifespan = 2000
    star.z = 0
    animation.runImageAnimation(
    star,
    assets.animation`stars`,
    100,
    true
    )
}
statusbars.onStatusReached(StatusBarKind.Energy, statusbars.StatusComparison.EQ, statusbars.ComparisonType.Percentage, 100, function (status) {
    可用絕招 = 1
    status.setColor(9, 0)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    scene.cameraShake(3, 500)
    music.smallCrash.play()
    info.changeScoreBy(1)
    otherSprite.destroy(effects.spray, 500)
    killedEnemyCount += 1
    能量計.value += 1
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    scene.cameraShake(4, 500)
    music.bigCrash.play()
    info.changeLifeBy(-1)
    otherSprite.destroy(effects.spray, 500)
})
let enemyBullet: Sprite = null
let theBoss: Sprite = null
let 敵人: Sprite = null
let star: Sprite = null
let Boss已召喚 = 0
let listEnemyStyle: Image[] = []
let killedEnemyCount = 0
let bossHealth: StatusBarSprite = null
let 能量計: StatusBarSprite = null
let 右下: Sprite = null
let 右上: Sprite = null
let 左下: Sprite = null
let 左上: Sprite = null
let right: Sprite = null
let left: Sprite = null
let down: Sprite = null
let up: Sprite = null
let 絕招使用中 = 0
let 可用絕招 = 0
let nyanCat: Sprite = null
init()
game.onUpdateInterval(1000, function () {
    if (Boss已召喚 == 0 && 絕招使用中 == 0) {
        敵人 = sprites.create(listEnemyStyle[randint(0, 5)], SpriteKind.Enemy)
        敵人.lifespan = 2500
        敵人.vx = -80
        敵人.setPosition(170, randint(10, 110))
    }
})
forever(function () {
    nyanCat.x = 10
    // 召喚Boss
    if (Boss已召喚 == 0 && info.score() == 32) {
        game.showLongText("Boss Comming", DialogLayout.Bottom)
        Boss已召喚 += 1
        theBoss = sprites.create(img`
            ..........666666666666..........
            ........6667777777777666........
            ......66677777777777777666......
            .....6677777779999777777766.....
            ....667777779966669977777766....
            ....677777799668866117777776....
            ...66777779966877861197777766...
            ...66777799668677686699777766...
            ...88777796688888888669777788...
            ...88777788888888888888777788...
            ...88977888679999997688877988...
            ...88977886777777777768877988...
            ...88997777777777777777779988...
            ...88799777777777777777711788...
            ...88679997777777777779117688...
            ..cc866679999999999999976668cc..
            .ccbc6666679999999999766666cbcc.
            .fcbcc66666666666666666666ccbcf.
            .fcbbcc666666666666666666ccbdcf.
            .f8bbbccc66666666666666cccbddcf.
            .f8cbbbbccccccccccccccccbdddbcf.
            .f8ccbbbbbccccccccccccb111ddccf.
            .f6ccccbbbddddddddddddd111dcccf.
            .f6ccccccbbddddddddddddddbbcccf.
            .f6cccccccccccccbbbbbbbbbdbcccf.
            ..f6cccccccccbbbbbbbbbbbddbccf..
            ..f6cccccccccbbbbbbbbbbbddbccf..
            ..ff6ccccccccbbbbbbbbbbbddbcff..
            ...ff6cccccccbbbbbbbbbbbddbff...
            ....ffcccccccbbbbbbbbbbbdbff....
            ......ffccccbbbbbbbbbbbbff......
            ........ffffffffffffffff........
            `, SpriteKind.Boss)
        bossHealth = statusbars.create(100, 4, StatusBarKind.EnemyHealth)
        bossHealth.setLabel("The Button")
        bossHealth.setPosition(75, 20)
        theBoss.setPosition(140, 64)
        theBoss.vy = 40
    }
    if (killedEnemyCount == 10) {
        info.changeLifeBy(1)
        killedEnemyCount = 0
    }
    if (Boss已召喚 == 1) {
        if (theBoss.y >= 118) {
            theBoss.vy = randint(-80, -20)
        }
        if (theBoss.y < 10) {
            theBoss.vy = randint(20, 80)
        }
    }
})
game.onUpdateInterval(200, function () {
    if (info.score() >= 32 && Math.percentChance(50)) {
        enemyBullet = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . b . . . . . . . 
            . . . . . . . b d b . . . . . . 
            . . . . . . . c d c . . . . . . 
            . . . . . . . c 5 c . . . . . . 
            . . . . . . c d 5 d c . . . . . 
            . . . b c c d 5 5 5 d c c b . . 
            . . b d d 5 5 5 5 5 5 5 d d b . 
            . . . b c c d 5 5 5 d c c b . . 
            . . . . . . c d 5 d c . . . . . 
            . . . . . . . c 5 c . . . . . . 
            . . . . . . . c d c . . . . . . 
            . . . . . . . b d b . . . . . . 
            . . . . . . . . b . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Enemy)
        enemyBullet.setPosition(theBoss.x, theBoss.y)
        enemyBullet.vx = -120
        enemyBullet.lifespan = 1500
        bossHealth.value += randint(1, 10)
    }
})

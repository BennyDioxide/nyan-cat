namespace SpriteKind {
    export const Background = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
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
        `, player, 50, 0)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (player, food) {
    food.setPosition(randint(10, 0), randint(10, 0))
    info.changeScoreBy(1)
    info.startCountdown(10)
})
let star: Sprite = null
let projectile: Sprite = null
let player: Sprite = null
player = sprites.create(assets.image`Nyan cat`, SpriteKind.Player)
player.setStayInScreen(true)
player.setPosition(10, 50)
player.z = 1
controller.moveSprite(player)
effects.starField.startScreenEffect()
scene.setBackgroundColor(8)
info.setLife(5)
info.setScore(0)
game.onUpdateInterval(1000, function () {
    star = sprites.create(img`
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
    star.lifespan = 2500
    star.setVelocity(-50, 0)
    star.setPosition(170, randint(10, 110))
    star.z = 0
    animation.runImageAnimation(
    star,
    assets.animation`stars`,
    100,
    true
    )
})

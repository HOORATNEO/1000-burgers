sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Food, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.ashes, 100)
    info.changeScoreBy(1)
    info.changeLifeBy(1)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    foop = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f . . . . . . . 
        . . . . f f . . f f . . . . . . 
        . . . . f . . . . f . . . . . . 
        . . . . f . . . . f . . . . . . 
        . . . . f f . . f f . . . . . . 
        . . . . . f f f f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, fireball, randint(10, 30), 0)
})
info.onScore(1000, function () {
    game.gameOver(true)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    poof = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 5 5 5 . . . . . . . . 
        . . . . . 5 . . 5 . . . . . . . 
        . . . . . 5 . . 5 . . . . . . . 
        . . . . . 5 5 5 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, fireball, randint(90, 110), 0)
})
controller.B.onEvent(ControllerButtonEvent.Repeated, function () {
    foop = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f . . . . . . . 
        . . . . f f . . f f . . . . . . 
        . . . . f . . . . f . . . . . . 
        . . . . f . . . . f . . . . . . 
        . . . . f f . . f f . . . . . . 
        . . . . . f f f f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, fireball, randint(10, 60), 0)
})
info.onLifeZero(function () {
    game.gameOver(false)
})
controller.A.onEvent(ControllerButtonEvent.Repeated, function () {
    poof = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 5 5 5 . . . . . . . . 
        . . . . . 5 . . 5 . . . . . . . 
        . . . . . 5 . . 5 . . . . . . . 
        . . . . . 5 5 5 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, fireball, randint(80, 120), 0)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.ashes, 100)
    info.changeLifeBy(1)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.ashes, 100)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.ashes, 100)
    info.changeLifeBy(-1)
})
let eviul: Sprite = null
let poof: Sprite = null
let foop: Sprite = null
let fireball: Sprite = null
info.setScore(0)
scene.setBackgroundColor(1)
fireball = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f . . . . . . . 
    . . . . f 5 5 5 f f . . . . . . 
    . . . . f 5 . . 5 f . . . . . . 
    . . . . f 5 . . 5 f . . . . . . 
    . . . . f 5 5 5 f f . . . . . . 
    . . . . . f f f f . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(fireball, 50, 100)
fireball.setStayInScreen(true)
game.setGameOverPlayable(false, music.melodyPlayable(music.bigCrash), false)
game.setGameOverPlayable(true, music.melodyPlayable(music.powerUp), false)
game.onUpdateInterval(1000, function () {
    eviul = sprites.create(img`
        . . . c c 4 4 4 4 4 4 b b . . . 
        . . b 4 4 b b 4 b b 4 4 4 b . . 
        . e b 4 4 b 4 4 4 4 4 4 4 4 6 . 
        . 6 b 4 4 4 4 b 5 4 4 4 b 4 4 . 
        e b b 4 4 4 4 4 4 4 4 4 4 b 4 4 
        b 6 b 4 b b 4 4 4 4 b 4 4 4 4 b 
        c 6 6 4 4 4 4 4 4 4 4 4 4 4 4 7 
        e b b 6 6 b 4 4 4 4 4 4 4 4 b 7 
        8 f c 6 6 6 b 4 4 4 4 4 4 c c e 
        7 2 2 c c c c c c c c 2 2 2 6 e 
        e 8 6 7 7 6 6 7 7 7 6 7 7 f f f 
        b f f f f f f 6 6 8 e e e f e e 
        6 d d f f e e f f e e f e d b 4 
        f 6 b d d d d d d d d d b 4 4 e 
        . . f b b 4 4 4 4 4 4 4 4 e . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    eviul.setPosition(155, randint(0, 120))
    eviul.setVelocity(-50, 0)
})
game.onUpdateInterval(60000, function () {
    eviul = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . f b b 4 4 4 4 4 4 4 4 e . . 
        f 6 b d d d d d d d d d b 4 4 e 
        6 d d f f e e f f e e f e d b 4 
        b f f f f f f 6 6 8 e e e f e e 
        e 8 6 7 7 6 6 7 7 7 6 7 7 f f f 
        7 2 2 c c c c c c c c 2 2 2 6 e 
        8 f c 6 6 6 b 4 4 4 4 4 4 c c e 
        e b b 6 6 b 4 4 4 4 4 4 4 4 b 7 
        c 6 6 4 4 4 4 4 4 4 4 4 4 4 4 7 
        b 6 b 4 b b 4 4 4 4 b 4 4 4 4 b 
        e b b 4 4 4 4 4 4 4 4 4 4 b 4 4 
        . 6 b 4 4 4 4 b 5 4 4 4 b 4 4 . 
        . e b 4 4 b 4 4 4 4 4 4 4 4 6 . 
        . . b 4 4 b b 4 b b 4 4 4 b . . 
        . . . c c 4 4 4 4 4 4 b b . . . 
        `, SpriteKind.Food)
    eviul.setPosition(155, randint(0, 120))
    eviul.setVelocity(-75, 0)
})

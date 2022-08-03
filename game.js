kaboom({
    global: true,
    fullscreen: true,
    scale: 2,
    debug: true,
    clearColor: [0,0,0,1],
})

const MOVE_SPEED = 120
const JUMP_FORCE = 360
const BIG_JUMP_FORCE = 550
let CURRENT_JUMP_FORCE = JUMP_FORCE
const FALL_DEATH = 400
const ENEMY_SPEED = 20
let isJumping = false

loadRoot('https://i.imgur.com/')
loadSprite('coin', 'wbKxhcd.png')
// loadSprite('evil-shroom', 'KPO3fR9.png')
loadSprite('brick', 'pogC9x5.png')
loadSprite('block', 'M6rwarW.png')
loadSprite('mario', 'Wb1qfhK.png')
loadSprite('mushroom', '0wMd92p.png')
loadSprite('surprise', 'gesQ1KP.png')
loadSprite('unboxed', 'bdrLpi6.png')
loadSprite('pipe-top-left', 'ReTPiWY.png')
loadSprite('pipe-top-right', 'hj2GK4n.png')
loadSprite('pipe-bottom-left', 'c1cYSbt.png')
loadSprite('pipe-bottom-right', 'nqQ79eI.png')
loadSprite('marmor', 'EkleLlt.png')
loadSprite('down-marmor', 'Ou9w4gH.png')
loadSprite('box', 'bdrLpi6.png')
loadSprite('bomberman', 'T0xbHb8.png', {
  sliceX: 7,
  sliceY: 4,
  anims: {
    //stoped
    idleLeft: { from: 21, to: 21 },
    idleRight: { from: 7, to: 7 },

    //move
    moveLeft: { from: 22 , to: 27  },
    moveRigth: { from: 8, to: 13 },   
  }
});

loadSprite('slime', 'c1Vj0j1.png', { sliceX: 3,});
loadSprite('polvo', '6YV0Zas.png', { sliceX: 3,});
loadSprite('bomba', 'etY46bP.png', { sliceX: 3,});

// loadSprite('blue-block', 'fVscIbn.png')
// loadSprite('blue-brick', '3e5YRQd.png')
// loadSprite('blue-steel', 'gqVoI2b.png')
// loadSprite('blue-evil-shroom', 'SvV4ueD.png')
// loadSprite('blue-surprise', 'RMqCc1G.png')

scene("game", () =>{
    layers(['bg', 'obj', 'ui'], 'obj');

    const map = 
        [
          
          '======   =============================',
          '                                      ',
          '                                      ',
          '  >         $  $  $  $  $  $          ',
          '==============================   =====',
          '   $                                  ',
          '                                      ',
          ' $   $        $   $   $   $     !     ',
          '    _       ?   ?   ?   ?   ?  !!!    ',
          '======   =============================',
          '                $   $   $             ',
          '                                      ',
          '       !      $   $   $   $           ',
          '      !!!       &        +            ',
          '==============================   =====',
          '                                      ',
          '                                      ',
          '                             !        ',
          '                            !!!      $',
          '======================================',
        ]
        // [
        //   '£                                       £',
        //   '£                                       £',
        //   '£                                       £',
        //   '£                                       £',
        //   '£                                       £',
        //   '£        @@@@@@              x x        £',
        //   '£                          x x x        £',
        //   '£                        x x x x  x   -+£',
        //   '£               z   z  x x x x x  x   ()£',
        //   '!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!',
        // ]
      

      const levelCfg = {
        width: 20,
        height: 20,
        '=': [sprite('box'), solid()],
        '$': [sprite('coin'), 'coin'],
        '%': [sprite('surprise'), solid(), 'coin-surprise'],
        '*': [sprite('surprise'), solid(), 'mushroom-surprise'],
        '}': [sprite('unboxed'), solid()],
        '@': [sprite('marmor'), solid()],
        '!': [sprite('brick'), solid()],
        '&': [sprite('slime'), 'dangerous'],
        '+': [sprite('polvo'), 'dangerous'],
        '?': [sprite('bomba'), 'bomb'],
        '>': [sprite('brick'), 'brick', solid()],
        '_': [sprite('polvo'), 'polvo'],
        // '(': [sprite('pipe-bottom-left'), solid(), scale(0.5)],
        // ')': [sprite('pipe-bottom-right'), solid(), scale(0.5)],
        // '-': [sprite('pipe-top-left'), solid(), scale(0.5), 'pipe'],
        // '+': [sprite('pipe-top-right'), solid(), scale(0.5), 'pipe'],
        // '^': [sprite('evil-shroom'), solid(), 'dangerous'],
        '#': [sprite('mushroom'), solid(), 'mushroom', body()],
        // '!': [sprite('blue-block'), solid(), scale(0.5)],
        // '£': [sprite('blue-brick'), solid(), scale(0.5)],
        // 'z': [sprite('blue-evil-shroom'), solid(), scale(0.5), 'dangerous'],
        // '@': [sprite('blue-surprise'), solid(), scale(0.5), 'coin-surprise'],
        // 'x': [sprite('blue-steel'), solid(), scale(0.5)],
    
      }
    
      const gameLevel = addLevel(map, levelCfg)

      add()
    

    // const player = add([
    //     sprite('bomberman'), ,
    //     pos(30, 320),
    //     body(),
    //     origin('bot')

        
    // ])

    const player = add([
      sprite('bomberman', {
        animeSpeed: 0.1,
        frame: 14,
      }),
      pos(30,320),
      { dir: vec2(1,0) },
      body(),

    ])

    let mov = 0;

    keyDown('left', () => {
      player.move(-MOVE_SPEED, 0);
      player.dir = vec2(-1, 0);
      mov = 1
    })
  
    keyDown('right', () => {
      player.move(MOVE_SPEED, 0);
      player.dir = vec2(1, 0);
      mov = 2
    })

    keyPress('left', () => {
      player.play('moveLeft')
    })
  
    keyPress('right', () => {
      player.play('moveRigth')
    })

    keyRelease('left', () => {
      player.play('idleLeft')
    })
  
    keyRelease('right', () => {
      player.play('idleRight')
    })

      keyPress('up', () => {
        if (player.grounded()) {
          isJumping = true
          player.jump(CURRENT_JUMP_FORCE)
        }
      })

      let contador = 0;
      let movimento = -20;
      let contador1 = 0;
      let movimento1 = -20;

      action('dangerous', (obj) => {
        obj.move(movimento,0)
        contador ++;
        if(contador == 250){
          movimento = 20;
        }else if(contador == 500){
          movimento = -20;
          contador = 0;
        }
      })  

      action('bomb', (obj) => {
        obj.move(movimento1,0)
        contador1 ++;
        if(contador1 == 250){
          movimento1 = 20;
        }else if(contador1 == 500){
          movimento1 = -20;
          contador1 = 0;
        }
      }) 

      action('polvo', (obj) => {
        obj.move(movimento1,0)
        contador1 ++;
        if(contador1 == 250){
          movimento1 = 20;
        }else if(contador1 == 500){
          movimento1 = -20;
          contador1 = 0;
        }
      }) 

      player.collides('dangerous', (obj) => {
        // go("game");
      })

      player.collides('bomb', (obj) => {
        // go("game");
      })
      player.collides('coin', (obj) => {
        destroy(obj)
      })
      player.collides('brick', (obj) => {
        if(isJumping){
          isJumping = false;
          player.move(-10, 0);
        }else if(mov == 2) {
          obj.move(20,0)
        }else if(mov == 1){
          obj.move(-20,0)
        }
      })
})

start("game");
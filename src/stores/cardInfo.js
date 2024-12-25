import { defineStore } from 'pinia'

export const useCardStore = defineStore('cardInfo', {
    state: () => ({ 
        cardInfo: [
        {
            id: 0, 
            type: 'q',
            content: 'The most important aspect of a course assessment strategy is “.......................................................”',
            colour: '#26a8df',
            svgUrl: '../../public/images/illustrations/guy with chess piece.svg',
            isFront: true, 
        },
        {
            id: 1, 
            type: 'q',
            content: 'To ensure that assessments are reliable and fair “.........”',
            colour: '#26a8df',
            svgUrl: '../../public/images/illustrations/hand and earth.svg',
            isFront: true, 
        },
        {
            id: 2, 
            type: 'q',
            content: '“................” should be considered when designing assessments',
            colour: '#26a8df',
            svgUrl: '../../public/images/illustrations/guy holding pencil up looking at it.svg',
            isFront: true, 
        },
        {
            id: 3, 
            type: 'q',
            content: '“.............................” to avoid over-assessment',
            colour: '#26a8df',
            svgUrl: '../../public/images/illustrations/unhappy assessment girl.svg',
            isFront: true, 
        },
        {
            id: 4, 
            type: 'q',
            content: 'Incorporate “................................” into assessments',
            colour: '#26a8df',
            svgUrl: '../../public/images/illustrations/girl with finger up.svg',
            isFront: true, 
        },
        {
            id: 5, 
            type: 'a',
            content: 'Provide opportunities for formative feedback',
            colour: '#Afd3f0',
            svgUrl: '../../public/images/illustrations/tick box person.svg',
            isFront: true, 
        },

    ]
    })
  })
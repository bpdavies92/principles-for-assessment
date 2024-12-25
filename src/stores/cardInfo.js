import { defineStore } from 'pinia'

export const useCardStore = defineStore('cardInfo', {
    state: () => ({ 
        cardInfo: [
        {
            id: 0, 
            type: 'answer',
            content: 'This is a test, and if it show it has worked',
            colour: '#Afd3f0',
            svgUrl: '../../public/images/illustrations/rocket.svg'
        },
        {
            id: 1, 
            type: 'answer',
            content: 'Another one',
            colour: '#Afd3f0',
            svgUrl: '../../public/images/illustrations/rocket.svg'
        },
        {
            id: 2, 
            type: 'question',
            content: 'Another one',
            colour: '#26a8df',
            svgUrl: '../../public/images/illustrations/rocket.svg'
        }
    ]
    })
  })
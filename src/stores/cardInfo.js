
import AllAnswers from '@/components/AllAnswers.vue'
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
            isDouble: false,
            isTriple: false
        },
        {
            id: 1, 
            type: 'q',
            content: 'To ensure that assessments are reliable and fair “.........”',
            colour: '#26a8df',
            svgUrl: '../../public/images/illustrations/hand and earth.svg',
            isFront: true, 
            isDouble: false,
            isTriple: false
        },
        {
            id: 2, 
            type: 'q',
            content: '“................” should be considered when designing assessments',
            colour: '#26a8df',
            svgUrl: '../../public/images/illustrations/guy holding pencil up looking at it.svg',
            isFront: true, 
            isDouble: false,
            isTriple: false
        },
        {
            id: 3, 
            type: 'q',
            content: '“.............................” to avoid over-assessment',
            colour: '#26a8df',
            svgUrl: '../../public/images/illustrations/unhappy assessment girl.svg',
            isFront: true, 
            isDouble: false,
            isTriple: false
        },
        {
            id: 4, 
            type: 'q',
            content: 'Incorporate “................................” into assessments',
            colour: '#26a8df',
            svgUrl: '../../public/images/illustrations/girl with finger up.svg',
            isFront: true, 
            isDouble: false,
            isTriple: false
        },
        {
            id: 5, 
            type: 'a',
            content: 'Provide opportunities for formative feedback',
            colour: '#Afd3f0',
            svgUrl: '../../public/images/illustrations/tick box person.svg',
            isFront: true, 
            isDouble: false,
            isTriple: false,
            points: 10, 
            userInput: false, 
            userInputText: 'test',
            staticText: null        
        },
        {
            id: 6, 
            type: 'a',
            content: 'Asking students to assess each other while blindfolded',
            colour: '#Afd3f0',
            svgUrl: '../../public/images/illustrations/blindfolded students.svg',
            isFront: true, 
            isDouble: false,
            isTriple: false,
            points: 10, 
            userInput: false, 
            userInputText: 'test',
            staticText: null        
        },
        {
            id: 7, 
            type: 'a',
            content: 'Provide multiple assessment tasks aligned to each learning outcome',
            colour: '#Afd3f0',
            svgUrl: '../../public/images/illustrations/multi choice assessment.svg',
            isFront: true, 
            isDouble: false,
            isTriple: false,
            points: 10, 
            userInput: false, 
            userInputText: 'test',
            staticText: null        
        },
        {
            id: 8, 
            type: 'a',
            content: 'Using synoptic assessments',
            colour: '#Afd3f0',
            svgUrl: '../../public/images/illustrations/hand arm and book.svg',
            isFront: true, 
            isDouble: false,
            isTriple: false,
            points: 10, 
            userInput: false, 
            userInputText: 'test',
            staticText: null       
        },
        {
            id: 9, 
            type: 'a',
            content: 'Using a variety of assessment methods',
            colour: '#Afd3f0',
            svgUrl: '../../public/images/illustrations/puzzle pieces.svg',
            isFront: true, 
            isDouble: false,
            isTriple: false,
            points: 10, 
            userInput: false, 
            userInputText: 'test',
            staticText: null        
        },
        {
            id: 10, 
            type: 'a',
            content: 'Students design their own assessment tasks',
            colour: '#Afd3f0',
            svgUrl: '../../public/images/illustrations/arm hand and pencil.svg',
            isFront: true, 
            isDouble: false,
            isTriple: false,
            points: 10, 
            userInput: false, 
            userInputText: 'test',
            staticText: null        
        },
        {
            id: 11, 
            type: 'a',
            content: 'Incorporating real-world scenarios',
            colour: '#Afd3f0',
            svgUrl: '../../public/images/illustrations/earth.svg',
            isFront: true, 
            isDouble: false,
            isTriple: false,
            points: 10, 
            userInput: false, 
            userInputText: 'test',
            staticText: null        
        },
        {
            id: 12, 
            type: 'a',
            content: `“........................“ is the key`,
            colour: '#Afd3f0',
            svgUrl: '../../public/images/illustrations/key lady.svg',
            isFront: true, 
            isDouble: false,
            isTriple: false,
            points: 10, 
            userInput: true, 
            userInputText: 'test',
            staticText: ' is the key'
        },
    ],
    randomCard: 0,
    processStage: 0,
    randomCardAnswers: [], 
    showAllAnswers: false,
    showAllPicks: false,
    myQuestionAnswers: [],
    modelOpenClose: false
    }),
    getters: { 
        onlyQuestionCards: (state) => {
        return state.cardInfo.filter((i) => i.type === 'q')
        }, 
        onlyAnswerCards: (state) => {
        return state.cardInfo.filter((i) => i.type === 'a')
        },
        onlyQuestionCardsSingleRandom: (state) => { 
            const questionCards = state.cardInfo.filter((i) => {return i.type === 'q'})
            return questionCards[state.randomCard]
        },
        onlyAnswerCardsSixCards: (state) => {
            return state.randomCardAnswers.slice(0, 6);
        },
        onlyNineImages: (state) => {
            const onlyImages = state.cardInfo.map((value, index, array) => {
                return value.svgUrl
            })

            return onlyImages.slice(0, 8)
        }

    },
    actions: {
        reshuffleQuestionCard() {
            const questionCards = this.cardInfo.filter((i) => {   
                return i.type === 'q'
            })

            this.randomCard = Math.floor(Math.random() * questionCards.length)
            console.log(this.randomCard)
            return this.randomCard
        },
        reshuffleAnswerCard() {
            const allCards = this.cardInfo; // Get all cards
            const onlyAnswerCards = allCards.filter((i) => i.type === 'a'); // Filter only "answer" cards
            this.randomCardAnswers = [...onlyAnswerCards]; // Clone the array
            const length = this.randomCardAnswers.length;

            // Fisher-Yates Shuffle
            for (let i = length - 1; i > 0; i--) {
                const randomIndex = Math.floor(Math.random() * (i + 1)); // Random index within range
                [this.randomCardAnswers[i], this.randomCardAnswers[randomIndex]] = [this.randomCardAnswers[randomIndex], this.randomCardAnswers[i]]; // Swap elements
            }
    
            return this.randomCardAnswers;
        },
        questionAnswerPair(question, answer, score) {
            const newPair = [question, answer, score]
            this.myQuestionAnswers.push(newPair)
            console.log(this.myQuestionAnswers)
        }
    }
  })
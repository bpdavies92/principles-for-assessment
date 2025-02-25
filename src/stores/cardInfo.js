import { defineStore } from 'pinia'

export const useCardStore = defineStore('cardInfo', {
    state: () => ({
        cardInfo: [
        {
            id: 0, 
            type: 'q',
            content: 'The most important aspect of a course assessment strategy is “...................”',
            colour: '#26a8df',
            svgUrl: `${import.meta.env.VITE_LINK}/images/illustrations/guy with chess piece.svg`,
            isFront: true, 
            isDouble: false,
            isTriple: false
        },
        {
            id: 1, 
            type: 'q',
            content: 'To ensure that assessments are reliable and fair “.........”',
            colour: '#26a8df',
            svgUrl: `${import.meta.env.VITE_LINK}/images/illustrations/hand and earth.svg`,
            isFront: true, 
            isDouble: false,
            isTriple: false
        },
        {
            id: 2, 
            type: 'q',
            content: '“................” should be considered when designing assessments',
            colour: '#26a8df',
            svgUrl: `${import.meta.env.VITE_LINK}/images/illustrations/guy holding pencil up looking at it.svg`,
            isFront: true, 
            isDouble: false,
            isTriple: false
        },
        {
            id: 3, 
            type: 'q',
            content: '“................” to avoid over-assessment',
            colour: '#26a8df',
            svgUrl: `${import.meta.env.VITE_LINK}/images/illustrations/unhappy assessment girl.svg`,
            isFront: true, 
            isDouble: false,
            isTriple: false
        },
        {
            id: 4, 
            type: 'q',
            content: 'Incorporate “............” into assessments',
            colour: '#26a8df',
            svgUrl: `${import.meta.env.VITE_LINK}/images/illustrations/girl with finger up.svg`,
            isFront: true, 
            isDouble: false,
            isTriple: false
        },
        {
            id: 5, 
            type: 'a',
            content: 'Provide opportunities for formative feedback',
            colour: '#Afd3f0',
            svgUrl: `${import.meta.env.VITE_LINK}/images/illustrations/tick box person.svg`,
            isFront: true, 
            isDouble: false,
            isTriple: false,
            points: 10, 
            userInput: false, 
            userInputText: '',
            staticText: null        
        },
        {
            id: 6, 
            type: 'a',
            content: 'Asking students to assess each other while blindfolded',
            colour: '#Afd3f0',
            svgUrl: `${import.meta.env.VITE_LINK}/images/illustrations/blindfolded students.svg`,
            isFront: true, 
            isDouble: false,
            isTriple: false,
            points: 10, 
            userInput: false, 
            userInputText: '',
            staticText: null        
        },
        {
            id: 7, 
            type: 'a',
            content: 'Provide multiple assessment tasks aligned to each learning outcome',
            colour: '#Afd3f0',
            svgUrl: `${import.meta.env.VITE_LINK}/images/illustrations/multi choice assessment.svg`,
            isFront: true, 
            isDouble: false,
            isTriple: false,
            points: 10, 
            userInput: false, 
            userInputText: '',
            staticText: null        
        },
        {
            id: 8, 
            type: 'a',
            content: 'Using synoptic assessments',
            colour: '#Afd3f0',
            svgUrl: `${import.meta.env.VITE_LINK}/images/illustrations/hand arm and book.svg`,
            isFront: true, 
            isDouble: false,
            isTriple: false,
            points: 10, 
            userInput: false, 
            userInputText: '',
            staticText: null       
        },
        {
            id: 9, 
            type: 'a',
            content: 'Using a variety of assessment methods',
            colour: '#Afd3f0',
            svgUrl: `${import.meta.env.VITE_LINK}/images/illustrations/puzzle pieces.svg`,
            isFront: true, 
            isDouble: false,
            isTriple: false,
            points: 10, 
            userInput: false, 
            userInputText: '',
            staticText: null        
        },
        {
            id: 10, 
            type: 'a',
            content: 'Students design their own assessment tasks',
            colour: '#Afd3f0',
            svgUrl: `${import.meta.env.VITE_LINK}/images/illustrations/arm hand and pencil.svg`,
            isFront: true, 
            isDouble: false,
            isTriple: false,
            points: 10, 
            userInput: false, 
            userInputText: '',
            staticText: null        
        },
        {
            id: 11, 
            type: 'a',
            content: 'Incorporating real-world scenarios',
            colour: '#Afd3f0',
            svgUrl: `${import.meta.env.VITE_LINK}/images/illustrations/earth.svg`,
            isFront: true, 
            isDouble: false,
            isTriple: false,
            points: 10, 
            userInput: false, 
            userInputText: '',
            staticText: null        
        },
        {
            id: 12, 
            type: 'a',
            content: `“........................“ is the key`,
            answer: null,
            colour: '#Afd3f0',
            svgUrl: `${import.meta.env.VITE_LINK}/images/illustrations/key lady.svg`,
            isFront: true, 
            isDouble: true,
            isTriple: false,
            points: 10, 
            userInput: true, 
            userInputText: '',
            reverseStaticText: false,
            staticText: ' is the key'
        },
        {
            id: 13, 
            type: 'a',
            content: `Group assessment`,
            answer: null,
            colour: '#Afd3f0',
            svgUrl: `${import.meta.env.VITE_LINK}/images/illustrations/group assessment.svg`,
            isFront: true, 
            isDouble: false,
            isTriple: false,
            points: 10, 
            userInput: false, 
            userInputText: '',
        },
        {
            id: 14, 
            type: 'a',
            content: `Assessments that build on prior knowledge`,
            answer: null,
            colour: '#Afd3f0',
            svgUrl: `${import.meta.env.VITE_LINK}/images/illustrations/assessments that build on prior knowledge.svg`,
            isFront: true, 
            isDouble: false,
            isTriple: false,
            points: 10, 
            userInput: false, 
            userInputText: '',
        },
        {
            id: 15, 
            type: 'a',
            content: `Formative assessment`,
            answer: null,
            colour: '#Afd3f0',
            svgUrl: `${import.meta.env.VITE_LINK}/images/illustrations/formative assessment.svg`,
            isFront: true, 
            isDouble: false,
            isTriple: false,
            points: 10, 
            userInput: false, 
            userInputText: '',
        },
        {
            id: 16, 
            type: 'a',
            content: `Defining the ability for students to use artificial intelligence tools`,
            answer: null,
            colour: '#Afd3f0',
            svgUrl: `${import.meta.env.VITE_LINK}/images/illustrations/defining the ability ai.svg`,
            isFront: true, 
            isDouble: false,
            isTriple: false,
            points: 10, 
            userInput: false, 
            userInputText: '',
        },
        {
            id: 17, 
            type: 'a',
            content: `Incorporating the use of artificial intelligence`,
            answer: null,
            colour: '#Afd3f0',
            svgUrl: `${import.meta.env.VITE_LINK}/images/illustrations/incorporating the use of artificial intelligence.svg`,
            isFront: true, 
            isDouble: false,
            isTriple: false,
            points: 10, 
            userInput: false, 
            userInputText: '',
        },
        {
            id: 18, 
            type: 'a',
            content: `Consult with the Centre for Learning & Teaching (CLT), their supporting resources and developmental workshops`,
            answer: null,
            colour: '#Afd3f0',
            svgUrl: `${import.meta.env.VITE_LINK}/images/illustrations/consult with clt.svg`,
            isFront: true, 
            isDouble: false,
            isTriple: false,
            points: 10, 
            userInput: false, 
            userInputText: '',
        },
        {
            id: 19, 
            type: 'a',
            content: `Vertical and horizontal alignment of learning objectives with assessment tasks`,
            answer: null,
            colour: '#Afd3f0',
            svgUrl: `${import.meta.env.VITE_LINK}/images/illustrations/vertical horizontal.svg`,
            isFront: true, 
            isDouble: false,
            isTriple: false,
            points: 10, 
            userInput: false, 
            userInputText: '',
        },
        {
            id: 20, 
            type: 'a',
            content: `Assessment support sessions at the end of the module`,
            answer: null,
            colour: '#Afd3f0',
            svgUrl: `${import.meta.env.VITE_LINK}/images/illustrations/assessment support end of module.svg`,
            isFront: true, 
            isDouble: false,
            isTriple: false,
            points: 10, 
            userInput: false, 
            userInputText: '',
        },
        {
            id: 21, 
            type: 'a',
            content: `Predicting the future`,
            answer: null,
            colour: '#Afd3f0',
            svgUrl: `${import.meta.env.VITE_LINK}/images/illustrations/predicting the future.svg`,
            isFront: true, 
            isDouble: false,
            isTriple: false,
            points: 10, 
            userInput: false, 
            userInputText: '',
        },
        {
            id: 22, 
            type: 'a',
            content: `Stop doing “.............................................”`,
            answer: null,
            colour: '#Afd3f0',
            svgUrl: `${import.meta.env.VITE_LINK}/images/illustrations/stop.svg`,
            isFront: true, 
            isDouble: true,
            isTriple: false,
            points: 10, 
            userInput: true, 
            userInputText: '',
            staticText: 'Stop doing ', 
            reverseStaticText: true
        },
        {
            id: 23, 
            type: 'a',
            content: `Maximise “.................................”`,
            answer: null,
            colour: '#Afd3f0',
            svgUrl: `${import.meta.env.VITE_LINK}/images/illustrations/rocket.svg`,
            isFront: true, 
            isDouble: true,
            isTriple: false,
            points: 10, 
            userInput: true, 
            userInputText: '',
            staticText: 'Maximise ', 
            reverseStaticText: true
        },
        {
            id: 24, 
            type: 'a',
            content: `Work with all module staff on the course`,
            answer: null,
            colour: '#Afd3f0',
            svgUrl: `${import.meta.env.VITE_LINK}/images/illustrations/work with all module staff.svg`,
            isFront: true, 
            isDouble: false,
            isTriple: false,
            points: 10, 
            userInput: false, 
            userInputText: '',
            staticText: null, 
            reverseStaticText: null
        },
        {
            id: 25, 
            type: 'a',
            content: `Work with “........................................................”`,
            answer: null,
            colour: '#Afd3f0',
            svgUrl: `${import.meta.env.VITE_LINK}/images/illustrations/work with.svg`,
            isFront: true, 
            isDouble: true,
            isTriple: false,
            points: 10, 
            userInput: true, 
            userInputText: '',
            staticText: 'Work with ', 
            reverseStaticText: true
        },
        {
            id: 26, 
            type: 'a',
            content: `Consult “.............................”`,
            answer: null,
            colour: '#Afd3f0',
            svgUrl: `${import.meta.env.VITE_LINK}/images/illustrations/consult.svg`,
            isFront: true, 
            isDouble: true,
            isTriple: false,
            points: 10, 
            userInput: true, 
            userInputText: '',
            staticText: 'Consult ', 
            reverseStaticText: true
        },
        {
            id: 27, 
            type: 'a',
            content: `Negotiated assessments`,
            answer: null,
            colour: '#Afd3f0',
            svgUrl: `${import.meta.env.VITE_LINK}/images/illustrations/negotiated assessment.svg`,
            isFront: true, 
            isDouble: false,
            isTriple: false,
            points: 10, 
            userInput: false, 
            userInputText: '',
            staticText: null, 
            reverseStaticText: null
        },
        {
            id: 28, 
            type: 'a',
            content: `Pass/fail modules`,
            answer: null,
            colour: '#Afd3f0',
            svgUrl: `${import.meta.env.VITE_LINK}/images/illustrations/pass fail.svg`,
            isFront: true, 
            isDouble: false,
            isTriple: false,
            points: 10, 
            userInput: false, 
            userInputText: '',
            staticText: null, 
            reverseStaticText: null
        },
        {
            id: 29, 
            type: 'a',
            content: `Including “................................................................”`,
            answer: null,
            colour: '#Afd3f0',
            svgUrl: `${import.meta.env.VITE_LINK}/images/illustrations/including.svg`,
            isFront: true, 
            isDouble: true,
            isTriple: false,
            points: 10, 
            userInput: true, 
            userInputText: '',
            staticText: 'Including ', 
            reverseStaticText: true
        },
        {
            id: 30, 
            type: 'a',
            content: `Peer assessment`,
            answer: null,
            colour: '#Afd3f0',
            svgUrl: `${import.meta.env.VITE_LINK}/images/illustrations/peer assessment.svg`,
            isFront: true, 
            isDouble: false,
            isTriple: false,
            points: 10, 
            userInput: false, 
            userInputText: '',
            staticText: null, 
            reverseStaticText: null
        },
        {
            id: 31, 
            type: 'a',
            content: `Ensure students understand the marking criteria`,
            answer: null,
            colour: '#Afd3f0',
            svgUrl: `${import.meta.env.VITE_LINK}/images/illustrations/students understand critera.svg`,
            isFront: true, 
            isDouble: false,
            isTriple: false,
            points: 10, 
            userInput: false, 
            userInputText: '',
            staticText: null, 
            reverseStaticText: null
        },
        {
            id: 32, 
            type: 'a',
            content: `Ensure that assessments are aligned with learning outcomes and teaching activities`,
            answer: null,
            colour: '#Afd3f0',
            svgUrl: `${import.meta.env.VITE_LINK}/images/illustrations/learning outcomes.svg`,
            isFront: true, 
            isDouble: false,
            isTriple: false,
            points: 10, 
            userInput: false, 
            userInputText: '',
            staticText: null, 
            reverseStaticText: null
        },
        {
            id: 33, 
            type: 'a',
            content: `Incorporating a work placement`,
            answer: null,
            colour: '#Afd3f0',
            svgUrl: `${import.meta.env.VITE_LINK}/images/illustrations/work placement.svg`,
            isFront: true, 
            isDouble: false,
            isTriple: false,
            points: 10, 
            userInput: false, 
            userInputText: '',
            staticText: null, 
            reverseStaticText: null
        },
        {
            id: 34, 
            type: 'a',
            content: `Getting everything organised`,
            answer: null,
            colour: '#Afd3f0',
            svgUrl: `${import.meta.env.VITE_LINK}/images/illustrations/organised.svg`,
            isFront: true, 
            isDouble: false,
            isTriple: false,
            points: 10, 
            userInput: false, 
            userInputText: '',
            staticText: null, 
            reverseStaticText: null
        },
        {
            id: 35, 
            type: 'a',
            content: `Removing “......................................................”`,
            answer: null,
            colour: '#Afd3f0',
            svgUrl: `${import.meta.env.VITE_LINK}/images/illustrations/removing.svg`,
            isFront: true, 
            isDouble: true,
            isTriple: false,
            points: 10, 
            userInput: true, 
            userInputText: '',
            staticText: 'Removing ', 
            reverseStaticText: true
        },
        {
            id: 36, 
            type: 'a',
            content: `“..................................................................................................................”`,
            answer: null,
            colour: '#Afd3f0',
            svgUrl: `${import.meta.env.VITE_LINK}/images/illustrations/maximise.svg`,
            isFront: true, 
            isDouble: false,
            isTriple: true,
            points: 10, 
            userInput: true, 
            userInputText: '',
            staticText: '', 
            reverseStaticText: true
        },
    ],
    randomCard: 0,
    processStage: 0,
    randomCardAnswers: [], 
    showAllAnswers: false,
    showAllPicks: false,
    myQuestionAnswers: [],
    currentQuestion: 0,
    modelOpenClose: false,
    gameProgress: 0,
    gamePoints: 0, 
    drawer: false,
    modelIndex: null,
    cardSelected: [null, null, null, null, null, null], 
    newGame: false, 
    cardPicked: false,
    startAnimation: true,
    isRotated: [false, false, false, false, false, false]
    }),
    getters: { 
        onlyQuestionCards: (state) => {
            return state.cardInfo.filter((i) => i.type === 'q')
        }, 
        onlyAnswerCards: (state) => {
            return state.cardInfo.filter((i) => i.type === 'a')
        },
        onlyQuestionCardsSingleRandom: (state) => { 
            const questionCards = state.cardInfo.filter((i) => { return i.type === 'q' })
            
            return questionCards[state.currentQuestion]
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
        addNewQuestion() {
            const questionCards = this.cardInfo.filter((i) => { return i.type === 'q' })
            this.currentQuestion != questionCards.length - 1 ?  this.currentQuestion++ : this.currentQuestion = 0

            console.log(questionCards.length, this.currentQuestion)
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
        }, 
        pointsCollector(points, i, id, input) {
            if(this.cardSelected[i] != null || input === true) return

                this.gameProgress += 20

            if(!this.cardInfo[id].isDouble && !this.cardInfo[id].isTriple) {
                this.gamePoints += points
            } 

            if(this.cardInfo[id].isDouble) {
                this.gamePoints += points * 2
            }

            if(this.cardInfo[id].isTriple) {
                this.gamePoints += points * 3 
            }
        }, 
        reshuffleCards() {
                this.newGame = false;
                this.cardPicked = false;
                this.cardSelected.fill(null);
                this.reshuffleAnswerCard();
                this.processStage = 0;
                this.startAnimation = true;
                this.isRotated.fill(false);
          }
          
    }
  })
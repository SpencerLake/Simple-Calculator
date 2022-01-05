import React from 'react'
import { useState } from 'react'

export default function Calculator() {

    let [ answer, setAnswer ] = useState ({
        currentNums: '',
        answer: ''
        })
    

    function buttonClick(btn) {
        console.log(`${btn} clicked`)
    }

    return(
        <div id="calculator">
            <button className='display'></button>
            <button className='all-clear' onClick={() => {buttonClick('AC')}}>AC</button>
            <button className='clear' onClick={() => {buttonClick('C')}}>C</button>
            <button className='sqr-rt' onClick={() => {buttonClick('square root')}}>&#8730;</button>
            <button className='percentage' onClick={() => {buttonClick('percent')}}>&#37;</button>
            <button className='seven' onClick={() => {buttonClick('7')}}>7</button>
            <button className='eight' onClick={() => {buttonClick('8')}}>8</button>
            <button className='nine' onClick={() => {buttonClick('9')}}>9</button>
            <button className='four' onClick={() => {buttonClick('4')}}>4</button>
            <button className='five' onClick={() => {buttonClick('5')}}>5</button>
            <button className='six' onClick={() => {buttonClick('6')}}>6</button>
            <button className='one' onClick={() => {buttonClick('1')}}>1</button>
            <button className='two' onClick={() => {buttonClick('2')}}>2</button>
            <button className='three' onClick={() => {buttonClick('3')}}>3</button>
            <button className='zero' onClick={() => {buttonClick('0')}}>0</button>
            <button className='dot' onClick={() => {buttonClick('.')}}>.</button>
            <button className='add' onClick={() => {buttonClick('+')}}>+</button>
            <button className='divide' onClick={() => {buttonClick('divide')}}>&#247;</button>
            <button className='multiply' onClick={() => {buttonClick('multiply')}}>&#215;</button>
            <button className='subtract' onClick={() => {buttonClick('subtract')}}>&#8722;</button>
            <button className='equals' onClick={() => {buttonClick('equals')}}>&#61;</button>
        </div>
    )
}
import React, { useState } from 'react'
import './Game.css'

export default function Game() {

    const [turn , setTurn] = useState('X')
    const [cell, setCell] = useState(Array(9).fill(''))
    const [win, setWin] = useState('')

    function checkWinner(square){
        let lines=[
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ]

        for(let i=0; i<lines.length; i++){
            const [a,b,c]=lines[i]
            if(square[a] && square[a]==square[b] && square[a]==square[c]){
                setWin(square[a])
                return
            }
        }
        return null
    }

    function handleClick(num){

        let square=[...cell]

        if(cell[num]!=''){
            alert('Already Clicked')
            return
        }

        if(turn == 'X'){
            square[num]='X'
            setTurn('O')
        }
        
        else{
            square[num]='O'
            setTurn('X')
        }

        checkWinner(square)
        setCell(square)
        // console.log(square)
    }

    function handleReset(){
        setWin('')
        setCell(Array(9).fill(''))
    }

    function Cell({num}){
        return <td onClick={()=>handleClick(num)}>{cell[num]}</td>
    }

  return (
    <div className='container'>
        <table>
            <h4>Turn for : {turn}</h4>
            <tbody>
                <tr>
                    <Cell num={0}/>
                    <Cell num={1}/>
                    <Cell num={2}/>
                </tr>
                <tr>
                    <Cell num={3}/>
                    <Cell num={4}/>
                    <Cell num={5}/>
                </tr>
                <tr>
                    <Cell num={6}/>
                    <Cell num={7}/>
                    <Cell num={8}/>
                </tr>
            </tbody>
        </table>
        
        {win && (
            <>
            <b>{win} is the winner! </b>
            </>
        )}
       
        <button onClick={()=>handleReset()}>Start Again</button>
    </div>
  )
}

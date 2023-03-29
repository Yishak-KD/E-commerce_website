import React from 'react'
import { StyleSheet, css } from 'aphrodite'


function Items() {
  return (
    <div>
        <div className={css(style.red)}>RED</div>
        <div className={css(style.blue)}>BLUE</div>
        <div className={css(style.green)}>GREEN</div>
    </div>
  )
}

const style = StyleSheet.create({
    red: {
        backgroundColor: 'red'
    },
    blue: {
        backgroundColor: 'blue'
    },
    green: {
        backgroundColor: 'green'
    }
})

export default Items;
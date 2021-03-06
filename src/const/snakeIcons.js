import React from "react"
export const TOTAL_FOOD = 30
export const TOTAL_HEADS = 3

export const EmojiFood = ({ foodId }) => (
  <span className={`emoji emoji-food-${foodId}`} />
)
export const EmojiSmileHead = ({ snakeHeadindex }) => (
  <span className={`emoji emoji-smile-${snakeHeadindex}`} />
)

export const EmojiSnakeBody = () => <span className="emoji emoji-body" />
export const GameOverIcon = () => <span className="emoji emoji-cry" />
export const EmojiStar = () => <span className="emoji emoji-star" />

export const makeFood = () => {
  const EMPTY = new Array(TOTAL_FOOD)
  const FOOD = []
  for (let i = 0; i < EMPTY.length; i++) {
    FOOD.push(i)
  }
  return FOOD
}

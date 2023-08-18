import EventEmitter from 'events'

export enum EventType {
  SAVE_CATEGORY = 'SAVE_CATEGORY',
  SAVE_CATEGORY_AND_NEW = 'SAVE_CATEGORY_AND_NEW',
}

const eventEmitter = new EventEmitter()
export default eventEmitter

import { storageService } from './storage-service.js'
import { utilService } from './util-service.js'

const KEY = 'toys_db'


export const toyService = {
  query,
  getById,
  remove,
  save,
  getEmptyToy,
}

function query(filterBy) {
    return storageService.query(KEY)
      .then(toys => {
        if (!toys || !toys.length) {
          toys = _createToys()
          storageService.postMany(KEY, toys)
        }
        return toys
      })
  }

function getById(toyId) {
  return storageService.get(KEY, toyId)
}

function remove(toyId) {
  return storageService.remove(KEY, toyId)
}

function save(toy) {
  if (toy.id) return storageService.put(KEY, toy)
  return storageService.post(KEY, toy)
}

function getEmptyToy() {
    return {
      _id: "",
      name: "",
      price: 0,
      labels: ["Doll", "Battery Powered", "Baby"],
      createdAt: Date.now(),
      inStock: true
    }
  }

  function _createToys() {
    return [
      { _id: utilService.makeId(), name: 'puka', price: 38, labels: ["Ball", "Powered", "Baby"], },
      { _id: utilService.makeId(), name: 'duda', price: 47, labels: ["Doll", "Battery", "Elder"], },
      { _id: utilService.makeId(), name: 'buba', price: 17, labels: ["Goal", "Battery Powered", "Boy"], },
    ]
  }

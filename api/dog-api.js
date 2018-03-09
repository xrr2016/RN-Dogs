class DogApi {
  constructor(baseUrl) {
    this.baseUrl = baseUrl
  }

  getAllDogBreedNames = () => {
    return fetch(`${this.baseUrl}/breeds/list/all`)
      .then(res => {
        if (res.ok && res.headers.get('Content-type') === 'application/json') {
          return res.json()
        }
      })
      .catch(error => error)
  }

  getRandomDogFromAllBreeds = () => {
    return fetch(`${this.baseUrl}/breeds/image/random`)
      .then(res => {
        if (res.ok && res.headers.get('Content-type') === 'application/json') {
          return res.json()
        }
      })
      .catch(error => error)
  }

  getALlDogsFromOneBreed = (breed, subBreed) => {
    const url = `${this.baseUrl}/breed/${breed}/${
      subBreed ? subBreed : ''
    }/images`
    return fetch(url)
      .then(res => {
        if (res.ok && res.headers.get('Content-type') === 'application/json') {
          return res.json()
        }
      })
      .catch(error => error)
  }

  getRandomDogFromOneBreed = (breed, subBreed) => {
    const url = `${this.baseUrl}/breed/${breed}/${
      subBreed ? subBreed : ''
    }/images/random`
    return fetch(url)
      .then(res => {
        if (res.ok && res.headers.get('Content-type') === 'application/json') {
          return res.json()
        }
      })
      .catch(error => error)
  }
}

export default new DogApi('https://dog.ceo/api')

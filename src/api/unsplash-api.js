import Unsplash from 'unsplash-js/native'

const unsplash = new Unsplash({
  applicationId:
    '18f5b5067107f9c3f15a2a082cc64a9362832689b850fb73ae1a4759fabb3b03',
  secret: '3aa54064e43a221b220f85730aae2249b76a1804cf6f395a309bc79c10105e2f',
  callbackUrl: 'urn:ietf:wg:oauth:2.0:oob'
})

export default unsplash

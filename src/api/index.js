function leftPad(num) {
  return num < 10 ? '0' + num : num
}

class BiliRanks {
  baseUrl = 'https://www.bilibili.com/index/rank'  
  
  async getWholeSite (catelogy = 0) {
    const month = new Date().getMonth() + 1
    const url = `${this.baseUrl}/all-${leftPad(month)}-${catelogy}.json`

    return await fetch(`${this.baseUrl}/all-3-${catelogy}.json`).then(res => {
      if (res.ok) {
        return res.json()
      }
    })
  }
}

export default new BiliRanks()
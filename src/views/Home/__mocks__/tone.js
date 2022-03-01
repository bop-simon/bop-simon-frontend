const tone = jest.createMockFromModule('tone')

export default (tone = 0) => {
  return tone(tone)
}

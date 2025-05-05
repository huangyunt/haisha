export const images = Array(100).fill(0).map((_, index) =>
    'https://7778-wx-miniprogram-3gei9ggi2b00c55a-1356783767.tcb.qcloud.la/PDF-CONVERT-IMAGE/Oxford_Phonics_World_1_SB-images-' + index + '.jpg',
)


export const catalogList = [
    'COPYRIGHT',
    'INTRODUCTION',
    'LIST OF ARTEFACTS',
    'CHAPTER ONE THE JOURNEY',
    'CHAPTER TWO POTIONS AND ALCHEMY',
    'CHAPTER THREE HERBOLOGY',
    'CHAPTER FOUR CHARMS',
    'CHAPTER FIVE ASTRONOMY',
    'CHAPTER SIX DIVINATION',
    'CHAPTER SEVEN DEFENSE AGAINST',
    'CHAPTER EIGHT CARE',
]

export const audioList = Array(100).fill(0).map(() => (
    [
        'https://7778-wx-miniprogram-3gei9ggi2b00c55a-1356783767.tcb.qcloud.la/Oxford%20Phonics%20World_1_SB_CD1/Track01.mp3',
        'https://7778-wx-miniprogram-3gei9ggi2b00c55a-1356783767.tcb.qcloud.la/Oxford%20Phonics%20World_1_SB_CD1/Track02.mp3',
        'https://7778-wx-miniprogram-3gei9ggi2b00c55a-1356783767.tcb.qcloud.la/Oxford%20Phonics%20World_1_SB_CD1/Track03.mp3',
    ]
  )
)
console.log('audioList: ', audioList)